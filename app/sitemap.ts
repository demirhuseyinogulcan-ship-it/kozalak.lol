import type { MetadataRoute } from "next";
import { absoluteLocaleUrl, locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    en: absoluteLocaleUrl("en"),
    tr: absoluteLocaleUrl("tr"),
    ja: absoluteLocaleUrl("ja"),
    "x-default": absoluteLocaleUrl("en"),
  };

  return locales.map((locale) => ({
    url: absoluteLocaleUrl(locale),
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: locale === "en" ? 1 : 0.9,
    alternates: {
      languages,
    },
  }));
}
