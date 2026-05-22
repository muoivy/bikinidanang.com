'use client';

import Link from 'next/link';
import { useState } from 'react';

const NAV_ITEMS = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Đồ bơi', href: '/do-boi' },
  { label: 'Phụ kiện', href: '/phu-kien' },
  { label: 'Về chúng tôi', href: '/ve-chung-toi' },
] as const;

function BrandMark() {
  return (
    <span
      className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-black"
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 14c1.2 0 1.8-.6 2.4-1.2.6-.6 1.2-1.2 2.4-1.2s1.8.6 2.4 1.2c.6.6 1.2 1.2 2.4 1.2s1.8-.6 2.4-1.2c.6-.6 1.2-1.2 2.4-1.2s1.8.6 2.4 1.2c.6.6 1.2 1.2 2.4 1.2" />
      </svg>
    </span>
  );
}

function MobileMenu({ isOpen }: { isOpen: boolean }) {
  if (!isOpen) return null;

  return (
    <nav aria-label="Mobile navigation" className="border-t border-zinc-200 bg-white px-4 py-4 md:hidden">
      <ul className="space-y-3">
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="block text-sm font-medium text-zinc-800 transition hover:text-zinc-500">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur" role="banner">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2" aria-label="bikinidanang - Trang chủ">
          <BrandMark />
          <span className="text-lg font-semibold lowercase tracking-tight text-black">bikinidanang</span>
        </Link>

        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-zinc-800 transition-colors duration-200 hover:text-zinc-500"
                >
                  <span className="border-b border-transparent pb-1 transition-all hover:border-zinc-400">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button type="button" aria-label="Tìm kiếm" className="rounded-full p-2 text-black transition hover:bg-zinc-100">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
          </button>

          <button type="button" aria-label="Tài khoản" className="rounded-full p-2 text-black transition hover:bg-zinc-100">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Giỏ hàng"
            className="relative rounded-full p-2 text-black transition hover:bg-zinc-100"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M3 5h2l2.2 10.3a2 2 0 0 0 2 1.7h7.8a2 2 0 0 0 2-1.6L21 8H7" />
              <circle cx="10" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
            </svg>
            <span className="absolute -right-0.5 -top-0.5 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-black px-1 text-[10px] font-medium leading-none text-white">
              0
            </span>
          </button>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? 'Đóng menu' : 'Mở menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMobileMenuOpen((value) => !value)}
            className="rounded-full p-2 text-black transition hover:bg-zinc-100 md:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              {isMobileMenuOpen ? (
                <path d="M6 6 18 18M18 6 6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div id="mobile-menu">
        <MobileMenu isOpen={isMobileMenuOpen} />
      </div>
    </header>
  );
}
