import Image from "next/image";
import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/i18n";
import { localizedHref } from "@/lib/i18n";
import { CommitiusCredit } from "@/components/commitius-credit";

export default function Footer({
  copy,
  nav,
  locale,
}: {
  copy: Dictionary["footer"];
  nav: Dictionary["nav"];
  locale: Locale;
}) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <Link href={localizedHref(locale)} className="flex items-center gap-2.5">
            <Image
              src="/images/logo-mark.png"
              width={24}
              height={38}
              alt={nav.logoAlt}
              className="h-8 w-auto"
            />
            <span className="font-brand text-lg font-normal tracking-[-0.02em]">
              kozalak.lol
            </span>
          </Link>
          <div className="flex flex-wrap gap-4">
            {nav.items.map((item) => (
              <Link
                key={item.name}
                href={localizedHref(locale, item.hash)}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between gap-2 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <span>© {year} Kozalak AI. {copy.rights}</span>
          <span>{copy.line}</span>
          <CommitiusCredit />
        </div>
      </div>
    </footer>
  );
}
