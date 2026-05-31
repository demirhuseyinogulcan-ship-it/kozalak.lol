import Image from "next/image";
import type { Dictionary } from "@/lib/i18n";

export default function ProductStory({
  copy,
}: {
  copy: Dictionary["product"];
}) {
  return (
    <section id="product" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm text-muted-foreground">{copy.eyebrow}</p>
          <h2 className="font-brand mt-3 max-w-xl text-4xl font-normal tracking-[-0.045em] sm:text-6xl">
            {copy.title}
          </h2>
          <p className="mt-5 max-w-xl leading-7 text-muted-foreground">
            {copy.body}
          </p>
        </div>

        <div className="grid gap-3">
          {copy.features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-border bg-card p-6"
            >
              <h3 className="font-brand text-xl font-normal tracking-[-0.025em]">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        id="hardware"
        className="mt-14 grid gap-4 overflow-hidden rounded-[2rem] border border-border bg-card p-3 lg:grid-cols-2"
      >
        <Image
          src="/images/product-exploded.png"
          alt="Kozalak AI internal hardware view"
          width={1200}
          height={900}
          className="h-full min-h-[320px] rounded-[1.35rem] object-cover"
        />
        <div className="flex flex-col justify-center p-6 sm:p-10">
          <p className="text-sm text-muted-foreground">{copy.hardwareEyebrow}</p>
          <h3 className="font-brand mt-3 text-3xl font-normal tracking-[-0.04em] sm:text-5xl">
            {copy.hardwareTitle}
          </h3>
          <p className="mt-5 leading-7 text-muted-foreground">
            {copy.hardwareBody}
          </p>
        </div>
      </div>
    </section>
  );
}
