import type { Metadata } from "next";
import { Poppins } from "next/font/google";
// import "./globals.css";
import "../styles/style.scss";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "bikinidanang.com",
  description: "Clean starter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
