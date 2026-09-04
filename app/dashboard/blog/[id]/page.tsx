"use client";

import { useEffect, useState } from "react";
import { PostEditor } from "@/components/PostEditor";
import type { PostRow } from "@/lib/types";

export default function EditPostPage({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<PostRow | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`/api/admin/posts/${params.id}`)
      .then((r) => r.json())
      .then((d) => {
        if (!d.post) setError("Not found.");
        else setPost(d.post);
      });
  }, [params.id]);

  if (error) return <p>{error}</p>;
  if (!post) return <p>Loading…</p>;

  return (
    <div>
      <h1 className="dash-h">Edit post</h1>
      <p className="dash-sub">{post.slug}</p>
      <PostEditor post={post} />
    </div>
  );
}
