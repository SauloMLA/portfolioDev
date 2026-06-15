import type { MetadataRoute } from "next";

import { en } from "@/content/en";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: en.site.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
