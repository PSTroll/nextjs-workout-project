import { NextResponse, NextRequest } from "next/server";
import path from "path";
import fs from "fs";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

const getPostData = (postIdentifier: string) => {
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

export async function GET(req: NextRequest) {
  const url = req.url;
  if (url) {
    const num = url?.lastIndexOf("/") + 1;
    const slug = url?.substring(num);
    const postData = getPostData(slug + ".md");
    return NextResponse.json({ postData });
  }
  return NextResponse.json({ message: "Something gone wrong" });
}
