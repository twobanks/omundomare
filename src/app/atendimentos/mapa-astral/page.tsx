/* eslint-disable react/no-unescaped-entities */
import AtendimentoSection from '@/components/AtendimentoSection'
import HeadSection from '@/components/HeadSection'
import { dadosMapa } from '@/utils/dados'
import Image from 'next/image'
import { FaBrain, FaHeart, FaBriefcase, FaStar } from 'react-icons/fa'

export default function MapaAstralPage() {
  return (
    <>
      <HeadSection image="/images/bg-mapa-astral.jpg" titulo='Mapa Astral' />
      <section className="bg-brand-contact py-20 md:py-24">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 lg:px-8">
          <div className="text-left">
            <h2 className="font-serif text-5xl font-bold tracking-wider text-brand-brown">
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
      <section className="bg-brand-brown-light py-20">
        <div className="container mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="mb-16 text-center font-serif text-5xl font-bold tracking-wider text-brand-brown">
            O que você vai descobrir
          </h2>
          <div className="grid grid-cols-2 gap-10 text-center text-gray-200 md:grid-cols-4">
            <div className="flex flex-col items-center">
              <FaBrain className="h-16 w-16 text-brand-icon" />
              <h3 className="mt-4 font-serif text-2xl font-bold text-brand-brown">Autoconhecimento</h3>
            </div>
            <div className="flex flex-col items-center">
              <FaHeart className="h-16 w-16 text-brand-icon" />
              <h3 className="mt-4 font-serif text-2xl font-bold text-brand-brown">Relacionamentos</h3>
            </div>
            <div className="flex flex-col items-center">
              <FaBriefcase className="h-16 w-16 text-brand-icon" />
              <h3 className="mt-4 font-serif text-2xl font-bold text-brand-brown">Carreira</h3>
            </div>
            <div className="flex flex-col items-center">
              <FaStar className="h-16 w-16 text-brand-icon" />
              <h3 className="mt-4 font-serif text-2xl font-bold text-brand-brown">Propósito</h3>
            </div>
          </div>
        </div>
      </section>
      <AtendimentoSection dados={dadosMapa} />
    </>
  )
}