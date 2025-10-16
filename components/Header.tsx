export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/70 bg-[#f7f2eb]/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 text-sm text-stone-600" role="navigation" aria-label="Chính">
        <a href="/" className="font-semibold tracking-[0.24em] uppercase text-stone-500">Bikini Danang</a>
        <nav className="hidden md:flex items-center gap-8">
          <a className="hover:text-stone-800 transition-colors" href="/">Trang chủ</a>
          <a className="hover:text-stone-800 transition-colors" href="/bikini">Bộ sưu tập</a>
          <a className="hover:text-stone-800 transition-colors" href="/bikini/one-piece">One-piece</a>
          <a className="hover:text-stone-800 transition-colors" href="/lien-he">Liên hệ</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="hidden rounded-full border border-stone-300 px-4 py-2 text-xs uppercase tracking-[0.2em] text-stone-500 transition-colors hover:border-stone-400 hover:text-stone-700 md:inline-flex">Tìm kiếm</button>
          <a href="/cart" className="rounded-full border border-stone-300 px-4 py-2 text-xs uppercase tracking-[0.2em] text-stone-500 transition-colors hover:border-stone-400 hover:text-stone-700">Giỏ hàng</a>
        </div>
      </div>
    </header>
  );
}
