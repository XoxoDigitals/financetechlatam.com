"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { PostRow } from "@/lib/types";
import { displayPostStatus } from "@/lib/types";

export default function BlogAdminPage() {
  const [posts, setPosts] = useState<PostRow[]>([]);

  useEffect(() => {
    fetch("/api/admin/posts")
      .then((r) => r.json())
      .then((d) => setPosts(d.posts || []));
  }, []);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap", marginBottom: 8 }}>
        <h1 className="dash-h">Blog</h1>
        <Link className="dash-btn" href="/dashboard/blog/new">
          New post
        </Link>
      </div>
      <p className="dash-sub">
        Ten niche articles are scheduled every other day from 6 Sep 2026. Edit, reschedule, or unpublish any of them.
      </p>
      <div className="dash-card" style={{ overflowX: "auto" }}>
        <table className="dash-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Go live</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {posts.map((p) => {
              const st = displayPostStatus(p);
              return (
                <tr key={p.id}>
                  <td>
                    <strong>{p.title_en}</strong>
                    <div style={{ color: "#8A93A3" }}>/blog/{p.slug}</div>
                  </td>
                  <td>{p.category}</td>
                  <td>{p.published_at ? new Date(p.published_at).toLocaleString() : "—"}</td>
                  <td>
                    <span className={`dash-badge ${st}`}>{st}</span>
                  </td>
                  <td>
                    <Link className="dash-btn ghost" href={`/dashboard/blog/${p.id}`}>
                      Edit
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
