import "./globals.css";
import type { Metadata } from "next";
import { Noto_Serif_TC } from 'next/font/google';

const notoSerifTC = Noto_Serif_TC({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: "Lin Long - Personal Homepage",
  description: "Personal website of Lin Long",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">{children}</body>
    </html>
  );
}