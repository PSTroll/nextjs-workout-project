import React from "react";

const Hero = () => {
  return (
    <main className="w-full bg-hero-image bg-cover flex h-[calc(100vh-4.25rem)]">
      <div className="min-w-full flex justify-center items-center">
        <h1 className="text-white max-lg:text-6xl text-extra-large text-center flex-col xl:flex-row opacity-100 font-bold max-lg:px-5 relative">
          Workouts, articles & calculators
        </h1>
      </div>
    </main>
  );
};

export default Hero;
