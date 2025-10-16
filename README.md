# Bikinidanang Shop – Next.js 15 + TypeScript + Tailwind

## Quick start
```bash
pnpm i # hoặc yarn / npm
pnpm dev
```

## Main directory
- `app/` – App Router, pages (listing, product), `robots.ts`, `sitemap.ts`
- `components/` – Header, Footer, ProductCard
- `lib/` – đọc JSON, SEO helpers
- `data/` – JSON sản phẩm & bộ sưu tập

## SEO
- URL: `/bikini` và `/bikini/[slug]`
- `generateMetadata()` + JSON-LD Product
- ISR: `export const revalidate = 300`

## Next Step
- Thêm trang `/bikini/[category]` lọc theo `collection`
- Tích hợp Decap CMS hoặc admin in-app để ghi JSON
- Cổng thanh toán (Stripe/ VNPAY/ MoMo) khi sẵn sàng
