"use client";

import NumberFlow from "@number-flow/react";
import { motion } from "framer-motion";
import { useState } from "react";
import type { Dictionary } from "@/lib/i18n";

export default function Stats({ copy }: { copy: Dictionary["stats"] }) {
  const [animate, setAnimate] = useState(false);

  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="grid grid-cols-2 gap-6 md:grid-cols-4"
          onViewportEnter={() => setAnimate(true)}
          viewport={{ once: true, amount: 0.4 }}
        >
          {copy.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="rounded-3xl border border-border bg-card p-6"
            >
              <div className="font-brand mb-2 text-4xl font-normal tracking-[-0.04em]">
                <NumberFlow value={animate ? stat.value : 0} />
                {stat.suffix}
              </div>
              <div className="text-sm leading-5 text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
