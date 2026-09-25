import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Results & Case Studies",
  description: "Metrics, testimonials, and case formats for consulting and AI content.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
