import React from "react";

import { Header, SemiTransparentCard } from "..";

const calculatorsInformations = (
  <div>
    <b>BMI (Body Mass Index) Calculator:</b> Our BMI calculator is designed to
    help you quickly and easily assess your body mass index. Simply enter your
    height and weight, and our calculator will provide you with your BMI score
    and its corresponding classification, whether you're underweight, normal
    weight, overweight, or obese. This can serve as a valuable initial gauge of
    your overall health.
    <br />
    <br />
    <b>Daily Calorie Intake Calculator:</b> Planning your daily caloric intake
    is crucial for achieving your fitness and nutrition goals. Our daily calorie
    intake calculator takes into account various factors like age, gender,
    weight, height, activity level, and weight goals to estimate the number of
    calories you should consume each day. This tool can be a handy resource for
    maintaining or adjusting your diet to align with your specific objectives.
  </div>
);

const CalculatorsSection = () => {
  return (
    <section className="w-full overflow-hidden">
      <Header title="Our Calculators" />
      <div className="w-full h-full bg-gradient-to-tr from-gradient-starting-purple to-gradient-ending-pink">
        <div className="p-5 py-10 lg:py-24 lg:px-16 xl:mx-72">
          <SemiTransparentCard
            title="Calorie & BMI Calculators"
            content={calculatorsInformations}
            link="calculators"
            imageSrc="left-arrow"
            linkContent="Let's explore our calculator page"
          />
        </div>
      </div>
    </section>
  );
};

export default CalculatorsSection;
