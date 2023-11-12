import React from "react";

import { HeaderProps } from "@/types";

const Header = ({ title }: HeaderProps) => {
  return (
    <div className="text-center p-5">
      <p className="text-5xl font-bold italic">{title}</p>
    </div>
  );
};

export default Header;
