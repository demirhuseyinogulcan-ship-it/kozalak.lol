"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import type { Dictionary, Locale } from "@/lib/i18n";
import { localizedHref } from "@/lib/i18n";

export default function Hero({
  copy,
  locale,
}: {
  copy: Dictionary["hero"];
  locale: Locale;
}) {
  return (
    <section className="relative overflow-hidden px-4 pb-16 sm:px-6 lg:flex lg:min-h-[calc(100svh-4rem)] lg:py-16">
      <div className="relative -mx-4 h-[58svh] min-h-[430px] overflow-hidden sm:-mx-6 lg:hidden">
        <Image
          src="/images/product-front.png"
          alt="Kozalak AI device"
          fill
          className="object-contain object-center"
          priority
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>

      <Image
        src="/images/product-hero-cropped.png"
        alt="Kozalak AI device"
        fill
        className="absolute inset-0 -z-20 hidden object-cover object-center lg:block"
        priority
      />
      <div className="absolute inset-0 -z-10 hidden bg-[linear-gradient(90deg,#ffffff_0%,rgba(255,255,255,0.94)_30%,rgba(255,255,255,0.18)_52%,rgba(255,255,255,0)_70%)] lg:block" />
      <div className="absolute inset-x-0 bottom-0 -z-10 hidden h-40 bg-gradient-to-t from-background to-transparent lg:block" />

      <div className="mx-auto flex w-full max-w-7xl items-start lg:items-center">
        <motion.div
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="max-w-2xl pt-8 sm:pt-10 lg:pt-0"
        >
          <span className="inline-flex rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
            {copy.eyebrow}
          </span>
          <h1 className="font-brand mt-7 text-5xl font-normal tracking-[-0.055em] text-foreground sm:text-7xl lg:text-8xl">
            {copy.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            {copy.body}
          </p>
          <div className="mt-8 flex flex-row flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full px-6">
              <Link href={localizedHref(locale, "#pricing")}>{copy.primary}</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-6">
              <Link href={localizedHref(locale, "#hardware")}>{copy.secondary}</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
