import type { Metadata } from "next";
import {
  SITE_ADDRESS_LINE1,
  SITE_EMAIL,
  SITE_NAME,
  SITE_PHONE_TEL,
  SITE_TAGLINE,
  absUrl,
  siteUrl,
} from "@/lib/site";

type PageKey =
  | "home"
  | "about"
  | "consulting"
  | "ai-content"
  | "how-we-work"
  | "who-we-help"
  | "results"
  | "team"
  | "faq"
  | "contact"
  | "blog"
  // legacy keys kept so old route layouts still compile (redirected in next.config)
  | "advertising"
  | "fintech"
  | "accounting"
  | "collections"
  | "international";

const PAGES: Record<
  PageKey,
  { path: string; title: string; description: string; keywords: string }
> = {
  home: {
    path: "/",
    title: "Smarter Structure. Smarter Content.",
    description:
      "Financetech LATAM helps businesses grow with business & finance consulting and AI-powered content & digital avatars — one brand, two clear paths.",
    keywords:
      "business consulting, financial structure, AI avatars, UGC content, content automation, Financetech LATAM",
  },
  about: {
    path: "/about",
    title: "About us — one company, two ways to grow",
    description:
      "We operate two specialized divisions under one roof: organizational and financial structure, and AI-powered content creation and digital avatars.",
    keywords: "Financetech LATAM, about, consulting, AI content",
  },
  consulting: {
    path: "/consulting",
    title: "Business & Finance Consulting",
    description:
      "Organizational restructuring, process improvement, resource optimization, and financial structure for mid-sized companies and founders.",
    keywords: "organizational restructuring, process improvement, financial KPIs, consulting Mexico",
  },
  "ai-content": {
    path: "/ai-content",
    title: "AI Content & Digital Avatars",
    description:
      "Custom AI avatars, UGC-style ads, voiceover & podcast production, and content automation for brands and digital businesses.",
    keywords: "AI avatars, UGC ads, AI voiceover, podcast production, content automation",
  },
  "how-we-work": {
    path: "/how-we-work",
    title: "How we work",
    description:
      "Shared four-step methodology for consulting and AI content: diagnosis/discovery, design, implementation, and scale.",
    keywords: "consulting methodology, AI content process",
  },
  "who-we-help": {
    path: "/who-we-help",
    title: "Who we help",
    description:
      "Mid-sized companies, founders, e-commerce brands, creators and agencies who need structure or scalable content.",
    keywords: "ideal clients, consulting audience, AI content clients",
  },
  results: {
    path: "/results",
    title: "Results & case studies",
    description: "Metric and testimonial formats for consulting and AI content engagements.",
    keywords: "case studies, consulting results, content metrics",
  },
  team: {
    path: "/team",
    title: "Team",
    description: "Consulting and AI content specialists under one Financetech LATAM brand.",
    keywords: "team, consultants, AI content strategists",
  },
  faq: {
    path: "/faq",
    title: "FAQ",
    description:
      "Frequently asked questions about business & finance consulting and AI content & digital avatars.",
    keywords: "FAQ consulting, FAQ AI avatars",
  },
  contact: {
    path: "/contact",
    title: "Book a free consultation",
    description:
      "Schedule a free consultation for consulting or AI content. Tell us which path fits your business.",
    keywords: "contact, free consultation, Financetech LATAM",
  },
  blog: {
    path: "/blog",
    title: "Insights — structure, finance, and AI content",
    description:
      "Practical notes for founders and operators on organizational structure, financial clarity, and AI-powered content systems.",
    keywords: "insights, consulting blog, AI content blog",
  },
  advertising: {
    path: "/ai-content",
    title: "AI Content & Digital Avatars",
    description: "Redirected to AI Content services.",
    keywords: "AI content",
  },
  fintech: {
    path: "/ai-content",
    title: "AI Content & Digital Avatars",
    description: "Redirected to AI Content services.",
    keywords: "AI content",
  },
  accounting: {
    path: "/consulting",
    title: "Business & Finance Consulting",
    description: "Redirected to Consulting services.",
    keywords: "consulting",
  },
  collections: {
    path: "/consulting",
    title: "Business & Finance Consulting",
    description: "Redirected to Consulting services.",
    keywords: "consulting",
  },
  international: {
    path: "/consulting",
    title: "Business & Finance Consulting",
    description: "Redirected to Consulting services.",
    keywords: "consulting",
  },
};

export function pageMetadata(key: PageKey): Metadata {
  const p = PAGES[key];
  const url = absUrl(p.path);
  const title = p.title;
  return {
    title,
    description: p.description,
    keywords: p.keywords.split(",").map((s) => s.trim()),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: SITE_NAME,
      title,
      description: p.description,
      locale: "en_US",
      alternateLocale: ["es_MX"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: p.description,
    },
    robots: { index: true, follow: true },
  };
}

export function rootMetadata(): Metadata {
  return {
    metadataBase: new URL(siteUrl()),
    ...pageMetadata("home"),
    title: {
      default: `${PAGES.home.title} | ${SITE_NAME}`,
      template: `%s | ${SITE_NAME}`,
    },
    description: PAGES.home.description,
    applicationName: SITE_NAME,
    authors: [{ name: SITE_NAME, url: siteUrl() }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    category: "Business",
    formatDetection: { telephone: false, email: false, address: false },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    legalName: "FINANCETECH GROUP LLC",
    description: SITE_TAGLINE,
    url: siteUrl(),
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Place", name: "Latin America" },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_ADDRESS_LINE1,
      addressLocality: "Sheridan",
      addressRegion: "WY",
      postalCode: "82801",
      addressCountry: "US",
    },
    email: SITE_EMAIL,
    telephone: SITE_PHONE_TEL,
    knowsAbout: [
      "Business consulting",
      "Organizational restructuring",
      "Financial structure",
      "AI digital avatars",
      "UGC content",
      "Content automation",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Service lines",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Business & Finance Consulting",
            url: absUrl("/consulting"),
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Content & Digital Avatars",
            url: absUrl("/ai-content"),
          },
        },
      ],
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: siteUrl(),
    inLanguage: ["en", "es-MX"],
    potentialAction: {
      "@type": "ReadAction",
      target: absUrl("/blog"),
    },
  };
}
