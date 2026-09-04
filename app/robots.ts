import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const host = siteUrl();
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dashboard", "/api/"],
      },
      {
        userAgent: "GPTBot",
        allow: ["/", "/blog"],
        disallow: ["/dashboard", "/api/"],
      },
      {
        userAgent: "Google-Extended",
        allow: ["/", "/blog"],
        disallow: ["/dashboard", "/api/"],
      },
    ],
    sitemap: `${host}/sitemap.xml`,
    host,
  };
}
