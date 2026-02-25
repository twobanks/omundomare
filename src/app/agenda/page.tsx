import type { Metadata } from 'next';
import AgendaClient from './AgendaClient';

export const metadata: Metadata = {
  title: 'Agendamento', 
  description: 'Agende sua sessão de Mapa Astral online. Descubra seu destino, talentos e potencial.',
}

export default function AgendaPage() {
  return (
    <AgendaClient /> 
  )
}