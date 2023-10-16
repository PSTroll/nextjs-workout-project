"use client";
import React, { useState, useRef, MutableRefObject } from "react";
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
        setStyles(`top-[50px] opacity-100 flex flex-col`))
      : (setIsClosed("menu"), setStyles(``));
  };

  return (
    <header className="p-5 text-black font-bold text-xl flex shadow-xl">
      <span className="text-3xl cursor-pointer md:hidden block mx-2">
        <Image
          alt="menu"
          onClick={expandMenu}
          src={`/images/${isClosed}-icon.svg`}
          width={30}
          height={30}
        />
      </span>
      <nav
        className={`md:flex z-10 md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-300 bg-white max-md:flex max-md:flex-col ${styles}`}
      >
        {paths.map((item) => (
          <Link
            key={item.title}
            href={`/${item.path}`}
            className={`${
              currentPath === `/${item.path}` ? "text-sky-600" : "text-black"
            } cursor-pointer mx-3 hover:text-sky-300 duration-200 md:my-0`}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default MainNavigation;
