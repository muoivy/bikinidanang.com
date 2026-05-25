import Link from "next/link";
import { Search, CircleUserRound, ShoppingBag } from "lucide-react";

import type { NavItem } from "@/entities/navigation/types";
import { siteConfig } from "@/shared/config/site";

type SiteHeaderProps = {
  navItems: NavItem[];
};

export function SiteHeader({ navItems }: SiteHeaderProps) {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="inner flex h-20 items-center justify-between gap-6">
        {/* Logo */}
        <Link
          href="/"
          className="font-medium tracking-tight text-neutral-900"
          aria-label={`${siteConfig.name} — Trang chủ`}
        >
          {siteConfig.name}
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-10" role="list">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={item.active ? "page" : undefined}
                  className={[
                    "font-medium leading-6 transition-colors",
                    item.active
                      ? "text-neutral-900"
                      : "text-zinc-500 hover:text-neutral-900",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4 text-neutral-900">
          <button
            type="button"
            aria-label="Tìm kiếm"
            className="cursor-pointer rounded-md p-1 transition-colors hover:bg-zinc-100"
          >
            <Search size={24} strokeWidth={1.5} />
          </button>

          <button
            type="button"
            aria-label="Tài khoản"
            className="cursor-pointer rounded-md p-1 transition-colors hover:bg-zinc-100"
          >
            <CircleUserRound size={24} strokeWidth={1.5} />
          </button>

          {/* Cart button — count rendered client-side via CartCount component */}
          <Link
            href="/cart"
            aria-label="Giỏ hàng"
            className="relative cursor-pointer rounded-md p-1 transition-colors hover:bg-zinc-100"
          >
            <ShoppingBag size={24} strokeWidth={1.5} />
            {/* CartBadge is a separate Client Component to avoid hydration mismatch */}
            <CartBadge />
          </Link>
        </div>
      </div>
    </header>
  );
}

// -----------------------------------------------------------------------------
// CartBadge — Client Component (reads from Zustand store)
// Kept in same file since it's tightly coupled to SiteHeader
// -----------------------------------------------------------------------------
// NOTE: Split into separate file if it grows in complexity
import { CartBadge } from "./cart-badge";
