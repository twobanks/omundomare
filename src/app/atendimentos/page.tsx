"use client" 

import { useMemo, useState } from 'react' 

import { categories, terapiasHolisticas, servicosBeleza } from '@/utils/dados'
import { ServiceCard } from '@/components/ServiceCardPage'
import HeadSection from '@/components/HeadSection'
import AtendimentoInfoCard from '@/components/AtendimentoInfoCard'
import axios from 'axios'
import useSWR from 'swr'

type Servico = {
  id: number
  titulo: string
  preco: string
  descricao: string
  categoria: string
  imagemUrl: string
  alt: string
}
const fetcher = (url: string) => axios.get(url).then(res => res.data)

export default function AtendimentosPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0])
  const { data: servicosFormatados, error, isLoading } = useSWR<Servico[]>('/api/atendimentos', fetcher)
  console.log("servicosFormatados", servicosFormatados);
  const [terapiasHolisticas, servicosBeleza] = useMemo(() => {
    if (!servicosFormatados) {
      return [[], []]
    }
    
    // A lógica de formatação já não é necessária!
    
    const terapias = servicosFormatados.filter(
      (s) => s.categoria === 'Terapias Holísticas'
    )
    const beleza = servicosFormatados.filter(
      (s) => s.categoria === 'Serviços de Beleza'
    )

    return [terapias, beleza]

  }, [servicosFormatados]) // Depende dos dados que vêm do SWR
  return (
    <>
      <HeadSection image="/images/bg-mapa-astral.jpg" titulo='Atendimentos' />
      <section className="bg-white py-20">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <AtendimentoInfoCard />
          <div className="mb-12 flex justify-center space-x-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-lg px-6 py-2 text-base font-bold uppercase tracking-wider transition-colors
                  ${
                    activeCategory === category
                      ? 'text-brand-brown'
                      : 'border-2 border-none text-brand-text-mute hover:text-brand-brown' 
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