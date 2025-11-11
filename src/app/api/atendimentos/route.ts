// src/app/api/atendimentos/route.ts

import { NextResponse } from 'next/server'
// FIX 1: Importamos o 'axios' e o 'AxiosError' no topo
import axios, { AxiosError } from 'axios'

export async function GET(request: Request) {
  
  const { searchParams } = new URL(request.url)
  const debug = searchParams.get('debug')

  const STRAPI_URL = process.env.STRAPI_API_URL
  const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN

  if (debug === 'true') {
    return NextResponse.json({
      message: "Modo de Depuração da Vercel",
      hasUrl: !!STRAPI_URL,
      hasToken: !!STRAPI_TOKEN,
      urlValue: STRAPI_URL ? STRAPI_URL.substring(0, 25) + '...' : null,
      tokenValue: STRAPI_TOKEN ? STRAPI_TOKEN.substring(0, 6) + '...' : null
    })
  }

  if (!STRAPI_URL || !STRAPI_TOKEN) {
    return NextResponse.json(
      { error: 'Variáveis de API não configuradas no servidor.' },
      { status: 500 }
    )
  }

  try {
    // FIX 1: A linha 'const axios = require('axios')' foi removida
    
    const response = await axios.get(
      `${STRAPI_URL}/api/atendimentos?populate=*`,
      {
        headers: { Authorization: `Bearer ${STRAPI_TOKEN}` },
      }
    )
    
    // (A sua lógica de 'map' iria aqui, mas estamos a testar)
    return NextResponse.json(response.data);

  // FIX 2: Removemos o ': any' e verificamos o tipo do erro
  } catch (error) { 
    
    let errorMessage = 'Um erro desconhecido ocorreu.'
    let errorStatus = 502 // Padrão Bad Gateway

    if (axios.isAxiosError(error)) {
      // Se for um erro do axios, podemos ver o status (404, 403, 400)
      const axiosError = error as AxiosError
      errorMessage = axiosError.message
      if (axiosError.response) {
        errorStatus = axiosError.response.status
      }
      console.error('Erro (Axios):', errorMessage)
    } else if (error instanceof Error) {
      // Se for um erro genérico
      errorMessage = error.message
      console.error('Erro (Genérico):', errorMessage)
    }

    return NextResponse.json(
      { 
        error: 'Falha ao buscar dados do Strapi.',
        errorMessage: errorMessage,
        errorStatus: errorStatus, // Vamos ver qual o status real do erro
        hasUrlInCatch: !!STRAPI_URL,
        hasTokenInCatch: !!STRAPI_TOKEN
      },
      { status: errorStatus } // Devolve o status de erro real (403, 404, etc.)
    )
  }
}