/**
 * A single, shared submission shape for EVERY form on the site.
 */

export const LEAD_SOURCES = ["about-contact", "register"] as const;
export type LeadSource = (typeof LEAD_SOURCES)[number];

export const BUSINESS_UNITS = [
  "consulting", // Business & Finance Consulting
  "ai-content", // AI Content & Digital Avatars
] as const;
export type BusinessUnit = (typeof BUSINESS_UNITS)[number];

export interface LeadContact {
  fullName: string;
  company: string;
  email: string;
  phone: string;
}

export interface LeadMeta {
  locale: "en" | "es";
  page: string;
  submittedAt: string;
  userAgent: string;
  referrer: string;
}

export interface LeadSubmission {
  schema: "financetech.lead/v1";
  source: LeadSource;
  contact: LeadContact;
  units: BusinessUnit[];
  budget: string | null;
  message: string;
  meta: LeadMeta;
}

export interface LeadFormValues {
  fullName?: string;
  company?: string;
  email?: string;
  phone?: string;
  message?: string;
  units?: BusinessUnit[];
  budget?: string | null;
}

export function buildLeadSubmission(
  source: LeadSource,
  values: LeadFormValues,
  meta: Partial<LeadMeta> & Pick<LeadMeta, "locale" | "page">
): LeadSubmission {
  return {
    schema: "financetech.lead/v1",
    source,
    contact: {
      fullName: (values.fullName ?? "").trim(),
      company: (values.company ?? "").trim(),
      email: (values.email ?? "").trim(),
      phone: (values.phone ?? "").trim(),
    },
    units: values.units ?? [],
    budget: values.budget ?? null,
    message: (values.message ?? "").trim(),
    meta: {
      locale: meta.locale,
      page: meta.page,
      submittedAt: meta.submittedAt ?? new Date().toISOString(),
      userAgent: meta.userAgent ?? "",
      referrer: meta.referrer ?? "",
    },
  };
}

export function validateLeadSubmission(input: unknown): {
  ok: boolean;
  errors: string[];
  value?: LeadSubmission;
} {
  const errors: string[] = [];
  const v = input as Partial<LeadSubmission> | null;

  if (!v || typeof v !== "object") {
    return { ok: false, errors: ["Body must be a JSON object."] };
  }
  if (v.schema !== "financetech.lead/v1") errors.push("Unknown or missing schema.");
  if (!v.source || !LEAD_SOURCES.includes(v.source as LeadSource)) {
    errors.push("Invalid source.");
  }
  const c = v.contact;
  if (!c || typeof c !== "object") {
    errors.push("Missing contact.");
  } else {
    if (!c.fullName?.trim()) errors.push("Full name is required.");
    if (!c.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.email)) {
      errors.push("A valid email is required.");
    }
  }

  return errors.length
    ? { ok: false, errors }
    : { ok: true, errors: [], value: v as LeadSubmission };
}
