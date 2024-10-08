"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks } from "@/config/site";
import { cn } from "@/lib/utils";

import { Button } from "./ui/button";

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
                  "p-4 text-sm transition-all ease-in-out hover:text-primary",
                  pathname === navLink.href && "font-medium text-primary",
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
