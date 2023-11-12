"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { calculateBMR, calculateCPM } from "@/utils";

const CaloriesDemand = () => {
  const [error, setError] = useState("");
  const [cpm, setCpm] = useState<number>();

  const ageRef = useRef<HTMLInputElement>(null);
  const weightRef = useRef<HTMLInputElement>(null);
  const heightRef = useRef<HTMLInputElement>(null);
  const manRef = useRef<HTMLInputElement>(null);
  const womanRef = useRef<HTMLInputElement>(null);
  const activeRef = useRef<HTMLSelectElement>(null);

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (
      !heightRef.current ||
      heightRef.current.value.length < 1 ||
      !weightRef.current ||
      weightRef.current.value.length < 1 ||
      !ageRef.current ||
      !manRef.current ||
      !womanRef.current ||
      !activeRef.current ||
      (!manRef.current.checked && !womanRef.current.checked)
    ) {
      setError("Please enter your data!");
      return;
    }

    let gender;
    manRef.current.checked ? (gender = "man") : (gender = "woman");

    const bmr = calculateBMR(
      gender,
      +weightRef.current.value,
      +heightRef.current.value,
      +ageRef.current.value
    );
    bmr && setCpm(calculateCPM(bmr, activeRef.current.value));
  };

  return (
    <div className="bg-white p-5 m-5 mt-0 my-16 rounded-lg shadow-md lg:min-w-[1144px]">
      <h2 className="text-center font-bold text-xl">
        Calorie Demand Calculator
      </h2>
      <p>
        The Calorie Demand Calculator can be used to estimate the number of
        calories a person needs to consume each day.
      </p>
      <form
        className="my-2 flex flex-col sm:items-center"
        onSubmit={onSubmitHandler}
      >
        <div>
          <div className="flex flex-col my-5">
            <label htmlFor="age" className="font-bold ml-1">
              Age:
            </label>
            <input
              type="number"
              placeholder="Enter Your Age"
              name="age"
              id="age"
              className="bg-dirty-white p-1 rounded-md outline-0 w-64"
              ref={ageRef}
            />
          </div>
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
          <div className="flex flex-col my-5 items-start ml-1">
            <label className="font-bold">Gender:</label>
            <label htmlFor="man" className="py-1 flex items-center">
              Man
              <input
                type="radio"
                name="gender"
                id="man"
                value="man"
                ref={manRef}
                className="ml-1"
              />
            </label>
            <label htmlFor="woman" className="py-1 flex items-center">
              Woman
              <input
                type="radio"
                name="gender"
                id="woman"
                value="woman"
                ref={womanRef}
                className="ml-1"
              />
            </label>
          </div>
          <div className="flex flex-col justify-center my-8">
            <label htmlFor="activity" className="font-bold ml-1">
              Choose your activity:
            </label>
            <select
              name="activity"
              id="activity"
              className="rounded-lg border-[1px] border-solid border-accent p-2"
              ref={activeRef}
              required
            >
              <option value="0">
                Sedentary (sitting work, little or no exercise)
              </option>
              <option value="1">
                Light (sitting work, exercise 1 - 2 times/week)
              </option>
              <option value="2">
                Moderate (sitting work, exercise 3 - 4 times/week)
              </option>
              <option value="3">
                Active (active work, exercise 3 - 4 times/week)
              </option>
              <option value="4">Very active (sportsman, daily exercise)</option>
            </select>
          </div>
          <div className="flex justify-center">
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
        </div>
      </form>
      <div className="my-5">
        <div className="text-lg text-center">
          {error && <p className="text-red-600 font-bold">{error}</p>}
          {!error && cpm && (
            <p>
              Your calories demand:
              <span className="font-bold text-accent"> {cpm} kcal per day</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaloriesDemand;
