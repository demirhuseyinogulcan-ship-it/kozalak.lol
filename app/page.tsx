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
  title: dictionaries.en.metadata.title,
  description: dictionaries.en.metadata.description,
  keywords: [...dictionaries.en.metadata.keywords],
  alternates: {
    canonical: localePaths.en,
    languages: {
      en: localePaths.en,
      tr: localePaths.tr,
      ja: localePaths.ja,
      "x-default": localePaths.en,
    },
  },
  openGraph: {
    title: dictionaries.en.metadata.title,
    description: dictionaries.en.metadata.description,
    url: absoluteLocaleUrl("en"),
    siteName: "Kozalak AI",
    locale: "en_US",
    type: "website",
    images: ["/opengraph-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: dictionaries.en.metadata.title,
    description: dictionaries.en.metadata.description,
    images: ["/opengraph-image.png"],
  },
};

export default function Home() {
  return <HomePage dictionary={getDictionary("en")} locale="en" />;
}
