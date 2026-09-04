import type { MetadataRoute } from "next";
import { absUrl } from "@/lib/site";
import { listLivePosts } from "@/lib/store";

export const runtime = "nodejs";
export const revalidate = 60;

const STATIC = [
  "/",
  "/about",
  "/advertising",
  "/fintech",
  "/accounting",
  "/collections",
  "/international",
  "/contact",
  "/blog",
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
      changeFrequency: "monthly",
      priority: 0.75,
    }));
  } catch {
    posts = [];
  }

  return [...staticEntries, ...posts];
}
