import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./componen/layout/header";

export const metadata: Metadata = {
  title: "RS. Hj.Bunda Halimah",
  description: "Our Best for You Health | BATAM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
