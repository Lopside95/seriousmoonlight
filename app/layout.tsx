import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Head from "next/head";

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
          <main>{children}</main>
        </body>
      </html>
    </>
  );
}
