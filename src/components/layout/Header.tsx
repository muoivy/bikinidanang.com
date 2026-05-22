'use client';

import Link from 'next/link';
import { useState } from 'react';

import Icon from '@/components/ui/Icon';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
  { label: 'Product', href: '/product' },
  { label: 'Contact Us', href: '/contact' },
] as const;

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-zinc-200 bg-white text-black">
      <div className="inner flex h-[78px] items-center justify-between">
        <Link href="/" className="text-[24px] font-medium lowercase leading-none tracking-[-0.03em]" aria-label="bikinidanang home">
          bikinidanang.com
        </Link>

        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-10">
            {NAV_ITEMS.map((item, index) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-sm leading-6 transition-colors ${index === 0 ? 'font-medium text-black' : 'font-normal text-zinc-500 hover:text-black'}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2.5">
          <button type="button" aria-label="Search" className="rounded-full p-1.5 transition hover:bg-zinc-100">
            <Icon name="search" className="text-current" />
          </button>
          <button type="button" aria-label="Account" className="rounded-full p-1.5 transition hover:bg-zinc-100">
            <Icon name="user" className="text-current" />
          </button>
          <button type="button" aria-label="Cart" className="relative rounded-full p-1.5 transition hover:bg-zinc-100">
            <Icon name="cart" className="text-current" />
            <span className="absolute -right-1 -top-1 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-black px-1 text-[10px] font-semibold leading-none text-white">
              2
            </span>
          </button>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="ml-0.5 rounded-full p-1.5 transition hover:bg-zinc-100 md:hidden"
          >
            <Icon name={isMobileMenuOpen ? 'close' : 'menu'} className="text-current" />
          </button>
        </div>
      </div>

      <nav id="mobile-nav" aria-label="Mobile navigation" className={`${isMobileMenuOpen ? 'block' : 'hidden'} border-t border-zinc-200 py-4 md:hidden`}>
        <div className="inner">
          <ul className="space-y-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block text-sm font-medium text-zinc-800 transition-colors hover:text-black">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
