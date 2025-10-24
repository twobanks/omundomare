/* eslint-disable react/no-unescaped-entities */
import AtendimentoSection from '@/components/AtendimentoSection'
import HeadSection from '@/components/HeadSection'
import { dadosReiki } from '@/utils/dados'
import Image from 'next/image'
import { FaSpa, FaSmileBeam, FaHandHoldingHeart } from 'react-icons/fa'

export default function ReikiPage() {
  return (
    <>
      <HeadSection image="/images/bg-mapa-astral.jpg" titulo='Reiki' />
      <section className="bg-brand-contact py-20 md:py-24">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 lg:px-8">
          <div className="w-full">
            <Image src="/images/Main-Banner.png" alt="Mãos em posição de cura Reiki" width={500} height={500} objectFit="cover" />
          </div>
          <div className="text-left">
            <h2 className="font-serif text-5xl font-bold tracking-wider text-brand-brown">
              O que é o Reiki?
            </h2>
            <div className="mt-6 space-y-5 text-lg text-brand-text">
              <p>
                O Reiki é uma terapia japonesa de cura energética através da imposição das mãos. A palavra "Rei" significa "energia universal" e "Ki" significa "energia vital".
              </p>
              <p>
                Através do Reiki, o terapeuta canaliza a energia universal e a transmite para o paciente, promovendo o equilíbrio energético, físico, mental e emocional.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-brand-brown-light py-20">
        <div className="container mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="mb-16 text-center font-serif text-5xl font-bold tracking-wider text-brand-brown">
            O que você pode sentir
          </h2>
          <div className="grid grid-cols-1 gap-10 text-center text-brand-text md:grid-cols-3">
            <div className="flex flex-col items-center">
              <FaSpa className="h-16 w-16 text-brand-icon" />
              <h3 className="mt-4 font-serif text-3xl font-bold text-brand-brown">Relaxamento</h3>
              <p className="mt-2 text-brand-text">
                Alívio imediato do estresse e ansiedade.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FaSmileBeam className="h-16 w-16 text-brand-icon" />
              <h3 className="mt-4 font-serif text-3xl font-bold text-brand-brown">Equilíbrio</h3>
              <p className="mt-2 text-brand-text">
                Harmonização dos seus centros de energia.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FaHandHoldingHeart className="h-16 w-16 text-brand-icon" />
              <h3 className="mt-4 font-serif text-3xl font-bold text-brand-brown">Bem-Estar Geral</h3>
              <p className="mt-2 text-brand-text">
                Apoio ao processo de cura físico e emocional.
              </p>
            </div>
          </div>
        </div>
      </section>
      <AtendimentoSection dados={dadosReiki} />
    </>
  )
}