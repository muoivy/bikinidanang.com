import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllProducts } from "@/lib/data";
import type { Product } from "@/lib/types";

export const revalidate = 300; // ISR

const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
  maximumFractionDigits: 0,
});

const categoryFilters = [
  { label: "Tất cả", href: "/bikini", active: true },
  { label: "Bikini", href: "/bikini", active: false },
  { label: "One-piece", href: "/bikini/one-piece", active: false },
  { label: "Phụ kiện", href: "/phu-kien", active: false },
  { label: "Lookbook", href: "/lookbook", active: false },
];

type TileProduct = {
  id: string;
  name: string;
  price: number;
  collection?: string;
  isPlaceholder?: boolean;
};

const collectionLabels: Record<string, string> = {
  bikini: "Bikini",
  "one-piece": "One-piece",
};

function buildTileProducts(products: Product[]): TileProduct[] {
  const tiles: TileProduct[] = products.map((product) => ({
    id: product.id,
    name: product.name,
    price: product.sale_price ?? product.price,
    collection: collectionLabels[product.collection] ?? "Bộ sưu tập",
  }));

  const placeholders: TileProduct[] = Array.from({ length: 6 }).map((_, index) => ({
    id: `placeholder-${index}`,
    name: index % 2 === 0 ? "Tên sản phẩm" : "New collection",
    price: 425000 + index * 8000,
    collection: index % 3 === 0 ? "Bikini" : "Bộ sưu tập",
    isPlaceholder: true,
  }));

  return [...tiles, ...placeholders].slice(0, 6);
}

