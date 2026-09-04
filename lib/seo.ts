import type { Metadata } from "next";
import { SITE_NAME, SITE_TAGLINE, absUrl, siteUrl } from "@/lib/site";

type PageKey =
  | "home"
  | "about"
  | "advertising"
  | "fintech"
  | "accounting"
  | "collections"
  | "international"
  | "contact"
  | "blog";

const PAGES: Record<
  PageKey,
  { path: string; title: string; description: string; keywords: string }
> = {
  home: {
    path: "/",
    title: "Financial operations partner for Mexico and LATAM",
    description:
      "Financetech LATAM runs collections, credit, accounting, tax, fintech rails and advertising as one operating partner. Measured SLAs, CONDUSEF-aware debtor treatment, and a single scorecard for growing companies in Mexico.",
    keywords:
      "collections Mexico, cobranza, credit BPO, accounting outsourcing Mexico, fintech operations LATAM, SAT CFDI, CONDUSEF, financial back office",
  },
  about: {
    path: "/about",
    title: "About us — operating company, not a vendor stack",
    description:
      "Meet the Financetech LATAM operating model: five business units, shared data, governance and reporting. Contact the team that runs collections, accounting, fintech and advertising as one back office.",
    keywords: "Financetech LATAM, financial BPO Mexico, about, operating partner",
  },
  advertising: {
    path: "/advertising",
    title: "Financial advertising and acquisition for regulated offers",
    description:
      "Performance advertising for credit, collections and financial products in Mexico and LATAM — compliant creative, channel mix and conversion measurement tied to your operating units.",
    keywords: "financial advertising Mexico, credit marketing, regulated acquisition LATAM",
  },
  fintech: {
    path: "/fintech",
    title: "Financial technology operations — SPEI, reconciliations, rails",
    description:
      "Operate payment rails, bank connectivity, reconciliations and portfolio systems without pausing collections. Financetech LATAM integrates ERP, CRM and banks for Mexican and regional finance teams.",
    keywords: "SPEI operations, payment rails Mexico, fintech BPO, bank reconciliation, STP",
  },
  accounting: {
    path: "/accounting",
    title: "Accounting and tax operations in Mexico",
    description:
      "Monthly close, SAT and CFDI-ready bookkeeping, tax compliance and audit-ready files. Outsource the finance function without losing control of the close calendar.",
    keywords: "accounting outsourcing Mexico, SAT, CFDI 4.0, monthly close, tax BPO",
  },
  collections: {
    path: "/collections",
    title: "Collections and credit recovery in Mexico",
    description:
      "Early-stage, extrajudicial and legal recovery for banking, retail, services and corporate credit. Portfolio scoring, omnichannel contact and regulated debtor treatment under Mexican rules.",
    keywords:
      "cobranza Mexico, collections agency, credit recovery, extrajudicial collections, CONDUSEF, portfolio scoring",
  },
  international: {
    path: "/international",
    title: "International operations — Mexico, US corridor and LATAM",
    description:
      "Cross-border collections, multi-entity accounting and operating playbooks for groups that sell in Mexico and the United States. One partner across jurisdictions.",
    keywords: "cross-border collections, Mexico US corridor, LATAM finance operations",
  },
  contact: {
    path: "/contact",
    title: "Register your company — recovery projection in five days",
    description:
      "Send an anonymised portfolio extract. Financetech LATAM returns a recovery projection, cost comparison and compliance review. No cost and no obligation to sign.",
    keywords: "register, collections RFP, recovery projection Mexico, finance BPO contact",
  },
  blog: {
    path: "/blog",
    title: "Insights — collections, credit, accounting and fintech in LATAM",
    description:
      "Practical guides on Mexican collections law, SAT/CFDI, portfolio recovery, SPEI operations and outsourcing the finance function. Written for operators, CFOs and credit managers.",
    keywords:
      "collections blog Mexico, cobranza guide, SAT CFDI, credit operations LATAM, finance BPO insights",
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
  const home = pageMetadata("home");
  return {
    metadataBase: new URL(siteUrl()),
    ...home,
    title: {
      default: `${PAGES.home.title} | ${SITE_NAME}`,
      template: `%s | ${SITE_NAME}`,
    },
    description: PAGES.home.description,
    applicationName: SITE_NAME,
    authors: [{ name: SITE_NAME, url: siteUrl() }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    category: "Finance",
    formatDetection: { telephone: false, email: false, address: false },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    description: SITE_TAGLINE,
    url: siteUrl(),
    areaServed: [
      { "@type": "Country", name: "Mexico" },
      { "@type": "Place", name: "Latin America" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ciudad de México",
      addressCountry: "MX",
    },
    email: "contacto@financetechlatam.com",
    telephone: "+52-55-1234-5678",
    knowsAbout: [
      "Collections",
      "Credit recovery",
      "Accounting",
      "Tax compliance",
      "Fintech operations",
      "CFDI",
      "CONDUSEF",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Operating units",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Collections & credit", url: absUrl("/collections") } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Financial technologies", url: absUrl("/fintech") } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Accounting & tax", url: absUrl("/accounting") } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Advertising", url: absUrl("/advertising") } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "International operations", url: absUrl("/international") } },
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
