import { orderType } from "@/types";

export const getAllPosts = async () => {
  const res = await fetch(process.env.PAGE_URL + "/api/allposts", {
    next: {
      revalidate: 1,
    },
    method: "GET",
  });

  if (!res.ok) {
    throw new Error("Fetching failed!");
  }

  const posts = await res.json();
  return posts;
};

export const getPost = async (slug: string) => {
  const res = await fetch(process.env.PAGE_URL + `/api/post/${slug}`, {
    next: {
      revalidate: 1,
    },
    method: "GET",
  });

  if (!res.ok) {
    throw new Error("Fetching posts failed!");
  }

  const { postData } = await res.json();
  return postData;
};

export const sendOrderToDatabase = async (formData: orderType) => {
  const res = await fetch(process.env.PAGE_URL + "/api/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      level: formData.level,
      name: formData.name,
      lastname: formData.lastname,
      mail: formData.email,
      age: formData.age,
      activity: formData.activity,
    }),
  });

  await res.json();
};
