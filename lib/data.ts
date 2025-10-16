import fs from "node:fs/promises";
import path from "node:path";
import type { Product, Collection } from "./types";

const dataDir = path.join(process.cwd(), "data");

export async function getAllProducts(): Promise<Product[]> {
  const dir = path.join(dataDir, "products");
  const files = await fs.readdir(dir);
  const items = await Promise.all(files.map(async (f) => {
    const raw = await fs.readFile(path.join(dir, f), "utf-8");
    return JSON.parse(raw) as Product;
  }));
  return items;
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const all = await getAllProducts();
  return all.find(p => p.slug === slug);
}

export async function getAllCollections(): Promise<Collection[]> {
  const raw = await fs.readFile(path.join(dataDir, "collections.json"), "utf-8");
  return JSON.parse(raw) as Collection[];
}

export async function getProductsByCollection(slug: string): Promise<Product[]> {
  const all = await getAllProducts();
  return all.filter(p => p.collection === slug);
}
