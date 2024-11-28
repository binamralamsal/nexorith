import { z } from "zod";

import { Category, Level, courseCategories, courseLevels } from "@/courses";
import { SearchParams } from "@/types";

import { CourseCards } from "../course-catalog";
import { CategorySelectionCard } from "./category-selection-card";
import { SkilLevelSelectionCard } from "./skill-level-selection-card";

export default async function CoursePage({
  searchParams: rawSearchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const searchParams = searchParamsSchema.parse(await rawSearchParams);

  return (
    <main className="container grid gap-4 py-4 md:grid-cols-2 md:py-6 lg:grid-cols-[3fr,1fr] lg:py-8">
      <CourseCards
        categories={searchParams.category}
        levels={searchParams.skill}
        className="grid-cols-1 md:grid-cols-1 lg:grid-cols-3"
      />
      <div className="space-y-4">
        <CategorySelectionCard />
        <SkilLevelSelectionCard />
      </div>
    </main>
  );
}

const searchParamsSchema = z.object({
  category: z
    .string()
    .transform((value) => {
      if (!value) return [];

      return value
        .split(".")
        .map((v) => v.toLowerCase())
        .filter((value) =>
          courseCategories.includes(value as (typeof courseCategories)[number]),
        ) as Category[];
    })
    .catch([]),
  skill: z
    .string()
    .transform((value) => {
      if (!value) return [];

      return value
        .split(".")
        .map((v) => v.toLowerCase())
        .filter((value) =>
          courseLevels.includes(value as (typeof courseLevels)[number]),
        ) as Level[];
    })
    .catch([]),
});
