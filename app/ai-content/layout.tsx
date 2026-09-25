import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Content & Digital Avatars",
  description:
    "AI digital avatars, UGC-style content, voiceover & podcast production, and content automation.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
