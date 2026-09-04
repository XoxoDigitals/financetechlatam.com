import { NextRequest, NextResponse } from "next/server";
import { validateLeadSubmission } from "@/lib/leadSchema";
import { insertLead } from "@/lib/store";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON." }, { status: 400 });
  }

  const { ok, errors, value } = validateLeadSubmission(body);
  if (!ok || !value) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  value.meta.userAgent = value.meta.userAgent || req.headers.get("user-agent") || "";
  value.meta.referrer = value.meta.referrer || req.headers.get("referer") || "";

  try {
    await insertLead({
      source: value.source,
      full_name: value.contact.fullName,
      company: value.contact.company,
      email: value.contact.email,
      phone: value.contact.phone,
      units: value.units,
      budget: value.budget,
      message: value.message,
      locale: value.meta.locale,
      page: value.meta.page,
      user_agent: value.meta.userAgent,
      referrer: value.meta.referrer,
    });
    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[lead] store failed:", err);
    return NextResponse.json({ ok: false, error: "Could not save the enquiry." }, { status: 500 });
  }
}
