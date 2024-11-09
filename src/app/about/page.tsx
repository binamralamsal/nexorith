import Image from "next/image";

import { NexorithLogo } from "@/components/icons/logo";
import { SquigglyLines } from "@/components/icons/squiggly-lines";
import { TorchIcon } from "@/components/icons/torch";
import { UFOIcon } from "@/components/icons/ufo";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { StarIcon } from "lucide-react";

const companies = [
  NexorithLogo,
  NexorithLogo,
  NexorithLogo,
  NexorithLogo,
  NexorithLogo,
  NexorithLogo,
  NexorithLogo,
  NexorithLogo,
  NexorithLogo,
  NexorithLogo,
];

const team = [
  { name: "Emma Watson", role: "Founder", photo: "/emma.jpg" },
  { name: "Emma Watson", role: "Founder", photo: "/emma.jpg" },
  { name: "Emma Watson", role: "Founder", photo: "/emma.jpg" },
  { name: "Emma Watson", role: "Founder", photo: "/emma.jpg" },
  { name: "Emma Watson", role: "Founder", photo: "/emma.jpg" },
  { name: "Emma Watson", role: "Founder", photo: "/emma.jpg" },
  { name: "Emma Watson", role: "Founder", photo: "/emma.jpg" },
];

export default function AboutPage() {
  return (
    <main>
      <section className="container grid items-center gap-8 py-16 md:gap-20 md:py-20 lg:grid-cols-[3fr,2.75fr] lg:py-24">
        <div className="space-y-6 lg:space-y-8">
          <h2 className="text-balance text-4xl font-bold tracking-tighter md:max-w-[12ch] md:text-5xl lg:text-7xl">
            Exploring the Heart of Nexorith
          </h2>
          <p className="leading-relaxed md:max-w-[50ch]">
            We transform ideas into solutions that exceed your expectations.
            Dive into our story to understand how.
          </p>

          <div className="space-y-4">
            <div className="flex gap-0.5">
              <StarIcon className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <StarIcon className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <StarIcon className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <StarIcon className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <StarIcon className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            </div>
            <blockquote className="max-w-[40ch] text-lg font-semibold">
              &quot;Working with Nexorith has been a seamless journey from
              beginning to end!&quot;
            </blockquote>
            <div className="flex gap-1">
              <span className="font-medium">Binamra Lamsal</span>
              <span>CEO of Company</span>
            </div>
          </div>
        </div>
        <div className="relative grid grid-cols-2 items-center gap-6 md:gap-0 md:px-28 lg:px-0">
          <div className="relative">
            <SquigglyLines className="absolute -left-10 -top-10 hidden h-16 text-primary md:block" />
            <Image
              className="h-min w-full rounded-lg"
              src="/about-2.jpg"
              alt="Hero Image"
              height={400}
              width={400}
            />
          </div>
          <div className="relative z-10 flex flex-col gap-6 md:-ml-10 md:gap-10">
            <Image
              className="h-min w-full rounded-lg object-contain"
              src="/hero.jpg"
              alt="Hero Image"
              height={400}
              width={400}
            />
            <Image
              className="h-min w-full rounded-lg"
              src="/testimonials.jpg"
              alt="Hero Image"
              height={400}
              width={400}
            />
          </div>
        </div>
      </section>

      <section className="container grid place-items-center gap-6 py-16 md:py-20 lg:py-24">
        <div className="text-center font-bold">
          Used by the world best companies
        </div>
        <Carousel
          opts={{ align: "start", slidesToScroll: 1, loop: true }}
          className="max-w-[90vw] md:max-w-[70w] lg:max-w-[75vw]"
        >
          <CarouselContent className="-ml-4">
            {companies.map((Company, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 pl-4 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
              >
                <Company className="h-[10vw] sm:h-12 md:h-10 lg:h-8" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      <section className="container">
        <div className="grid-cols- grid place-content-center place-items-center gap-20 rounded-md bg-secondary px-6 py-16 text-secondary-foreground md:grid-cols-[2.5fr,3fr] md:px-14 md:py-20 lg:px-16 lg:py-24">
          <div className="flex w-full max-w-[60vw] flex-col">
            <div className="flex h-[250px] w-[250px] flex-col items-center justify-center space-y-0.5 rounded-[100%] border-2 border-secondary-foreground/80 text-center">
              <h3 className="text-3xl font-bold">
                600<span className="text-primary">+</span>
              </h3>
              <span>Happy Customers</span>
            </div>
            <div className="flex h-[200px] w-[200px] flex-col items-center justify-center space-y-0.5 self-end rounded-[100%] bg-secondary text-center brightness-105 xl:-mt-16">
              <h3 className="text-3xl font-bold">
                250<span className="text-primary">+</span>
              </h3>
              <span>Completed Projects</span>
            </div>
            <div className="flex h-[200px] w-[200px] flex-col items-center justify-center space-y-0.5 self-center rounded-[100%] bg-primary text-center text-primary-foreground">
              <h3 className="text-3xl font-bold">
                250<span className="text-primary-foreground">+</span>
              </h3>
              <span>Completed Projects</span>
            </div>
          </div>
          <div className="space-y-6 lg:space-y-8">
            <h2 className="text-balance text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
              Shaping Digital Futures
            </h2>
            <p className="leading-relaxed text-secondary-foreground/80 md:max-w-[55ch]">
              At Nexorith, our vision is to pioneer a new era of software
              solutions. We believe in empowering innovation, enabling
              businesses to shape their digital futures, and creating a world
              where software knows no bounds.
            </p>
            <ul className="space-y-6 lg:space-y-8">
              <li className="flex items-start gap-4">
                <TorchIcon className="not-sr-only h-8 text-primary" />
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">Innovative Solutions</h3>
                  <p className="text-secondary-foreground/80 lg:max-w-[50ch]">
                    We pride ourselves on crafting innovative software solutions
                    that address real-world challenges and drive digital
                    transformation.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <UFOIcon className="not-sr-only h-8 text-primary" />
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">Client-Centric Approach</h3>
                  <p className="text-secondary-foreground/80 lg:max-w-[50ch]">
                    Our client-centric approach ensures that we understand your
                    unique needs and provide tailored solutions that exceed
                    expectations.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <TorchIcon className="not-sr-only h-8 text-primary" />
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">Experienced Team</h3>
                  <p className="text-secondary-foreground/80 lg:max-w-[50ch]">
                    Our team of experienced professionals is committed to
                    delivering excellence and quality in every project we
                    undertake.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container py-16 md:py-20 lg:py-24">
        <Carousel
          opts={{ align: "start", slidesToScroll: 1, loop: true }}
          className="grid items-center gap-8 md:grid-cols-[1fr,2fr] md:gap-10"
        >
          <div className="space-y-8 md:space-y-14">
            <h2 className="max-w-[20ch] text-balance text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
              Meet Our Dedicated Team
            </h2>
            <div className="flex gap-2">
              <CarouselPrevious className="static h-10 w-10" />
              <CarouselNext className="static h-10 w-10" />
            </div>
          </div>
          <div>
            <CarouselContent className="-ml-8 max-w-[100vw] md:max-w-[60vw]">
              {team.map((person, index) => (
                <CarouselItem
                  key={index}
                  className="basis-[100%] select-none space-y-4 pl-8 sm:basis-1/2 md:basis-1/2 lg:basis-1/3"
                >
                  <Image
                    src={person.photo}
                    width={400}
                    height={400}
                    alt={person.name}
                    className="w-full rounded-md"
                  />
                  <div className="text-center">
                    <strong className="text-lg">{person.name}</strong>
                    <div className="text-sm text-muted-foreground">
                      {person.role}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
        </Carousel>
      </section>
    </main>
  );
}
