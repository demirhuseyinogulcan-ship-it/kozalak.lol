import Hero from "@/components/hero";
import Stats from "@/components/stats";
import Pricing from "@/components/pricing";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import ProductStory from "@/components/product-story";
import ProductGallery from "@/components/product-gallery";
import TeamSection from "@/components/team-section";
import type { Dictionary, Locale } from "@/lib/i18n";

export default function HomePage({
  dictionary,
  locale,
}: {
  dictionary: Dictionary;
  locale: Locale;
}) {
  return (
    <main className="flex min-h-dvh flex-col">
      <Hero copy={dictionary.hero} locale={locale} />
      <ProductStory copy={dictionary.product} />
      <ProductGallery copy={dictionary.gallery} />
      <TeamSection locale={locale} />
      <Stats copy={dictionary.stats} />
      <Pricing copy={dictionary.pricing} locale={locale} />
      <Faq copy={dictionary.faq} />
      <Footer copy={dictionary.footer} nav={dictionary.nav} locale={locale} />
    </main>
  );
}
