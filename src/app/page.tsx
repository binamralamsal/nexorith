import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ArrowDecoration } from "@/components/icons/arrow";
import { BirdsDecoration } from "@/components/icons/birds";
import { GlobeIcon } from "@/components/icons/globe";
import { HandWrittenLines } from "@/components/icons/handwritten-lines";
import { PersonIcon } from "@/components/icons/person";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import AvatarCircles from "@/components/ui/avatar-circles";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "@/components/ui/carousel";

import { ArrowRightIcon, BadgeCheckIcon } from "lucide-react";

import { avatarUrls, reviews } from "@/configs/site";

import { CourseCatalog } from "./course-catalog";

// const services = [
//   "Digital Marketing",
//   "Graphics Design",
//   "UI/UX",
//   "ERP Development",
//   "MVP Development",
//   "App Development",
//   "Web Development",
// ];

export const metadata: Metadata = {
  title: "Home | Nexorith",
};

export default function Home() {
  return (
    <main>
      {/* <section className="relative overflow-hidden bg-cover bg-center bg-no-repeat md:bg-hero">
        <div className="container grid py-16 md:grid-cols-2 md:py-20 lg:py-40">
          <div className="flex flex-col gap-6 md:items-start">
            <h2 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
              we <span className="text-primary">Build</span> <br />
              your <span className="text-primary">Dream.</span>
            </h2>
            <p className="max-w-[40ch] leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been
            </p>

            <div className="absolute -bottom-10 left-1/2 hidden h-20 w-20 animate-scale-up-down rounded-full bg-primary/10 md:block"></div>

            <Button
              size="lg"
              variant="lightPrimary"
              className="gap-2 self-start"
            >
              Get Started <MoveRight />
            </Button>
          </div>
        </div>
      </section>

      <section className="my:1 md:my-2 lg:my-3">
        <Marquee
          className="[--duration:20s] [--gap:1.25rem] md:[--gap:2.5rem] lg:[--gap:5rem]"
          pauseOnHover
        >
          <ul className="flex gap-5 md:gap-10 lg:gap-20">
            {services.map((service) => (
              <li
                key={service}
                className="text-xl font-medium tracking-tighter text-primary/60 md:text-2xl lg:text-3xl lg:font-semibold"
              >
                {service}
              </li>
            ))}
          </ul>
        </Marquee>
      </section>

      <section className="lg:py-30 overflow-hidden py-10 md:py-20">
        <div className="container relative grid items-center gap-4 md:grid-cols-2 md:gap-8 lg:gap-16">
          <Asterisk className="absolute right-10 top-0 h-10" />
          <div className="relative">
            <Image
              src="/spinning.png"
              alt="Spinning Wheel"
              height={300}
              width={300}
              className="not-sr-only absolute -left-40 top-20 -z-10 w-full animate-spin opacity-15 duration-6s"
            />
            <Image
              src="/people-1.png"
              alt="People 1"
              width={400}
              height={400}
              className="relative top-0 z-10 w-[80%] rounded-t-3xl border-8 border-white shadow-lg"
            />
            <Image
              src="/people-2.png"
              alt="People 2"
              width={400}
              height={400}
              className="relative -top-10 -mb-10 ml-auto w-[60%] rounded-b-3xl border-8 border-white shadow-sm"
            />
          </div>
          <div className="relative flex flex-col gap-6 leading-relaxed">
            <Image
              src="/spinning.png"
              alt="Spinning Wheel"
              height={300}
              width={300}
              className="not-sr-only absolute -right-[15rem] -top-[15rem] -z-10 w-full animate-spin opacity-5 duration-6s"
            />
            <h2 className="text-2xl font-bold tracking-tight text-primary md:text-3xl lg:text-4xl">
              About Us
            </h2>
            <p>
              Nexorith Nepal, established in 2024, is at the forefront of
              technological innovation, dedicated to delivering next-generation
              IT solutions. Our name, &quot;Nexorith&quot;, embodies our mission
              to provide forward-thinking, cutting-edge services that drive
              progress and empower businesses to excel in the rapidly evolving
              tech landscape.
            </p>
            <p>
              With expertise in digital marketing, web development,
              cybersecurity, and more, we are committed to helping our clients
              stay ahead of the curve, all while maintaining a professional and
              client-centric approach.
            </p>
            <Button className="gap-2 self-start" variant="lightPrimary">
              Learn More <MoveRight />
            </Button>
          </div>
        </div>
      </section> */}

      <section className="container grid items-center gap-8 py-16 md:gap-20 md:py-20 lg:grid-cols-[3fr,2fr] lg:py-24">
        <div className="space-y-6 lg:space-y-8">
          <Link
            className="group inline-block rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
            href="#"
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>🤩 Award-winning digital services</span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </Link>
          <h2 className="text-balance text-4xl font-bold tracking-tighter md:max-w-[12ch] md:text-5xl lg:text-7xl">
            Creative Focused on Web&nbsp;Design
          </h2>
          <p className="leading-relaxed md:max-w-[50ch]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been
          </p>

          <div>
            <ul className="grid gap-6 md:grid-cols-2">
              <li className="flex gap-4">
                <GlobeIcon className="h-12 w-12 text-primary" />
                <div className="space-y-1">
                  <strong>24/7 Support</strong>
                  <p>We&apos;r always here to help</p>
                </div>
              </li>

              <li className="flex gap-4">
                <PersonIcon className="h-12 w-12 text-primary" />
                <div className="space-y-1">
                  <strong>Award Winning agency</strong>
                  <p>You are in safe hand</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative md:px-28 lg:px-0">
          <Image
            className="w-full"
            src="/hero.jpg"
            alt="Hero Image"
            height={400}
            width={400}
          />
          <HandWrittenLines className="absolute hidden h-20 md:-top-8 md:left-8 md:block lg:-left-20" />
          <div className="absolute bottom-5 left-5 space-y-2 rounded-md bg-secondary p-4 text-secondary-foreground shadow-sm md:left-14 lg:-left-8">
            <div className="flex items-center gap-2">
              <strong className="text-lg">5K+</strong>
              <AvatarCircles avatarUrls={avatarUrls} />
            </div>
            <p>Total Visitors Per Month</p>
          </div>
        </div>
      </section>

      <section className="container grid items-center gap-8 py-16 md:gap-20 md:py-20 lg:grid-cols-[3fr,2fr] lg:py-24">
        <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 md:gap-8">
          <div className="relative">
            <Image
              src="/about-1.jpg"
              className="w-full rounded-md"
              alt="About 1"
              height={400}
              width={400}
            />
            <BirdsDecoration className="absolute bottom-32 right-4 hidden h-24 text-primary xs:block md:bottom-2 lg:bottom-14" />
          </div>
          <div className="grid gap-4 md:gap-8">
            <div className="grid place-items-center gap-1 rounded-md bg-secondary p-4 text-center">
              <strong className="text-4xl text-secondary-foreground">
                10+
              </strong>
              <span className="text-secondary-foreground">
                Years of Experience
              </span>
            </div>
            <div className="grid place-items-center gap-1 rounded-md bg-primary p-4 text-center">
              <strong className="text-4xl text-primary-foreground">1.2K</strong>
              <span className="text-primary-foreground">Happy Customers</span>
            </div>
            <Image
              src="/about-2.jpg"
              className="w-full rounded-md md:col-span-2"
              alt="About 1"
              height={400}
              width={400}
            />
          </div>
        </div>
        <div className="space-y-6 lg:space-y-8">
          {/* TODO: Fix duplicate */}
          <Link
            className="group inline-block rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
            href="#"
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>🤝 Your gateway to digital success</span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </Link>

          <h2 className="text-balance text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
            Defining the future&nbsp;of online&nbsp;experiences!
          </h2>

          <p className="leading-relaxed md:max-w-[50ch]">
            Embrace a new era of digital success with Mizzle. Our team combines
            cutting-edge design with robust development to deliver websites that
            captivate and convert.
          </p>

          <ul className="space-y-3">
            <li className="flex items-center gap-1">
              <BadgeCheckIcon className="not-sr-only fill-primary text-primary-foreground" />
              <span>Emphasis on ROI-driven solutions</span>
            </li>
            <li className="flex items-center gap-1">
              <BadgeCheckIcon className="not-sr-only fill-primary text-primary-foreground" />
              <span>Expert team with diverse skill</span>
            </li>
            <li className="flex items-center gap-1">
              <BadgeCheckIcon className="not-sr-only fill-primary text-primary-foreground" />
              <span>Proven track record of delivering results</span>
            </li>
          </ul>

          <Button variant="secondary" size="lg" className="group">
            <span>Learn More</span>
            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </Button>
        </div>
      </section>

      <section className="container py-16 md:py-20 lg:py-24">
        <header className="mb-8 space-y-2 text-center lg:space-y-5">
          <h1 className="text-balance text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
            Our Courses
          </h1>
          <p className="mx-auto max-w-[50ch] leading-relaxed">
            Expand your skills with our comprehensive selection of courses. From
            beginner to advanced, we have something for everyone.
          </p>
        </header>
        <CourseCatalog />
      </section>

      <section className="container grid items-center gap-8 py-16 md:gap-10 md:py-20 lg:grid-cols-[1fr,3fr] lg:py-24">
        <div className="space-y-6 lg:space-y-8">
          {/* TODO: Fix duplicate */}
          <Link
            className="group inline-block rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
            href="#"
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>💖 Real results from real clients</span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </Link>

          <h2 className="max-w-[20ch] text-balance text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
            See how we&apos;ve helped our clients succeed
          </h2>

          <strong className="block text-lg">
            More than 1500+ agencies using Mizzle
          </strong>

          <Carousel
            opts={{ align: "start", slidesToScroll: 1 }}
            className="max-w-[90vw]"
          >
            <CarouselContent>
              {reviews.map((review, index) => (
                <CarouselItem
                  key={index}
                  className="select-none space-y-4 md:basis-1/2"
                >
                  <blockquote className="font-medium leading-relaxed">
                    {review.description}
                  </blockquote>
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage src={review.avatar} alt={review.name} />
                    </Avatar>
                    <span>By {review.name}</span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselDots className="mt-6 lg:mt-8" />
          </Carousel>
        </div>
        <div className="relative">
          <ArrowDecoration className="absolute -left-28 top-1/4 hidden h-40 lg:block" />
          <Image
            className="w-full"
            src="/testimonials.jpg"
            alt="Testimonials"
            height={400}
            width={400}
          />
          <div className="absolute left-5 top-5 flex max-w-[35ch] items-center gap-2 rounded-md bg-secondary p-2 text-secondary-foreground shadow-md lg:-left-20 lg:top-16">
            <Avatar>
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/59228569"
                alt="Person"
              />
            </Avatar>
            <p>The best Bootstrap theme we&apos;ve ever used 🔥</p>
          </div>

          <div className="absolute bottom-5 right-5 flex max-w-[35ch] items-center gap-2 rounded-md bg-white p-2 shadow-md lg:-left-20 lg:bottom-16">
            <Avatar>
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/20110627"
                alt="Person"
              />
            </Avatar>
            <p>Excellent Theme 💖</p>
          </div>
        </div>
      </section>
    </main>
  );
}
