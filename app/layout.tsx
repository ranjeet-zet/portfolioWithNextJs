import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Desigine from '../components/Desigin'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ranjeet",
  description: "A full stack Devloper",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Desigine/>
        {children}</body>
    </html>
  );
}
