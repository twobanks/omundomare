// src/app/api/atendimentos/route.ts

import { NextResponse } from 'next/server'
import axios from 'axios'

type StrapiServico = {
  id: number
  titulo: string
  preco: string
  descricao: string
  categoria: 'Terapias Holísticas' | 'Serviços de Beleza'
  imagem: {
    id: number
    url: string
    alternativeText: string | null
    name: string
  } | null
}

export async function GET() {
  const STRAPI_URL = process.env.STRAPI_API_URL
  const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN

  if (!STRAPI_URL || !STRAPI_TOKEN) {
    return NextResponse.json(
      { error: 'Variáveis de API não configuradas no servidor.' },
      { status: 500 }
    )
  }

  try {
    // --- MUDANÇA BEM AQUI ---
    const response = await axios.get(
      `${STRAPI_URL}/api/atendimentos?populate=imagem`, // Corrigido de "atendimentos" para "servicos"
      {
        headers: {
          Authorization: `Bearer ${STRAPI_TOKEN}`,
        },
      }
    )

    const strapiData: { data: StrapiServico[] } = response.data

    const dadosFormatados = strapiData.data
      .filter((item) => item && item.titulo)
      .map((item) => {
        const imgData = item.imagem
        return {
          id: item.id,
          titulo: item.titulo,
          preco: item.preco,
          descricao: item.descricao,
          categoria: item.categoria,
          imagemUrl: imgData
            ? `${STRAPI_URL}${imgData.url}` 
            : '/images/servico-placeholder.jpg',
          alt: imgData ? imgData.alternativeText || item.titulo : item.titulo,
        }
      })
    
    return NextResponse.json(dadosFormatados)

  } catch (error) {
    // O Axios deita um erro em 404, que este catch apanha
    console.error('Erro ao buscar dados do Strapi:', error)
    return NextResponse.json(
      { error: 'Falha ao buscar dados do Strapi. Verifique o endpoint.' },
      { status: 502 } 
    )
  }
}