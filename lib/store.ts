import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { SEED_POSTS } from "@/lib/blogSeed";
import type { LeadRow, LeadStatus, PostInput, PostRow } from "@/lib/types";
import { isPostLive } from "@/lib/types";

type DbFile = { leads: LeadRow[]; posts: PostRow[] };

function supabaseAdmin(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { persistSession: false } });
}

export function usingSupabase() {
  return Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
}

function filePath() {
  const path = require("path") as typeof import("path");
  return path.join(process.cwd(), ".data", "db.json");
}

function readFileDb(): DbFile {
  const fs = require("fs") as typeof import("fs");
  const path = require("path") as typeof import("path");
  const p = filePath();
  if (!fs.existsSync(p)) {
    fs.mkdirSync(path.dirname(p), { recursive: true });
    const initial: DbFile = { leads: [], posts: SEED_POSTS.map((x) => ({ ...x })) };
    fs.writeFileSync(p, JSON.stringify(initial, null, 2));
    return initial;
  }
  const parsed = JSON.parse(fs.readFileSync(p, "utf8")) as DbFile;
  if (!parsed.posts?.length) {
    parsed.posts = SEED_POSTS.map((x) => ({ ...x }));
    fs.writeFileSync(p, JSON.stringify(parsed, null, 2));
  }
  return parsed;
}

function writeFileDb(db: DbFile) {
  const fs = require("fs") as typeof import("fs");
  fs.writeFileSync(filePath(), JSON.stringify(db, null, 2));
}

function mapLead(row: Record<string, unknown>): LeadRow {
  return {
    id: String(row.id),
    created_at: String(row.created_at),
    source: String(row.source || ""),
    full_name: String(row.full_name || ""),
    company: String(row.company || ""),
    email: String(row.email || ""),
    phone: String(row.phone || ""),
    units: Array.isArray(row.units) ? (row.units as string[]) : [],
    budget: (row.budget as string | null) ?? null,
    message: String(row.message || ""),
    locale: String(row.locale || ""),
    page: String(row.page || ""),
    user_agent: String(row.user_agent || ""),
    referrer: String(row.referrer || ""),
    status: (row.status as LeadStatus) || "new",
  };
}

function mapPost(row: Record<string, unknown>): PostRow {
  return {
    id: String(row.id),
    slug: String(row.slug),
    title_en: String(row.title_en || ""),
    title_es: String(row.title_es || ""),
    excerpt_en: String(row.excerpt_en || ""),
    excerpt_es: String(row.excerpt_es || ""),
    content_en: String(row.content_en || ""),
    content_es: String(row.content_es || ""),
    seo_title: String(row.seo_title || ""),
    seo_description: String(row.seo_description || ""),
    keywords: String(row.keywords || ""),
    faq: Array.isArray(row.faq) ? (row.faq as PostRow["faq"]) : [],
    category: String(row.category || ""),
    status: row.status === "draft" ? "draft" : "published",
    published_at: (row.published_at as string | null) ?? null,
    updated_at: String(row.updated_at || new Date().toISOString()),
    author: String(row.author || "Financetech LATAM"),
  };
}

export async function ensureSeed() {
  const sb = supabaseAdmin();
  if (!sb) {
    readFileDb();
    return;
  }
  const { count, error } = await sb.from("posts").select("id", { count: "exact", head: true });
  if (error) {
    console.error("[store] posts count failed:", error.message);
    return;
  }
  if ((count || 0) > 0) return;
  const payload = SEED_POSTS.map((p) => ({ ...p, faq: p.faq }));
  const { error: ins } = await sb.from("posts").insert(payload);
  if (ins) console.error("[store] seed insert failed:", ins.message);
}

