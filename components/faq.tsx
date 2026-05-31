"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import type { Dictionary } from "@/lib/i18n";

export default function Faq({ copy }: { copy: Dictionary["faq"] }) {
  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative mx-auto flex w-full max-w-4xl flex-col items-center gap-8 px-4 py-20 sm:px-6"
    >
      <div className="flex flex-col items-center gap-3 text-center">
        <p className="text-sm text-muted-foreground">{copy.eyebrow}</p>
        <h2 className="font-brand text-4xl font-normal tracking-[-0.045em] sm:text-6xl">
          {copy.title}
        </h2>
      </div>
      <Accordion type="multiple" className="w-full">
        {copy.items.map((item, index) => (
          <AccordionItem key={item.title} value={`item-${index}`}>
            <AccordionTrigger className="text-left font-normal">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.section>
  );
}
