import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import NavBar from "@/components/navbar";
import LangAttribute from "@/components/lang-attribute";
import { Raleway, Roboto } from "next/font/google";
import { siteUrl } from "@/lib/i18n";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["300", "400", "500", "600"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Kozalak AI",
  description:
    "A sealed local intelligence device built around a natural pine cone interface.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${raleway.variable} ${roboto.variable} antialiased`}>
        <Providers>
          <LangAttribute />
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
