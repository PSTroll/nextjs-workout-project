"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import PlanForm from "@/components/Plans/PlanForm";

const Page = () => {
  const params = useSearchParams();
  const level = params.get("level");

  return (
    <main className="w-full overflow-x-hidden bg-dirty-white flex justify-center">
      <div className="bg-white m-5 rounded-2xl md:my-24 shadow-lg md:mx-24 w-full lg:w-[600px] py-5 px-10">
        <PlanForm level={level?.toString()} />
      </div>
    </main>
  );
};

export default Page;
