import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about consulting and AI content services.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
