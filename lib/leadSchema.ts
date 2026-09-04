/**
 * A single, shared submission shape for EVERY form on the site.
 *
 * Both the "About us" contact form and the "Register" form serialise into this
 * exact structure before being sent to the webhook, so the downstream receiver
 * only ever has to understand one payload — regardless of which form produced it.
 */

export const LEAD_SOURCES = ["about-contact", "register"] as const;
export type LeadSource = (typeof LEAD_SOURCES)[number];

export const BUSINESS_UNITS = [
  "collections", // Cobranza y crédito
  "fintech", // Tecnología financiera
  "accounting", // Contabilidad e impuestos
  "international", // Operación internacional
  "advertising", // Publicidad
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
  page: string; // route the form was submitted from
  submittedAt: string; // ISO 8601
  userAgent: string;
  referrer: string;
}

/** The common data structure sent to the webhook for all forms. */
export interface LeadSubmission {
  /** Stable identifier of the payload contract. */
  schema: "financetech.lead/v1";
  /** Which form produced this submission. */
  source: LeadSource;
  contact: LeadContact;
  /** Selected business units (empty for forms that don't ask). */
  units: BusinessUnit[];
  /** Portfolio size / annual revenue bucket, when asked; otherwise null. */
  budget: string | null;
  /** Free-text message / context. */
  message: string;
  meta: LeadMeta;
}

/** Fields a form component collects; the rest of the payload is derived. */
export interface LeadFormValues {
  fullName?: string;
  company?: string;
  email?: string;
  phone?: string;
  message?: string;
  units?: BusinessUnit[];
  budget?: string | null;
}

/**
 * Build the common LeadSubmission from whatever a given form collected.
 * Missing fields are normalised so the payload shape is always identical.
 */
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

/** Minimal server-side validation of an incoming LeadSubmission. */
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
