import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";

import { getPost } from "@/utils";
import rehypeRaw from "rehype-raw";

const Page = async ({ params }: { params: { slug: string } }) => {
  const postData = await getPost(params.slug);

  return (
    <main className="w-full flex justify-center bg-dirty-white">
      <div className="bg-white sm:m-5 sm:rounded-2xl md:my-24 shadow-lg md:mx-24 w-full lg:w-[800px]">
        <Image
          src={`${postData.data.imagesrc}`}
          width={800}
          height={500}
          alt={`${postData.data.title}`}
          className="sm:rounded-t-2xl w-full"
        />
        <Markdown
          className="markdown p-10"
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
        >
          {postData.content}
        </Markdown>
      </div>
    </main>
  );
};

export default Page;
