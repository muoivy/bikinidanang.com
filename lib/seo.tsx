import type { Metadata } from "next";
import type { Product } from "./types";

export function productMetadata(p: Product, base = "https://example.com"): Metadata {
  const title = p.seoTitle ?? `${p.name} | Bikini Boutique`;
  const url = `${base}/bikini/${p.slug}`;
  const desc = p.seoDescription ?? p.summary ?? "";

  return {
    title,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      type: "product",
      url,
      title,
      description: desc,
      images: [{ url: p.images[0], width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title, description: desc, images: [p.images[0]] },
  };
}

export function ProductJsonLd({ p }: { p: Product }) {
  const data = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: p.name,
    image: p.images,
    description: p.seoDescription ?? p.summary,
    sku: p.sku,
    brand: { "@type": "Brand", name: "Bikini Boutique" },
    offers: {
      "@type": "Offer",
      url: `https://example.com/bikini/${p.slug}`,
      priceCurrency: p.currency,
      price: p.sale_price ?? p.price,
      availability: p.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      itemCondition: "https://schema.org/NewCondition",
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
