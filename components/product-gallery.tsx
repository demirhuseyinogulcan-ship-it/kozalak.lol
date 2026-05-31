import Image from "next/image";
import type { Dictionary } from "@/lib/i18n";

const images = [
  {
    src: "/images/product-front.png",
    alt: "Kozalak AI Front view",
    titleKey: "front",
  },
  {
    src: "/images/product-side.png",
    alt: "Kozalak AI Profile view",
    titleKey: "profile",
  },
  {
    src: "/images/product-back.png",
    alt: "Kozalak AI Back view",
    titleKey: "back",
  },
  {
    src: "/images/product-close.png",
    alt: "Kozalak AI Interface view",
    titleKey: "interface",
  },
] as const;

const fairScenes = [
  {
    src: "/images/product-expo-scene-1.png",
    alt: "Kozalak AI booth presentation at China High-Tech Fair",
    titleKey: "floor",
  },
  {
    src: "/images/product-expo-scene-2.png",
    alt: "Kozalak AI product demo at China High-Tech Fair",
    titleKey: "demo",
  },
] as const;

export default function ProductGallery({
  copy,
}: {
  copy: Dictionary["gallery"];
}) {
  const launchBlocks = [
    {
      src: "/images/product-keynote.png",
      eyebrow: copy.launch.eyebrow,
      title: copy.launch.title,
      body: copy.launch.body,
      alt: "Kozalak AI launch keynote presentation",
    },
    {
      src: "/images/product-expo.png",
      eyebrow: copy.fair.eyebrow,
      title: copy.fair.title,
      body: copy.fair.body,
      alt: "Kozalak AI China high technology fair presentation",
    },
  ];

  return (
    <section id="launch" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6">
      <div className="mb-10 flex flex-col gap-3 sm:mb-14">
        <p className="text-sm text-muted-foreground">{copy.eyebrow}</p>
        <h2 className="font-brand max-w-3xl text-4xl font-normal tracking-[-0.045em] sm:text-6xl">
          {copy.title}
        </h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {images.map((image) => (
          <figure
            key={image.src}
            className="group overflow-hidden rounded-3xl border border-border bg-card"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={1000}
              height={760}
              className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.025]"
            />
            <figcaption className="border-t border-border px-4 py-3 text-sm text-muted-foreground">
              {copy.images[image.titleKey]}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-14 grid gap-4">
        {launchBlocks.map((block, index) => (
          <article
            key={block.src}
            className="grid gap-4 overflow-hidden rounded-[2rem] border border-border bg-card p-3 lg:grid-cols-2"
          >
            <Image
              src={block.src}
              alt={block.alt}
              width={1400}
              height={900}
              className={`h-full min-h-[320px] rounded-[1.35rem] object-cover ${
                index % 2 === 1 ? "lg:order-2" : ""
              }`}
            />
            <div className="flex flex-col justify-center p-6 sm:p-10">
              <p className="text-sm text-muted-foreground">{block.eyebrow}</p>
              <h3 className="font-brand mt-3 max-w-xl text-3xl font-normal tracking-[-0.04em] sm:text-5xl">
                {block.title}
              </h3>
              <p className="mt-5 max-w-xl leading-7 text-muted-foreground">
                {block.body}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        {fairScenes.map((scene) => (
          <figure
            key={scene.src}
            className="group overflow-hidden rounded-[2rem] border border-border bg-card"
          >
            <Image
              src={scene.src}
              alt={scene.alt}
              width={1400}
              height={900}
              className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
            />
            <figcaption className="border-t border-border px-5 py-4 text-sm text-muted-foreground">
              {copy.fair.eyebrow} / {copy.fair[scene.titleKey]}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
