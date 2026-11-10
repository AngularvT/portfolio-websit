import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SiteNav from "./components/site-nav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lanboer Zhao — Portfolio",
  description: "Personal portfolio for Lanboer Zhao: projects, background, and contact.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <SiteNav />
        <main>{children}</main>
      </body>
    </html>
  );
}
