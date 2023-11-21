import { PlanSuccess } from "@/components";
import React from "react";

const Page = ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  return (
    <main className="w-full h-[620px] overflow-x-hidden pt-24 bg-dirty-white px-10 lg:px-48">
      <PlanSuccess urlParams={searchParams} />
    </main>
  );
};

export default Page;
