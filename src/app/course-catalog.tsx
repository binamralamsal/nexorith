"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ClockIcon, TableIcon } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Frontend Workshop",
    description:
      "Learn the fundamentals of front-end development with HTML, CSS, and JavaScript.",
    image: "/hero.png",
    link: "/courses/intro-to-react",
    time: "12h 56min",
    lectures: 17,
    level: "beginner",
    category: "development",
  },
  {
    id: 2,
    title: "Python Workshop",
    description:
      "Learn the fundamentals of Python programming with variables, data types, and control structures.",
    image: "/hero.png",
    link: "/courses/advanced-javascript",
    time: "10h 30min",
    lectures: 15,
    level: "intermediate",
    category: "development",
  },
  {
    id: 3,
    title: "Graphic Design Workshop",
    description:
      "Master CSS layouts, animations, and responsive design techniques.",
    image: "/hero.png",
    link: "/courses/css-mastery",
    time: "8h 45min",
    lectures: 12,
    level: "beginner",
    category: "designing",
  },
  {
    id: 4,
    title: "UI/UX with Nexorith",
    description:
      "Master CSS layouts, animations, and responsive design techniques.",
    image: "/hero.png",
    link: "/courses/css-mastery",
    time: "9h 20min",
    lectures: 14,
    level: "all level",
    category: "designing",
  },
];

export function CourseCatalog() {
  const [filter, setFilter] = useState("all");

  const categories = [
    "all",
    ...Array.from(new Set(courses.map((course) => course.category))),
  ];

  const filteredCourses =
    filter === "all"
      ? courses
      : courses.filter((course) => course.category === filter);

  return (
    <>
      <div className="mb-6">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className="capitalize"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredCourses.map((course) => (
          <Card key={course.id} className="flex flex-col">
            <CardHeader className="p-0">
              <Link href={course.link}>
                <Image
                  src={course.image}
                  alt={course.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </Link>
            </CardHeader>
            <CardContent className="flex-grow p-4">
              <Badge className="mb-3 capitalize">{course.level}</Badge>
              <CardTitle className="text-xl mb-2 transition-all ease-in hover:text-primary">
                <Link href={course.link}>{course.title}</Link>
              </CardTitle>
              <p className="text-muted-foreground">{course.description}</p>
            </CardContent>
            <hr className="mx-4" />
            <CardFooter className="p-4 flex justify-between">
              <div className="flex gap-1 items-center">
                <ClockIcon className="h-4 w-4 text-primary" />
                <span>{course.time}</span>
              </div>
              <div className="flex gap-1 items-center">
                <TableIcon className="h-4 w-4 text-primary" />
                <span>{course.lectures} lectures</span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
