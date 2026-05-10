import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Md Mahfuz Hossain — MERN Stack & Next.js Developer",
  description:
    "Personal portfolio of Md Mahfuz Hossain, a full-stack MERN & Next.js developer from Bangladesh. Specialising in React, Node.js, and modern web experiences.",

  icons: {
    icon: "/asstes/logo_m.svg",
  },

  keywords: [
    "Md Mahfuz Hossain",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Bangladesh",
    "Portfolio",
  ],

  authors: [{ name: "Md Mahfuz Hossain" }],

  openGraph: {
    title: "Md Mahfuz Hossain — Full Stack Developer",
    description: "Mahfuz Hossain portfolio — Building Dynamic Websites",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-bg text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}