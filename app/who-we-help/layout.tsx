import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Who We Help",
  description: "Mid-sized companies, founders, e-commerce brands, and digital businesses.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
