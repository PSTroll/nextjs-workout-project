import { headers } from "next/headers";

export const getAllPosts = async () => {
  const headersList = headers();
  const res = await fetch(`${headersList.get("host")}/api/allposts`, {
    next: {
      revalidate: 1,
    },
    method: "GET",
  });

  if (!res.ok) {
    throw new Error("Fetching posts failed!");
  }

  const posts = await res.json();
  return posts;
};

export const getPost = async (slug: string) => {
  const headersList = await headers();
  const res = await fetch(`${headersList.get("host")}/api/post/${slug}`, {
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
