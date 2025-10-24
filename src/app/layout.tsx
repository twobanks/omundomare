import React from 'react'
import { Roboto, Satisfy, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

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
  title: '🌞 OMUNDOMARE Por Marî Brañdz',
  description: 'Desvende seu Caminho com Terapias holísticas, Astrologia e Arte para sua jornada de autoconhecimento e cura.',
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