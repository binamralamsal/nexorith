import { Button } from "@/components/ui/button";
import Marquee from "@/components/ui/marquee";
import { MoveRight } from "lucide-react";
import Image from "next/image";

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
      <section className="md:bg-hero bg-cover bg-no-repeat bg-center relative overflow-hidden">
        <div className="container grid md:grid-cols-2 py-16 md:py-20 lg:py-40">
          <div className="flex flex-col md:items-start gap-6">
            <h2 className="font-bold text-4xl md:text-5xl lg:text-7xl">
              we <span className="text-primary">Build</span> <br />
              your <span className="text-primary">Dream.</span>
            </h2>
            <p className="max-w-[40ch] leading-soft">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been
            </p>

            <div className="h-20 w-20 rounded-full bg-primary/10 animate-scale-up-down -bottom-10 hidden absolute md:block left-1/2"></div>

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
          className="[--gap:1.25rem] md:[--gap:2.5rem] lg:[--gap:5rem] [--duration:20s]"
          pauseOnHover
        >
          <ul className="flex gap-5 md:gap-10 lg:gap-20">
            {services.map((service) => (
              <li
                key={service}
                className="text-xl md:text-2xl lg:text-3xl text-primary/60 font-medium lg:font-semibold"
              >
                {service}
              </li>
            ))}
          </ul>
        </Marquee>
      </section>

      <section className="my-10 md:my-20 lg:my-30">
        <div className="container grid md:grid-cols-2 items-center gap-4 md:gap-8 lg:gap-16">
          <div>
            <Image
              src="/people-1.png"
              alt="People 1"
              width={400}
              height={400}
              className="w-[80%] top-0 z-10 relative shadow-lg border-8 border-white rounded-t-3xl"
            />
            <Image
              src="/people-2.png"
              alt="People 2"
              width={400}
              height={400}
              className="w-[60%] relative -mb-10 ml-auto -top-10 shadow-sm opacity-40 border-8 border-white rounded-b-3xl"
            />
          </div>
          <div className="flex flex-col gap-6 leading-soft">
            <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl">
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
            <Button className="self-start gap-2" variant="lightPrimary">
              Learn More <MoveRight />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
