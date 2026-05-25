export const siteConfig = {
  name: "bikinidanang",
  title: "Bikini Đà Nẵng — Đồ Bơi & Bikini Chính Hãng",
  description:
    "Chuyên cung cấp đồ bơi, bikini thời trang cho thị trường Việt Nam. Hàng chất lượng cao, giá tốt, giao hàng toàn quốc.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "vi_VN",
  currency: "VND",
} as const;

export type SiteConfig = typeof siteConfig;
