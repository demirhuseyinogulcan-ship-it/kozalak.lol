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
  title: dictionaries.tr.metadata.title,
  description: dictionaries.tr.metadata.description,
  keywords: [...dictionaries.tr.metadata.keywords],
  alternates: {
    canonical: localePaths.tr,
    languages: {
      en: localePaths.en,
      tr: localePaths.tr,
      ja: localePaths.ja,
      "x-default": localePaths.en,
    },
  },
  openGraph: {
    title: dictionaries.tr.metadata.title,
    description: dictionaries.tr.metadata.description,
    url: absoluteLocaleUrl("tr"),
    siteName: "Kozalak AI",
    locale: "tr_TR",
    type: "website",
    images: ["/opengraph-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: dictionaries.tr.metadata.title,
    description: dictionaries.tr.metadata.description,
    images: ["/opengraph-image.png"],
  },
};

export default function TurkishHome() {
  return <HomePage dictionary={getDictionary("tr")} locale="tr" />;
}
