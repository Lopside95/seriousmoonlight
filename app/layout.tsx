import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import { Toaster } from "@/components/ui/toaster";
import React from "react";

const inter = Inter({ subsets: ["latin"], style: ["normal"] });

export const metadata: Metadata = {
  title: "Serious Moonlight",
  description: "Let's Dance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={`${inter.className} `}>
          <Navbar />
          <main className="2xl:px-72 lg:px-20 px-8 py-10 md:py-24 ">
            {children}
          </main>
          <Toaster />
        </body>
      </html>
    </>
  );
}
