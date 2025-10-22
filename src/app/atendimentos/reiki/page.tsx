/* eslint-disable react/no-unescaped-entities */
import CardAtendimento from '@/components/AtendimentoCard'
import { dadosReiki } from '@/utils/dados'
import Image from 'next/image'
import { FaSpa, FaSmileBeam, FaHandHoldingHeart } from 'react-icons/fa'

export default function ReikiPage() {
  return (
    <>
      <section className="relative flex h-[40vh] min-h-[300px] items-center justify-center text-center">
        <Image src="/images/bg-mapa-astral.jpg"  alt="Mapa Astral e Zodíaco" layout="fill" objectFit="cover" quality={75} className="-z-10 brightness-50" />
        <div className="z-10 p-4 text-brand-white">
          <h1 className="font-serif text-5xl font-bold tracking-widest">
            Reiki
          </h1>
          <p className="mt-4 text-xl md:text-2xl">
            Cura e equilíbrio através da energia universal.
          </p>
        </div>
      </section>
      <section className="bg-brand-white py-20 md:py-24">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 lg:px-8">
          <div className="w-full">
            <Image src="/images/bg-reiki.jpg" alt="Mãos em posição de cura Reiki" width={500} height={500} objectFit="cover" className="rounded-lg shadow-2xl" />
          </div>
          <div className="text-left">
            <h2 className="font-serif text-4xl font-bold tracking-wider text-brand-text">
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
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="mb-16 text-center font-serif text-4xl font-bold tracking-wider text-brand-text">
            O que você pode sentir
          </h2>
          <div className="grid grid-cols-1 gap-10 text-center text-brand-text md:grid-cols-3">
            <div className="flex flex-col items-center">
              <FaSpa className="h-16 w-16 text-brand-text" />
              <h3 className="mt-4 font-serif text-2xl font-bold">Relaxamento</h3>
              <p className="mt-2 text-gray-300">
                Alívio imediato do estresse e ansiedade.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FaSmileBeam className="h-16 w-16 text-brand-text" />
              <h3 className="mt-4 font-serif text-2xl font-bold">Equilíbrio</h3>
              <p className="mt-2 text-gray-300">
                Harmonização dos seus centros de energia.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FaHandHoldingHeart className="h-16 w-16 text-brand-text" />
              <h3 className="mt-4 font-serif text-2xl font-bold">Bem-Estar Geral</h3>
              <p className="mt-2 text-gray-300">
                Apoio ao processo de cura físico e emocional.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CardAtendimento dados={dadosReiki} />
    </>
  )
}