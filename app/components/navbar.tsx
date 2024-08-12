"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
//TODO: Active page underline

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between h-16 items-center p-14 ">
        <Link className="text-3xl font-light" href="/">
          Serious Moonlight
        </Link>
        <Link className="text-2xl font-light" href="/about">
          About
        </Link>
      </div>
    </>
  );
};

export default Navbar;
