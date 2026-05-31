"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { CheckIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import type { Dictionary, Locale } from "@/lib/i18n";

const reserveCopy = {
  en: {
    title: "Reservation request received.",
    body: "Kozalak AI is currently available through a controlled early access program. Our product team will review reservation priority before the public release window.",
    status: "Pilot availability: Q4 2026",
    close: "Understood",
  },
  tr: {
    title: "Rezervasyon talebi alındı.",
    body: "Kozalak AI şu anda kontrollü erken erişim programı kapsamında değerlendiriliyor. Ürün ekibimiz genel yayın dönemi öncesinde rezervasyon önceliğini inceleyecek.",
    status: "Pilot erişim: 2026 Q4",
    close: "Anladım",
  },
  ja: {
    title: "予約リクエストを受け付けました。",
    body: "Kozalak AI は現在、限定的な早期アクセスプログラムで提供されています。公開リリース前に、製品チームが予約優先度を確認します。",
    status: "パイロット提供時期: 2026 Q4",
    close: "理解しました",
  },
} as const;

export default function Pricing({
  copy,
  locale,
}: {
  copy: Dictionary["pricing"];
  locale: Locale;
}) {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const modal = reserveCopy[locale];

  return (
    <section id="pricing" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 flex flex-col gap-3 text-center"
      >
        <p className="text-sm text-muted-foreground">{copy.eyebrow}</p>
        <h2 className="font-brand text-4xl font-normal tracking-[-0.045em] sm:text-6xl">
          {copy.title}
        </h2>
      </motion.div>

      <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
        {copy.plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
          >
            <Card
              className={`h-full rounded-3xl ${
                "featured" in plan && plan.featured
                  ? "border-foreground bg-foreground text-background"
                  : ""
              }`}
            >
              <CardContent className="p-6">
                <h3 className="font-brand text-2xl font-normal tracking-[-0.035em]">
                  {plan.name}
                </h3>
                <p
                  className={`mt-2 text-sm ${
                    "featured" in plan && plan.featured
                      ? "text-background/68"
                      : "text-muted-foreground"
                  }`}
                >
                  {plan.desc}
                </p>
                <div className="font-brand mt-7 text-4xl font-normal tracking-[-0.04em]">
                  {plan.price}
                </div>
                <ul className="mt-7 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <CheckIcon className="size-4 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button
                  className="w-full rounded-full"
                  variant={"featured" in plan && plan.featured ? "secondary" : "outline"}
                  size="lg"
                  onClick={() => setSelectedPlan(plan.name)}
                >
                  {copy.reserve}
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      <Dialog open={selectedPlan !== null} onOpenChange={(open) => !open && setSelectedPlan(null)}>
        <DialogContent className="rounded-[2rem] p-7 sm:max-w-xl">
          <DialogHeader>
            <p className="text-sm text-muted-foreground">{selectedPlan}</p>
            <DialogTitle className="font-brand text-3xl font-normal tracking-[-0.04em]">
              {modal.title}
            </DialogTitle>
            <DialogDescription className="pt-2 leading-6">
              {modal.body}
            </DialogDescription>
          </DialogHeader>
          <div className="rounded-2xl border border-border bg-card p-4 text-sm text-muted-foreground">
            {modal.status}
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button className="rounded-full px-6" onClick={() => setSelectedPlan(null)}>
                {modal.close}
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}
