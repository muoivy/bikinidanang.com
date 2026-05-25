import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes safely.
 * Combines clsx (conditional classes) + tailwind-merge (deduplication).
 *
 * Usage:
 *   cn("px-4 py-2", isActive && "bg-black text-white", className)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format price in Vietnamese Dong (VND)
 * Input: number (e.g. 450000)
 * Output: "450.000 ₫"
 */
export function formatPrice(
  price: number,
  options?: Intl.NumberFormatOptions
): string {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
    ...options,
  }).format(price);
}

/**
 * Parse WooCommerce price string to number
 * Input: "450,000.00" or "450000" or "450.000"
 * Output: 450000
 */
export function parsePrice(priceString: string): number {
  const cleaned = priceString.replace(/[^\d]/g, "");
  return parseInt(cleaned, 10) || 0;
}

/**
 * Generate a URL-friendly slug from Vietnamese text
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

/**
 * Truncate text to a max length with ellipsis
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + "…";
}
