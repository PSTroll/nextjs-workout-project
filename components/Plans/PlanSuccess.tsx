import React from "react";
import Link from "next/link";
import { sendOrderToDatabase } from "@/serverutils";

const PlanSuccess = ({
  urlParams,
}: {
  [key: string]: string | string[] | undefined | any;
}) => {
  const data = {
    name: urlParams?.name,
    lastname: urlParams?.lastname,
    age: urlParams?.age,
    email: urlParams?.email,
    activity: urlParams?.activity,
    level: urlParams?.level,
  };

  sendOrderToDatabase(data);

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
