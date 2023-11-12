import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SemiTransparentCardProps } from "@/types";

const SemiTransparentCard = ({
  content,
  link,
  linkContent,
  imageSrc,
  title,
}: SemiTransparentCardProps) => {
  return (
    <div className="lg:py-10 lg:px-24 p-5 w-full h-full bg-white rounded-lg bg-opacity-30 backdrop-blur">
      {title && (
        <div className="font-bold text-2xl text-center pb-5">{title}</div>
      )}
      <div className="text-black text-lg leading-8">{content}</div>
      {link && (
        <div className="w-full pt-5 text-accent font-bold flex justify-center">
          <Link
            href={`/${link}`}
            className="hover:-translate-y-1 transition-all ease-in-out flex"
          >
            {linkContent}
            <Image
              src={`/images/${imageSrc}.svg`}
              alt="left arrow"
              width={25}
              height={25}
              className="ml-2 text-accent"
            />
          </Link>
        </div>
      )}
    </div>
  );
};

export default SemiTransparentCard;
