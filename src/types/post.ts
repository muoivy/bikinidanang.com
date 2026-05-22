export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  content?: string;
  publishedAt?: string;
  featuredImageUrl?: string;
}
