"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import { paths } from "@/constants";

const MainNavigation = () => {
  const currentPath = usePathname();

  const [isClosed, setIsClosed] = useState("menu");
  const [styles, setStyles] = useState(``);

  const expandMenu = () => {
    isClosed === "menu"
      ? (setIsClosed("close"),
        setStyles(`top-[70px] opacity-100 flex flex-col`))
      : (setIsClosed("menu"), setStyles(``));
  };

  const expandMenuOnLink = () => {
    setIsClosed("close");
  };

  return (
    <header className="text-black font-bold text-xl flex shadow-md">
      <span className="text-3xl cursor-pointer md:hidden block mx-2 flex items-center p-6">
        <Image
          alt="menu"
          onClick={expandMenu}
          src={`/images/${isClosed}-icon.svg`}
          width={30}
          height={30}
        />
      </span>
      <nav
        className={`md:flex md:z-30 md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 md:ml-6 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-300 bg-white max-md:flex max-md:flex-col ${styles} z-10`}
      >
        {paths.map((item) => (
          <Link
            key={item.title}
            href={`/${item.path}`}
            className={`${
              currentPath === `/${item.path}` ||
              currentPath.includes(`/${item.path}/`)
                ? "text-accent bg-gray-100"
                : "text-black"
            } cursor-pointer hover:text-gray-500 duration-200 md:my-0 py-5 px-2 z-20`}
            prefetch
            onClick={expandMenuOnLink}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default MainNavigation;
