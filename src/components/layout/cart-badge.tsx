"use client";

import { useCartStore } from "@/features/cart/store";

/**
 * CartBadge — shows item count on cart icon.
 * Must be "use client" because it reads from Zustand (localStorage).
 * Kept separate from SiteHeader (Server Component) to avoid
 * making the entire header a Client Component.
 */
export function CartBadge() {
  const count = useCartStore((state) => state.getItemCount());

  if (count === 0) return null;

  return (
    <span
      aria-label={`${count} sản phẩm trong giỏ hàng`}
      className="absolute -right-1 -top-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-neutral-900 text-[10px] font-bold leading-none text-white"
    >
      {count > 99 ? "99+" : count}
    </span>
  );
}
