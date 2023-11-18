import React, { memo } from "react";
import Link from "next/link";
import Image from "next/image";

import { getAllPosts } from "../../utils";
import { Post } from "@/types";

const Page = memo(async () => {
  const { allPosts } = await getAllPosts();
  return (
    <main className="w-full overflow-x-hidden flex justify-center items-center bg-dirty-white">
      <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-24 my-20 mx-5">
        {allPosts.map((post: Post, index: number) => (
          <Link
            key={index}
            href={`/blog/${post.slug}`}
            className="bg-white rounded-xl hover:scale-110 duration-500 ease-in-out shadow-lg"
            prefetch
          >
            <div>
              <Image
                src={`${post.data.imagesrc}`}
                width={400}
                height={350}
                alt={`${post.data.title}`}
                className="rounded-tl-xl rounded-tr-xl"
              />
            </div>
            <div className="p-3 py-5">
              <h3 className="font-bold text-lg">{post.data.title}</h3>
              <p>{post.data.snippet}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
});

export default Page;
