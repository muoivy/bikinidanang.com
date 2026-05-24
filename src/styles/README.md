# Styles Architecture (Hybrid: Tailwind + shadcn/ui + SCSS)

This project uses a hybrid styling model:

- **Tailwind CSS**: primary styling for components and layout in TSX.
- **shadcn/ui**: component primitives; style via Tailwind utility classes and variants.
- **SCSS**: lightweight global foundation, tokens, and rare utilities.

## Layer responsibilities

### 1) `foundation/*`
- Keep only low-risk global reset and design tokens.
- Do **not** apply aggressive element resets (`button`, `input`, etc.) that can override shadcn component styles.

### 2) `layout/*`
- Structural wrappers only (if needed).
- Prefer Tailwind classes in component files for local layout.

### 3) `object/component/*`
- Legacy SCSS components.
- For new UI, prefer shadcn + Tailwind first.

### 4) `object/project/*`
- Page-specific styling with narrow scope.

### 5) `object/utility/*`
- Optional utilities only when Tailwind cannot express a pattern clearly.

## Class naming convention

- `l-*`: layout helpers (ex: `l-container`)
- `c-*`: component class (ex: `c-card`)
- `p-*`: page/project block (ex: `p-home-hero`)
- `u-*`: utilities (ex: `u-img-fit`)
- state: `is-*` (ex: `is-active`, `is-hidden`)

## Rules for consistency

1. Prefer Tailwind utilities in JSX for component-level styles.
2. Keep global SCSS minimal and deterministic.
3. Avoid duplicating Tailwind utilities in SCSS.
4. Use SCSS mixins/functions for exceptional cases only.
