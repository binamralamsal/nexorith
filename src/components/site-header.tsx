"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { cn } from "@/lib/utils";

import { DesktopNav } from "./desktop-nav";
import { NexorithLogo } from "./icons/logo";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        return setScrolled(true);
      }

      return setScrolled(false);
    };

    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "px-4 py-8",
        scrolled &&
          "p-4 animate-headerSticky sticky top-0 z-50 shadow-[0_8px_30px_rgb(0,0,0,0.05)] backdrop-blur supports-[backdrop-filter]:bg-background/85",
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/">
          <NexorithLogo className="h-8" />
        </Link>

        <DesktopNav />
        <MobileNav />
      </div>
    </header>
  );
}
