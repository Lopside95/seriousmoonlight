"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [active, setActive] = useState<string>("/");

  return (
    <>
      <div className="flex justify-between sm:h-16 items-center p-8 sm:p-14 ">
        <Link
          onClick={() => setActive("/")}
          className={`text-3xl font-bold md:font-light ${
            active === "/"
              ? "underline underline-offset-4 pl:underline-offset-[14px] decoration-1"
              : ""
          }`}
          href="/"
        >
          Serious Moonlight
        </Link>
        <Link
          onClick={() => setActive("/about")}
          className={`text-2xl font-light ${
            active === "/about"
              ? "underline underline-offset-4 pl:underline-offset-[12px] decoration-1"
              : ""
          }`}
          href="/about"
        >
          About
        </Link>
      </div>
    </>
  );
};

export default Navbar;
