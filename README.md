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
bikinidanang/
├── .next/                 # Thư mục build của Next.js
├── node_modules/          # Các gói thư viện phụ thuộc
├── src/
│   ├── app/               # Next.js App Router (Quản lý các trang và layout toàn cục)
│   │   ├── globals.css    # File CSS toàn cục khởi tạo Tailwind CSS
│   │   ├── layout.tsx     # Layout gốc của toàn bộ website
│   │   └── page.tsx       # Trang chủ (Homepage)
│   ├── components/        # Nơi chứa toàn bộ UI Components (Tách biệt hoàn toàn với Data)
│   │   ├── ui/            # Thành phần lõi (Button, Dialog...) tải về từ shadcn/ui
│   │   ├── layout/        # Khung giao diện dùng chung (Header, Footer, MobileMenu)
│   │   └── ecommerce/     # Component đặc thù bán hàng (ProductCard, MiniCart)
│   ├── lib/               # Khởi tạo kết nối WordPress GraphQL, hàm fetching API
│   ├── types/             # TypeScript interfaces cho WordPress (Product, Post)
│   ├── hooks/             # Các React Custom Hooks xử lý logic (Giỏ hàng, Menu)
│   └── constants/         # Chứa cấu hình SEO mặc định và các hằng số hệ thống
├── .env.example           # File cấu hình biến môi trường mẫu công khai
├── .env.local             # File chứa biến môi trường thật (Tuyệt đối không commit)
├── .gitignore             # File cấu hình Git để ẩn/hiện file nhạy cảm và thư mục rác
├── components.json        # File cấu hình đường dẫn và preset Vega của thư viện shadcn/ui
├── next.config.js         # File cấu hình cấu trúc Next.js (Cần thiết để cho phép tải ảnh từ WordPress)
├── package.json           # Quản lý script chạy (`dev --turbo`) và danh sách các package
├── tailwind.config.js     # File tùy biến cấu hình màu đơn sắc đen và phông chữ Poppins
└── tsconfig.json          # Cấu hình TypeScript (Strict Mode) và Import Alias `@/*`
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
```env
NEXT_PUBLIC_WP_GRAPHQL_URL=http://bikinidanang.local/graphql
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_WP_URL=http://bikinidanang.local
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