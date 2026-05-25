# 👙 Bikinidanang.com - E-commerce Store

Dự án website thương mại điện tử chuyên kinh doanh đồ bơi, bikini cho thị trường Việt Nam, xây dựng bằng Next.js App Router.

## 🚀 Tầm nhìn & Mục tiêu
Xây dựng một hệ thống website chuẩn mực, dễ mở rộng, dễ bảo trì, tối ưu SEO và tuân thủ Web Accessibility (a11y).

## 🛠 Tech Stack (Current)
- **Frontend UI**: Next.js 16 (App Router), React 19.
- **Ngôn ngữ**: TypeScript (Strict Mode).
- **Styling**: Tailwind CSS v4 + `tw-animate-css`.
- **UI Foundation**: shadcn/ui (`radix-vega` preset).
- **Data Layer (định hướng)**: Headless WordPress + GraphQL (`graphql-request`).
- **Linting**: ESLint 9 + `eslint-config-next` + `eslint-plugin-jsx-a11y`.

## 📦 Trạng thái hiện tại
Repo đang ở giai đoạn **starter/skeleton**:
- Đã có nền tảng App Router + global styles + utility function + shadcn button.
- Chưa triển khai business modules e-commerce hoàn chỉnh.

## 📂 Folder Structure
```text
src/
├── app/                 # routing, layout, metadata
├── features/            # module theo use-case (product, cart, checkout...)
├── entities/            # domain entities & domain types
├── shared/              # shared ui/utils/constants (không phụ thuộc feature)
├── lib/
│   ├── api/             # graphql client, wp gateway
│   └── utils.ts         # utility chung
├── components/
│   ├── ui/              # shadcn/ui primitives
│   ├── layout/          # Header, Footer, Nav...
│   └── ecommerce/       # ProductCard, MiniCart...
├── hooks/               # reusable hooks
├── types/               # app-level types (DTO, schema types)
└── constants/           # constants/cấu hình hệ thống
```

## ⚙️ Local Setup
1. **Cài dependencies**
```bash
pnpm i
```

2. **Thiết lập môi trường**
```bash
cp .env.example .env.local
```

Biến môi trường mẫu:
```env
NEXT_PUBLIC_WP_GRAPHQL_URL=http://bikinidanang.local/graphql
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_WP_URL=http://bikinidanang.local
```

3. **Chạy development**
```bash
pnpm dev
```

> Nếu muốn dùng Turbopack explicit, có thể chạy: `pnpm dev --turbo`.

4. **Mở trình duyệt**
- http://localhost:3000

## 🎨 Brand & UX Baseline
- Phong cách: hiện đại, tối giản, trẻ trung.
- Bảng màu: monochrome (đen/trắng/xám).
- Typography: **Poppins** (ưu tiên Medium/SemiBold).
- Logo: chữ thường `bikinidanang`, dạng ngang.

## 🧭 Coding Conventions
- Tách UI primitives (`components/ui`) khỏi business components (`components/ecommerce`, `features`).
- Ưu tiên semantic HTML và a11y attributes.
- Hạn chế CSS rời; ưu tiên Tailwind utilities + token trong `globals.css`.
- Thêm module mới theo nguyên tắc: **feature-first**, chỉ đưa vào `shared` khi thật sự dùng chung.
