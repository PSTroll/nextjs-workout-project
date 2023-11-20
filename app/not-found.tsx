import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="w-full h-[620px] overflow-x-hidden pt-24 bg-dirty-white px-10 lg:px-48">
      <div>
        <p className="text-red-600 text-4xl py-2 font-bold">
          Then occurred an error!
        </p>
        <p className="pb-5">
          Sorry for problems. Maybe try come back here later.
        </p>
        <Link href="/" className="text-accent font-bold">
          Go back to the main page
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
