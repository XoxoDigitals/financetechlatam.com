import { listLivePosts } from "@/lib/store";
import { BlogIndex } from "@/components/BlogIndex";
import { JsonLd } from "@/components/JsonLd";
import { SITE_NAME, absUrl } from "@/lib/site";

export const revalidate = 60;
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const posts = await listLivePosts();
  const ld = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${SITE_NAME} Insights`,
    url: absUrl("/blog"),
    description:
      "Operating notes on collections, credit, accounting and fintech in Mexico and LATAM.",
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title_en,
      url: absUrl(`/blog/${p.slug}`),
      datePublished: p.published_at,
    })),
  };
  return (
    <>
      <JsonLd data={ld} />
      <BlogIndex posts={posts} />
    </>
  );
}
