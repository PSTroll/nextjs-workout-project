"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { sendOrderToDatabase } from "@/utils";

const PlanSuccess = () => {
  const params = useSearchParams();
  const [data, setData] = useState({
    name: params.get("name"),
    lastname: params.get("lastname"),
    age: params.get("age"),
    email: params.get("email"),
    activity: params.get("activity"),
    level: params.get("level"),
  });

  useEffect(() => {
    sendOrderToDatabase(data, window.location.host);
  }, []);

  return (
    <div>
      <p className="text-green-600 text-4xl py-2 font-bold">
        Your order was successed.
      </p>
      <p className="pb-5">
        Thanks for your order. Information about your payment and delivery will
        be send on your email.
      </p>
      <Link href="/" className="text-accent font-bold">
        Go back to the main page
      </Link>
    </div>
  );
};

export default PlanSuccess;
