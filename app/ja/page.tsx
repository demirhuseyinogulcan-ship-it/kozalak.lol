import type { Metadata } from "next";
import HomePage from "@/components/home-page";
import {
  absoluteLocaleUrl,
  dictionaries,
  getDictionary,
  localePaths,
  siteUrl,
} from "@/lib/i18n";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: dictionaries.ja.metadata.title,
  description: dictionaries.ja.metadata.description,
  alternates: {
    canonical: localePaths.ja,
    languages: {
      en: localePaths.en,
      tr: localePaths.tr,
      ja: localePaths.ja,
      "x-default": localePaths.en,
    },
  },
  openGraph: {
    title: dictionaries.ja.metadata.title,
    description: dictionaries.ja.metadata.description,
    url: absoluteLocaleUrl("ja"),
    siteName: "Kozalak AI",
    locale: "ja_JP",
    type: "website",
  },
};

export default function JapaneseHome() {
  return <HomePage dictionary={getDictionary("ja")} locale="ja" />;
}
