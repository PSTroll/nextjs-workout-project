import { NextResponse } from "next/server";
import { NextApiRequest } from "next";
import { getPostData } from "../../allposts/route";

export async function GET(req: NextApiRequest) {
  const url = req.url;
  if (url) {
    const num = url?.lastIndexOf("/") + 1;
    const slug = url?.substring(num);
    const postData = getPostData(slug + ".md");
    return NextResponse.json({ postData });
  }
}
