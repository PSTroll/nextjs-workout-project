import React from "react";
import Link from "next/link";

import { PlanElement } from ".";

const WorkoutPlans = () => {
  return (
    <section className="w-full">
      <div className="text-center p-5">
        <p className="text-5xl font-bold italic">Our Workouts Plans</p>
      </div>
      <div className="flex max-lg:flex-wrap">
        <div className="bg-gradient-to-br from-rose-600 via-red-500 to-red-700 w-full py-60 flex justify-center items-center flex-col">
          <div className="text-center group">
            <Link
              href="/blog"
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
        <div className="bg-gradient-to-br from-green-400 via-lime-500 to-emerald-600 w-full py-60 flex justify-center items-center flex-col">
          <div className="text-center group flex flex-col items-center px-20">
            <Link
              href="/blog"
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
        <div className="bg-gradient-to-br from-cyan-400 via-sky-400 to-blue-700 w-full py-60 flex justify-center items-center flex-col">
          <div className="text-center group flex flex-col items-center px-20">
            <Link
              href="/blog"
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
