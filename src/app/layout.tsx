import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { siteConfig } from "@/shared/config/site";

import "../styles/style.scss";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
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
