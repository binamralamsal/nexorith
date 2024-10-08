import { MoveRight } from "lucide-react";
import Image from "next/image";

import { Asterisk } from "@/components/icons/asterisk";
import { Button } from "@/components/ui/button";
import Marquee from "@/components/ui/marquee";

const services = [
  "Digital Marketing",
  "Graphics Design",
  "UI/UX",
  "ERP Development",
  "MVP Development",
  "App Development",
  "Web Development",
];

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden bg-cover bg-center bg-no-repeat md:bg-hero">
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
      </section>
    </main>
  );
}
