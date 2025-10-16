import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllProducts } from "@/lib/data";

export const revalidate = 300; // ISR

const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
  maximumFractionDigits: 0,
});

const pageShortcuts = [
  {
    title: "Trang chủ",
    description: "Bố cục tổng quan cùng điểm nhấn mới nhất.",
    href: "/",
  },
  {
    title: "Danh mục",
    description: "Sắp xếp bikini theo chất liệu, kiểu dáng và màu sắc.",
    href: "/bikini",
  },
  {
    title: "Sản phẩm",
    description: "Chi tiết từng thiết kế với hình ảnh và kích cỡ đầy đủ.",
    href: "/bikini/nuoc-bien",
  },
  {
    title: "Thư viện component",
    description: "Mẫu giao diện dùng lại giúp xây trang nhanh chóng.",
    href: "/components",
  },
];

export default async function Home() {
  const products = await getAllProducts();
  const featuredProducts = products.slice(0, 4);
  const heroHighlight = products[0];

  return (
    <div className="min-h-screen bg-[#f7f2eb] text-stone-700">
      <Header />
      <main className="mx-auto max-w-6xl space-y-12 px-6 py-12">
        <section className="grid gap-10 overflow-hidden rounded-[40px] border border-stone-200 bg-[#fdfaf5] p-10 shadow-[0_50px_120px_-80px_rgba(67,47,21,0.5)] md:grid-cols-[1.2fr_1fr]">
          <div className="flex flex-col gap-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.3em] text-stone-500">
              <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
              Bộ sưu tập hè 2024
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
                Cảm hứng biển Đà Nẵng trên từng thiết kế bikini
              </h1>
              <p className="max-w-xl text-base text-stone-600">
                Tái hiện gam màu nắng, cát và sóng bằng chất liệu thân thiện môi trường, giúp bạn tự tin trong mọi khoảnh khắc bên biển.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a className="btn-primary" href="/bikini">
                Khám phá bộ sưu tập
              </a>
              <a className="btn-secondary" href="/lookbook">
                Xem lookbook
              </a>
            </div>
            <dl className="grid gap-6 text-sm text-stone-500 sm:grid-cols-3">
              <div className="rounded-3xl border border-stone-200 bg-white/60 p-4">
                <dt className="text-xs uppercase tracking-[0.25em]">Chất liệu</dt>
                <dd className="mt-2 text-base font-semibold text-stone-800">Tái chế 65%</dd>
              </div>
              <div className="rounded-3xl border border-stone-200 bg-white/60 p-4">
                <dt className="text-xs uppercase tracking-[0.25em]">Ưu đãi</dt>
                <dd className="mt-2 text-base font-semibold text-stone-800">Freeship toàn quốc</dd>
              </div>
              <div className="rounded-3xl border border-stone-200 bg-white/60 p-4">
                <dt className="text-xs uppercase tracking-[0.25em]">Ra mắt</dt>
                <dd className="mt-2 text-base font-semibold text-stone-800">20/06 - 25/06</dd>
              </div>
            </dl>
          </div>
          <div className="relative flex items-end justify-end">
            <div className="relative w-full max-w-sm">
              <div className="aspect-[4/5] w-full rounded-[32px] border border-dashed border-stone-300 bg-gradient-to-br from-stone-100 via-white to-stone-200" />
              <div className="absolute -left-8 bottom-8 rounded-3xl border border-stone-200 bg-white/90 px-6 py-5 shadow-sm">
                <p className="text-xs uppercase tracking-[0.3em] text-stone-400">Gợi ý phối đồ</p>
                <p className="mt-2 text-sm font-medium text-stone-700">
                  Áo khoác lưới cùng bikini tông đất cho buổi chiều hoàng hôn.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[40px] border border-stone-200 bg-white/75 p-10 shadow-[0_40px_100px_-80px_rgba(67,47,21,0.45)]">
          <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-stone-400">Điều hướng nhanh</p>
              <h2 className="mt-2 text-2xl font-semibold text-stone-900">4 trang chính trong thiết kế mới</h2>
            </div>
            <p className="max-w-md text-sm text-stone-600">
              Mỗi trang tập trung vào một mục tiêu: truyền cảm hứng, duyệt danh mục, xem sản phẩm chi tiết và tái sử dụng component.
            </p>
          </header>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {pageShortcuts.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="group flex flex-col justify-between gap-6 rounded-3xl border border-stone-200 bg-white/70 p-6 transition hover:-translate-y-1 hover:border-stone-300 hover:shadow-md"
              >
                <div className="space-y-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-stone-200 bg-[#f7f2eb] text-sm font-semibold text-stone-600">
                    {item.title.slice(0, 2)}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-stone-800">{item.title}</h3>
                    <p className="mt-2 text-sm text-stone-600">{item.description}</p>
                  </div>
                </div>
                <span className="text-xs uppercase tracking-[0.3em] text-stone-400 transition group-hover:text-stone-700">
                  Xem chi tiết ↗
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.15fr_1fr]">
          <div className="flex flex-col gap-8 rounded-[40px] border border-stone-200 bg-white/80 p-10 shadow-[0_30px_80px_-70px_rgba(67,47,21,0.45)]">
            <div className="flex flex-col gap-3">
              <span className="badge">Sản phẩm nổi bật</span>
              <h2 className="text-2xl font-semibold text-stone-900">Mỗi khoảnh khắc là một câu chuyện</h2>
              <p className="max-w-md text-sm text-stone-600">
                Chọn lựa những thiết kế bán chạy nhất của tuần, phù hợp cho những chuyến du lịch biển hoặc những buổi tiệc hồ bơi.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {featuredProducts.map((product) => (
                <article
                  key={product.id}
                  className="group flex flex-col gap-4 rounded-3xl border border-stone-200 bg-white/70 p-5 transition hover:-translate-y-1 hover:border-stone-300 hover:shadow-md"
                >
                  <div className="aspect-square w-full rounded-2xl border border-dashed border-stone-200 bg-gradient-to-br from-stone-100 via-white to-stone-200" />
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.3em] text-stone-400">{product.collection?.toUpperCase() ?? "BỘ SƯU TẬP"}</p>
                    <h3 className="text-base font-semibold text-stone-800">{product.name}</h3>
                    <p className="text-sm text-stone-600">{formatter.format(product.sale_price ?? product.price)}</p>
                  </div>
                  <a
                    href={`/bikini/${product.slug}`}
                    className="text-xs uppercase tracking-[0.3em] text-stone-400 transition group-hover:text-stone-700"
                  >
                    Xem chi tiết ↗
                  </a>
                </article>
              ))}
            </div>
          </div>

          <aside className="flex flex-col justify-between gap-8 rounded-[40px] border border-stone-200 bg-[#fdfaf5] p-10 shadow-[0_30px_80px_-70px_rgba(67,47,21,0.4)]">
            <div className="space-y-4">
              <span className="badge">Câu chuyện thương hiệu</span>
              <h3 className="text-2xl font-semibold text-stone-900">Biển là nguồn cảm hứng bất tận</h3>
              <p className="text-sm text-stone-600">
                Bikini Đà Nẵng được tạo ra bởi những nhà thiết kế sinh ra và lớn lên ở miền Trung. Mỗi bộ được hoàn thiện thủ công, bền vững và được thử nghiệm trong điều kiện nắng gió khắc nghiệt.
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-stone-400">Tận hưởng</p>
              <p className="text-sm text-stone-600">
                Đăng ký nhận tin để biết lịch ra mắt danh mục mới, kết hợp phụ kiện và các mẹo bảo quản đồ bơi.
              </p>
              <form className="mt-4 flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Email của bạn"
                  className="h-12 flex-1 rounded-2xl border border-stone-200 bg-white/70 px-4 text-sm text-stone-700 placeholder:text-stone-400 focus:border-stone-400 focus:outline-none"
                />
                <button type="submit" className="btn-primary h-12">
                  Đăng ký
                </button>
              </form>
            </div>
          </aside>
        </section>

        {heroHighlight && (
          <section className="grid gap-8 rounded-[40px] border border-stone-200 bg-white/75 p-10 shadow-[0_40px_100px_-80px_rgba(67,47,21,0.45)] md:grid-cols-[1fr_1.1fr]">
            <div className="space-y-5">
              <span className="badge">Góc phối đồ</span>
              <h2 className="text-2xl font-semibold text-stone-900">{heroHighlight.name}</h2>
              <p className="text-sm text-stone-600">
                {heroHighlight.summary ?? "Thiết kế tối giản, ôm dáng nhưng vẫn thoải mái cho cả ngày dài bên biển."}
              </p>
              <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.3em] text-stone-400">
                {heroHighlight.sizes.map((size) => (
                  <span key={size} className="rounded-full border border-stone-200 px-4 py-1 text-stone-600">
                    {size}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a className="btn-primary" href={`/bikini/${heroHighlight.slug}`}>
                  Xem chi tiết
                </a>
                <a className="btn-secondary" href="/cart">
                  Thêm vào giỏ
                </a>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="aspect-[4/5] w-full rounded-[28px] border border-dashed border-stone-300 bg-gradient-to-br from-stone-100 via-white to-stone-200" />
              <div className="flex flex-col justify-between rounded-[28px] border border-stone-200 bg-[#f7f2eb] p-6 text-sm text-stone-600">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-stone-400">Giá bán</p>
                  <p className="mt-2 text-lg font-semibold text-stone-800">
                    {formatter.format(heroHighlight.sale_price ?? heroHighlight.price)}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-stone-400">Chất liệu</p>
                  <p className="mt-2">Polyester tái chế, chống tia UV và co giãn 4 chiều.</p>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
