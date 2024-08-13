import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

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
          <main className="xl:px-72 md:px-20 px-10 ">{children}</main>
        </body>
      </html>
    </>
  );
}
