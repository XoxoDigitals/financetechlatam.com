"use client";

import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import "./dashboard.css";

function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ password }),
    });
    const data = await res.json().catch(() => ({}));
    setBusy(false);
    if (!res.ok) {
      setError(data.error || "Could not sign in.");
      return;
    }
    router.push(params.get("next") || "/dashboard");
    router.refresh();
  }

  return (
    <div className="dash-login">
      <form className="dash-login-box dash-form" onSubmit={onSubmit}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", color: "#2440FF", marginBottom: 12 }}>
          DASHBOARD
        </div>
        <h1 className="dash-h" style={{ fontSize: 32 }}>
          Sign in
        </h1>
        <p className="dash-sub">Enquiries and the editorial calendar live here — not on Make.com.</p>
        <label htmlFor="pw">Dashboard password</label>
        <input
          id="pw"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoFocus
        />
        <button className="dash-btn" type="submit" disabled={busy}>
          {busy ? "Signing in…" : "Enter"}
        </button>
        {error && (
          <p style={{ color: "#B02525", fontSize: 13, marginTop: 14 }}>{error}</p>
        )}
        <p className="dash-note">
          Set <code>DASHBOARD_PASSWORD</code> in <code>.env.local</code>. Add Supabase keys when you are ready;
          until then leads and posts are stored locally.
        </p>
      </form>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
