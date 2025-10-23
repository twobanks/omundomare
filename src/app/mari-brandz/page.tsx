import CardAtendimento from '@/components/AtendimentoCard'
import Image from 'next/image'
import Link from 'next/link'
import { FaMoon, FaLayerGroup, FaHandHoldingHeart, FaPaintBrush } from 'react-icons/fa'

const dadosAtendimento = {
  titulo: 'Pronta para começar sua jornada?',
  texto: 'Estou aqui para te guiar. Veja os atendimentos disponíveis e encontre o que mais ressoa com você.',
  titulo_link: 'Ver Atendimentos',
}

export default function QuemSomosPage() {
  return (
    <>
      <section className="relative flex h-[40vh] min-h-[300px] items-center justify-center text-center">
        <Image src="/images/bg_tarot.jpg" alt="Galáxia com tons de roxo e azul" layout="fill" objectFit="cover" quality={75} className="-z-10 brightness-50"  />
        <div className="z-10 p-4 text-brand-white">
          <h1 className="font-serif text-6xl font-bold tracking-widest text-brand-yellow"> Marî Brañdz` </h1>
          <p className="mt-4 text-xl md:text-2xl"> Artista, Astróloga, Taróloga e Terapeuta Holística. </p>
        </div>
      </section>
      <section className="bg-brand-contact py-20 md:py-32">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 lg:px-8">
          <div className="w-full">
            <Image src="/images/mari.jpg" alt="Foto de Marî Brañdz" width={500} height={500} objectFit="cover" className="rounded-lg shadow-2xl"  />
          </div>
          <div className="text-left">
            <h2 className="font-serif text-5xl font-bold tracking-wider text-brand-yellow-dark">
              Uma jornada de Arte e Espiritualidade
            </h2>
            <div className="mt-6 space-y-5 text-lg text-brand-text-muted">
              <p>
                <strong className='text-brand-green'>Marî Brañdz`</strong> é Artista Visual, Astróloga, Taróloga e Reikiana.
              </p>
              <p>
                Nascida em berço artístico, desde muito nova desenvolveu sua paixão pela arte, música e espiritualidade.
              </p>
              <p>
                Formada em Design de Moda pela Universidade FUMEC e Pós Graduada em Arteterapia, se especializou em atendimentos holísticos, visando unir seus conhecimentos artísticos com o autoconhecimento, a cura e a espiritualidade.
              </p>
              <p>
                Fundadora do <Link href="/atendimentos" className="font-bold text-brand-green hover:text-brand-yellow-dark">@omundomare</Link> 🌞, seu propósito é guiar pessoas em suas jornadas de autoconhecimento, expansão da consciência e cura.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-brand-green py-20">
        <div className="container mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="mb-16 text-center font-serif text-5xl font-bold tracking-wider text-brand-white">
            Minhas Ferramentas
          </h2>
          <div className="grid grid-cols-2 gap-8 text-center text-gray-200 md:grid-cols-4">
            <div className="flex flex-col items-center">
              <FaMoon className="h-16 w-16 text-brand-green-light" />
              <h3 className="mt-8 font-serif text-3xl font-bold text-brand-white">Astrologia</h3>
              <p className="mt-2 text-brand-bg">Leitura de Mapas</p>
            </div>
            <div className="flex flex-col items-center">
              <FaLayerGroup className="h-16 w-16 text-brand-green-light" />
              <h3 className="mt-8 font-serif text-3xl font-bold text-brand-white">Tarot</h3>
              <p className="mt-2 text-brand-bg">Orientação e Clareza</p>
            </div>
            <div className="flex flex-col items-center">
              <FaHandHoldingHeart className="h-16 w-16 text-brand-green-light" />
              <h3 className="mt-8 font-serif text-3xl font-bold text-brand-white">Reiki</h3>
              <p className="mt-2 text-brand-bg">Cura Energética</p>
            </div>
            <div className="flex flex-col items-center">
              <FaPaintBrush className="h-16 w-16 text-brand-green-light" />
              <h3 className="mt-8 font-serif text-3xl font-bold text-brand-white">Arte</h3>
              <p className="mt-2 text-brand-bg">Expressão e Terapia</p>
            </div>
          </div>
        </div>
      </section>
      <CardAtendimento dados={dadosAtendimento} />
    </>
  )
}