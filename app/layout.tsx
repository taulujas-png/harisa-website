import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin", "cyrillic"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Harisa — Живой арабский для мусульман',
  description: 'Арабский язык через живую практику и игры. Говоришь с первого урока. Школа арабского для русскоязычных мусульман в Бишкеке.',
  keywords: ['арабский язык', 'бишкек', 'мусульмане', 'обучение', 'harisa'],
}

export const viewport = {
  themeColor: '#F8F7F4',
}

import { Suspense } from 'react';
import { PromoTracker } from '@/components/promo-tracker';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="bg-off-white">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Suspense fallback={null}>
          <PromoTracker />
        </Suspense>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
