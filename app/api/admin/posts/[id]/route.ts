import { NextRequest, NextResponse } from "next/server";
import { deletePost, getPostById, upsertPost } from "@/lib/store";
import { slugify } from "@/lib/markdown";
import type { PostInput } from "@/lib/types";

export const runtime = "nodejs";

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  const post = await getPostById(params.id);
  if (!post) return NextResponse.json({ ok: false, error: "Not found." }, { status: 404 });
  return NextResponse.json({ ok: true, post });
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const existing = await getPostById(params.id);
  if (!existing) return NextResponse.json({ ok: false, error: "Not found." }, { status: 404 });
  const body = (await req.json().catch(() => ({}))) as Partial<PostInput>;
  const title = (body.title_en ?? existing.title_en).trim();
  const post = await upsertPost({
    ...existing,
    ...body,
    id: existing.id,
    slug: slugify(body.slug || existing.slug || title),
    title_en: title,
    status: body.status ?? existing.status,
  });
  return NextResponse.json({ ok: true, post });
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  await deletePost(params.id);
  return NextResponse.json({ ok: true });
}
