import {
  BlogSection,
  CalculatorsSection,
  Hero,
  WorkoutPlans,
} from "@/components";

export default function Home() {
  return (
    <>
      <Hero />
      <WorkoutPlans />
      <BlogSection />
      <CalculatorsSection />
    </>
  );
}
