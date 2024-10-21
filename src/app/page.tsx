import Image from "next/image";
import Link from "next/link";

import { GlobeIcon } from "@/components/icons/globe";
import { HandWrittenLines } from "@/components/icons/handwritten-lines";
import { PersonIcon } from "@/components/icons/person";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import AvatarCircles from "@/components/ui/avatar-circles";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ArrowRightIcon } from "lucide-react";

// const services = [
//   "Digital Marketing",
//   "Graphics Design",
//   "UI/UX",
//   "ERP Development",
//   "MVP Development",
//   "App Development",
//   "Web Development",
// ];

const courses = [
  {
    id: 1,
    title: "Frontend Workshop",
    description:
      "Learn the fundamentals of front-end development with HTML, CSS, and JavaScript.",
    image: "/hero.png",
    link: "/courses/intro-to-react",
  },
  {
    id: 2,
    title: "Python Workshop",
    description:
      "Learn the fundamentals of Python programming with variables, data types, and control structures.",
    image: "/hero.png",
    link: "/courses/advanced-javascript",
  },
  {
    id: 3,
    title: "Graphic Design Workshop",
    description:
      "Master CSS layouts, animations, and responsive design techniques.",
    image: "/hero.png",
    link: "/courses/css-mastery",
  },
  {
    id: 4,
    title: "UI/UX with Nexorith",
    description:
      "Master CSS layouts, animations, and responsive design techniques.",
    image: "/hero.png",
    link: "/courses/css-mastery",
  },
];

const avatarUrls = [
  "https://avatars.githubusercontent.com/u/61900781",
  "https://avatars.githubusercontent.com/u/16860528",
  "https://avatars.githubusercontent.com/u/20110627",
  "https://avatars.githubusercontent.com/u/106103625",
  "https://avatars.githubusercontent.com/u/59228569",
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
          <h2 className="text-4xl md:max-w-[12ch] font-bold tracking-tighter md:text-5xl lg:text-7xl">
            Creative Focused on Web&nbsp;Design
          </h2>
          <p className="leading-relaxed md:max-w-[50ch]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been
          </p>

          <div>
            <ul className="grid md:grid-cols-2 gap-6">
              <li className="flex gap-4">
                <GlobeIcon
                  className="w-12 h-12"
                  style={{ color: "hsl(var(--primary))" }}
                />
                <div className="space-y-1">
                  <strong>24/7 Support</strong>
                  <p>We&apos;r always here to help</p>
                </div>
              </li>

              <li className="flex gap-4">
                <PersonIcon
                  className="w-12 h-12"
                  style={{ color: "hsl(var(--primary))" }}
                />
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
            height={200}
            width={200}
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

      <section className="container py-16 md:py-20 lg:py-24">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Courses</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expand your skills with our comprehensive selection of courses. From
            beginner to advanced, we have something for everyone.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="flex flex-col">
              <CardHeader className="p-0">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={300}
                  height={200}
                  className="w-full h-48 rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                <p className="text-muted-foreground">{course.description}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button asChild className="w-full">
                  <Link href={course.link}>Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
