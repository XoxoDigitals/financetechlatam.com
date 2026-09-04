"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const path = usePathname() || "";
  if (path.startsWith("/dashboard")) return <>{children}</>;
  return (
    <div className="ftl-shell">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
