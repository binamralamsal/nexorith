import Link from "next/link";

import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";

import { links } from "@/configs/site";

import { NexorithLogo } from "./icons/logo";

export function SiteFooter() {
  return (
    <footer className="pt-16 md:pt-20 lg:pt-24 bg-secondary text-secondary-foreground">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-[2fr,1fr,1fr,1fr]">
        <div className="md:max-w-[30ch] space-y-4 lg:space-y-6">
          <NexorithLogo className="h-12" />
          <p>
            A Bootstrap theme that&apos;s both stylish and functional, perfect
            for any type of technology or corporate website.
          </p>
        </div>
        <div className="space-y-4 lg:space-y-6">
          <h2 className="font-bold text-xl">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link href={links.home} className="font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link href={links.about} className="font-medium">
                About
              </Link>
            </li>
            <li>
              <Link href={links.services} className="font-medium">
                Services
              </Link>
            </li>
            <li>
              <Link href={links.courses} className="font-medium">
                Courses
              </Link>
            </li>
            <li>
              <Link href={links.contact} className="font-medium">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/#" className="font-medium">
                Career
              </Link>
            </li>
            <li>
              <Link href="/" className="font-medium">
                Become a Partner
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4 lg:space-y-6">
          <h2 className="font-bold text-xl">Community</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className="font-medium">
                About
              </Link>
            </li>
            <li>
              <Link href="/" className="font-medium">
                Services
              </Link>
            </li>
            <li>
              <Link href="/" className="font-medium">
                Courses
              </Link>
            </li>
            <li>
              <Link href="/" className="font-medium">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/" className="font-medium">
                Career
              </Link>
            </li>
            <li>
              <Link href="/" className="font-medium">
                Become a Partner
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4 lg:space-y-6">
          <h2 className="font-bold text-xl">Follow us on</h2>
          <ul className="flex gap-1 flex-wrap">
            <li>
              <Link
                href="/#"
                className="inline-block rounded-md p-2 bg-white shadow-sm hover:bg-gray-200 transition-all"
              >
                <FacebookIcon className="w-4 h-4 fill-secondary-foreground" />
              </Link>
            </li>
            <li>
              <Link
                href="/#"
                className="inline-block rounded-md p-2 bg-white shadow-sm hover:bg-gray-200 transition-all"
              >
                <InstagramIcon className="w-4 h-4" />
              </Link>
            </li>
            <li>
              <Link
                href="/#"
                className="inline-block rounded-md p-2 bg-white shadow-sm hover:bg-gray-200 transition-all"
              >
                <TwitterIcon className="w-4 h-4 fill-secondary-foreground" />
              </Link>
            </li>
            <li>
              <Link
                href="/#"
                className="inline-block rounded-md p-2 bg-white shadow-sm hover:bg-gray-200 transition-all"
              >
                <LinkedinIcon className="w-4 h-4 fill-secondary-foreground" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <hr className="container my-8" />

      <div className="container pb-8">
        Copyrights © {new Date().getFullYear()} Nexorith
      </div>
    </footer>
  );
}
