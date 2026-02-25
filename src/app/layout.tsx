import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Poppins, Roboto, Satisfy } from 'next/font/google'
import React from 'react'
import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '700'],
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '700'],
})

const anton = Satisfy({
  weight: ['400'], 
  variable: '--font-anton', 
})



export const metadata = {
  title: {
    template: '%s | 🌞 OMUNDOMARE Por Marî Brañdz',
    default: '🌞 OMUNDOMARE Por Marî Brañdz',
  },
  description: 'Desvende seu Caminho com Terapias holísticas, Astrologia e Arte para sua jornada de autoconhecimento e cura.',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://omundomare.vercel.app/',
    siteName: '🌞 OMUNDOMARE Por Marî Brañdz',
    images: [
      {
        url: '/images/bg_tarot.jpg', 
        width: 1200,
        height: 630,
        alt: 'OMUNDOMARE Por Marî Brañdz',
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className={`${roboto.variable} ${anton.variable} ${poppins.variable}`} suppressHydrationWarning>
      <body className="font-sans bg-brand-bg text-brand-text" suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}