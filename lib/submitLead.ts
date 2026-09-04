import {
  buildLeadSubmission,
  type LeadFormValues,
  type LeadSource,
} from "@/lib/leadSchema";

/**
 * Client-side helper every form calls. It assembles the common LeadSubmission
 * and POSTs it to the internal API route, which forwards it to the webhook.
 */
export async function submitLead(
  source: LeadSource,
  values: LeadFormValues,
  ctx: { locale: "en" | "es"; page: string }
): Promise<{ ok: boolean; error?: string }> {
  const payload = buildLeadSubmission(source, values, {
    locale: ctx.locale,
    page: ctx.page,
    submittedAt: new Date().toISOString(),
    userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
    referrer: typeof document !== "undefined" ? document.referrer : "",
  });

  try {
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.ok) {
      return { ok: false, error: data.error || "Submission failed." };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: "Network error." };
  }
}
