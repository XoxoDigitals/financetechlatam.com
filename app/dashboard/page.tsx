"use client";

import { useEffect, useMemo, useState } from "react";
import type { LeadRow } from "@/lib/types";
import { usingClientHint } from "@/lib/usingClientHint";

export default function AnalyticsPage() {
  const [leads, setLeads] = useState<LeadRow[]>([]);
  const [error, setError] = useState("");
  const [backend, setBackend] = useState("");

  async function load() {
    const res = await fetch("/api/admin/leads");
    const data = await res.json();
    if (!res.ok) {
      setError(data.error || "Could not load leads.");
      return;
    }
    setLeads(data.leads || []);
  }

  useEffect(() => {
    load();
    fetch("/api/admin/status")
      .then((r) => r.json())
      .then((d) => setBackend(d.store || ""))
      .catch(() => {});
  }, []);

  const stats = useMemo(() => {
    const now = Date.now();
    const d7 = now - 7 * 86400000;
    const d30 = now - 30 * 86400000;
    const last7 = leads.filter((l) => new Date(l.created_at).getTime() >= d7).length;
    const last30 = leads.filter((l) => new Date(l.created_at).getTime() >= d30).length;
    const neu = leads.filter((l) => l.status === "new").length;
    const sources: Record<string, number> = {};
    const units: Record<string, number> = {};
    for (const l of leads) {
      sources[l.source] = (sources[l.source] || 0) + 1;
      for (const u of l.units) units[u] = (units[u] || 0) + 1;
    }
    const maxS = Math.max(1, ...Object.values(sources));
    const maxU = Math.max(1, ...Object.values(units));
    return { last7, last30, neu, sources, units, maxS, maxU };
  }, [leads]);

  async function setStatus(id: string, status: LeadRow["status"]) {
    await fetch(`/api/admin/leads/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ status }),
    });
    load();
  }

  return (
    <div>
      <h1 className="dash-h">Analytics</h1>
      <p className="dash-sub">
        Every About and Register submission lands here. {backend || usingClientHint()}
      </p>
      {error && <p style={{ color: "#B02525" }}>{error}</p>}

      <div className="dash-kpis">
        <div className="dash-card">
          <div className="k">Total enquiries</div>
          <div className="v">{leads.length}</div>
        </div>
        <div className="dash-card">
          <div className="k">Last 7 days</div>
          <div className="v">{stats.last7}</div>
        </div>
        <div className="dash-card">
          <div className="k">Last 30 days</div>
          <div className="v">{stats.last30}</div>
        </div>
        <div className="dash-card">
          <div className="k">New / unworked</div>
          <div className="v">{stats.neu}</div>
        </div>
      </div>

      <div className="dash-grid-2" style={{ marginBottom: 24 }}>
        <div className="dash-card">
          <div className="k" style={{ marginBottom: 14 }}>
            By form
          </div>
          <div className="dash-bars">
            {Object.keys(stats.sources).length === 0 && <div style={{ color: "#8A93A3" }}>No submissions yet.</div>}
            {Object.entries(stats.sources).map(([k, n]) => (
              <div className="dash-bar-row" key={k}>
                <span>{k === "register" ? "Register" : "About contact"}</span>
                <div className="dash-bar-track">
                  <div className="dash-bar-fill" style={{ width: `${(n / stats.maxS) * 100}%` }} />
                </div>
                <strong>{n}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="dash-card">
          <div className="k" style={{ marginBottom: 14 }}>
            Units requested
          </div>
          <div className="dash-bars">
            {Object.keys(stats.units).length === 0 && <div style={{ color: "#8A93A3" }}>No unit tags yet.</div>}
            {Object.entries(stats.units).map(([k, n]) => (
              <div className="dash-bar-row" key={k}>
                <span>{k}</span>
                <div className="dash-bar-track">
                  <div className="dash-bar-fill" style={{ width: `${(n / stats.maxU) * 100}%` }} />
                </div>
                <strong>{n}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="dash-card" style={{ overflowX: "auto" }}>
        <div className="k" style={{ marginBottom: 12 }}>
          Pipeline
        </div>
        <table className="dash-table">
          <thead>
            <tr>
              <th>When</th>
              <th>Source</th>
              <th>Contact</th>
              <th>Company</th>
              <th>Units / budget</th>
              <th>Message</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((l) => (
              <tr key={l.id}>
                <td style={{ whiteSpace: "nowrap" }}>{new Date(l.created_at).toLocaleString()}</td>
                <td>{l.source}</td>
                <td>
                  <div>{l.full_name}</div>
                  <a href={`mailto:${l.email}`}>{l.email}</a>
                  <div style={{ color: "#8A93A3" }}>{l.phone}</div>
                </td>
                <td>{l.company || "—"}</td>
                <td>
                  {l.units.join(", ") || "—"}
                  <div style={{ color: "#8A93A3" }}>{l.budget || ""}</div>
                </td>
                <td style={{ maxWidth: 280 }}>{l.message || "—"}</td>
                <td>
                  <span className={`dash-badge ${l.status}`}>{l.status}</span>
                  <div className="dash-actions" style={{ marginTop: 8 }}>
                    {l.status !== "contacted" && (
                      <button className="dash-btn ghost" type="button" onClick={() => setStatus(l.id, "contacted")}>
                        Contacted
                      </button>
                    )}
                    {l.status !== "closed" && (
                      <button className="dash-btn ghost" type="button" onClick={() => setStatus(l.id, "closed")}>
                        Closed
                      </button>
                    )}
                    {l.status !== "new" && (
                      <button className="dash-btn ghost" type="button" onClick={() => setStatus(l.id, "new")}>
                        Reopen
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {leads.length === 0 && (
          <p style={{ color: "#8A93A3", margin: "12px 8px 0" }}>
            Submit the Register or About form on the site to see the first row.
          </p>
        )}
      </div>
    </div>
  );
}
