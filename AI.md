# AI.md — bikinidanang.com Project Context

> **Single source of truth for all AI coding assistants.**
> CLAUDE.md / AGENTS.md / .github/copilot-instructions.md all point here.

---

## Project Overview

E-commerce website selling swimwear & bikini for Vietnamese market.

| Key | Value |
|-----|-------|
| Domain | bikinidanang.com |
| Language | Vietnamese market, code in English |
| Framework | Next.js 16 (App Router) |
| Runtime | React 19 |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v4 + shadcn/ui (`radix-vega` preset) |
| Data | WordPress Headless + WooCommerce + GraphQL |
| Package Manager | pnpm |

---

## Architecture Overview

```
src/
├── app/           → Next.js routing ONLY. No business logic here.
├── features/      → Business modules. One folder per domain feature.
├── entities/      → Domain types only (interfaces, enums). No logic.
├── shared/        → Truly shared: config, lib, ui primitives, layout.
├── components/    → UI primitives (shadcn/ui) and global layout.
├── hooks/         → Global reusable hooks only.
├── types/         → App-level DTO types, API response shapes.
└── styles/        → globals.scss only (Tailwind entry + minimal resets).
```

### Layer Dependency Rules (STRICT)

```
app/        → can import from: features/, shared/, components/
features/   → can import from: entities/, shared/, components/
features/   → CANNOT import from: other features/
shared/     → can import from: entities/
shared/     → CANNOT import from: features/
entities/   → CANNOT import from: anywhere (pure types only)
components/ → can import from: shared/, entities/
```

---

## Styling Rules

- **PRIMARY tool: Tailwind CSS v4 utilities** in JSX/TSX className
- **NEVER** write new `.scss` files
- **NEVER** use inline `style={{}}` props
- **NEVER** duplicate Tailwind utilities in SCSS
- Only SCSS allowed: `src/styles/globals.scss` (resets + `@use "tailwindcss"`)
- shadcn/ui components: style only via Tailwind `className` props
- **Tailwind class order:** layout → spacing → color → typography → interactive state

```tsx
// ✅ CORRECT
<div className="flex items-center gap-4 px-5 py-3 bg-white text-sm font-medium hover:bg-zinc-50">

// ❌ WRONG — no inline styles
<div style={{ display: 'flex', gap: '16px' }}>

// ❌ WRONG — no new scss
// _my-component.scss
```

---

## Component Rules

- **Default: React Server Component** (no `"use client"`)
- Add `"use client"` ONLY when using: hooks, event handlers, browser APIs
- Props interface: defined ABOVE component, exported separately
- File naming: **kebab-case** (`product-card.tsx`, not `ProductCard.tsx`)
- Component export: **PascalCase named export** (not default export)
- One component per file (exception: tiny sub-components in same file)

```tsx
// ✅ CORRECT pattern
export type ProductCardProps = {
  product: Product
  className?: string
}

export function ProductCard({ product, className }: ProductCardProps) {
  return (...)
}

// ❌ WRONG — no default export for components
export default function ProductCard() { ... }
```

---

## Icons

- Use **lucide-react ONLY**
- Default props: `size={24}`, `strokeWidth={1.5}`
- **NEVER** create custom SVG components
- Import named: `import { ShoppingBag, Search } from "lucide-react"`

```tsx
// ✅ CORRECT
import { ShoppingBag } from "lucide-react"
<ShoppingBag size={24} strokeWidth={1.5} />

// ❌ WRONG — no custom SVG components
import { CartIcon } from "@/components/icons/cart"
```

---

## State Management

| Type | Tool | Location |
|------|------|----------|
| Server data | RSC + `fetch` | features/*/queries/ |
| Cart / UI state | Zustand + persist | features/*/store.ts |
| URL state (filters, pagination) | `useSearchParams` | features/*/hooks/ |
| Form state | React Hook Form + Zod | features/*/components/ |

```ts
// Zustand store pattern
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CartStore {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  clearCart: () => void
  getTotal: () => number
  getCount: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => set((s) => ({ items: [...s.items, item] })),
      removeItem: (id) => set((s) => ({ items: s.items.filter(i => i.id !== id) })),
      clearCart: () => set({ items: [] }),
      getTotal: () => get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
      getCount: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
    }),
    { name: 'bikinidanang-cart' }
  )
)
```

---

## TypeScript Rules

