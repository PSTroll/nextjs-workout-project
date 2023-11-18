"use client";

import React, { useState, useEffect, memo } from "react";
import Image from "next/image";
import Link from "next/link";

import { PlanCardProps } from "@/types";

const PlanCard = memo(({ level }: PlanCardProps) => {
  const [bgColor, setBgColor] = useState("");
  const levelName = level.replace(level[0], level[0].toUpperCase());
  let levelDesc;

  if (level === "basic") {
    levelDesc = (
      <span className="text-white text-sm italic cursor-pointer group-hover:-translate-y-10 transition-all duration-300 ease-in-out">
        Plan for every single muscle, contact with our consultants 24/7
      </span>
    );
  }

  if (level === "premium") {
    levelDesc = (
      <span className="text-white text-sm italic cursor-pointer group-hover:-translate-y-10 transition-all duration-300 ease-in-out">
        Basic Plan benefits and individual programs if you have some disabilites
      </span>
    );
  }

  if (level === "extra") {
    levelDesc = (
      <span className="text-white text-sm italic cursor-pointer group-hover:-translate-y-10 transition-all duration-300 ease-in-out">
        Basic and Premium Plans benefits, personalized diets and workouts at gym
        with our individual trainer
      </span>
    );
  }

  useEffect(() => {
    level === "basic" &&
      setBgColor(
        "bg-gradient-to-br from-cranberry-light via-cranberry-medium to-cranberry"
      );
    level === "premium" &&
      setBgColor(
        "bg-gradient-to-br from-spruce-light via-spruce-medium to-spruce"
      );
    level === "extra" &&
      setBgColor(
        "bg-gradient-to-br from-midnight-light via-midnight-medium to-midnight"
      );
  }, [bgColor]);

  return (
    <Link href={`/plans/order?level=${level}`}>
      <div
        className={`${bgColor} rounded-md p-5 m-3 sm:m-10 flex flex-col justify-center items-center cursor-pointer hover:-translate-y-10 transition-all duration-300 ease-in-out h-[360px]`}
      >
        <div
          className={`max-lg:w-36 max-lg:h-36 w-24 h-24 rounded-full bg-yellow-400 flex justify-center items-center cursor-pointer`}
        >
          <Image
            src={`/images/${level}.png`}
            alt="plan poster"
            width={60}
            height={60}
            className={`rounded-xl`}
          />
        </div>
        <h3 className="pt-5 text-white font-bold text-2xl">{levelName}</h3>
        <p className="text-center">{levelDesc}</p>
        <p className="mt-5 text-dirty-white font-semibold text-xl">
          Click this card to order!
        </p>
      </div>
    </Link>
  );
});

export default PlanCard;
