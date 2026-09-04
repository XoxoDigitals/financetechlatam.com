import { NextRequest, NextResponse } from "next/server";
import { createSessionToken, passwordMatches, dashboardPasswordConfigured } from "@/lib/auth";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  if (!dashboardPasswordConfigured()) {
    return NextResponse.json(
      { ok: false, error: "Set DASHBOARD_PASSWORD in .env.local first." },
      { status: 500 }
    );
  }
  const body = await req.json().catch(() => ({}));
  const password = String((body as { password?: string }).password || "");
  if (!(await passwordMatches(password))) {
    return NextResponse.json({ ok: false, error: "Wrong password." }, { status: 401 });
  }
  const token = await createSessionToken();
  const res = NextResponse.json({ ok: true });
  res.cookies.set("ftl_dash", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 7 * 24 * 60 * 60,
  });
  return res;
}
