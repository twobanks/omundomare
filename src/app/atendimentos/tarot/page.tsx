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
          <h1 className="font-serif text-5xl font-bold uppercase tracking-widest">
            Tarot Terapêutico
          </h1>
          <p className="mt-4 text-xl md:text-2xl">
            Clareza e orientação para sua jornada.
          </p>
        </div>
      </section>
      <section className="bg-brand-white py-20 md:py-24">
        <div className="container mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="font-serif text-4xl font-bold tracking-wider text-brand-text">
            O que é o Tarot Terapêutico?
          </h2>
          <div className="mt-6 space-y-5 text-lg text-brand-text">
            <p>
              O Tarot é um oráculo ancestral e uma poderosa ferramenta deautoconhecimento. Ele utiliza um baralho de 78 cartas para acessar o inconsciente.
            </p>
            <p>
              Mais do que "prever o futuro", o Tarot terapêutico ilumina o seu momento presente, revela padrões, bloqueios e potenciais, permitindo que você tome decisões mais conscientes e alinhadas com o seu propósito.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-brand-bg py-20">
        <div className="container mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="mb-12 text-center font-serif text-4xl font-bold uppercase tracking-wider text-brand-text">
            Benefícios da Leitura
          </h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="pt-1">
                <FaLightbulb className="h-10 w-10 text-brand-text" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold">Clareza</h3>
                <p className="mt-1 text-lg text-gray-300">
                  Ilumine situações, padrões e bloqueios da sua vida.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="pt-1">
                <FaCompass className="h-10 w-10 text-brand-text" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold">Direcionamento</h3>
                <p className="mt-1 text-lg text-gray-300">
                  Receba insights e aconselhamentos para tomar melhores decisões.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="pt-1">
                <FaQuestion className="h-10 w-10 text-brand-text" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold">Respostas</h3>
                <p className="mt-1 text-lg text-gray-300">
                  Traga suas dúvidas e encontre novas perspectivas e caminhos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-brand-white py-20 md:py-24">
         <div className="container mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="mb-16 text-center font-serif text-4xl font-bold uppercase tracking-wider text-brand-text">
            Como funciona a sessão
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
             <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-brand-bg p-8 text-center">
              <FaCalendarAlt className="h-12 w-12 text-brand-text" />
              <h3 className="mt-6 font-serif text-2xl font-bold">1. Agendamento</h3>
            </div>
             <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-brand-bg p-8 text-center">
              <FaVideo className="h-12 w-12 text-brand-text" />
              <h3 className="mt-6 font-serif text-2xl font-bold">2. A Sessão</h3>
            </div>
             <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-brand-bg p-8 text-center">
              <FaMicrophoneAlt className="h-12 w-12 text-brand-text" />
              <h3 className="mt-6 font-serif text-2xl font-bold">3. Gravação</h3>
            </div>
          </div>
        </div>
      </section>
      <CardAtendimento dados={dadosTarot} />
    </>
  )
}