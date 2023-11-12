"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";

import { calculateBMI } from "@/utils";

const BMICalculator = () => {
  const [bmiValue, setBmiValue] = useState<number | undefined>();
  const [bmiLevel, setBmiLevel] = useState<string | undefined>();
  const [error, setError] = useState("");

  const heightRef = useRef<HTMLInputElement>(null);
  const weightRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!heightRef.current || !weightRef.current) {
      setError("Please enter your data!");
      return;
    }

    if (
      heightRef.current.value.length < 1 ||
      weightRef.current.value.length < 1
    ) {
      setError("Please enter your data!");
      return;
    }

    if (heightRef.current && weightRef.current) {
      setError("");
      const height = Number(heightRef.current.value);
      const weight = Number(weightRef.current.value);

      if (height && weight) {
        setBmiValue(calculateBMI(height, weight).bmi);
        setBmiLevel(calculateBMI(height, weight).bmiLevel);
      }
    }
  };

  return (
    <div className="bg-white p-5 m-5 my-16 rounded-lg shadow-md lg:min-w-[1144px]">
      <h2 className="text-center font-bold text-xl">
        BMI Calculator For Adults
      </h2>
      <p>
        The Body Mass Index (BMI) Calculator can be used to calculate BMI value
        and corresponding weight status while taking age into consideration.
      </p>
      <form
        className="my-2 flex flex-col sm:items-center"
        onSubmit={onSubmitHandler}
      >
        <div className="flex flex-col my-5">
          <label htmlFor="height" className="font-bold ml-1">
            Height: (cm)
          </label>
          <input
            type="number"
            id="height"
            className="bg-dirty-white p-1 rounded-md outline-0 w-64"
            placeholder="Enter your height"
            ref={heightRef}
          />
        </div>
        <div className="flex flex-col my-5">
          <label htmlFor="weight" className="font-bold ml-1">
            Weight: (kg)
          </label>
          <input
            type="number"
            id="weight"
            className="bg-dirty-white p-1 rounded-md outline-0 w-64"
            placeholder="Enter your weight"
            ref={weightRef}
          />
        </div>
        <div>
          <button className="flex p-2 items-center border-accent border-solid border-2 rounded-md outline-0 hover:scale-105 transition-all duration-200">
            Calculate
            <Image
              src="/images/left-arrow-black.svg"
              alt="left arrow"
              width={20}
              height={20}
              className="mx-1"
            />
          </button>
        </div>
      </form>
      <div className="my-5">
        <div className="text-lg text-center">
          {error && <p className="text-red-600 font-bold">{error}</p>}
          {!error && bmiValue && (
            <div>
              <p>
                Your BMI:
                <span className="font-bold text-accent">
                  {" "}
                  {bmiValue} - {bmiLevel}
                </span>
              </p>
              <div className="flex justify-center my-5">
                <table>
                  <tr className="bg-secondary">
                    <th>Classification</th>
                    <th>BMI range</th>
                  </tr>
                  <tr>
                    <td>Severe Thinness</td>
                    <td>{"< 16"}</td>
                  </tr>
                  <tr>
                    <td>Moderate Thinness</td>
                    <td>16 - 17</td>
                  </tr>
                  <tr>
                    <td>Mild Thinness</td>
                    <td>17 - 18.5</td>
                  </tr>
                  <tr>
                    <td>Normal</td>
                    <td>18.5 - 25</td>
                  </tr>
                  <tr>
                    <td>Normal</td>
                    <td>25 - 30</td>
                  </tr>
                  <tr>
                    <td>Obese Class I</td>
                    <td>30 - 35</td>
                  </tr>
                  <tr>
                    <td>Obese Class II</td>
                    <td>35 - 40</td>
                  </tr>
                  <tr>
                    <td>Obese Class III</td>
                    <td>{"> 40"}</td>
                  </tr>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;
