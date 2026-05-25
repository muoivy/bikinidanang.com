"use client";

import { useCartStore } from "@/features/cart/store";

type CartBadgeProps = {
  className?: string;
};

/**
 * CartBadge — shows item count on cart icon.
 * Must be "use client" because it reads from Zustand (localStorage).
 * Kept separate from SiteHeader (Server Component) to avoid
 * making the entire header a Client Component.
 */
export function CartBadge({ className }: CartBadgeProps) {
  const storeCount = useCartStore((state) => state.getItemCount());
  const demoCount = 2;
  const count = storeCount > 0 ? storeCount : demoCount;

  if (count === 0) return null;

  return (
    <span
      aria-label={`${count} sản phẩm trong giỏ hàng`}
      className={`absolute inline-flex items-center justify-center rounded-full bg-neutral-900 font-bold leading-none text-white ${className ?? "-right-1 -top-1 h-5 min-w-5 px-1 text-[10px]"}`}
    >
      {count > 99 ? "99+" : count}
    </span>
  );
}