- Strict mode: **always on** (`tsconfig.json` → `"strict": true`)
- **No `any`** — use `unknown` if truly unknown, then narrow
- Domain types: defined in `entities/` layer
- API response types: in `features/[feature]/types.ts`
- Prefer `type` over `interface` for object shapes
- Use `satisfies` operator for config objects

```ts
// ✅ CORRECT
type Product = {
  id: string
  name: string
  price: number
  slug: string
}

// ❌ WRONG
const product: any = await fetchProduct()
```

---

## GraphQL / WordPress

- Client: `graphql-request` (already in dependencies)
- All queries in: `src/features/[feature]/queries/[query-name].ts`
- WooCommerce REST API for: cart mutations, checkout, orders
- Auth: JWT via WooCommerce JWT plugin

```ts
// src/shared/lib/graphql/client.ts — singleton client
import { GraphQLClient } from 'graphql-request'

export const wpClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_WP_GRAPHQL_URL!
)
```

---

## Adding a New Feature — Step-by-step Template

Example: adding "wishlist" feature

```
src/
├── features/wishlist/
│   ├── components/
│   │   ├── wishlist-button.tsx   ← "Add to wishlist" button
│   │   └── wishlist-page.tsx     ← Full wishlist page
│   ├── hooks/
│   │   └── use-wishlist.ts       ← useWishlistStore hook wrapper
│   ├── queries/
│   │   └── get-wishlist.ts       ← GraphQL query
│   ├── store.ts                  ← Zustand store
│   └── types.ts                  ← WishlistItem type
└── entities/wishlist/
    └── types.ts                  ← Base WishlistItem domain type
```

---

## Naming Conventions

| Type | Convention | Example |
|------|-----------|---------|
| Files | kebab-case | `product-card.tsx` |
| Components | PascalCase | `ProductCard` |
| Hooks | camelCase + `use` | `useCart` |
| Types/Interfaces | PascalCase | `CartItem` |
| Constants | SCREAMING_SNAKE_CASE | `NAV_ITEMS` |
| CSS classes | Tailwind only | `flex items-center` |
| GraphQL queries | SCREAMING_SNAKE_CASE | `GET_PRODUCTS` |

---

## What NOT To Do

```
❌ No pages/ directory          → Using App Router only
❌ No getServerSideProps        → Use RSC + fetch
❌ No CSS Modules               → Use Tailwind
❌ No styled-components/emotion → Use Tailwind
❌ No Redux                     → Use Zustand
❌ No axios                     → Use fetch or graphql-request
❌ No moment.js                 → Use date-fns or Intl API
❌ No class components          → Functional only
❌ No prop drilling > 2 levels  → Use Zustand or Context
❌ No new SCSS files            → Tailwind only
❌ No custom SVG icon components → lucide-react only
❌ No default component exports  → Named exports only
❌ No barrel files (index.ts)    → Direct imports
```

---

## Brand & Design Tokens

| Token | Value |
|-------|-------|
| Font | Poppins (400, 500, 600, 700) |
| Palette | Monochrome — black / white / zinc grays |
| Logo | Lowercase `bikinidanang`, horizontal |
| Style | Modern, minimal, young, trendy |
| Primary text | `text-neutral-900` |
| Muted text | `text-zinc-500` |
| Border | `border-zinc-200` |
| Background | `bg-white` |
| Header height | `h-20` |
| Container | `max-w-[1180px] px-4 sm:px-5 lg:px-[30px] mx-auto` |

---

## Environment Variables

```env
NEXT_PUBLIC_WP_GRAPHQL_URL=http://bikinidanang.local/graphql
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_WP_URL=http://bikinidanang.local
WP_PREVIEW_SECRET=your_preview_secret_token_here
```

---

## Current Implementation Status

| Module | Status | Notes |
|--------|--------|-------|
| App Router setup | ✅ Done | |
| Global styles + Tailwind | ✅ Done | |
| shadcn/ui button | ✅ Done | |
| SiteHeader (desktop) | ✅ Done | Mobile nav pending |
| Navigation config | ⏳ Needs move to shared/config | |
| GraphQL client | ⏳ Not started | |
| Zustand cart store | ⏳ Not started | |
| Product listing | ⏳ Not started | |
| Product detail | ⏳ Not started | |
| Cart UI | ⏳ Not started | |
| Checkout | ⏳ Not started | |
| Search | ⏳ Not started | |
| Mobile navigation | ⏳ Not started | |
| SEO / Metadata | ⏳ Not started | |
