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
  const res = await fetch(`${process.env.PAGE_URL}/api/post/${slug}`, {
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
