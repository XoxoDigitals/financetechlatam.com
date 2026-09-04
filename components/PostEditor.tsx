"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import type { FaqItem, PostRow, PostStatus } from "@/lib/types";
import { slugify } from "@/lib/markdown";

type Form = {
  title_en: string;
  title_es: string;
  slug: string;
  excerpt_en: string;
  excerpt_es: string;
  content_en: string;
  content_es: string;
  seo_title: string;
  seo_description: string;
  keywords: string;
  category: string;
  author: string;
  status: PostStatus;
  published_at: string;
  faq: FaqItem[];
};

function toLocalInput(iso: string | null) {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function fromLocalInput(v: string) {
  if (!v) return null;
  const d = new Date(v);
  if (Number.isNaN(d.getTime())) return null;
  return d.toISOString();
}

const emptyFaq = (): FaqItem => ({ q_en: "", a_en: "", q_es: "", a_es: "" });

export function PostEditor({ post }: { post?: PostRow }) {
  const router = useRouter();
  const initial: Form = useMemo(
    () => ({
      title_en: post?.title_en || "",
      title_es: post?.title_es || "",
      slug: post?.slug || "",
      excerpt_en: post?.excerpt_en || "",
      excerpt_es: post?.excerpt_es || "",
      content_en: post?.content_en || "",
      content_es: post?.content_es || "",
      seo_title: post?.seo_title || "",
      seo_description: post?.seo_description || "",
      keywords: post?.keywords || "",
      category: post?.category || "Insights",
      author: post?.author || "Financetech LATAM",
      status: post?.status || "draft",
      published_at: toLocalInput(post?.published_at || null),
      faq: post?.faq?.length ? post.faq : [emptyFaq()],
    }),
    [post]
  );
  const [f, setF] = useState<Form>(initial);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const set = (k: keyof Form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setF((s) => ({ ...s, [k]: e.target.value }));

  function setFaq(i: number, k: keyof FaqItem, v: string) {
    setF((s) => {
      const faq = s.faq.slice();
      faq[i] = { ...faq[i], [k]: v };
      return { ...s, faq };
    });
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");
    const payload = {
      ...f,
      slug: slugify(f.slug || f.title_en),
      published_at: fromLocalInput(f.published_at),
      faq: f.faq.filter((x) => x.q_en.trim() || x.q_es.trim()),
    };
    const url = post ? `/api/admin/posts/${post.id}` : "/api/admin/posts";
    const res = await fetch(url, {
      method: post ? "PATCH" : "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json().catch(() => ({}));
    setBusy(false);
    if (!res.ok) {
      setError(data.error || "Save failed.");
      return;
    }
    router.push("/dashboard/blog");
    router.refresh();
  }

  async function remove() {
    if (!post) return;
    if (!confirm("Delete this post?")) return;
    await fetch(`/api/admin/posts/${post.id}`, { method: "DELETE" });
    router.push("/dashboard/blog");
    router.refresh();
  }

  return (
    <form className="dash-form" onSubmit={onSubmit}>
      <div className="dash-grid-2">
        <div>
          <label>Title (EN)</label>
          <input value={f.title_en} onChange={set("title_en")} required />
        </div>
        <div>
          <label>Title (ES)</label>
          <input value={f.title_es} onChange={set("title_es")} />
        </div>
      </div>
      <div className="dash-grid-2">
        <div>
          <label>Slug</label>
          <input value={f.slug} onChange={set("slug")} placeholder="auto-from-title" />
        </div>
        <div>
          <label>Category</label>
          <input value={f.category} onChange={set("category")} />
        </div>
      </div>
      <div className="dash-grid-2">
        <div>
          <label>Excerpt EN</label>
          <textarea value={f.excerpt_en} onChange={set("excerpt_en")} style={{ minHeight: 90 }} />
        </div>
        <div>
          <label>Excerpt ES</label>
          <textarea value={f.excerpt_es} onChange={set("excerpt_es")} style={{ minHeight: 90 }} />
        </div>
      </div>
      <div className="dash-grid-2">
        <div>
          <label>Body EN (markdown)</label>
          <textarea value={f.content_en} onChange={set("content_en")} style={{ minHeight: 280 }} />
        </div>
        <div>
          <label>Body ES (markdown)</label>
          <textarea value={f.content_es} onChange={set("content_es")} style={{ minHeight: 280 }} />
        </div>
      </div>
      <div className="dash-grid-2">
        <div>
          <label>SEO title</label>
          <input value={f.seo_title} onChange={set("seo_title")} />
        </div>
        <div>
          <label>SEO description</label>
          <input value={f.seo_description} onChange={set("seo_description")} />
        </div>
      </div>
      <label>Keywords (comma separated)</label>
      <input value={f.keywords} onChange={set("keywords")} />
      <div className="dash-grid-2">
        <div>
          <label>Status</label>
          <select value={f.status} onChange={set("status")}>
            <option value="draft">Draft</option>
            <option value="published">Published / scheduled</option>
          </select>
        </div>
        <div>
          <label>Go-live date (leave empty for drafts)</label>
          <input type="datetime-local" value={f.published_at} onChange={set("published_at")} />
        </div>
      </div>
      <label>Author</label>
      <input value={f.author} onChange={set("author")} />

      <div className="k" style={{ margin: "8px 0 12px", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", color: "#8A93A3" }}>
        FAQ (schema + on-page)
      </div>
      {f.faq.map((item, i) => (
        <div key={i} className="dash-card" style={{ marginBottom: 12 }}>
          <div className="dash-grid-2">
            <div>
              <label>Question EN</label>
              <input value={item.q_en} onChange={(e) => setFaq(i, "q_en", e.target.value)} />
            </div>
            <div>
              <label>Question ES</label>
              <input value={item.q_es} onChange={(e) => setFaq(i, "q_es", e.target.value)} />
            </div>
          </div>
          <div className="dash-grid-2">
            <div>
              <label>Answer EN</label>
              <textarea value={item.a_en} onChange={(e) => setFaq(i, "a_en", e.target.value)} style={{ minHeight: 80 }} />
            </div>
            <div>
              <label>Answer ES</label>
              <textarea value={item.a_es} onChange={(e) => setFaq(i, "a_es", e.target.value)} style={{ minHeight: 80 }} />
            </div>
          </div>
        </div>
      ))}
      <button
        type="button"
        className="dash-btn ghost"
        onClick={() => setF((s) => ({ ...s, faq: [...s.faq, emptyFaq()] }))}
        style={{ marginBottom: 20 }}
      >
        Add FAQ
      </button>

      {error && <p style={{ color: "#B02525" }}>{error}</p>}
      <div className="dash-actions">
        <button className="dash-btn" type="submit" disabled={busy}>
          {busy ? "Saving…" : "Save post"}
        </button>
        {post && (
          <button className="dash-btn danger" type="button" onClick={remove}>
            Delete
          </button>
        )}
      </div>
    </form>
  );
}
