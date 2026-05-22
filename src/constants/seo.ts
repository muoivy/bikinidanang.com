import type { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: {
    default: 'BikiniDanang | Đồ bơi nữ cao cấp',
    template: '%s | BikiniDanang',
  },
  description: 'BikiniDanang - Shop đồ bơi, bikini thời trang cho thị trường Việt Nam.',
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    siteName: 'BikiniDanang',
  },
  robots: {
    index: true,
    follow: true,
  },
};
