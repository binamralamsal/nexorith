import { Button } from "@/components/ui/button";
import Marquee from "@/components/ui/marquee";
import { MoveRight } from "lucide-react";

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
    <>
      <section className="md:bg-hero bg-cover bg-no-repeat bg-center relative overflow-hidden">
        <div className="container px-4 mx-auto grid md:grid-cols-2 py-16 md:py-20 lg:py-40">
          <div className="flex flex-col items-center md:items-start gap-6 text-center md:text-left">
            <h2 className="font-bold text-4xl md:text-5xl lg:text-7xl">
              we <span className="text-primary">Build</span> <br />
              your <span className="text-primary">Dream.</span>
            </h2>
            <p className="max-w-[40ch]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been
            </p>

            <div className="h-20 w-20 rounded-full bg-primary/10 animate-scale-up-down -bottom-10 hidden absolute md:block left-1/2"></div>

            <Button size="lg" variant={"lightPrimary"} className="gap-2">
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
    </>
  );
}
