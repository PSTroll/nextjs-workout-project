import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="shadow-md flex flex-col border-t-slate-400 border-t-2">
      <div className="w-full flex flex-row justify-around">
        <div className="mt-5">
          <h3 className="font-bold text-2xl">Pages</h3>
          <ul className="text-slate-700">
            <li className="py-1">
              <Link
                href="/"
                className="hover:text-black hover:font-bold transition-all"
              >
                Home
              </Link>
            </li>
            <li className="py-1">
              <Link
                href="/blog"
                className="hover:text-black hover:font-bold transition-all"
              >
                Blog
              </Link>
            </li>
            <li className="py-1">
              <Link
                href="/plans"
                className="hover:text-black hover:font-bold transition-all"
              >
                Workouts Plans
              </Link>
            </li>
            <li className="py-1">
              <Link
                href="/calculator"
                className="hover:text-black hover:font-bold transition-all"
              >
                Calculators
              </Link>
            </li>
          </ul>
        </div>
        <div className=" mt-5">
          <h3 className="font-bold text-2xl">Socials</h3>
          <ul>
            <li className="py-1 hover:text-black hover:font-bold transition-all cursor-pointer">
              Facebook
            </li>
            <li className="py-1 hover:text-black hover:font-bold transition-all cursor-pointer">
              Instagram
            </li>
            <li className="py-1 hover:text-black hover:font-bold transition-all cursor-pointer">
              X
            </li>
          </ul>
        </div>
      </div>
      <div className="py-5 text-center font-bold">&copy;2023 WorkoutNow</div>
    </footer>
  );
};

export default Footer;
