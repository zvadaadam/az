import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Adam Zvada',
  description: 'Adam Zvada\'s personal site. His thoughts, ideas, and recommendations.',
  openGraph: {
    images: 'https://firebasestorage.googleapis.com/v0/b/adamzvada-36805.appspot.com/o/og.png?alt=media&token=f56192ed-e834-4116-a13f-899d3b95a8bf',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-black'>
      {/* <Head>
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/adamzvada-36805.appspot.com/o/og.png?alt=media&token=f56192ed-e834-4116-a13f-899d3b95a8bf" />
      </Head> */}
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
