import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ['400', "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Blog App",
  description: "Generate Blog App by Next JS",
  manifest: "/manifest.json"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} flex flex-col h-screen max-w-[1500px] mx-auto`}>
        <SessionProvider>
            {children}
            <Toaster />
          </SessionProvider>
      </body>
    </html>
  );
}
