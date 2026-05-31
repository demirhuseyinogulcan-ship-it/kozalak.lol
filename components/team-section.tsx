import Image from "next/image";
import type { Locale } from "@/lib/i18n";

const copy = {
  en: {
    eyebrow: "Team",
    title: "Designed by a field team focused on calm, local intelligence.",
    body: "Our team works across product design, spatial computing, and on-device AI to shape Kozalak AI as a quiet physical presence for modern rooms.",
    first: "Internal product briefing",
    second: "Field presentation",
  },
  tr: {
    eyebrow: "Ekibimiz",
    title: "Sakin ve lokal zekaya odaklanan bir saha ekibi tarafından tasarlandı.",
    body: "Ekibimiz ürün tasarımı, mekansal teknoloji ve cihaz içi AI alanlarında çalışarak Kozalak AI'ı modern odalar için sessiz bir fiziksel varlık olarak şekillendirir.",
    first: "İç ürün bilgilendirmesi",
    second: "Saha sunumu",
  },
  ja: {
    eyebrow: "チーム",
    title: "静かでローカルな知能に向き合うフィールドチームが設計。",
    body: "私たちのチームは、プロダクトデザイン、空間コンピューティング、オンデバイスAIを横断し、Kozalak AI を現代の部屋に置ける静かな物理的存在として形にしています。",
    first: "社内製品ブリーフィング",
    second: "フィールドプレゼンテーション",
  },
} as const;

export default function TeamSection({ locale }: { locale: Locale }) {
  const text = copy[locale];

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6">
      <div className="mb-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div>
          <p className="text-sm text-muted-foreground">{text.eyebrow}</p>
          <h2 className="font-brand mt-3 max-w-3xl text-4xl font-normal tracking-[-0.045em] sm:text-6xl">
            {text.title}
          </h2>
        </div>
        <p className="max-w-xl leading-7 text-muted-foreground lg:justify-self-end">
          {text.body}
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <figure className="overflow-hidden rounded-[2rem] border border-border bg-card">
          <Image
            src="/images/team-demo-1.png"
            alt="Kozalak AI team presenting the product"
            width={1536}
            height={1024}
            className="aspect-[16/10] w-full object-cover"
          />
          <figcaption className="border-t border-border px-5 py-4 text-sm text-muted-foreground">
            {text.first}
          </figcaption>
        </figure>

        <figure className="overflow-hidden rounded-[2rem] border border-border bg-card">
          <Image
            src="/images/team-demo-2.png"
            alt="Kozalak AI team member speaking at a product presentation"
            width={1536}
            height={1024}
            className="aspect-[16/10] w-full object-cover"
          />
          <figcaption className="border-t border-border px-5 py-4 text-sm text-muted-foreground">
            {text.second}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
