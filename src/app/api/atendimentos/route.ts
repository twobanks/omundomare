import { NextResponse } from 'next/server'
import axios from 'axios'
import { StrapiServico } from '@/utils/types'

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
    const response = await axios.get(
      `${STRAPI_URL}/api/atendimentos?populate=*`, 
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
        
        let finalImageUrl = '/images/servico-placeholder.jpg';
        
        if (imgData) {
          if (process.env.NODE_ENV === 'production') {
            finalImageUrl = imgData.url; 
          } else {
            finalImageUrl = `${STRAPI_URL}${imgData.url}`; 
          }
        }
        
        return {
          id: item.id,
          titulo: item.titulo,
          preco: item.preco,
          descricao: item.descricao,
          categoria: item.categoria,
          imagemUrl: finalImageUrl, 
          alt: imgData ? imgData.alternativeText || item.titulo : item.titulo,
        }
      })
    
    return NextResponse.json(dadosFormatados)

  } catch (error) {
    console.error('Erro ao buscar dados do Strapi:')
    return NextResponse.json(
      { error: 'Falha ao buscar dados do Strapi. Verifique o endpoint.' },
      { status: 502 } 
    )
  }
}