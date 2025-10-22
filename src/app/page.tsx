import Image from 'next/image'
import Link from 'next/link'

import ServiceCard from '@/components/ServiceCard'

import imgMapa from '../../public/images/mapa-astral.webp'
import imgTarot from '../../public/images/bg_tarot.jpg'
import imgReiki from '../../public/images/bg-reiki.jpg'

export default function Home() {
  return (
    <>
      <section className="relative flex h-[90vh] min-h-[300px] items-center justify-center text-center">
        <Image src="/images/bg-hero.jpg" alt="Galáxia com tons de roxo e azul" layout="fill" objectFit="cover" quality={75} className="-z-10 brightness-50" />
        <div className="z-10 flex flex-col items-center px-4">
          <h1 className="font-serif text-5xl font-bold uppercase tracking-widest text-white md:text-7xl">
            Desvende seu Caminho
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-white md:text-2xl">
            Terapias holísticas, Astrologia e Arte para sua jornada de autoconhecimento e cura.
          </p>
        </div>
      </section>
      <section className="bg-brand-white py-20 md:py-32">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 lg:px-8">
          <div className="w-full">
            <Image src="/images/mari.jpg" alt="Foto de Marî Brañdz" width={500} height={500} objectFit="cover" className="rounded-lg shadow-2xl" />
          </div>
          <div>
            <h2 className="font-serif text-4xl font-bold uppercase tracking-wider text-yellow-500">
              Prazer, eu sou a Marî Brañdz
            </h2>
            <p className="mt-6 text-lg text-brand-text-muted">
              Sou Artista Visual, Astróloga, Taróloga e Reikiana. Nascida em berço artístico, desde muito nova desenvolvi minha paixão pela arte, música e espiritualidade.
            </p>
            <p className="mt-4 text-lg text-brand-text-muted">
              Minha missão é guiar você em sua jornada de autoconhecimento, expansão da consciência e cura.
            </p>
            <Link href="/mari-brandz" className="mt-8 inline-block rounded-full px-10 py-2 text-base font-bold uppercase tracking-wider text-black bg-yellow-500 transition-colors hover:bg-black hover:text-white">
              Minha História
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-brand-bg py-20 md:py-32"> 
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mb-16 text-center font-serif text-4xl font-bold uppercase tracking-wider text-violet-500">
            Principais Atendimentos
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <ServiceCard
              imagemUrl={imgMapa}
              alt="Mapa Astral"
              titulo="Mapa Astral"
              descricao="Entenda sua personalidade, seus desafios e seu propósito de vida através da leitura do seu mapa de nascimento."
              link="/atendimentos/mapa-astral"
            />
            <ServiceCard
              imagemUrl={imgTarot}
              alt="Tarot"
              titulo="Tarot Terapêutico"
              descricao="Receba clareza, orientação e aconselhamento para suas decisões e desafios do momento presente."
              link="/atendimentos/tarot"
            />
            <ServiceCard
              imagemUrl={imgReiki}
              alt="Reiki"
              titulo="Reiki"
              descricao="Equilibre seus centros de energia (chakras) e promova o bem-estar físico, mental e emocional."
              link="/atendimentos/reiki"
            />
          </div>
          <div className="mt-16 text-center">
            <Link href="/atendimentos" className="rounded-full bg-violet-500 px-12 py-3 text-lg font-bold uppercase tracking-wider text-white shadow-lg transition-transform hover:bg-black hover:text-white">
              Ver todos os serviços
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

