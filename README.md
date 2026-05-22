# 👙 Bikinidanang.com - E-commerce Store

Dự án website thương mại điện tử chuyên kinh doanh đồ bơi, bikini dành riêng cho thị trường Việt Nam.

## 🚀 Tầm Nhìn & Mục Tiêu
Xây dựng một hệ thống website chuẩn mực, dễ dàng mở rộng, bảo trì và thân thiện cho người mới tiếp cận Next.js. Tối ưu hóa SEO mạnh mẽ và tuân thủ tuyệt đối các tiêu chuẩn về Web Accessibility (a11y).

## 🛠 Tech Stack Core
Dự án áp dụng kiến trúc tách rời (Headless), phân định rõ ràng giữa giao diện hiển thị và hệ thống quản trị:
- **Frontend UI**: Next.js (App Router), React.
- **Ngôn ngữ & Styling**: TypeScript (Strict Mode), Tailwind CSS v3.x.
- **UI Framework**: shadcn/ui làm khung xương component chuẩn a11y.
- **Backend/CMS**: Headless WordPress.
- **Data Fetching**: GraphQL (`graphql-request`).
- **Trình đóng gói**: Turbopack (`next dev --turbo`) cho tốc độ siêu tốc.

## 🎨 UI/UX & Brand Identity
- **Phong cách**: Hiện đại, tối giản, trẻ trung.
- **Màu sắc chủ đạo**: Đơn sắc (Monochrome) - Đen tuyền.
- **Typography**: Phông chữ Poppins (Medium/SemiBold).
- **Logo**: Định dạng ngang, icon tối giản bên trái, text `bikinidanang` (in thường, viết liền) bên phải. Căn chỉnh giữa theo trục ngang.

## 📂 Folder Structure
```text
src/
├── app/               # Next.js App Router pages
├── components/        # Tách biệt toàn bộ UI tại đây
│   ├── ui/            # Các component từ shadcn/ui
│   ├── layout/        # Header, Footer, Sidebar
│   └── ecommerce/     # ProductCard, Cart, Checkout
├── lib/               # Tiện ích, cấu hình WordPress/GraphQL
├── types/             # TypeScript interfaces cho WP (Product, Post)
├── hooks/             # React Custom Hooks
└── constants/         # Biến môi trường public, config SEO mặc định
```

## ⚙️ Hướng Dẫn Chạy Môi Trường Cục Bộ (Local Setup)

Để chạy dự án này trên máy tính cá nhân một cách trơn tru, vui lòng thực hiện tuần tự các bước sau:

**Bước 1: Cài đặt dependencies**
Đảm bảo bạn đã cài đặt Node.js và pnpm. Mở terminal tại thư mục gốc của dự án và chạy:
```bash
pnpm i
```

**Bước 2: Cấp quyền chạy script (Đặc thù của pnpm v9+)**
Nếu hệ thống báo lỗi [ERR_PNPM_IGNORED_BUILDS] chặn các gói như sharp hoặc msw, hãy cấp quyền bằng lệnh sau và dùng phím Space để tích chọn, Enter để xác nhận:
```bash
pnpm approve-builds
```

**Bước 3: Thiết lập biến môi trường**
Tạo file .env.local từ file mẫu và điền các thông tin kết nối cần thiết:
```bash
cp .env.example .env.local
```
Mở file .env.local và đảm bảo có các biến sau:
```bash
NEXT_PUBLIC_WP_GRAPHQL_URL=[http://bikinidanang.local/graphql](http://bikinidanang.local/graphql)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```
(Lưu ý: Ở giai đoạn đầu dựng UI, bạn chưa cần cài WordPress local ngay. Khi cần fetch data thực, hãy sử dụng Local by Flywheel để tạo site bikinidanang.local).

**Bước 4: Khởi chạy Development Server**
Dự án tận dụng sức mạnh của Turbopack để tối ưu tốc độ build và Hot Reload. Chạy lệnh:
```bash
pnpm dev --turbo
```

**Bước 5: Trải nghiệm**
Truy cập http://localhost:3000 trên trình duyệt để bắt đầu Vibe Coding!

## 🤖 Vibe Coding Methodology
Dự án được phát triển 100% bằng phương pháp "vibe coding" thông qua AI (ChatGPT, Cursor, Windsurf). Các AI khi tham gia đóng góp mã nguồn bắt buộc phải:
- Tôn trọng UI/UX: Sử dụng phong cách tối giản, đơn sắc (màu đen tuyền) và font chữ mềm mại Poppins. Logo ngang "bikinidanang" in thường, viết liền.
- Tách bạch cấu trúc: Phân tách rõ ràng thư mục Data (lib/types) và UI (components).
- Styling: Chỉ dùng TailwindCSS v3.x, tuyệt đối không sử dụng SASS hay file CSS ngoài.
- Tiêu chuẩn mã nguồn: Viết semantic HTML và tuân thủ nghiêm ngặt ESLint eslint-plugin-jsx-a11y (ví dụ: luôn có alt cho ảnh, aria-label cho nút bấm).