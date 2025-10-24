import Image from 'next/image'

import Links from '@/components/Links'
import HeroSection from '@/components/HeroSection'
import { dadosAtendimentosArray } from '@/utils/dados'
import { ServiceCard } from '@/components/ServiceCardPage'

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="bg-brand-contact py-20 md:py-32">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 lg:px-8">
          <div className="w-full">
            <Image src="/images/mari.jpg" alt="Foto de Marî Brañdz" width={500} height={500} objectFit="cover" className="rounded-lg shadow-2xl" />
          </div>
          <div>
            <h2 className="font-serif text-5xl font-bold tracking-wider text-brand-green">
              Prazer, eu sou a Marî Brañdz
            </h2>
            <p className="mt-6 text-lg text-brand-text-muted">
              Sou Artista Visual, Astróloga, Taróloga e Reikiana. Nascida em berço artístico, desde muito nova desenvolvi minha paixão pela arte, música e espiritualidade.
            </p>
            <p className="mt-4 text-lg text-brand-text-muted">
              Minha missão é guiar você em sua jornada de autoconhecimento, expansão da consciência e cura.
            </p>
            <Links link="/mari-brandz" texto='🌞 Minha História' colorBg='yellow' colorTexto='text' />
          </div>
        </div>
      </section>
      <section className="bg-brand-bg py-20 md:py-32"> 
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mb-16 text-center font-serif text-5xl font-bold tracking-wider text-brand-brown">
            Principais Atendimentos
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {dadosAtendimentosArray.map((item) => <ServiceCard key={item.titulo} servico={item} /> )}
          </div>
          <div className="mt-20 text-center">
            <Links link="/atendimentos" texto='✨ Ver todos os atendimentos' colorBg='brown' colorTexto='white' />
          </div>
        </div>
      </section>
    </>
  )
}

