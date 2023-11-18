"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signal } from "@preact/signals-core";
import { useSearchParams } from "next/navigation";
import { memo } from "react";

import { checkFormParams, updateFormParams } from "@/utils";

export const formInformation = signal({
  name: "",
  lastname: "",
  age: "",
  email: "",
  activity: "",
});

type formType = {
  name: string;
  lastname: string;
  age: string;
  email: string;
  activity: string;
};

const PlanForm = memo((props: { level: string | any }) => {
  const [windowLoc, setWindowLoc] = useState("");
  const [formData, setFormData] = useState<formType>({
    name: "",
    lastname: "",
    age: "",
    email: "",
    activity: "0",
  });

  const searchParams = useSearchParams();

  useEffect(() => {
    setWindowLoc(window.location.search);
    if (searchParams.has("name")) {
      setFormData({
        name: searchParams.get("name") || "",
        lastname: searchParams.get("lastname") || "",
        age: searchParams.get("age") || "",
        email: searchParams.get("email") || "",
        activity: searchParams.get("activity") || "",
      });
    }
  }, []);

  const router = useRouter();
  let queryParams = new URLSearchParams(windowLoc);

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    queryParams = updateFormParams(queryParams, formData, props.level);
    formInformation.value = formData;
    router.replace(`${window.location.pathname}?${queryParams.toString()}`, {
      scroll: false,
    });

    const res = await fetch(`${process.env.pageUrl}/api/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        level: props.level,
        name: formData.name,
        lastname: formData.lastname,
        mail: formData.email,
        age: formData.age,
        activity: formData.activity,
      }),
    });

    await res.json();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="flex flex-col py-3">
        <label htmlFor="name" className="font-bold">
          Name:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          className="border-solid border-dirty-white border-[2px] rounded-md sm:w-64 p-2"
          onChange={(e) =>
            setFormData((prevState) => ({
              ...prevState,
              name: e.target.value,
            }))
          }
          value={formData.name}
          required
        />
      </div>
      <div className="flex flex-col py-3">
        <label htmlFor="lastname" className="font-bold">
          Lastname:
        </label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="Enter your lastname"
          className="border-solid border-dirty-white border-[2px] rounded-md sm:w-64 p-2"
          value={formData.lastname}
          onChange={(e) =>
            setFormData((prevState) => ({
              ...prevState,
              lastname: e.target.value,
            }))
          }
          required
        />
      </div>
      <div className="flex flex-col py-3">
        <label htmlFor="age" className="font-bold">
          Age:
        </label>
        <input
          type="number"
          name="age"
          id="age"
          placeholder="Enter your age"
          className="border-solid border-dirty-white border-[2px] rounded-md sm:w-64 p-2"
          value={formData.age}
          onChange={(e) =>
            setFormData((prevState) => ({
              ...prevState,
              age: e.target.value,
            }))
          }
          required
        />
      </div>
      <div className="flex flex-col py-3">
        <label htmlFor="email" className="font-bold">
          E-mail:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your e-mail"
          className="border-solid border-dirty-white border-[2px] rounded-md sm:w-64 p-2"
          value={formData.email}
          onChange={(e) =>
            setFormData((prevState) => ({
              ...prevState,
              email: e.target.value,
            }))
          }
          required
        />
      </div>
      <div className="flex flex-col py-3">
        <label htmlFor="activity" className="font-bold">
          Activity level:
        </label>
        <select
          name="activity"
          id="activity"
          className="border-solid border-dirty-white border-[2px] rounded-md p-2"
          value={formData.activity}
          onChange={(e) =>
            setFormData((prevState) => ({
              ...prevState,
              activity: e.target.value,
            }))
          }
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
      <div className="flex flex-col py-3">
        <button className="bg-purple-500 text-white text-lg font-bold p-2 rounded-md hover:scale-105 hover:bg-purple-600 duration-500">
          Order
        </button>
      </div>
    </form>
  );
});

export default PlanForm;
