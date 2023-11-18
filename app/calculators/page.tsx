import React from "react";

import { BMICalculator, CaloriesDemand } from "@/components";

const Calculators = () => {
  return (
    <main className="w-full overflow-x-hidden  bg-gradient-to-tr from-gradient-starting-purple to-gradient-ending-pink flex flex-col items-center justify-around">
      <BMICalculator />
      <CaloriesDemand />
    </main>
  );
};
export default Calculators;
