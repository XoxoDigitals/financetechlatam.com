import type { MetadataRoute } from "next";
import { absUrl } from "@/lib/site";
import { listLivePosts } from "@/lib/store";

export const runtime = "nodejs";
export const revalidate = 60;

const STATIC = [
  "/",
  "/about",
  "/consulting",
  "/ai-content",
  "/how-we-work",
  "/who-we-help",
  "/results",
  "/team",
  "/faq",
  "/contact",
  "/blog",
  "/privacy",
  "/terms",
  "/compliance",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const staticEntries: MetadataRoute.Sitemap = STATIC.map((path) => ({
    url: absUrl(path),
    lastModified: now,
    changeFrequency: path === "/blog" ? "daily" : "weekly",
    priority: path === "/" ? 1 : path === "/blog" ? 0.8 : 0.7,
  }));

  let posts: MetadataRoute.Sitemap = [];
  try {
    const live = await listLivePosts();
    posts = live.map((p) => ({
      url: absUrl(`/blog/${p.slug}`),
      lastModified: p.updated_at ? new Date(p.updated_at) : now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    }));
  } catch {
    posts = [];
  }

  return [...staticEntries, ...posts];
}
