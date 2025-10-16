import { getAllProducts, getAllCollections } from "@/lib/data";

export default async function sitemap() {
  const base = "https://example.com";
  const staticUrls = ["", "/bikini"].map((p) => ({
    url: base + p,
    changeFrequency: "daily",
    priority: 0.9,
  }));

  const collections = (await getAllCollections()).map((c) => ({
    url: `${base}/bikini/${c.slug}`,
    changeFrequency: "daily",
    priority: 0.8,
  }));

  const products = (await getAllProducts()).map((p) => ({
    url: `${base}/bikini/${p.slug}`,
    lastModified: p.updatedAt,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticUrls, ...collections, ...products];
}
