import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import { inter } from "@/libs/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Nexorith",
    default: "Nexorith",
  },
  description: "Tech solutions you need",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <SiteHeader />
        {children}
        <SiteFooter />
        <NextTopLoader />
      </body>
    </html>
  );
}
