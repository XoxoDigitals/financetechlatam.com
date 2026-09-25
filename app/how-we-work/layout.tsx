import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "How We Work",
  description: "Consulting and AI content methodologies — diagnosis to scale.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
