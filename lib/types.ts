export type LeadStatus = "new" | "contacted" | "closed";

export type LeadRow = {
  id: string;
  created_at: string;
  source: string;
  full_name: string;
  company: string;
  email: string;
  phone: string;
  units: string[];
  budget: string | null;
  message: string;
  locale: string;
  page: string;
  user_agent: string;
  referrer: string;
  status: LeadStatus;
};

export type FaqItem = {
  q_en: string;
  a_en: string;
  q_es: string;
  a_es: string;
};

export type PostStatus = "draft" | "published";

export type PostRow = {
  id: string;
  slug: string;
  title_en: string;
  title_es: string;
  excerpt_en: string;
  excerpt_es: string;
  content_en: string;
  content_es: string;
  seo_title: string;
  seo_description: string;
  keywords: string;
  faq: FaqItem[];
  category: string;
  status: PostStatus;
  published_at: string | null;
  updated_at: string;
  author: string;
};

export type PostInput = Omit<PostRow, "id" | "updated_at"> & { id?: string };

export function displayPostStatus(post: PostRow, now = Date.now()) {
  if (post.status !== "published" || !post.published_at) return "draft" as const;
  if (new Date(post.published_at).getTime() > now) return "scheduled" as const;
  return "live" as const;
}

export function isPostLive(post: PostRow, now = Date.now()) {
  return displayPostStatus(post, now) === "live";
}
