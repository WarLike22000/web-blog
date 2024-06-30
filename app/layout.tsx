import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ['400', "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Blog App",
  description: "Generate Blog App by Next JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} flex flex-col h-screen px-5 md:px-12 lg:px-28`}>
        <Navbar />
        <main className="flex-grow flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
