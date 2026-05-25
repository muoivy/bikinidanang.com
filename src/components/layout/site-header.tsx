import Link from "next/link";
import { CircleUserRound, Search, ShoppingBag } from "lucide-react";

import type { NavItem } from "@/entities/navigation/types";
import { siteConfig } from "@/shared/config/site";

type SiteHeaderProps = {
  navItems: NavItem[];
};

export function SiteHeader({ navItems }: SiteHeaderProps) {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="inner flex h-20 items-center justify-between gap-6">
        <Link href="/" className="text-4 font-medium tracking-tight text-neutral-900">
          {siteConfig.name}
        </Link>

        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-10">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`text-sm font-medium leading-6 transition-colors ${
                    item.active
                      ? "text-neutral-900"
                      : "text-zinc-500 hover:text-neutral-900"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4 text-neutral-900">
          <button aria-label="Search" className="cursor-pointer">
            <Search className="size-6" strokeWidth={1.5} />
          </button>
          <button aria-label="Account" className="cursor-pointer">
            <CircleUserRound className="size-6" strokeWidth={1.5} />
          </button>
          <button aria-label="Cart" className="relative cursor-pointer">
            <ShoppingBag className="size-6" strokeWidth={1.5} />
            <span className="absolute -right-2 -top-2 inline-flex size-5 items-center justify-center rounded-full bg-neutral-900 text-xs font-bold leading-[10px] text-white">
              2
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
