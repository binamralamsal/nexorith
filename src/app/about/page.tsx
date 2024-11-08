import Image from "next/image";

import { StarIcon } from "lucide-react";

export default function AboutPage() {
  return (
    <main>
      <section className="container grid items-center gap-8 py-16 md:gap-20 md:py-20 lg:grid-cols-[3fr,2fr] lg:py-24">
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
        <div className="relative flex items-center gap-6 md:gap-0 md:px-28 lg:px-0">
          <Image
            className="h-min w-full rounded-lg"
            src="/about-2.jpg"
            alt="Hero Image"
            height={400}
            width={400}
          />
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
    </main>
  );
}
