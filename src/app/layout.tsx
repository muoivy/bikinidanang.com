import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import type { ReactNode } from 'react';
import Header from '@/components/layout/Header';
import { buildMetadata } from '@/lib/seo/metadata';

const poppins = Poppins({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap'
});


export const metadata: Metadata = buildMetadata();

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi">
      <body className={poppins.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
