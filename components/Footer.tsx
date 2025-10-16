export default function Footer() {
  return (
    <footer className="border-t border-stone-200/70 bg-[#f7f2eb]">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 text-sm text-stone-600 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.24em] text-stone-400">Thương hiệu</p>
          <p className="text-lg font-semibold text-stone-700">Bikini Danang</p>
          <p>Phong cách tối giản, chất liệu thân thiện với biển Đà Nẵng.</p>
        </div>
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.24em] text-stone-400">Khám phá</p>
          <ul className="space-y-2">
            <li><a className="transition-colors hover:text-stone-800" href="/bikini">Tất cả sản phẩm</a></li>
            <li><a className="transition-colors hover:text-stone-800" href="/bikini/one-piece">One-piece</a></li>
            <li><a className="transition-colors hover:text-stone-800" href="/phu-kien">Phụ kiện</a></li>
          </ul>
        </div>
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.24em] text-stone-400">Hỗ trợ</p>
          <ul className="space-y-2">
            <li><a className="transition-colors hover:text-stone-800" href="/van-chuyen">Giao hàng</a></li>
            <li><a className="transition-colors hover:text-stone-800" href="/doi-tra">Đổi trả</a></li>
            <li><a className="transition-colors hover:text-stone-800" href="/bao-mat">Chính sách bảo mật</a></li>
          </ul>
        </div>
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.24em] text-stone-400">Liên hệ</p>
          <p>hello@bikinidanang.com</p>
          <p>+84 90 000 0000</p>
          <div className="flex gap-3 pt-2 text-xs uppercase tracking-[0.2em]">
            <a className="rounded-full border border-stone-300 px-3 py-1 transition-colors hover:border-stone-400 hover:text-stone-800" href="#">Instagram</a>
            <a className="rounded-full border border-stone-300 px-3 py-1 transition-colors hover:border-stone-400 hover:text-stone-800" href="#">Facebook</a>
          </div>
        </div>
      </div>
      <div className="pb-10 text-center text-xs uppercase tracking-[0.2em] text-stone-400">© 2025 Bikini Danang</div>
    </footer>
  );
}
