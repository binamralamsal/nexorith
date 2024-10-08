import Link from "next/link";
import { NexorithLogo } from "./icons/logo";

import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
  return (
    <header className="flex justify-between items-center p-4 sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-[0_8px_30px_rgb(0,0,0,0.05)]">
      <Link href="/">
        <NexorithLogo className="h-8" />
      </Link>

      <DesktopNav />
      <MobileNav />
    </header>
  );
}
