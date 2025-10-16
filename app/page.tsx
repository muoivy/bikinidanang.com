import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { getAllProducts } from "@/lib/data";

export const revalidate = 300; // ISR

export default async function Home() {
  const items = await getAllProducts();
  return (
    <div className="min-h-screen text-slate-800">
      <Header />
      <section className="section">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Khám phá bộ sưu tập bikini</h1>
          <div className="flex gap-2">
            <a className="pill" href="/bikini">Tất cả</a>
            <a className="pill" href="/bikini/one-piece">One‑piece</a>
            <a className="pill" href="/phu-kien">Phụ kiện</a>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>
      <Footer />
    </div>
  );
}
