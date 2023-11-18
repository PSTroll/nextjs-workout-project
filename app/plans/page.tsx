import PlanCard from "@/components/Plans/PlanCard";
import React, { memo } from "react";

const Page = memo(() => {
  return (
    <main className="w-full overflow-x-hidden grid lg:grid-cols-3 lg:py-24 py-16 bg-dirty-white px-16">
      <PlanCard level="basic" />
      <PlanCard level="premium" />
      <PlanCard level="extra" />
    </main>
  );
});

export default Page;
