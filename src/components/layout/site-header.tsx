"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Search,
  CircleUserRound,
  ShoppingBag,
  Menu,
  X,
  ChevronDown,
  Heart,
} from "lucide-react";

import type { NavItem } from "@/entities/navigation/types";
import { siteConfig } from "@/shared/config/site";
import { CartBadge } from "./cart-badge";

type SiteHeaderProps = {
  navItems: NavItem[];
};

export function SiteHeader({ navItems }: SiteHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="inner flex h-16 items-center justify-between md:h-20">
        <div className="flex items-center gap-1 md:hidden">
          <button
            type="button"
            aria-label="Mở menu"
            onClick={() => setIsOpen(true)}
            className="rounded-md p-1 text-neutral-900"
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
          <Link
            href="/"
            className="text-base font-medium leading-6 tracking-tight text-neutral-900"
            aria-label={`${siteConfig.name} — Trang chủ`}
          >
            {siteConfig.name}
          </Link>
        </div>

        <Link
          href="/"
          className="hidden text-2xl font-medium leading-6 tracking-tight text-neutral-900 md:block"
          aria-label={`${siteConfig.name} — Trang chủ`}
        >
          {siteConfig.name}
        </Link>

        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-10" role="list">
            {navItems.map((item) => {
              const hasDropdown = item.label === "Shop" || item.label === "Product";

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={item.active ? "page" : undefined}
                    className="inline-flex items-center gap-0.5 text-sm font-medium leading-6 text-neutral-900"
                  >
                    {item.label}
                    {hasDropdown ? <ChevronDown size={18} strokeWidth={1.5} /> : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 text-neutral-900 md:flex">
          <button type="button" aria-label="Tìm kiếm" className="rounded-md p-1">
            <Search size={24} strokeWidth={1.5} />
          </button>
          <button type="button" aria-label="Tài khoản" className="rounded-md p-1">
            <CircleUserRound size={24} strokeWidth={1.5} />
          </button>
          <Link href="/cart" aria-label="Giỏ hàng" className="relative rounded-md p-1">
            <ShoppingBag size={24} strokeWidth={1.5} />
            <CartBadge className="-right-1 -top-1 h-4 min-w-4 px-1 text-[9px]" />
          </Link>
        </div>

        <div className="flex items-center gap-4 text-neutral-900 md:hidden">
          <Link href="/cart" aria-label="Giỏ hàng" className="relative rounded-md p-1">
            <ShoppingBag size={24} strokeWidth={1.5} />
            <CartBadge className="-right-1 -top-1 h-5 min-w-5 px-1 text-[10px]" />
          </Link>
        </div>
      </div>

      {isOpen ? (
        <div className="fixed inset-0 z-50 bg-black/30 md:hidden">
          <aside className="flex h-full w-80 flex-col justify-between bg-white p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Link href="/" className="text-base font-medium leading-6 text-neutral-900">
                  {siteConfig.name}
                </Link>
                <button
                  type="button"
                  aria-label="Đóng menu"
                  onClick={() => setIsOpen(false)}
                  className="rounded-md p-1 text-zinc-500"
                >
                  <X size={24} strokeWidth={1.5} />
                </button>
              </div>

              <label className="flex h-11 items-center gap-2 rounded-md border border-zinc-500 px-4">
                <Search size={24} strokeWidth={1.5} className="text-neutral-900" />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full border-none bg-transparent text-sm text-neutral-900 outline-none placeholder:text-zinc-500"
                />
              </label>

              <nav>
                <ul className="space-y-4" role="list">
                  {navItems.map((item) => {
                    const hasDropdown = item.label === "Shop" || item.label === "Product";
                    return (
                      <li key={`mobile-${item.href}`} className="border-b border-gray-200 pb-2">
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center justify-between text-sm font-medium leading-6 text-neutral-900"
                        >
                          <span>{item.label}</span>
                          {hasDropdown ? <ChevronDown size={24} strokeWidth={1.5} /> : null}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <div className="border-b border-gray-200 pb-2">
                  <div className="flex items-center justify-between text-2xl leading-8 text-zinc-500">
                    <span className="text-lg font-medium">Cart</span>
                    <Link href="/cart" className="relative rounded-md p-1 text-neutral-900">
                      <ShoppingBag size={24} strokeWidth={1.5} />
                      <CartBadge className="-right-1 -top-1 h-5 min-w-5 px-1 text-[10px]" />
                    </Link>
                  </div>
                </div>
                <div className="border-b border-gray-200 pb-2">
                  <div className="flex items-center justify-between text-2xl leading-8 text-zinc-500">
                    <span className="text-lg font-medium">Wishlist</span>
                    <button type="button" className="relative rounded-md p-1 text-neutral-900" aria-label="Wishlist">
                      <Heart size={24} strokeWidth={1.5} />
                      <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-neutral-900 text-xs font-bold leading-[10px] text-white">
                        2
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <button type="button" className="w-full rounded-md bg-neutral-900 px-6 py-2.5 text-lg font-medium leading-8 text-white">
                Sign In
              </button>

              <div className="flex items-center gap-6 text-neutral-900">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Instagram">
                  <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="18" cy="6" r="1" fill="currentColor" />
                  <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Facebook">
                  <path d="M18 3H15C12.2386 3 10 5.23858 10 8V10H6V14H10V21H14V14H18V10H14V8C14 7.44772 14.4477 7 15 7H18V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="YouTube">
                  <rect x="2" y="3" width="20" height="18" rx="4" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M10.4472 8.72361L15.2111 11.1056C15.9482 11.4741 15.9482 12.5259 15.2111 12.8944L10.4472 15.2764C9.78231 15.6088 9 15.1253 9 14.382V9.61803C9 8.87465 9.78231 8.39116 10.4472 8.72361Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </aside>
        </div>
      ) : null}
    </header>
  );
}
