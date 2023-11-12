import React from "react";

import { BMICalculator, CaloriesDemand } from "@/components";

const Calculators = () => {
  return (
    <main className="w-full overflow-x-hidden bg-dirty-white flex flex-col items-center justify-around">
      <BMICalculator />
      <CaloriesDemand />
    </main>
  );
};
export default Calculators;