export default async function Home() {
  const products = await getAllProducts();
  const tileProducts = buildTileProducts(products);
  const highlightProduct = products[0];

  const highlight = highlightProduct
    ? {
      name: highlightProduct.name,
      price: highlightProduct.sale_price ?? highlightProduct.price,
      summary: highlightProduct.summary ?? "Bộ sưu tập mới với chất liệu cao cấp, ôm dáng và chống UV.",
      sizes: highlightProduct.sizes,
      href: `/bikini/${highlightProduct.slug}`,
    }
    : {
      name: "Tên sản phẩm",
      price: 458000,
      summary: "Bộ sưu tập mới với chất liệu cao cấp, ôm dáng và chống UV.",
      sizes: ["S", "M", "L"],
      href: "/bikini",
    };

  return (
    <div className="min-h-screen bg-[#f7f2eb] text-stone-700">
      <Header />
      <main className="mx-auto max-w-6xl space-y-8 px-6 py-12">
        <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr]">
          <section className="relative overflow-hidden rounded-[36px] border border-stone-200 bg-[#fdfaf5] px-10 pb-12 pt-10 shadow-[0_40px_80px_-60px_rgba(87,65,39,0.45)]">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-end">
              <div className="space-y-6">
                <span className="badge">Trang chủ</span>
                <div className="space-y-4">
                  <h1 className="text-4xl font-semibold leading-tight text-stone-800 md:text-5xl">Khám phá bộ sưu tập bikini</h1>
                  <p className="max-w-xl text-base text-stone-500">Sự kết hợp giữa chất liệu bền vững và phom dáng tối giản mang hơi thở của biển Đà Nẵng.</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a className="btn-primary" href="/bikini">Mua ngay</a>
                  <a className="btn-secondary" href="/lookbook">Xem lookbook</a>
                </div>
                <div className="inline-flex items-center gap-3 rounded-full border border-stone-200 bg-white/70 px-5 py-2 text-sm text-stone-500 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
                  Giảm 20% cho bộ sưu tập mới!
                </div>
              </div>
              <div className="flex flex-1 justify-end">
                <div className="relative w-full max-w-xs">
                  <div className="aspect-[4/5] w-full rounded-[28px] border border-dashed border-stone-300 bg-gradient-to-b from-stone-100 via-white to-stone-100" />
                  <div className="absolute -left-6 bottom-8 rounded-3xl border border-stone-200 bg-white/80 px-6 py-4 shadow-sm">
                    <p className="text-xs uppercase tracking-[0.24em] text-stone-400">Sản phẩm mới</p>
                    <p className="mt-1 text-sm font-semibold text-stone-700">Thử ngay chất liệu mềm mại</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-[36px] border border-stone-200 bg-white/80 p-8 shadow-[0_24px_60px_-50px_rgba(90,64,37,0.4)]">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-stone-400">Danh mục</p>
                <h2 className="mt-2 text-xl font-semibold text-stone-800">Khám phá nhanh</h2>
              </div>
              <a className="text-xs uppercase tracking-[0.2em] text-stone-400 transition-colors hover:text-stone-700" href="/bikini">Xem tất cả</a>
            </div>
            <div className="mt-8 flex gap-6">
              <aside className="w-36 shrink-0 space-y-3 text-sm text-stone-500">
                {categoryFilters.map((filter) => (
                  <a
                    key={filter.label}
                    href={filter.href}
                    className={`flex items-center justify-between rounded-2xl border px-4 py-2 transition-colors ${filter.active ? "border-stone-800 bg-stone-800 text-white" : "border-transparent hover:border-stone-300 hover:text-stone-700"}`}
                  >
                    {filter.label}
                    <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </aside>
              <div className="grid flex-1 grid-cols-2 gap-4">
                {tileProducts.map((product) => (
                  <article key={product.id} className="group rounded-3xl border border-stone-200 bg-white/60 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                    <div className="aspect-square w-full rounded-2xl border border-dashed border-stone-200 bg-gradient-to-br from-stone-100 via-white to-stone-200" />
                    <div className="mt-4 space-y-1">
                      <p className="text-xs uppercase tracking-[0.2em] text-stone-400">{product.collection}</p>
                      <h3 className="text-sm font-medium text-stone-700">{product.name}</h3>
                      <p className="text-sm text-stone-500">{formatter.format(product.price)}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <section className="rounded-[36px] border border-stone-200 bg-white/80 p-10 shadow-[0_30px_80px_-60px_rgba(90,64,37,0.35)]">
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
              <div className="space-y-6">
                <span className="badge">Sản phẩm</span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-stone-400">Giá đề xuất</p>
                  <p className="mt-2 text-4xl font-semibold text-stone-800">{formatter.format(highlight.price)}</p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-stone-800">{highlight.name}</h3>
                  <p className="mt-3 max-w-md text-stone-500">{highlight.summary}</p>
                </div>
                <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.24em] text-stone-400">
                  {highlight.sizes.map((size) => (
                    <span key={size} className="rounded-full border border-stone-200 px-4 py-1 text-stone-600">{size}</span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <a className="btn-primary" href={highlight.href}>Xem chi tiết</a>
                  <a className="btn-secondary" href="/cart">Thêm vào giỏ</a>
                </div>
              </div>
              <div className="hidden h-full min-w-[160px] items-center justify-center rounded-3xl border border-dashed border-stone-300 bg-gradient-to-b from-stone-100 to-transparent md:flex">
                <div className="h-40 w-28 rounded-full border border-stone-300" />
              </div>
            </div>
          </section>

          <section className="rounded-[36px] border border-stone-200 bg-white/80 p-10 shadow-[0_24px_60px_-50px_rgba(90,64,37,0.35)]">
            <span className="badge">Thư viện components</span>
            <h3 className="mt-6 text-2xl font-semibold text-stone-800">Heading</h3>
            <p className="mt-3 text-sm text-stone-500">Tùy chỉnh màu sắc, kích cỡ và số lượng chỉ với vài thao tác.</p>
            <div className="mt-8 space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-stone-400">Màu sắc</p>
                <div className="mt-3 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em]">
                  <button className="rounded-full border border-stone-800 bg-stone-800 px-4 py-1 text-white">Vani Đà Nẵng</button>
                  <button className="rounded-full border border-stone-200 px-4 py-1 text-stone-500 transition-colors hover:border-stone-300 hover:text-stone-700">Tùy chọn</button>
                  <button className="rounded-full border border-stone-200 px-4 py-1 text-stone-500 transition-colors hover:border-stone-300 hover:text-stone-700">Mới</button>
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-stone-400">Kích cỡ</p>
                <div className="mt-3 flex gap-2 text-xs font-medium">
                  {['S', 'M', 'L', 'XL'].map((size) => (
                    <button
                      key={size}
                      className={`h-10 w-10 rounded-xl border text-stone-600 transition-colors ${size === 'M' ? 'border-stone-800 bg-stone-800 text-white' : 'border-stone-200 hover:border-stone-300 hover:text-stone-800'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-stone-400">Số lượng</p>
                <div className="mt-3 inline-flex items-center gap-3 rounded-2xl border border-stone-200 bg-white px-4 py-2 text-sm text-stone-600">
                  <button className="rounded-full border border-stone-200 px-3 py-1 leading-none">−</button>
                  <span className="text-base font-semibold">1</span>
                  <button className="rounded-full border border-stone-800 bg-stone-800 px-3 py-1 leading-none text-white">+</button>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="btn-primary">Lưu cấu hình</button>
                <a className="btn-secondary" href="/bikini">Xem thư viện</a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
