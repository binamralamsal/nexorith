import { Metadata } from "next";
import Link from "next/link";

import { AnnouncementIcon } from "@/components/icons/announcement";
import { DatabaseIcon } from "@/components/icons/database";
import { GraphIcon } from "@/components/icons/graph";
import { PaintIcon } from "@/components/icons/paint";
import { RedditIcon } from "@/components/icons/reddit";
import { ServicesIcon } from "@/components/icons/services";
import { StrategyIcon } from "@/components/icons/strategy";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import { MoveRightIcon, PhoneIcon } from "lucide-react";

import { avatarUrls, links } from "@/configs/site";

export const metadata: Metadata = {
  title: "Services",
};

const services = [
  {
    icon: AnnouncementIcon,
    title: "Digital Marketing",
    description:
      "Digital marketing is the art and science of reaching, engaging, and influencing your target audience through online channels.",
  },
  {
    icon: PaintIcon,
    title: "Web design",
    description:
      "A well-designed website not only captivates visitors but also conveys a brand's identity, ultimately driving engagement and conversions.",
  },
  {
    icon: StrategyIcon,
    title: "Strategic planning",
    description:
      "Strategic planning is the deliberate process of defining an organization's goals and objectives",
  },
  {
    icon: RedditIcon,
    title: "Brand design",
    description:
      "Brand design is the creative process of crafting a visual and emotional identity that represents your business",
  },
  {
    icon: DatabaseIcon,
    title: "Database analysis",
    description:
      "Database analysis involves the systematic examination of structured data sets to extract valuable insights, patterns, and trends.",
  },
  {
    icon: GraphIcon,
    title: "Business consulting",
    description:
      "Consultants analyze your operations, provide strategic recommendations assist in implementing solutions to tackle challenges, and drive growth.",
  },
];

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
            <div className="grid justify-items-start">
              <div className="font-medium">More then 10k active users! 🤩</div>
              <Link
                href={links.contact}
                className="group flex items-center p-0 transition hover:text-primary"
              >
                Join them now
                <MoveRightIcon className="h-4 transition group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>

        <div>
          <ServicesIcon className="text-primary" />
        </div>
      </section>

      <section className="container grid items-center gap-4 py-16 md:grid-cols-2 md:py-20 lg:gap-6 lg:py-24">
        {services.map((service) => (
          <Link
            key={service.title}
            href="#"
            className="group grid h-full grid-cols-[1fr,8fr] gap-4 rounded-md border p-6 transition hover:-translate-y-1 hover:shadow-[0px_0px_17px_-3px_rgba(0,_0,_0,_0.1)] lg:gap-6 lg:p-8"
          >
            <service.icon className="self-start text-primary" />
            <div className="flex flex-col justify-between">
              <div className="mb-4 space-y-4">
                <h3 className="text-xl font-bold">{service.title}</h3>
                <div className="text-foreground/80">{service.description}</div>
              </div>
              <div className="flex items-center gap-0.5 p-0 transition group-hover:text-primary">
                <span>Know more</span>
                <MoveRightIcon className="h-4 transition group-hover:translate-x-0.5" />
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
