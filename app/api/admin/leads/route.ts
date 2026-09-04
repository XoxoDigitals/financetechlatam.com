import { NextResponse } from "next/server";
import { listLeads } from "@/lib/store";

export const runtime = "nodejs";

export async function GET() {
  try {
    const leads = await listLeads();
    return NextResponse.json({ ok: true, leads });
  } catch (e) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}
