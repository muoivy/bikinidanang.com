import type { IconProps } from "./types";

export function MenuIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path d="M3 6H21" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M3 12H21" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M3 18H21" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}
