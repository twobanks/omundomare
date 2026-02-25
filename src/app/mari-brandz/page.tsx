import AtendimentoSection from '@/components/AtendimentoSection'
import HeadSection from '@/components/HeadSection'
import { dadosAtendimentoSobre } from '@/utils/dados'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FaHandHoldingHeart, FaLayerGroup, FaMoon, FaPaintBrush } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Sobre mim', 
  description: 'Conhecendo a Marî Brañdz',
}

export default function QuemSomosPage() {
  return (
    <>
      <HeadSection image="/images/bg_tarot.jpg" titulo='Marî Brañdz`' />
      <section className="bg-brand-contact py-16 md:py-24">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 md:gap-16 lg:px-8">
          <div className="w-full order-1">
            <div className="relative mx-auto w-full max-w-sm md:max-w-full">
              <Image src="/images/mari.jpg" alt="Foto de Marî Brañdz" width={500} height={500} style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <div className="order-2 text-center md:text-left">
            <h2 className="font-serif text-3xl font-bold tracking-wider text-brand-yellow-dark sm:text-4xl lg:text-5xl">
              Uma jornada de Arte e Espiritualidade
            </h2>
            <div className="mt-6 space-y-6 text-base text-brand-text-muted sm:text-lg leading-relaxed">
              <p>
                <strong className='text-brand-green'>Marî Brañdz`</strong> é artista visual, astróloga, taróloga, cartomante, reikiana e manicure-pedicure.
              </p>
              <p>
                Nascida em berço artístico zona norte de SP, desde muito nova mudou-se p/ terras mineiras Uberaba. Cresceu em um berço artístico, entre cores, música e espiritualidade, desenvolvendo sua paixão pela arte em terreiros afro-indígenas e mesas kardecistas.
              </p>
              <p>
                Com Ascendente em Peixes, Sol e Vênus em Virgem e Lua em Capricórnio, une o sensível ao prático em tudo o que cria.
              </p>
              <p>
                Formada em Astrologia Humanista pela escola de saberes ocultos Tanto Astral, cursou Tec de Enfermagem, Serviço Social na UFTM, Marketing, História e se especializou em atendimentos holísticos: Reiki, Cartas de Tarot de forma cartomante, visando unir seus conhecimentos artísticos com o autoconhecimento, a cura e a espiritualidade.
              </p>
              <p>
                Fundadora do <Link href="/atendimentos" className="font-bold text-brand-green hover:text-brand-yellow-dark">@omundomare</Link> 🌞, seu propósito é guiar pessoas em suas jornadas de autoconhecimento, expansão da consciência e cura através do servir.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-brand-icon py-16 md:py-24">
        <div className="container mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold tracking-wider text-brand-brown sm:text-4xl lg:text-5xl">
            Minhas Ferramentas
          </h2>
          <div className="grid grid-cols-2 gap-10 text-center md:grid-cols-4">
            <div className="flex flex-col items-center group">
              <FaMoon className="h-12 w-12 text-brand-brown transition-transform group-hover:scale-110 sm:h-16 sm:w-16" />
              <h3 className="mt-6 font-serif text-xl font-bold text-brand-brown-light sm:text-2xl lg:text-3xl">Astrologia</h3>
              <p className="mt-2 text-sm text-brand-bg sm:text-base">Leitura de Mapas</p>
            </div>
            <div className="flex flex-col items-center group">
              <FaLayerGroup className="h-12 w-12 text-brand-brown transition-transform group-hover:scale-110 sm:h-16 sm:w-16" />
              <h3 className="mt-6 font-serif text-xl font-bold text-brand-brown-light sm:text-2xl lg:text-3xl">Tarot</h3>
              <p className="mt-2 text-sm text-brand-bg sm:text-base">Orientação e Clareza</p>
            </div>
            <div className="flex flex-col items-center group">
              <FaHandHoldingHeart className="h-12 w-12 text-brand-brown transition-transform group-hover:scale-110 sm:h-16 sm:w-16" />
              <h3 className="mt-6 font-serif text-xl font-bold text-brand-brown-light sm:text-2xl lg:text-3xl">Reiki</h3>
              <p className="mt-2 text-sm text-brand-bg sm:text-base">Cura Energética</p>
            </div>
            <div className="flex flex-col items-center group">
              <FaPaintBrush className="h-12 w-12 text-brand-brown transition-transform group-hover:scale-110 sm:h-16 sm:w-16" />
              <h3 className="mt-6 font-serif text-xl font-bold text-brand-brown-light sm:text-2xl lg:text-3xl">Arte</h3>
              <p className="mt-2 text-sm text-brand-bg sm:text-base">Expressão e Terapia</p>
            </div>
          </div>
        </div>
      </section>
      <AtendimentoSection dados={dadosAtendimentoSobre} />
    </>
  )
}