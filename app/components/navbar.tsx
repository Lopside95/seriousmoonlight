import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between h-20 border ">
        <Link href="/" className="">
          Serious Moonlight
        </Link>
        <Link href="/about">About</Link>
      </div>
    </>
  );
};

export default Navbar;
