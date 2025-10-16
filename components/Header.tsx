export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-slate-200/60">
      <div className="container h-16 flex items-center justify-between" role="navigation" aria-label="Chính">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-rose-400 to-orange-300 shadow" />
          <a href="/" className="font-semibold tracking-wide">Bikini Boutique</a>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="/bikini" className="hover:text-emerald-700">Bikini</a>
          <a href="/bikini/one-piece" className="hover:text-emerald-700">One‑piece</a>
          <a href="/khuyen-mai" className="hover:text-emerald-700">Khuyến mãi</a>
          <a href="/lien-he" className="hover:text-emerald-700">Liên hệ</a>
        </nav>
        <div className="flex items-center gap-3">
          <label className="hidden md:block">
            <span className="sr-only">Tìm kiếm</span>
            <input className="rounded-full border border-slate-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Tìm bikini, one‑piece…" />
          </label>
          <a href="/cart" className="relative rounded-full border px-3 py-2 text-sm hover:bg-slate-50">Cart
            <span className="ml-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white text-xs">0</span>
          </a>
        </div>
      </div>
    </header>
  );
}
