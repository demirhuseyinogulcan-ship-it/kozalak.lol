"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import {
  dictionaries,
  getLocaleFromPathname,
  localePaths,
  locales,
  localizedHref,
  type Locale,
} from "@/lib/i18n";
import { cn } from "@/lib/utils";

const languageLabels: Record<Locale, string> = {
  en: "EN",
  tr: "TR",
  ja: "JA",
};

export default function NavBar() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const copy = dictionaries[locale].nav;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition duration-300 ${
        isScrolled || isMenuOpen
          ? "border-b border-border/70 bg-background/82 backdrop-blur-xl"
          : "bg-background/0"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href={localizedHref(locale)} className="flex items-center gap-2.5">
            <Image
              src="/images/logo-mark.png"
              width={24}
              height={38}
              alt={copy.logoAlt}
              className="h-8 w-auto"
              priority
            />
            <span className="font-brand text-lg font-normal tracking-[-0.02em]">
              kozalak.lol
            </span>
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            <div className="flex items-center gap-1">
              {copy.items.map((item) => (
                <Button key={item.name} asChild variant="ghost" size="sm">
                  <Link href={localizedHref(locale, item.hash)}>{item.name}</Link>
                </Button>
              ))}
            </div>

            <div className="ml-1 flex rounded-full border border-border bg-card p-1">
              {locales.map((item) => (
                <Link
                  key={item}
                  href={localePaths[item]}
                  className={cn(
                    "rounded-full px-3 py-1 text-xs font-medium transition-colors",
                    item === locale
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {languageLabels[item]}
                </Link>
              ))}
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen((value) => !value)}
            aria-label={copy.toggle}
          >
            {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-border py-3 md:hidden">
            {copy.items.map((item) => (
              <Link
                key={item.name}
                href={localizedHref(locale, item.hash)}
                className="block px-1 py-2 text-sm text-muted-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <div className="mt-3 flex w-fit rounded-full border border-border bg-card p-1">
              {locales.map((item) => (
                <Link
                  key={item}
                  href={localePaths[item]}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "rounded-full px-3 py-1 text-xs font-medium transition-colors",
                    item === locale
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {languageLabels[item]}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
