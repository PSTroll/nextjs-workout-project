"use client";

import React from "react";
import Link from "next/link";

const PlanFailed = () => {
  return (
    <div>
      <p className="text-red-600 text-4xl py-2 font-bold">
        Your order was failed.
      </p>
      <p className="pb-5">
        Sorry for trouble. You can try make an order again.
      </p>
      <Link href="/" className="text-accent font-bold">
        Go back to the main page
      </Link>
    </div>
  );
};

export default PlanFailed;
