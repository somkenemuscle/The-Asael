import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/shared/Navbar";




export const metadata: Metadata = {
  title: "The Asael Experience",
  description: "Theasaelexperience.com - Our Story",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
