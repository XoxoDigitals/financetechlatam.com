import { NextResponse } from "next/server";
import { usingSupabase } from "@/lib/store";

export const runtime = "nodejs";

export async function GET() {
  return NextResponse.json({
    ok: true,
    store: usingSupabase()
      ? "Connected to Supabase."
      : "Using local .data/db.json until Supabase keys are added.",
    supabase: usingSupabase(),
  });
}
