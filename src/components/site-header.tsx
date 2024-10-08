import Link from "next/link";

import { DesktopNav } from "./desktop-nav";
import { NexorithLogo } from "./icons/logo";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between p-4 shadow-[0_8px_30px_rgb(0,0,0,0.05)] backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Link href="/">
        <NexorithLogo className="h-8" />
      </Link>

      <DesktopNav />
      <MobileNav />
    </header>
  );
}
