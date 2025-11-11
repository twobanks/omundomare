"use client" 

import { useMemo, useState } from 'react' 
import useSWR from 'swr' 
import axios from 'axios'

import { categories } from '@/utils/dados'
import { ServiceCard } from '@/components/ServiceCardPage'
import HeadSection from '@/components/HeadSection'
import AtendimentoInfoCard from '@/components/AtendimentoInfoCard'
import React from 'react'
import { Servico, StrapiServico } from '@/utils/types'

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL
const STRAPI_API_URL = `${STRAPI_URL}/api/atendimentos?populate=imagem`
const fetcher = (url: string) => axios.get(url).then(res => res.data)

export default function AtendimentosPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0])
  const { data: json, error } = useSWR<{ data: StrapiServico[] }>(STRAPI_API_URL, fetcher)

  const [terapiasHolisticas, servicosBeleza] = useMemo(() => {
    if (!json || !json.data || json.data.length === 0) { return [[], []] }
    const servicosFormatados: Servico[] = json.data
      .filter((item) => item && item.titulo)
      .map((item) => {
        const imgData = item.imagem 
        return {
          id: item.id,
          titulo: item.titulo, 
          preco: item.preco,   
          descricao: item.descricao, 
          categoria: item.categoria, 
          imagemUrl: imgData ? `${STRAPI_URL}${imgData.url}` : '/images/servico-placeholder.jpg',
          alt: imgData ? imgData.alternativeText || item.titulo : item.titulo,
        }
      })
    const terapias = servicosFormatados.filter((s) => s.categoria === 'Terapias Holísticas')
    const beleza = servicosFormatados.filter((s) => s.categoria === 'Serviços de Beleza')
    return [terapias, beleza]
  }, [json]) 

  return (
    <>
      <HeadSection image="/images/bg-mapa-astral.jpg" titulo='Atendimentos' />
      {error ? (
        <section className="bg-brand-white py-20 text-center">
          <p className="text-red-600 font-bold">
            Erro ao carregar os serviços. Tente novamente mais tarde.
          </p>
        </section>
      ) : (
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
      )}
      
    </>
  )
}