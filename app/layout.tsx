import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bikini Boutique",
  description: "Cửa hàng bikini hiện đại. Thiết kế tối giản, chất liệu nhanh khô, chống UV.",
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
