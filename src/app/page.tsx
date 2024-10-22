import Image from "next/image";
import Link from "next/link";

import { ArrowDecoration } from "@/components/icons/arrow";
import { BirdsDecoration } from "@/components/icons/birds";
import { GlobeIcon } from "@/components/icons/globe";
import { HandWrittenLines } from "@/components/icons/handwritten-lines";
import { NexorithLogo } from "@/components/icons/logo";
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

import {
  ArrowRightIcon,
  BadgeCheckIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";

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

const avatarUrls = [
  "https://avatars.githubusercontent.com/u/61900781",
  "https://avatars.githubusercontent.com/u/16860528",
  "https://avatars.githubusercontent.com/u/20110627",
  "https://avatars.githubusercontent.com/u/106103625",
  "https://avatars.githubusercontent.com/u/59228569",
];

const reviews = [
  {
    description:
      "Nexorith has transformed my understanding of web development! The courses are incredibly well-structured and informative.",
    avatar: "https://avatars.githubusercontent.com/u/12345678",
    name: "Aarav Shrestha",
  },
  {
    description:
      "I loved the hands-on approach of the Graphic Design Workshop. The instructors are knowledgeable and supportive.",
    avatar: "https://avatars.githubusercontent.com/u/23456789",
    name: "Sita Gurung",
  },
  {
    description:
      "The digital marketing strategies I learned from Nexorith helped boost my business's online presence significantly!",
    avatar: "https://avatars.githubusercontent.com/u/34567890",
    name: "Samir Thapa",
  },
  {
    description:
      "As a beginner, I found the Frontend Workshop to be very approachable and engaging. Highly recommended!",
    avatar: "https://avatars.githubusercontent.com/u/45678901",
    name: "Pooja Singh",
  },
  {
    description:
      "The courses at Nexorith provide a solid foundation in various technologies. I can't wait to apply what I've learned!",
    avatar: "https://avatars.githubusercontent.com/u/56789012",
    name: "Rajesh Karki",
  },
  {
    description:
      "Nexorith offers exceptional support throughout the learning process. I appreciate their commitment to student success.",
    avatar: "https://avatars.githubusercontent.com/u/67890123",
    name: "Anjali Rathi",
  },
];

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

      <section className="container grid py-16 md:py-20 lg:py-24 gap-8 md:gap-20 lg:grid-cols-[3fr,2fr] items-center">
        <div className="space-y-6 lg:space-y-8">
          <Link
            className="inline-block group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
            href="#"
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>🤩 Award-winning digital services</span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </Link>
          <h2 className="text-4xl md:max-w-[12ch] font-bold tracking-tighter md:text-5xl lg:text-7xl text-balance">
            Creative Focused on Web&nbsp;Design
          </h2>
          <p className="leading-relaxed md:max-w-[50ch]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been
          </p>

          <div>
            <ul className="grid md:grid-cols-2 gap-6">
              <li className="flex gap-4">
                <GlobeIcon className="w-12 h-12 text-primary" />
                <div className="space-y-1">
                  <strong>24/7 Support</strong>
                  <p>We&apos;r always here to help</p>
                </div>
              </li>

              <li className="flex gap-4">
                <PersonIcon className="w-12 h-12 text-primary" />
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
          <HandWrittenLines className="hidden absolute md:block h-20 md:left-8 md:-top-8 lg:-left-20" />
          <div className="absolute space-y-2 left-5 md:left-14 lg:-left-8 p-4 bottom-5 bg-secondary rounded-md shadow-sm">
            <div className="flex items-center gap-2">
              <strong className="text-lg">5K+</strong>
              <AvatarCircles avatarUrls={avatarUrls} />
            </div>
            <p>Total Visitors Per Month</p>
          </div>
        </div>
      </section>

      <section className="container grid py-16 md:py-20 lg:py-24 gap-8 md:gap-20 lg:grid-cols-[3fr,2fr] items-center">
        <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 md:gap-8">
          <div className="relative">
            <Image
              src="/about-1.jpg"
              className="w-full rounded-md"
              alt="About 1"
              height={400}
              width={400}
            />
            <BirdsDecoration className="hidden xs:block bottom-32 md:bottom-2 lg:bottom-14 h-24 absolute right-4 text-primary" />
          </div>
          <div className="grid gap-4 md:gap-8">
            <div className="bg-secondary rounded-md p-4 grid place-items-center text-center gap-1">
              <strong className="text-secondary-foreground text-4xl">
                10+
              </strong>
              <span className="text-secondary-foreground">
                Years of Experience
              </span>
            </div>
            <div className="bg-primary rounded-md p-4 grid place-items-center text-center gap-1">
              <strong className="text-primary-foreground text-4xl">1.2K</strong>
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
            className="inline-block group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
            href="#"
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>🤝 Your gateway to digital success</span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </Link>

          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tighter text-balance">
            Defining the future&nbsp;of online&nbsp;experiences!
          </h2>

          <p className="leading-relaxed md:max-w-[50ch]">
            Embrace a new era of digital success with Mizzle. Our team combines
            cutting-edge design with robust development to deliver websites that
            captivate and convert.
          </p>

          <ul className="space-y-3">
            <li className="flex gap-1 items-center">
              <BadgeCheckIcon className="not-sr-only text-primary-foreground fill-primary" />
              <span>Emphasis on ROI-driven solutions</span>
            </li>
            <li className="flex gap-1 items-center">
              <BadgeCheckIcon className="not-sr-only text-primary-foreground fill-primary" />
              <span>Expert team with diverse skill</span>
            </li>
            <li className="flex gap-1 items-center">
              <BadgeCheckIcon className="not-sr-only text-primary-foreground fill-primary" />
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
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Courses</h1>
          <p className="text-md md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Expand your skills with our comprehensive selection of courses. From
            beginner to advanced, we have something for everyone.
          </p>
        </header>
        <CourseCatalog />
      </section>

      <section className="container grid py-16 md:py-20 lg:py-24 gap-8 md:gap-10 lg:grid-cols-[1fr,3fr] items-center">
        <div className="space-y-6 lg:space-y-8">
          {/* TODO: Fix duplicate */}
          <Link
            className="inline-block group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
            href="#"
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>💖 Real results from real clients</span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </Link>

          <h2 className="text-2xl max-w-[20ch] md:text-3xl lg:text-5xl font-bold tracking-tighter text-balance">
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
                  className="md:basis-1/2 space-y-4 select-none"
                >
                  <div className="leading-relaxed font-medium">
                    {review.description}
                  </div>
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
          <ArrowDecoration className="h-40 absolute hidden lg:block -left-28 top-1/4" />
          <Image
            className="w-full"
            src="/testimonials.jpg"
            alt="Testimonials"
            height={400}
            width={400}
          />
          <div className="flex items-center gap-2 p-2 max-w-[35ch] rounded-md bg-secondary text-secondary-foreground shadow-md absolute top-5 left-5 lg:top-16 lg:-left-20">
            <Avatar>
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/59228569"
                alt="Person"
              />
            </Avatar>
            <p>The best Bootstrap theme we&apos;ve ever used 🔥</p>
          </div>

          <div className="flex items-center gap-2 p-2 max-w-[35ch] rounded-md bg-white shadow-md absolute bottom-5 right-5 lg:bottom-16 lg:-left-20">
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
    </main>
  );
}
