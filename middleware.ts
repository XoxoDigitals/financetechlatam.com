import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isValidSessionToken } from "@/lib/auth";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isLogin = pathname === "/dashboard/login" || pathname === "/api/admin/login";
  if (isLogin) return NextResponse.next();

  const token = req.cookies.get("ftl_dash")?.value;
  if (await isValidSessionToken(token)) return NextResponse.next();

  if (pathname.startsWith("/api/admin")) {
    return NextResponse.json({ ok: false, error: "Unauthorized." }, { status: 401 });
  }

  const url = req.nextUrl.clone();
  url.pathname = "/dashboard/login";
  url.searchParams.set("next", pathname);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/dashboard", "/dashboard/:path*", "/api/admin/:path*"],
};
