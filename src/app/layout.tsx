import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Bikinidanang.com | Bikini & Swimwear",
    template: "%s | Bikinidanang.com",
  },
  description:
    "Thời trang bikini và swimwear tối giản, hiện đại dành cho thị trường Việt Nam.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={cn("h-full", "antialiased", "font-sans", poppins.variable)}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
