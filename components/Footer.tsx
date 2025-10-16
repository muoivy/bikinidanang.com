export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white/60 backdrop-blur">
      <div className="container py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
        <div>
          <p className="font-semibold">Bikini Boutique</p>
          <p className="mt-2 text-slate-600">Thời trang biển cho mọi vóc dáng. Bền vững, thân thiện môi trường.</p>
        </div>
        <div>
          <p className="font-semibold">Mua sắm</p>
          <ul className="mt-2 space-y-2 text-slate-600">
            <li><a href="/bikini" className="hover:text-emerald-700">Bikini</a></li>
            <li><a href="/bikini/one-piece" className="hover:text-emerald-700">One‑piece</a></li>
            <li><a href="/phu-kien" className="hover:text-emerald-700">Phụ kiện</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">CSKH</p>
          <ul className="mt-2 space-y-2 text-slate-600">
            <li><a href="/van-chuyen">Vận chuyển</a></li>
            <li><a href="/doi-tra">Đổi trả</a></li>
            <li><a href="/bao-mat">Bảo mật</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Liên hệ</p>
          <p className="mt-2 text-slate-600">hello@bikini-boutique.vn</p>
          <p className="text-slate-600">+84 90 000 0000</p>
          <div className="mt-4 flex gap-3">
            <a className="rounded-full border px-3 py-1" href="#">Instagram</a>
            <a className="rounded-full border px-3 py-1" href="#">Facebook</a>
            <a className="rounded-full border px-3 py-1" href="#">TikTok</a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 pb-8">© 2025 Bikini Boutique. All rights reserved.</div>
    </footer>
  );
}
