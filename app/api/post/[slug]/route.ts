import { NextResponse, NextRequest } from "next/server";
import { getPostData } from "../../allposts/route";

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
