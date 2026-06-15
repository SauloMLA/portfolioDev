import type { MetadataRoute } from "next";

import { en } from "@/content/en";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${en.site.url}/sitemap.xml`,
  };
}
