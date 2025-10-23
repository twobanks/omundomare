/* eslint-disable react/no-unescaped-entities */
import CardAtendimento from '@/components/AtendimentoCard'
import { dadosTarot } from '@/utils/dados'
import Image from 'next/image'
import { FaLightbulb, FaCompass, FaQuestion, FaCalendarAlt, FaVideo, FaMicrophoneAlt } from 'react-icons/fa'

export default function TarotPage() {
  return (
    <>
      <section className="relative flex h-[40vh] min-h-[300px] items-center justify-center text-center">
        <Image src="/images/bg-mapa-astral.jpg"  alt="Mapa Astral e Zodíaco" layout="fill" objectFit="cover" quality={75} className="-z-10 brightness-50" />
        <div className="z-10 p-4 text-brand-white">
          <h1 className="font-serif text-6xl font-bold tracking-widest text-brand-green">
            Tarot
          </h1>
          <p className="mt-4 text-xl md:text-2xl">
            Clareza e orientação para sua jornada.
          </p>
        </div>
      </section>
      <section className="bg-brand-white py-20 md:py-24">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 lg:px-8">
          <div className="w-full">
            <Image src="/images/bg-reiki.jpg" alt="Mãos em posição de cura Reiki" width={500} height={500} objectFit="cover" className="rounded-lg shadow-2xl" />
          </div>
          <div className="text-left">
            <h2 className="font-serif text-5xl font-bold tracking-wider text-brand-green">
              O que é o Tarot?
            </h2>
            <div className="mt-6 space-y-5 text-lg text-brand-text">
              <p>
                O <strong className='text-brand-green'>Tarot</strong> é um oráculo ancestral e uma poderosa ferramenta deautoconhecimento. Ele utiliza um baralho de 78 cartas para acessar o inconsciente.
              </p>
              <p>
                Mais do que "prever o futuro", o Tarot ilumina o seu momento presente, revela padrões, bloqueios e potenciais, permitindo que você tome decisões mais conscientes e alinhadas com o seu propósito.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-brand-green-light py-20">
        <div className="container mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="mb-12 text-center font-serif text-5xl font-bold tracking-wider text-brand-green">
            Benefícios da Leitura
          </h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="pt-1">
                <FaLightbulb className="h-10 w-10 text-brand-green" />
              </div>
              <div>
                <h3 className="font-serif text-3xl font-bold text-brand-green">Clareza</h3>
                <p className="mt-1 text-lg text-brand-text">
                  Ilumine situações, padrões e bloqueios da sua vida.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="pt-1">
                <FaCompass className="h-10 w-10 text-brand-green" />
              </div>
              <div>
                <h3 className="font-serif text-3xl font-bold text-brand-green">Direcionamento</h3>
                <p className="mt-1 text-lg text-brand-text">
                  Receba insights e aconselhamentos para tomar melhores decisões.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="pt-1">
                <FaQuestion className="h-10 w-10 text-brand-green" />
              </div>
              <div>
                <h3 className="font-serif text-3xl font-bold text-brand-green">Respostas</h3>
                <p className="mt-1 text-lg text-brand-text">
                  Traga suas dúvidas e encontre novas perspectivas e caminhos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CardAtendimento dados={dadosTarot} />
    </>
  )
}