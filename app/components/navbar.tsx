"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="flex justify-between sm:h-16 items-end p-5 sm:px-16 sm:py-14 ">
        <Link
          className={`sm:text-3xl text-2xl font-semibold md:font-normal ${
            pathname === "/"
              ? "underline underline-offset-4 sm:underline-offset-[10px] decoration-1"
              : ""
          }`}
          href="/"
        >
          Serious Moonlight
        </Link>
        <Link
          className={`sm:text-2xl text-xl font-normal ${
            pathname === "/about"
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
