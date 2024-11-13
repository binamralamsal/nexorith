import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Expander,
  ExpanderButton,
  ExpanderContent,
} from "@/components/ui/expander";

import { AvatarImage } from "@radix-ui/react-avatar";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  DefaultVideoLayout,
  defaultLayoutIcons,
} from "@vidstack/react/player/layouts/default";
import "@vidstack/react/player/styles/default/layouts/video.css";
import "@vidstack/react/player/styles/default/theme.css";
import {
  BookOpenTextIcon,
  CalendarIcon,
  CircleCheckIcon,
  ClockIcon,
  GlobeIcon,
  GraduationCapIcon,
  InfoIcon,
  MedalIcon,
  SignalIcon,
  StarIcon,
} from "lucide-react";

export default function CoursePage() {
  return (
    <main>
      <div className="container grid gap-6 md:grid-cols-[2fr,1fr]">
        <div className="space-y-8 py-6 md:py-8 lg:py-10">
          <section className="space-y-4">
            <h1 className="text-balance text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
              The Complete Digital Marketing Course - 12 Courses in 1
            </h1>
            <p className="leading-relaxed text-gray-600">
              Satisfied conveying a dependent contented he gentleman agreeable
              do be. Warrant private blushes removed an in equally totally if.
              Delivered dejection necessary objection do Mr prevailed. Mr
              feeling does chiefly cordial in do.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-1">
                <StarIcon className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span>5.0/5.0</span>
              </div>
              <div className="flex items-center gap-1">
                <GraduationCapIcon className="h-5 w-5" />
                <span>12k Enrolled</span>
              </div>
              <div className="flex items-center gap-1">
                <SignalIcon className="h-5 w-5" />
                <span>All levels</span>
              </div>
              <div className="flex items-center gap-1">
                <InfoIcon className="h-5 w-5" />
                <span>Last updated 09/2021</span>
              </div>
              <div className="flex items-center gap-1">
                <GlobeIcon className="h-5 w-5" />
                <span>Nepali</span>
              </div>
            </div>
          </section>

          <section>
            <MediaPlayer title="Sprite Fight" src="youtube/_cMxraX_5RE">
              <MediaProvider />
              <DefaultVideoLayout
                thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt"
                icons={defaultLayoutIcons}
              />
            </MediaPlayer>
          </section>

          <section>
            <Card className="shadow-none">
              <CardHeader>
                <CardTitle className="text-2xl font-bold md:text-3xl lg:text-4xl">
                  <h2>Course description</h2>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Expander initialVisibleItems={3}>
                  <ExpanderContent className="space-y-4 leading-relaxed text-gray-600">
                    <p>
                      Welcome to the Digital Marketing Ultimate Course Bundle -
                      12 Courses in 1 (Over 36 hours of content)
                    </p>
                    <p>
                      In this practical hands-on training, you’re going to learn
                      to become a digital marketing expert with this ultimate
                      course bundle that includes 12 digital marketing courses
                      in 1!
                    </p>
                    <p>
                      If you wish to find out the skills that should be covered
                      in a basic digital marketing course syllabus in India or
                      anywhere around the world, then reading this blog will
                      help. Before we delve into the advanced digital marketing
                      course syllabus, let’s look at the scope of digital
                      marketing and what the future holds.
                    </p>
                    <p>
                      We focus a great deal on the understanding of behavioral
                      psychology and influence triggers which are crucial for
                      becoming a well rounded Digital Marketer. We understand
                      that theory is important to build a solid foundation, we
                      understand that theory alone isn’t going to get the job
                      done so that’s why this course is packed with practical
                      hands-on examples that you can follow step by step.
                    </p>
                    <p>
                      Behavioral psychology and influence triggers which are
                      crucial for becoming a well rounded Digital Marketer. We
                      understand that theory is important to build a solid
                      foundation, we understand that theory alone isn’t going to
                      get the job done so that’s why this course is packed with
                      practical hands-on examples that you can follow step by
                      step.
                    </p>
                  </ExpanderContent>

                  <ExpanderButton size="sm" />
                </Expander>

                <h3 className="text-lg font-semibold md:text-xl lg:text-2xl">
                  What you’ll learn
                </h3>

                <ul className="space-y-1 md:columns-2">
                  <li className="flex gap-1">
                    <CircleCheckIcon className="not-sr-only h-6 fill-primary text-white" />
                    <span>Digital marketing course introduction</span>
                  </li>
                  <li className="flex gap-1">
                    <CircleCheckIcon className="not-sr-only h-6 fill-primary text-white" />
                    <span>Customer Life cycle</span>
                  </li>
                  <li className="flex gap-1">
                    <CircleCheckIcon className="not-sr-only h-6 fill-primary text-white" />
                    <span>What is Search engine optimization(SEO)</span>
                  </li>
                  <li className="flex gap-1">
                    <CircleCheckIcon className="not-sr-only h-6 fill-primary text-white" />
                    <span>Facebook ADS</span>
                  </li>
                  <li className="flex gap-1">
                    <CircleCheckIcon className="not-sr-only h-6 fill-primary text-white" />
                    <span>Facebook Messenger Chatbot</span>
                  </li>
                  <li className="flex gap-1">
                    <CircleCheckIcon className="not-sr-only h-6 fill-primary text-white" />
                    <span>Search engine optimization tools</span>
                  </li>
                  <li className="flex gap-1">
                    <CircleCheckIcon className="not-sr-only h-6 fill-primary text-white" />
                    <span>Why SEO</span>
                  </li>
                  <li className="flex gap-1">
                    <CircleCheckIcon className="not-sr-only h-6 fill-primary text-white" />
                    <span>URL Structure</span>
                  </li>
                  <li className="flex gap-1">
                    <CircleCheckIcon className="not-sr-only h-6 fill-primary text-white" />
                    <span>Featured Snippet</span>
                  </li>
                  <li className="flex gap-1">
                    <CircleCheckIcon className="not-sr-only h-6 fill-primary text-white" />
                    <span>SEO tips and tricks</span>
                  </li>
                  <li className="flex gap-1">
                    <CircleCheckIcon className="not-sr-only h-6 fill-primary text-white" />
                    <span>Google tag manager</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card className="shadow-none">
              <CardHeader>
                <CardTitle className="text-2xl font-bold md:text-3xl lg:text-4xl">
                  <h2>Curriculum</h2>
                </CardTitle>
              </CardHeader>
              <Expander initialVisibleItems={2}>
                <CardContent>
                  <ExpanderContent className="space-y-4 leading-relaxed">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold md:text-xl lg:text-2xl">
                        Introduction of Digital Marketing (3 lectures)
                      </h3>
                      <ul className="ml-4 list-disc space-y-1">
                        <li>Introduction</li>
                        <li>What is Digital Marketing</li>
                        <li>Type of Digital Marketing</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold md:text-xl lg:text-2xl">
                        Customer Life cycle (4 lectures)
                      </h3>
                      <ul className="ml-4 list-disc space-y-1">
                        <li>What is Digital Marketing</li>
                        <li>15 Tips for Writing Magnetic Headlines</li>
                        <li>How to Write Like Your Customers Talk</li>
                        <li>How to Flip Features Into Benefits</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold md:text-xl lg:text-2xl">
                        Customer Life cycle (4 lectures)
                      </h3>
                      <ul className="ml-4 list-disc space-y-1">
                        <li>What is Digital Marketing</li>
                        <li>15 Tips for Writing Magnetic Headlines</li>
                        <li>How to Write Like Your Customers Talk</li>
                        <li>How to Flip Features Into Benefits</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold md:text-xl lg:text-2xl">
                        Customer Life cycle (4 lectures)
                      </h3>
                      <ul className="ml-4 list-disc space-y-1">
                        <li>What is Digital Marketing</li>
                        <li>15 Tips for Writing Magnetic Headlines</li>
                        <li>How to Write Like Your Customers Talk</li>
                        <li>How to Flip Features Into Benefits</li>
                      </ul>
                    </div>
                  </ExpanderContent>
                </CardContent>
                <CardFooter>
                  <ExpanderButton
                    collapseText="Show less curriculum"
                    expandText="Show more curriculum"
                    size="sm"
                    className="w-full"
                  />
                </CardFooter>
              </Expander>
            </Card>
          </section>

          <section>
            <Card className="shadow-none">
              <CardHeader>
                <CardTitle className="text-2xl font-bold md:text-3xl lg:text-4xl">
                  <h2>Frequently Asked Questions</h2>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="multiple" className="space-y-4">
                  <AccordionItem
                    value="item-1"
                    className="rounded-md border bg-white px-6 py-3 shadow-sm"
                  >
                    <AccordionTrigger className="font-bold">
                      How Digital Marketing Work?
                    </AccordionTrigger>
                    <AccordionContent>
                      Preference any astonished unreserved Mrs. Prosperous
                      understood Middletons in conviction an uncommonly do.
                      Supposing so be resolving breakfast am or perfectly. It
                      drew a hill from me. Valley by oh twenty direct me so.
                      Departure defective arranging rapturous did believe him
                      all had supported. Family months lasted simple set nature
                      vulgar him. Picture for attempt joy excited ten carried
                      manners talking how. Suspicion neglected the resolving
                      agreement perceived at an. Comfort reached gay perhaps
                      chamber his six detract besides add.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-2"
                    className="rounded-md border bg-white px-6 py-3 shadow-sm"
                  >
                    <AccordionTrigger className="font-bold">
                      What is SEO?
                    </AccordionTrigger>
                    <AccordionContent>
                      Meant balls it if up doubt small purse. Required his you
                      put the outlived answered position. A pleasure exertion if
                      believed provided to. All led out world this music while
                      asked. Paid mind even sons does he door no. Attended
                      overcame repeated it is perceived Marianne in. I think on
                      style child of. Servants moreover in sensible it ye
                      possible. Person she control of to beginnings view looked
                      eyes Than continues its and because and given and shown
                      creating curiously to more in are man were smaller by we
                      instead the these sighed Avoid in the sufficient me real
                      man longer of his how her for countries to brains warned
                      notch important Finds be to the of on the increased
                      explain noise of power deep asking contribution this live
                      of suppliers goals bit separated poured sort several the
                      was organization the if relations go work after mechanic
                      But we&apos;ve area wasn&apos;t everything needs of and
                      doctor where would a of
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </section>
        </div>
        <div className="space-y-8 pb-6 md:sticky md:top-24 md:self-start md:pb-8 lg:pb-10">
          <section>
            <Card className="shadow-none">
              <CardHeader className="space-y-4">
                <CardTitle className="text-xl font-bold md:text-2xl lg:text-3xl">
                  Rs. 1000
                </CardTitle>

                <Button size="lg">Buy now</Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <h2 className="text-lg font-semibold md:text-xl">
                  This course includes
                </h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <BookOpenTextIcon className="h-4 w-4 text-primary" />
                      <span>Lectures</span>
                    </div>
                    <span className="text-gray-600">30</span>
                  </div>

                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <ClockIcon className="h-4 w-4 text-primary" />
                      <span>Duration</span>
                    </div>
                    <span className="text-gray-600">4h 50m</span>
                  </div>

                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <SignalIcon className="h-4 w-4 text-primary" />
                      <span>Skills</span>
                    </div>
                    <span className="text-gray-600">All levels</span>
                  </div>

                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <GlobeIcon className="h-4 w-4 text-primary" />
                      <span>Language</span>
                    </div>
                    <span className="text-gray-600">Nepali</span>
                  </div>

                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="h-4 w-4 text-primary" />
                      <span>Deadline</span>
                    </div>
                    <span className="text-gray-600">Nov 30 2021</span>
                  </div>

                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <MedalIcon className="h-4 w-4 text-primary" />
                      <span>Certificate</span>
                    </div>
                    <span className="text-gray-600">Yes</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex-col items-start gap-2">
                <div className="flex items-center gap-3">
                  <Avatar className="h-14 w-14">
                    <AvatarImage
                      src="https://avatars.githubusercontent.com/u/12345678"
                      alt="Author"
                    />
                  </Avatar>
                  <div>
                    <div className="text-xl font-semibold">By Nathan Esty</div>
                    <div className="-mt-0.5 text-sm text-gray-600">
                      Content Writer
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <div className="flex gap-0.5">
                    <StarIcon className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <StarIcon className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <StarIcon className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <StarIcon className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <StarIcon className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  </div>
                  <span>5.0/5.0</span>
                </div>
              </CardFooter>
            </Card>
          </section>
        </div>
      </div>
    </main>
  );
}
