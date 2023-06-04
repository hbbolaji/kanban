import React from "react";
import LogoIcon from "./LogoIcon";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex h-16 md:h-20 items-center px-10 space-x-2">
      <LogoIcon />
      <Link
        to="/"
        className="font-bold text-xl md:text-3xl tracking-wide text-black dark:text-gray-50"
      >
        Kanban
      </Link>
    </div>
  );
};

export default Logo;
