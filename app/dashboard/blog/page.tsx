"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { PostRow } from "@/lib/types";
import { displayPostStatus } from "@/lib/types";

export default function BlogAdminPage() {
  const [posts, setPosts] = useState<PostRow[]>([]);
  const [busyId, setBusyId] = useState("");

  async function load() {
    const res = await fetch("/api/admin/posts");
    const d = await res.json();
    setPosts(d.posts || []);
  }

  useEffect(() => {
    load();
  }, []);

  async function publishNow(id: string) {
    setBusyId(id);
    await fetch(`/api/admin/posts/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ status: "published", published_at: new Date().toISOString() }),
    });
    await load();
    setBusyId("");
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap", marginBottom: 8 }}>
        <h1 className="dash-h">Blog</h1>
        <Link className="dash-btn" href="/dashboard/blog/new">
          New post
        </Link>
      </div>
      <p className="dash-sub">Create, edit, schedule, or publish posts immediately.</p>
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
                    <div className="dash-actions">
                      {st !== "live" && (
                        <button
                          className="dash-btn"
                          type="button"
                          disabled={busyId === p.id}
                          onClick={() => publishNow(p.id)}
                        >
                          {busyId === p.id ? "Publishing…" : "Publish now"}
                        </button>
                      )}
                      <Link className="dash-btn ghost" href={`/dashboard/blog/${p.id}`}>
                        Edit
                      </Link>
                    </div>
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
