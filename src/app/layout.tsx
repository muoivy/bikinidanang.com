import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Header from '@/components/layout/Header';
import { buildMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = buildMetadata();

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
