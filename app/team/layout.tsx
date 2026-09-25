import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Team",
  description: "Consulting and AI content specialists under one brand.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
