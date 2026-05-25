import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";

import { siteConfig } from "@/shared/config/site";

// Single global stylesheet — Tailwind entry + minimal resets
import "../styles/globals.scss";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-be-vietnam-pro",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${beVietnamPro.className} ${beVietnamPro.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
