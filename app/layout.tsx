"use client";

import "./modal.css";
import "./globals.css";
import Layout from "./components/layout";
import ThemeRegistry from "./theme-registry";
import { usePathname } from "next/navigation";
import { Montserrat, Geist, Geist_Mono } from "next/font/google";

// ✅ Load Montserrat from Google Fonts
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // add more if needed
  display: "swap",
  variable: "--font-montserrat",
});

// Keep your existing Geist fonts
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

  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" />
        <title>Find AT Work</title>
      </head>
      <body
        className={`${montserrat.className} ${geistSans.variable} ${geistMono.variable}`}
      >
        <ThemeRegistry>
          <Layout>{children}</Layout>
        </ThemeRegistry>
      </body>
    </html>
  );
}
