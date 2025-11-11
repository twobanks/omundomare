// src/app/api/atendimentos/route.ts

import { NextResponse } from 'next/server'

// Adicionamos 'request: Request' para ler parâmetros de URL
export async function GET(request: Request) {
  
  const { searchParams } = new URL(request.url)
  const debug = searchParams.get('debug') // Vamos verificar se ?debug=true está no URL

  // Lemos as variáveis de ambiente
  const STRAPI_URL = process.env.STRAPI_API_URL
  const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN

  // Se o URL contiver ?debug=true, vamos devolver o que encontrámos
  if (debug === 'true') {
    return NextResponse.json({
      message: "Modo de Depuração da Vercel",
      hasUrl: !!STRAPI_URL, // true ou false
      hasToken: !!STRAPI_TOKEN, // true ou false
      
      // Vamos mostrar uma parte segura das variáveis (para confirmar)
      urlValue: STRAPI_URL ? STRAPI_URL.substring(0, 25) + '...' : null,
      tokenValue: STRAPI_TOKEN ? STRAPI_TOKEN.substring(0, 6) + '...' : null
    })
  }

  // Se não estiver em modo de depuração, o código tenta funcionar normalmente
  if (!STRAPI_URL || !STRAPI_TOKEN) {
    return NextResponse.json(
      { error: 'Variáveis de API não configuradas no servidor.' },
      { status: 500 }
    )
  }

  try {
    // Esta parte não deve ser executada se as variáveis estiverem em falta
    // (O código axios e o resto da sua lógica iriam aqui...)
    
    // Vamos simular um sucesso por agora
    // return NextResponse.json({ message: "A API funcionaria se não estivesse em modo de depuração" });

    // Vamos deixar a lógica real (só para ter a certeza)
    const axios = require('axios'); // Importar axios aqui para o teste
    const response = await axios.get(
      `${STRAPI_URL}/api/atendimentos?populate=*`,
      {
        headers: { Authorization: `Bearer ${STRAPI_TOKEN}` },
      }
    )
    
    // ... (A sua lógica de map... não vamos chegar aqui se as variáveis falharem)
    return NextResponse.json(response.data);


  } catch (error: any) {
    console.error('Erro no catch:', error.message)
    return NextResponse.json(
      { 
        error: 'Falha ao buscar dados do Strapi.',
        errorMessage: error.message, // Devolve a mensagem de erro real
        hasUrlInCatch: !!STRAPI_URL,
        hasTokenInCatch: !!STRAPI_TOKEN
      },
      { status: 502 } 
    )
  }
}