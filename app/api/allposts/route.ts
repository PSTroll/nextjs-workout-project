import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { NextResponse } from "next/server";

export const postsDirectory = path.join(process.cwd(), "posts");

export const getPostsFiles = () => {
  return fs.readdirSync(postsDirectory);
};

export const getPostData = (postIdentifier: string) => {
  const postSlug = postIdentifier.replace(/\.md$/, "");
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    data,
    content,
  };

  return postData;
};

const getAllPosts = async () => {
  const postFiles = getPostsFiles();
  const allPosts = postFiles.map((post) => {
    return getPostData(post);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.data.date > postB.data.date ? -1 : 1
  );
  return sortedPosts;
};

export async function GET() {
  const allPosts = await getAllPosts();
  return NextResponse.json({ allPosts });
}
