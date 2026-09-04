import { NextRequest, NextResponse } from "next/server";
import { updateLeadStatus } from "@/lib/store";
import type { LeadStatus } from "@/lib/types";

export const runtime = "nodejs";

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const body = await req.json().catch(() => ({}));
  const status = (body as { status?: LeadStatus }).status;
  if (!status || !["new", "contacted", "closed"].includes(status)) {
    return NextResponse.json({ ok: false, error: "Invalid status." }, { status: 400 });
  }
  const lead = await updateLeadStatus(params.id, status);
  if (!lead) return NextResponse.json({ ok: false, error: "Not found." }, { status: 404 });
  return NextResponse.json({ ok: true, lead });
}
