import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business & Finance Consulting",
  description:
    "Organizational restructuring, process improvement, resource optimization, and financial structure.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
