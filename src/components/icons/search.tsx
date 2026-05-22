import type { IconProps } from "./types";

export function SearchIcon({ size = 24, ...props }: IconProps) {
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
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.75" />
      <path d="M20 20L16.65 16.65" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}
