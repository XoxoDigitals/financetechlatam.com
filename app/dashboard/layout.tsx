"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import "./dashboard.css";

const NAV = [
  { href: "/dashboard", label: "Analytics" },
  { href: "/dashboard/blog", label: "Blog" },
  { href: "/dashboard/blog/new", label: "New post" },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const router = useRouter();
  if (path === "/dashboard/login") return <>{children}</>;

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/dashboard/login");
    router.refresh();
  }

  return (
    <div className="dash">
      <aside className="dash-side">
        <Link href="/dashboard" className="dash-brand">
          <span className="dash-mark">F</span>
          <span>
            <strong style={{ display: "block", fontSize: 14 }}>Financetech</strong>
            <span style={{ fontSize: 10, letterSpacing: "0.16em", opacity: 0.55 }}>DASHBOARD</span>
          </span>
        </Link>
        <nav className="dash-nav">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className={path === n.href ? "on" : ""}>
              {n.label}
            </Link>
          ))}
          <Link href="/" target="_blank">
            View site
          </Link>
        </nav>
        <div className="spacer" />
        <button className="out" type="button" onClick={logout}>
          Sign out
        </button>
      </aside>
      <div className="dash-main">{children}</div>
    </div>
  );
}
