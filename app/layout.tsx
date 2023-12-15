import type { Metadata } from 'next'
import './globals.css'

import { poppins, workSans } from '@/fonts';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio of Mritunjay Upadhyay',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="./favicon.ico" sizes="any" />
      </head>
      <body className={['bg-slate-300/20', poppins.variable, workSans.variable].join(' ')}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
