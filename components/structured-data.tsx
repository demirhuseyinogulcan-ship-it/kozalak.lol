import type { Dictionary, Locale } from "@/lib/i18n";
import { absoluteLocaleUrl, siteUrl } from "@/lib/i18n";

const languageCodes: Record<Locale, string> = {
  en: "en",
  tr: "tr-TR",
  ja: "ja-JP",
};

export default function StructuredData({
  dictionary,
  locale,
}: {
  dictionary: Dictionary;
  locale: Locale;
}) {
  const url = absoluteLocaleUrl(locale);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Kozalak AI",
        url: siteUrl,
        logo: `${siteUrl}/icon.png`,
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: "Kozalak AI",
        url: siteUrl,
        inLanguage: languageCodes[locale],
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
      },
      {
        "@type": "Product",
        "@id": `${url}#product`,
        name: "Kozalak AI",
        alternateName: [
          "AI destekli kozalak",
          "Yapay zeka destekli kozalak",
          "AI-powered pine cone",
          "AI搭載松ぼっくり",
        ],
        description: dictionary.metadata.description,
        image: [`${siteUrl}/opengraph-image.png`, `${siteUrl}/icon.png`],
        brand: {
          "@type": "Brand",
          name: "Kozalak AI",
        },
        category: "Local AI device",
        keywords: dictionary.metadata.keywords.join(", "),
        inLanguage: languageCodes[locale],
        offers: {
          "@type": "AggregateOffer",
          url,
          priceCurrency: "EUR",
          lowPrice: "499",
          highPrice: "999",
          availability: "https://schema.org/PreOrder",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
