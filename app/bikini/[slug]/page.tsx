import { getProductBySlug } from "@/lib/data";
import { ProductJsonLd, productMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const revalidate = 300;

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = await getProductBySlug(params.slug);
  if (!p) return { title: "Sản phẩm không tồn tại" };
  return productMetadata(p);
}

export default async function ProductPage({ params }: Props) {
  const p = await getProductBySlug(params.slug);
  if (!p) return <div className="section"><h1>Không tìm thấy sản phẩm</h1></div>;

  return (
    <div className="section grid lg:grid-cols-2 gap-8">
      <div className="card overflow-hidden">
        <img src={p.images[0]} alt={p.name} className="w-full object-cover" />
      </div>
      <div>
        <nav className="text-sm text-slate-500 mb-2">Trang chủ / Bikini / {p.name}</nav>
        <h1 className="text-3xl font-bold mb-2">{p.name}</h1>
        <p className="text-xl font-semibold mb-4">{new Intl.NumberFormat("vi-VN").format(p.sale_price ?? p.price)} VND</p>
        <div className="mb-6 text-slate-600">{p.summary}</div>
        <button className="btn-primary">Thêm vào giỏ hàng</button>
      </div>
      <ProductJsonLd p={p} />
    </div>
  );
}
