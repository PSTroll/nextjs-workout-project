import React from "react";
import Image from "next/image";

import { PlanElementProps } from "@/types";

const PlanElement = ({ planName, className }: PlanElementProps) => {
  return (
    <div
      className={`${className} max-lg:w-48 max-lg:h-48 w-36 h-36 rounded-full bg-yellow-400 flex justify-center items-center cursor-pointer`}
    >
      <Image
        src={`/images/${planName}.png`}
        alt="plan poster"
        width={80}
        height={80}
        className={`rounded-xl`}
      />
    </div>
  );
};

export default PlanElement;
