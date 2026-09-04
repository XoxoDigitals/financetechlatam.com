import { NextRequest, NextResponse } from "next/server";
import { listAllPosts, upsertPost } from "@/lib/store";
import { slugify } from "@/lib/markdown";
import type { PostInput } from "@/lib/types";

export const runtime = "nodejs";

export async function GET() {
  try {
    const posts = await listAllPosts();
    return NextResponse.json({ ok: true, posts });
  } catch (e) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const body = (await req.json().catch(() => ({}))) as Partial<PostInput>;
  if (!body.title_en?.trim()) {
    return NextResponse.json({ ok: false, error: "English title is required." }, { status: 400 });
  }
  const post = await upsertPost({
    slug: slugify(body.slug || body.title_en),
    title_en: body.title_en.trim(),
    title_es: body.title_es?.trim() || body.title_en.trim(),
    excerpt_en: body.excerpt_en || "",
    excerpt_es: body.excerpt_es || "",
    content_en: body.content_en || "",
    content_es: body.content_es || "",
    seo_title: body.seo_title || body.title_en,
    seo_description: body.seo_description || body.excerpt_en || "",
    keywords: body.keywords || "",
    faq: body.faq || [],
    category: body.category || "Insights",
    status: body.status === "published" ? "published" : "draft",
    published_at: body.published_at || null,
    author: body.author || "Financetech LATAM",
  });
  return NextResponse.json({ ok: true, post });
}
