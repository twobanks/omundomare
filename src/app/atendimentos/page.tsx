import { Metadata } from 'next'
import Atendimentos from './AtendimentosClient'

export const metadata: Metadata = {
  title: 'Todos os atendimentos', 
  description: 'Confira todos os serviços oferecidos por Marî Brañdz.',
}

export default function AtendimentosPage() {
  return (
    <Atendimentos />
  )
}