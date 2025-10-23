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
          <h1 className="font-serif text-6xl font-bold tracking-widest text-brand-blue">
            Mapa Astral
          </h1>
          <p className="mt-4 text-xl md:text-2xl">
            O manual de instruções da sua alma.
          </p>
        </div>
      </section>
      <section className="bg-brand-contact py-20 md:py-24">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 lg:px-8">
          <div className="text-left">
            <h2 className="font-serif text-5xl font-bold tracking-wider text-brand-blue">
              O que é o Mapa Astral?
            </h2>
            <div className="mt-6 space-y-5 text-lg text-brand-text">
              <p>
                O Mapa Astral é uma ferramenta profunda de autoconhecimento, que revela a configuração do céu no exato momento do seu nascimento.
              </p>
              <p>
                Ele funciona como um "manual de instruções" da sua personalidade, mostrando suas potências, desafios, talentos e a forma como você se relaciona com o mundo e consigo mesmo.
              </p>
            </div>
          </div>
          <div className="w-full">
            <Image src="/images/Support.png" alt="Símbolos do Zodíaco" width={500} height={500} objectFit="cover" />
          </div>
        </div>
      </section>
      <section className="bg-brand-blue-light py-20">
        <div className="container mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="mb-16 text-center font-serif text-5xl font-bold tracking-wider text-brand-blue">
            O que você vai descobrir
          </h2>
          <div className="grid grid-cols-2 gap-10 text-center text-gray-200 md:grid-cols-4">
            <div className="flex flex-col items-center">
              <FaBrain className="h-16 w-16 text-brand-blue" />
              <h3 className="mt-4 font-serif text-3xl font-bold text-brand-text">Autoconhecimento</h3>
            </div>
            <div className="flex flex-col items-center">
              <FaHeart className="h-16 w-16 text-brand-blue" />
              <h3 className="mt-4 font-serif text-3xl font-bold text-brand-text">Relacionamentos</h3>
            </div>
            <div className="flex flex-col items-center">
              <FaBriefcase className="h-16 w-16 text-brand-blue" />
              <h3 className="mt-4 font-serif text-3xl font-bold text-brand-text">Carreira</h3>
            </div>
            <div className="flex flex-col items-center">
              <FaStar className="h-16 w-16 text-brand-blue" />
              <h3 className="mt-4 font-serif text-3xl font-bold text-brand-text">Propósito</h3>
            </div>
          </div>
        </div>
      </section>
      <CardAtendimento dados={dadosMapa} />
    </>
  )
}