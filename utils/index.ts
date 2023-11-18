import { MongoClient } from "mongodb";

const calculateBMILevel = (bmi: number) => {
  if (bmi < 16) {
    return "Severe Thinnes";
  }
  if (bmi >= 16 && bmi < 17) {
    return "Moderate Thinnes";
  }
  if (bmi >= 17 && bmi < 18.5) {
    return "Mild Thinnes";
  }
  if (bmi >= 18.5 && bmi < 25) {
    return "Normal";
  }
  if (bmi >= 25 && bmi < 30) {
    return "Overweight";
  }
  if (bmi >= 30 && bmi < 35) {
    return "Obese Class I";
  }
  if (bmi >= 35 && bmi < 40) {
    return "Obese Class II";
  }
  if (bmi >= 40) {
    return "Obese Class III";
  }
};

export const calculateBMI = (height: number, weight: number) => {
  const heightInMeters = height / 100;
  const bmi = Number((weight / (heightInMeters * heightInMeters)).toFixed(2));
  const bmiLevel = calculateBMILevel(bmi);

  return {
    bmi,
    bmiLevel,
  };
};

export const calculateBMR = (
  gender: string,
  weight: number,
  height: number,
  age: number
) => {
  let bmr;
  if (gender === "man") {
    bmr = 66 + 13.7 * weight + 5 * height - 6.76 * age;
  }
  if (gender === "woman") {
    bmr = 665 + 9.6 * weight + 1.8 * height - 4.7 * age;
  }
  return bmr;
};

export const calculateCPM = (bmr: number, activityValue: string) => {
  let value = 0;
  if (activityValue === "0") {
    value = 1.2;
  }
  if (activityValue === "1") {
    value = 1.35;
  }
  if (activityValue === "2") {
    value = 1.55;
  }
  if (activityValue === "3") {
    value = 1.75;
  }
  if (activityValue === "4") {
    value = 2.05;
  }
  return Math.floor(bmr * value);
};

export const getAllPosts = async () => {
  const res = await fetch(`${process.env.pageUrl}/api/allposts`, {
    next: {
      revalidate: 1,
    },
  });

  if (!res.ok) {
    throw new Error("Fetching posts failed!");
  }

  const posts = await res.json();
  return posts;
};

export const getPost = async (slug: string) => {
  const res = await fetch(`${process.env.pageUrl}/api/post/${slug}`, {
    next: {
      revalidate: 1,
    },
  });

  if (!res.ok) {
    throw new Error("Fetching posts failed!");
  }

  const { postData } = await res.json();
  return postData;
};

export const updateFormParams = (
  queryParams: any,
  data: any,
  level: string
) => {
  if (queryParams.has("level")) {
    queryParams.set("level", level);
  } else {
    queryParams.append("level", level);
  }
  if (queryParams.has("name")) {
    queryParams.set("name", data.name);
  } else {
    queryParams.append("name", data.name);
  }
  if (queryParams.has("lastname")) {
    queryParams.set("lastname", data.lastname);
  } else {
    queryParams.append("lastname", data.lastname);
  }
  if (queryParams.has("age")) {
    queryParams.set("age", data.age);
  } else {
    queryParams.append("age", data.age);
  }
  if (queryParams.has("email")) {
    queryParams.set("email", data.email);
  } else {
    queryParams.append("email", data.email);
  }
  if (queryParams.has("activity")) {
    queryParams.set("activity", data.activity);
  } else {
    queryParams.append("activity", data.activity);
  }
  return queryParams;
};

export const checkFormParams = (
  queryParams: any,
  setFormData: (data: any) => {}
) => {
  if (queryParams.has("name")) {
    setFormData((prev: any) => ({
      ...prev,
      name: queryParams.get("name"),
    }));
  }
  if (queryParams.has("lastname")) {
    setFormData((prev: any) => ({
      ...prev,
      lastname: queryParams.get("lastname"),
    }));
  }
  if (queryParams.has("age")) {
    setFormData((prev: any) => ({
      ...prev,
      age: queryParams.get("age"),
    }));
  }
  if (queryParams.has("email")) {
    setFormData((prev: any) => ({
      ...prev,
      email: queryParams.get("email"),
    }));
  }
  if (queryParams.has("activity")) {
    setFormData((prev: any) => ({
      ...prev,
      activity: queryParams.get("activity"),
    }));
  }
};
