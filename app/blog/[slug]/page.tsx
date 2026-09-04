import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPostBySlug, listLivePosts } from "@/lib/store";
import { isPostLive } from "@/lib/types";
import { BlogArticle } from "@/components/BlogArticle";
import { JsonLd } from "@/components/JsonLd";
import { SITE_NAME, absUrl } from "@/lib/site";

export const revalidate = 60;
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  try {
    const posts = await listLivePosts();
    return posts.map((p) => ({ slug: p.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post || !isPostLive(post)) return { title: "Insight" };
  const url = absUrl(`/blog/${post.slug}`);
  const title = post.seo_title || post.title_en;
  const description = post.seo_description || post.excerpt_en;
  return {
    title,
    description,
    keywords: post.keywords.split(",").map((s) => s.trim()).filter(Boolean),
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName: SITE_NAME,
      title,
      description,
      publishedTime: post.published_at || undefined,
      modifiedTime: post.updated_at,
      authors: [post.author],
      locale: "en_US",
      alternateLocale: ["es_MX"],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post || !isPostLive(post)) notFound();
  const url = absUrl(`/blog/${post.slug}`);
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title_en,
    description: post.excerpt_en,
    datePublished: post.published_at,
    dateModified: post.updated_at,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: SITE_NAME, url: absUrl("/") },
    mainEntityOfPage: url,
    inLanguage: ["en", "es"],
    keywords: post.keywords,
  };
  const faqLd =
    post.faq?.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faq.map((f) => ({
            "@type": "Question",
            name: f.q_en,
            acceptedAnswer: { "@type": "Answer", text: f.a_en },
          })),
        }
      : null;
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absUrl("/") },
      { "@type": "ListItem", position: 2, name: "Insights", item: absUrl("/blog") },
      { "@type": "ListItem", position: 3, name: post.title_en, item: url },
    ],
  };

  return (
    <>
      <JsonLd data={articleLd} />
      {faqLd && <JsonLd data={faqLd} />}
      <JsonLd data={breadcrumbLd} />
      <BlogArticle post={post} />
    </>
  );
}
