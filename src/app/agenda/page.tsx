"use client"

import { useState } from 'react'
import { DayPicker } from 'react-day-picker'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import 'react-day-picker/dist/style.css'
import { WHATSAPP } from '@/utils/const'
import Image from 'next/image'

const servicos = [ 'Mapa Astral', 'Reiki', 'Tarot', ]

const horariosDisponiveis = [ '08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00' ]

export default function AgendaForm() {
  const [servico, setServico] = useState<string>('')
  const [data, setData] = useState<Date | undefined>(undefined)
  const [horario, setHorario] = useState<string>('')

  const hoje = new Date()
  const isDayDisabled = (date: Date): boolean => {
    const dayOfWeek = date.getDay()
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      return true
    }
    const startOfToday = new Date(
      hoje.getFullYear(),
      hoje.getMonth(),
      hoje.getDate()
    )
    if (date < startOfToday) {
      return true
    }
    return false
  }

  const handleAgendar = () => {
    if (!servico || !data || !horario) {
      alert('Por favor, selecione o serviço, a data e o horário.')
      return
    }
    const dataFormatada = format(data, "EEEE, dd 'de' MMMM", { locale: ptBR })
    const mensagem = `Olá, Mari!
      Gostaria de agendar um horário para:
      Serviço: ${servico}
      Data: ${dataFormatada}
      Horário: ${horario}
      Aguardo sua confirmação!
    `

    const linkWhatsApp = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagem)}`
    window.open(linkWhatsApp, '_blank')
  }

  return (
    <>
      <section className="relative flex h-[40vh] min-h-[300px] items-center justify-center text-center">
        <Image src="/images/mapa-astral.webp" alt="Galáxia com tons de roxo e azul" layout="fill" objectFit="cover" quality={75} className="-z-10 brightness-50"  />
        <div className="z-10 p-4 text-brand-white">
          <h1 className="font-serif text-6xl font-bold tracking-widest"> Agendamento </h1>
        </div>
      </section>
      <section className="bg-brand-white py-20 md:py-24">
        <div className="max-w-4xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-brand-text mb-2">
                1. Escolha o Serviço
              </label>
              <select
                value={servico}
                onChange={(e) => setServico(e.target.value)}
                className="w-full p-2 border rounded-md"
              >
                <option value="">Selecione um serviço</option>
                {servicos.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-text mb-2">
                2. Escolha a Data
              </label>
              <DayPicker
                mode="single"
                selected={data}
                onSelect={setData}
                locale={ptBR}
                disabled={isDayDisabled}
                className="border rounded-md p-2 bg-brand-bg"
              />
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-brand-text mb-2">
                3. Escolha o Horário (se a data estiver selecionada)
              </label>
              <div className="grid grid-cols-3 gap-2">
                {!data ? (
                  <p className="text-brand-text-muted text-sm col-span-3">
                    Selecione uma data para ver os horários.
                  </p>
                ) : (
                  horariosDisponiveis.map((h) => (
                    <button
                      key={h}
                      onClick={() => setHorario(h)}
                      className={`
                        p-2 rounded-md border text-sm
                        ${horario === h
                          ? 'bg-brand-lilac text-white' 
                          : 'bg-white text-brand-text hover:bg-gray-100' 
                        }
                      `}
                    >
                      {h}
                    </button>
                  ))
                )}
              </div>
            </div>
            <div className="mt-8">
              <button
                onClick={handleAgendar}
                disabled={!servico || !data || !horario}
                className="w-full bg-brand-yellow text-brand-text font-bold py-3 px-6 rounded-lg 
                          hover:bg-brand-yellow-dark transition-colors
                          disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Agendar por WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}