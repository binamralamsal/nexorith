"use client";

import { navLinks } from "@/config/site";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <>
      <nav className="hidden md:block">
        <ul className="flex">
          {navLinks.map((navLink) => (
            <li key={navLink.label}>
              <Link
                href={navLink.href}
                className={cn(
                  "p-4 hover:text-primary transition-all ease-in-out text-sm",
                  pathname === navLink.href && "font-medium text-primary"
                )}
              >
                {navLink.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <nav className="hidden md:block">
        <ul className="flex gap-2">
          <li>
            <Button variant="link">Login</Button>
          </li>
          <li>
            <Button>Sign Up</Button>
          </li>
        </ul>
      </nav>
    </>
  );
}
