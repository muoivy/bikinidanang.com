import type { Product } from "@/lib/types";

function Price({ value }: { value: number }) {
  const f = new Intl.NumberFormat("vi-VN");
  return <span>{f.format(value)} VND</span>;
}

function ColorDots({ colors }: { colors: string[] }) {
  return (
    <div className="flex items-center gap-1" aria-label="Màu sắc">
      {colors.map((c, i) => (
        <span key={i} className="h-4 w-4 rounded-full ring-1 ring-slate-300" style={{ background: c }} />
      ))}
    </div>
  );
}

export default function ProductCard({ p }: { p: Product }) {
  return (
    <article className="card group transition" itemScope itemType="https://schema.org/Product">
      <a href={`/bikini/${p.slug}`} className="block relative overflow-hidden rounded-xl" aria-label={p.name}>
        <img src={p.images[0]} alt={p.name} className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        {p.badges?.[0] && (
          <span className="absolute top-2 left-2 rounded-full bg-emerald-500 text-white text-xs px-2 py-1 shadow">{p.badges[0]}</span>
        )}
      </a>
      <div className="mt-3 space-y-1">
        <h3 className="font-medium leading-tight" itemProp="name">
          <a href={`/bikini/${p.slug}`} className="hover:underline">{p.name}</a>
        </h3>
        <p className="text-slate-600 text-sm">{p.sizes.join(" • ")}</p>
        <ColorDots colors={p.colors} />
        <p className="font-semibold" itemProp="offers" itemScope itemType="https://schema.org/Offer">
          <span itemProp="price"><Price value={p.sale_price ?? p.price} /></span>
          <meta itemProp="priceCurrency" content="VND" />
          <link itemProp="availability" href="https://schema.org/InStock" />
        </p>
      </div>
    </article>
  );
}