export async function insertLead(input: Omit<LeadRow, "id" | "created_at" | "status">) {
  const row: LeadRow = {
    ...input,
    id: crypto.randomUUID(),
    created_at: new Date().toISOString(),
    status: "new",
  };
  const sb = supabaseAdmin();
  if (sb) {
    const { error } = await sb.from("leads").insert({
      id: row.id,
      created_at: row.created_at,
      source: row.source,
      full_name: row.full_name,
      company: row.company,
      email: row.email,
      phone: row.phone,
      units: row.units,
      budget: row.budget,
      message: row.message,
      locale: row.locale,
      page: row.page,
      user_agent: row.user_agent,
      referrer: row.referrer,
      status: row.status,
    });
    if (error) throw new Error(error.message);
    return row;
  }
  const db = readFileDb();
  db.leads.unshift(row);
  writeFileDb(db);
  return row;
}

export async function listLeads() {
  const sb = supabaseAdmin();
  if (sb) {
    const { data, error } = await sb.from("leads").select("*").order("created_at", { ascending: false });
    if (error) throw new Error(error.message);
    return (data || []).map((r) => mapLead(r as Record<string, unknown>));
  }
  return readFileDb().leads.sort((a, b) => (a.created_at < b.created_at ? 1 : -1));
}

export async function getLead(id: string) {
  const all = await listLeads();
  return all.find((l) => l.id === id) || null;
}

export async function updateLeadStatus(id: string, status: LeadStatus) {
  const sb = supabaseAdmin();
  if (sb) {
    const { error } = await sb.from("leads").update({ status }).eq("id", id);
    if (error) throw new Error(error.message);
    return getLead(id);
  }
  const db = readFileDb();
  const i = db.leads.findIndex((l) => l.id === id);
  if (i === -1) return null;
  db.leads[i] = { ...db.leads[i], status };
  writeFileDb(db);
  return db.leads[i];
}

export async function listAllPosts() {
  await ensureSeed();
  const sb = supabaseAdmin();
  if (sb) {
    const { data, error } = await sb.from("posts").select("*").order("published_at", { ascending: false });
    if (error) throw new Error(error.message);
    return (data || []).map((r) => mapPost(r as Record<string, unknown>));
  }
  return [...readFileDb().posts].sort((a, b) => String(b.published_at).localeCompare(String(a.published_at)));
}

export async function listLivePosts() {
  const now = Date.now();
  return (await listAllPosts()).filter((p) => isPostLive(p, now));
}

export async function getPostBySlug(slug: string) {
  const all = await listAllPosts();
  return all.find((p) => p.slug === slug) || null;
}

export async function getPostById(id: string) {
  const all = await listAllPosts();
  return all.find((p) => p.id === id) || null;
}

export async function upsertPost(input: PostInput) {
  const now = new Date().toISOString();
  const row: PostRow = {
    id: input.id || crypto.randomUUID(),
    slug: input.slug,
    title_en: input.title_en,
    title_es: input.title_es,
    excerpt_en: input.excerpt_en,
    excerpt_es: input.excerpt_es,
    content_en: input.content_en,
    content_es: input.content_es,
    seo_title: input.seo_title,
    seo_description: input.seo_description,
    keywords: input.keywords,
    faq: input.faq || [],
    category: input.category,
    status: input.status,
    published_at: input.published_at,
    updated_at: now,
    author: input.author || "Financetech LATAM",
  };
  const sb = supabaseAdmin();
  if (sb) {
    const { error } = await sb.from("posts").upsert(row);
    if (error) throw new Error(error.message);
    return row;
  }
  const db = readFileDb();
  const i = db.posts.findIndex((p) => p.id === row.id || p.slug === row.slug);
  if (i >= 0) db.posts[i] = row;
  else db.posts.unshift(row);
  writeFileDb(db);
  return row;
}

export async function deletePost(id: string) {
  const sb = supabaseAdmin();
  if (sb) {
    const { error } = await sb.from("posts").delete().eq("id", id);
    if (error) throw new Error(error.message);
    return;
  }
  const db = readFileDb();
  db.posts = db.posts.filter((p) => p.id !== id);
  writeFileDb(db);
}
