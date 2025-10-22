import React from 'react'
import { Roboto_Serif } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const roboto = Roboto_Serif({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '700'],
})

export const metadata = {
  title: '🌞 OMUNDOMARE Por Marî Brañdz',
  description: 'Desvende seu Caminho com Terapias holísticas, Astrologia e Arte para sua jornada de autoconhecimento e cura.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className={`${roboto.variable} `} suppressHydrationWarning={true}>
      <body className="font-sans bg-brand-bg text-brand-text">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}