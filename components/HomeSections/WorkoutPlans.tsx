import React from "react";
import Link from "next/link";

import { Header, PlanElement } from "..";

const WorkoutPlans = () => {
  return (
    <section className="w-full flex flex-col overflow-x-hidden">
      <Header title="Our Workouts Plans" />
      <div className="flex max-lg:flex-wrap">
        <div className="bg-gradient-to-br from-cranberry-light via-cranberry-medium to-cranberry w-full py-60 flex justify-center items-center flex-col">
          <div className="text-center group">
            <Link
              href="/plans"
              className="flex flex-col items-center px-20"
              scroll={true}
            >
              <PlanElement
                planName="basic"
                className="group-hover:-translate-y-10 transition-all duration-300 ease-in-out"
              />
              <p className="mt-5 text-white text-2xl font-bold cursor-pointer group-hover:-translate-y-10 transition-all duration-300 ease-in-out">
                Basic Plan
              </p>
              <span className="text-white text-sm italic cursor-pointer group-hover:-translate-y-10 transition-all duration-300 ease-in-out">
                Plan for every single muscle, contact with our consultants 24/7
              </span>
            </Link>
          </div>
        </div>
        <div className="bg-gradient-to-br from-spruce-light via-spruce-medium to-spruce w-full py-60 flex justify-center items-center flex-col">
          <div className="text-center group flex flex-col items-center px-20">
            <Link
              href="/plans"
              className="flex flex-col items-center px-20"
              scroll={true}
            >
              <PlanElement
                planName="premium"
                className="group-hover:-translate-y-10 transition-all duration-300 ease-in-out"
              />
              <p className="mt-5 text-white text-2xl font-bold cursor-pointer group-hover:-translate-y-10 transition-all duration-300 ease-in-out">
                Premium Plan
              </p>
              <span className="text-white text-sm italic cursor-pointer group-hover:-translate-y-10 transition-all duration-300 ease-in-out">
                Basic Plan benefits and individual programs if you have some
                disabilites
              </span>
            </Link>
          </div>
        </div>
        <div className="bg-gradient-to-br from-midnight-light via-midnight-medium to-midnight w-full py-60 flex justify-center items-center flex-col">
          <div className="text-center group flex flex-col items-center px-20">
            <Link
              href="/plans"
              className="flex flex-col items-center px-20"
              scroll={true}
            >
              <PlanElement
                planName="extra"
                className="group-hover:-translate-y-10 transition-all duration-300 ease-in-out"
              />
              <p className="mt-5 text-white text-2xl font-bold cursor-pointer group-hover:-translate-y-10 transition-all duration-300 ease-in-out">
                Extra Plan
              </p>
              <span className="text-white text-sm italic cursor-pointer group-hover:-translate-y-10 transition-all duration-300 ease-in-out">
                Basic and Premium Plans benefits, personalized diets and
                workouts at gym with our individual trainer
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutPlans;
