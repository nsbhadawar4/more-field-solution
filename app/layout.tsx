"use client";
import "./modal.css";
import "./globals.css";
import Layout from "./components/layout";
import ThemeRegistry from "./theme-registry";
import { usePathname } from "next/navigation";

import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  // const hideLayoutRoutes = [
  //   "/",
  //   "/auth/verification",
  //   "/auth/verification/signin-step",
  // ];
  // const showHeader = !hideLayoutRoutes.includes(pathname);

  return (
    <html lang="en">
      <link rel="icon" href="/favicon.svg" />
      <title>Find AT Work</title>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeRegistry>
          {/* {showHeader ? <Layout>{children}</Layout> : <>{children}</>} */}
          <Layout>{children}</Layout> 
        </ThemeRegistry>
      </body>
    </html>
  );
}
