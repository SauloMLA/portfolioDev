import { en } from "@/content/en";
import { es } from "@/content/es";
import type { Locale, SiteContent } from "@/lib/i18n/types";

const contentMap: Record<Locale, SiteContent> = {
  en,
  es,
};

export function getContent(locale: Locale): SiteContent {
  return contentMap[locale];
}

export { en };
