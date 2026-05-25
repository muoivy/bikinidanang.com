import type { NavItem } from "@/entities/navigation/types";

// Global navigation items — used by SiteHeader, MobileNav, Footer
// This is site-wide config, NOT feature-specific
export const NAV_ITEMS: NavItem[] = [
  { label: "Trang chủ", href: "/", active: true },
  { label: "Giới thiệu", href: "/gioi-thieu" },
  { label: "Sản phẩm", href: "/san-pham" },
  { label: "Tin tức", href: "/tin-tuc" },
  { label: "Liên hệ", href: "/lien-he" },
] as const;
