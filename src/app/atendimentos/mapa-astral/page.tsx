/* eslint-disable react/no-unescaped-entities */
import CardAtendimento from '@/components/AtendimentoCard'
import { dadosMapa } from '@/utils/dados'
import Image from 'next/image'
import { FaBrain, FaHeart, FaBriefcase, FaStar, FaCalendarAlt, FaVideo, FaCloudDownloadAlt } from 'react-icons/fa'

export default function MapaAstralPage() {
  return (
    <>
      <section className="relative flex h-[40vh] min-h-[300px] items-center justify-center text-center">
        <Image src="/images/bg-mapa-astral.jpg"  alt="Mapa Astral e Zodíaco" layout="fill" objectFit="cover" quality={75} className="-z-10 brightness-50" />
        <div className="z-10 p-4 text-brand-white">
          <h1 className="font-serif text-5xl font-bold tracking-widest">
            Mapa Astral
          </h1>
          <p className="mt-4 text-xl md:text-2xl">
            O manual de instruções da sua alma.
          </p>
        </div>
      </section>
      <section className="bg-brand-white py-20 md:py-24">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 lg:px-8">
          <div className="text-left">
            <h2 className="font-serif text-4xl font-bold tracking-wider text-brand-text">
              O que é o Mapa Astral?
            </h2>
            <div className="mt-6 space-y-5 text-lg text-gray-200">
              <p>
                O Mapa Astral é uma ferramenta profunda de autoconhecimento, que revela a configuração do céu no exato momento do seu nascimento.
              </p>
              <p>
                Ele funciona como um "manual de instruções" da sua personalidade, mostrando suas potências, desafios, talentos e a forma como você se relaciona com o mundo e consigo mesmo.
              </p>
            </div>
          </div>
          <div className="w-full">
            <Image src="/images/servico-mapa.jpg" alt="Símbolos do Zodíaco" width={500} height={500} objectFit="cover" className="rounded-lg shadow-2xl" />
          </div>
        </div>
      </section>
      <section className="bg-brand-bg py-20">
        <div className="container mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="mb-16 text-center font-serif text-4xl font-bold tracking-wider text-brand-text">
            O que você vai descobrir
          </h2>
          <div className="grid grid-cols-2 gap-10 text-center text-gray-200 md:grid-cols-4">
            <div className="flex flex-col items-center">
              <FaBrain className="h-16 w-16 text-brand-text" />
              <h3 className="mt-4 font-serif text-2xl font-bold text-brand-text">Autoconhecimento</h3>
            </div>
            <div className="flex flex-col items-center">
              <FaHeart className="h-16 w-16 text-brand-text" />
              <h3 className="mt-4 font-serif text-2xl font-bold">Relacionamentos</h3>
            </div>
            <div className="flex flex-col items-center">
              <FaBriefcase className="h-16 w-16 text-brand-text" />
              <h3 className="mt-4 font-serif text-2xl font-bold">Carreira</h3>
            </div>
            <div className="flex flex-col items-center">
              <FaStar className="h-16 w-16 text-brand-text" />
              <h3 className="mt-4 font-serif text-2xl font-bold">Propósito</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-brand-white py-20 md:py-24">
         <div className="container mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="mb-16 text-center font-serif text-4xl font-bold tracking-wider text-brand-text">
            Como funciona a consulta
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
             <div className="flex flex-col items-center rounded-lg border border-gray-700 bg-brand-bg p-8 text-center">
              <FaCalendarAlt className="h-12 w-12 text-brand-text" />
              <h3 className="mt-6 font-serif text-2xl font-bold">1. Agendamento</h3>
            </div>
             <div className="flex flex-col items-center rounded-lg border border-gray-700 bg-brand-bg p-8 text-center">
              <FaVideo className="h-12 w-12 text-brand-text" />
              <h3 className="mt-6 font-serif text-2xl font-bold">2. A Sessão</h3>
            </div>
             <div className="flex flex-col items-center rounded-lg border border-gray-700 bg-brand-bg p-8 text-center">
              <FaCloudDownloadAlt className="h-12 w-12 text-brand-text" />
              <h3 className="mt-6 font-serif text-2xl font-bold">3. Pós-Consulta</h3>
            </div>
          </div>
        </div>
      </section>
      <CardAtendimento dados={dadosMapa} />
    </>
  )
}