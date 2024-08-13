"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [active, setActive] = useState<string>("/");

  return (
    <>
      <div className="flex justify-between sm:h-16 items-end p-5 sm:px-16 sm:py-14 ">
        <Link
          onClick={() => setActive("/")}
          className={`sm:text-3xl text-2xl font-semibold md:font-normal ${
            active === "/"
              ? "underline underline-offset-4 sm:underline-offset-[10px] decoration-1"
              : ""
          }`}
          href="/"
        >
          Serious Moonlight
        </Link>
        <Link
          onClick={() => setActive("/about")}
          className={`sm:text-2xl text-xl font-normal ${
            active === "/about"
              ? "underline underline-offset-4 sm:underline-offset-[8px] decoration-1"
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
