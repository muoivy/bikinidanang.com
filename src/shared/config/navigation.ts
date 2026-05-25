import type { NavItem } from "@/entities/navigation/types";

// Global navigation items — used by SiteHeader, MobileNav, Footer
// This is site-wide config, NOT feature-specific
export const NAV_ITEMS: NavItem[] = [
  { label: "Trang chủ", href: "/", active: true },
  { label: "Giới thiệu", href: "/gioi-thieu" },
  {
    label: "Sản phẩm",
    href: "/san-pham",
    children: [
      {
        label: "Đồ Bơi Nữ",
        href: "/do-boi-nu",
        children: [
          { label: "Đồ Bơi Một Mảnh", href: "/do-boi-mot-manh" },
          { label: "Đồ Bơi Hai Mảnh", href: "/do-boi-hai-manh" },
        ],
      },
      {
        label: "Đồ Bơi Nam",
        href: "/do-boi-nam",
        children: [
          { label: "Áo Bơi Nam", href: "/ao-boi-nam" },
        { label: "Quần Bơi Nam", href: "/quan-boi-nam" },
        ],
      },
      { label: "Đồ Bơi Trẻ Em", href: "/do-boi-tre-em" },
      { label: "Phụ Kiện", href: "/phu-kien" },
    ],
  },
  { label: "Tin tức", href: "/tin-tuc" },
  { label: "Liên hệ", href: "/lien-he" },
] as const;
