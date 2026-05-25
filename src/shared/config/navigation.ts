import type { NavItem } from "@/entities/navigation/types";

// Global navigation items — used by SiteHeader, MobileNav, Footer
// This is site-wide config, NOT feature-specific
export const NAV_ITEMS: NavItem[] = [
  { label: "Trang chủ", href: "/", active: true },
  { label: "Cửa hàng", href: "/shop" },
  { label: "Sản phẩm", href: "/product" },
  { label: "Liên hệ", href: "/contact" },
] as const;
