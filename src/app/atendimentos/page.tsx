"use client" 

import { useState } from 'react' 
import Image from 'next/image'

import { categories, terapiasHolisticas, servicosBeleza } from '@/utils/dados'
import { ServiceCard } from '@/components/ServiceCardPage'

export default function AtendimentosPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0])
  return (
    <>
      <section className="relative flex h-[40vh] min-h-[300px] items-center justify-center text-center">
        <Image src="/images/bg-mapa-astral.jpg"  alt="Mapa Astral e Zodíaco" layout="fill" objectFit="cover" quality={75} className="-z-10 brightness-50" />
        <div className="z-10 p-4 text-white">
          <h1 className="font-serif text-6xl font-bold tracking-widest">
            Atendimentos
          </h1>
          <p className="mt-4 text-xl text-gray-200 md:text-2xl">
            Encontre o serviço ideal para sua jornada.
          </p>
        </div>
      </section>
      <section className="bg-brand-contact py-20">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 flex justify-center space-x-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-6 py-2 text-base font-bold uppercase tracking-wider transition-colors
                  ${
                    activeCategory === category
                      ? 'bg-brand-lilac text-white'
                      : 'border-2 border-none text-brand-text-mute hover:text-brand-lilac' 
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-16">
            {activeCategory === categories[0] && (
              <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                {terapiasHolisticas.map((servico) => (
                  <ServiceCard key={servico.titulo} servico={servico} />
                ))}
              </div>
            )}

            {activeCategory === categories[1] && (
              <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                {servicosBeleza.map((servico) => (
                  <ServiceCard key={servico.titulo} servico={servico} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}