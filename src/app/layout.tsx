import type { Metadata } from "next";

import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Top Ten Fire Safety",
  description: "Top Ten Fire Safety",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased bg-neutral-950",
          fontSans.variable
        )}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
