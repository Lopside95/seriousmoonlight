"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  // const [isActive, setIsActive] = React.useState(false);
  // const router = useRouter();
  // const activePage = (path: string) => router.pathname === path;

  // const navItemStyle = (page: string) =>
  //   ` hover:underline-offset-[6px] max-md:mt-3 md:text-xl text-2xl ${
  //     activePage(page) ? "underline underline-offset-[6px] " : ""
  //   }`;

  return (
    <>
      <div className="flex justify-between h-20 border ">
        <Link href="/">Serious Moonlight</Link>
        <Link href="/about">About</Link>
      </div>
    </>
  );
};

export default Navbar;
