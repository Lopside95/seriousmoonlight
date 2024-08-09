import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar: React.FC = () => {
  //   const router = useRouter();

  return (
    <div>
      <Link href="/about">About</Link>
      {/* <Button onClick={() => router.push("/About")}>About</Button> */}
    </div>
  );
};

export default Navbar;
