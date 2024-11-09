import { Metadata } from "next";
import Link from "next/link";

import { ServicesIcon } from "@/components/icons/services";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import { MoveRightIcon, PhoneIcon } from "lucide-react";

import { avatarUrls, links } from "@/configs/site";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <main>
      <section className="container grid items-center gap-14 py-16 md:grid-cols-2 md:gap-20 md:py-20 lg:gap-32 lg:py-24">
        <div className="space-y-6 lg:space-y-8">
          <h2 className="text-balance text-4xl font-bold tracking-tighter md:max-w-[12ch] md:text-5xl lg:text-7xl">
            Discover the solutions we offer
          </h2>
          <p className="leading-relaxed md:max-w-[50ch]">
            Our experienced team is dedicated to helping you achieve your goals
            through innovative technology.
          </p>
          <Button className="gap-2" size="lg" asChild>
            <Link href={links.contact}>
              <PhoneIcon className="h-4 w-4" />
              <span>Contact us</span>
            </Link>
          </Button>

          <div className="flex gap-4">
            <div className="flex -space-x-1">
              {avatarUrls.slice(0, 2).map((avatar) => (
                <Avatar key={avatar} className="h-12 w-12">
                  <AvatarImage src={avatar} />
                </Avatar>
              ))}
              <div className="relative z-10 grid h-12 w-12 place-items-center rounded-full bg-primary text-sm text-primary-foreground">
                10k+
              </div>
            </div>
            <div className="grid justify-items-start -space-y-1.5">
              <div className="font-medium">More then 10k active users! 🤩</div>
              <Button variant="link" className="group p-0" asChild>
                <Link href={links.contact}>
                  Join them now
                  <MoveRightIcon className="h-4 transition group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div>
          <ServicesIcon className="text-primary" />
        </div>
      </section>
    </main>
  );
}
