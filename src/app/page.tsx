import HeroSection from '@/components/HeroSection'
import Links from '@/components/Links'
import { ServiceCard } from '@/components/ServiceCardPage'
import { dadosAtendimentosArray } from '@/utils/dados'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <HeroSection />

      <section className="bg-brand-contact py-16 md:py-24 lg:py-32">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 md:gap-16 lg:px-8">
          <div className="w-full order-1 md:order-1">
            <div className="relative mx-auto w-full max-w-sm md:max-w-full">
              <Image src="/images/mari.jpg" alt="Foto de Marî Brañdz" width={500} height={500} style={{ objectFit: 'cover' }} className="h-auto w-full rounded-lg shadow-2xl" />
            </div>
          </div>
          <div className="order-2 md:order-2 text-center md:text-left">
            <h2 className="font-serif text-3xl font-bold tracking-wider text-brand-green sm:text-4xl lg:text-5xl">
              Prazer, eu sou a Marî Brañdz
            </h2>
            <p className="mt-6 text-base text-brand-text-muted sm:text-lg">
              Sou Artista Visual, Astróloga, Taróloga e Reikiana. Nascida em berço artístico, desde muito nova desenvolvi minha paixão pela arte, música e espiritualidade.
            </p>
            <p className="mt-4 text-base text-brand-text-muted sm:text-lg">
              Minha missão é guiar você em sua jornada de autoconhecimento, expansão da consciência e cura.
            </p>
            <div className="mt-8 flex justify-center md:justify-start">
              <Links link="/mari-brandz" texto='🌞 Minha História' colorBg='yellow' colorTexto='text' />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-brand-bg py-16 md:py-24 lg:py-32"> 
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold tracking-wider text-brand-brown sm:text-4xl lg:text-5xl">
            Principais Atendimentos
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {dadosAtendimentosArray.map((item) => (
              <ServiceCard key={item.titulo} servico={item} />
            ))}
          </div>
          <div className="mt-16 text-center sm:mt-20">
            <Links link="/atendimentos" texto='✨ Ver todos os atendimentos' colorBg='brown' colorTexto='white' />
          </div>
        </div>
      </section>
    </>
  )
}