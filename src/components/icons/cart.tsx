import type { IconProps } from "./types";

export function CartIcon({ size = 24, ...props }: IconProps) {
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
      <path
        d="M3 4H4.45C5.05 4 5.58 4.4 5.75 4.98L6.2 6.5M6.2 6.5H19.95L18.25 13.35C18.08 14.03 17.47 14.5 16.77 14.5H8.1C7.4 14.5 6.79 14.03 6.62 13.35L5.25 7.85C5.16 7.49 5.53 7.16 5.87 7.29L6.2 6.5Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9.5" cy="18.5" r="1.5" fill="currentColor" />
      <circle cx="16" cy="18.5" r="1.5" fill="currentColor" />
    </svg>
  );
}
