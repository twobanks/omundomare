"use client"

import { useState, useEffect } from 'react'
import { DayPicker } from 'react-day-picker'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import 'react-day-picker/dist/style.css'
import { WHATSAPP } from '@/utils/const'
import HeadSection from '@/components/HeadSection'
import { horariosBeleza, horariosPadrao, servicos } from '@/utils/dados'

export default function AgendaForm() {
  const [servico, setServico] = useState<string>('')
  const [data, setData] = useState<Date | undefined>(undefined)
  const [horario, setHorario] = useState<string>('')

  const hoje = new Date()

  useEffect(() => {
    setData(undefined)
    setHorario('')
  }, [servico]) 

  const isDayDisabled = (date: Date): boolean => {
    const dayOfWeek = date.getDay() 

    const startOfToday = new Date(
      hoje.getFullYear(),
      hoje.getMonth(),
      hoje.getDate()
    )
    if (date < startOfToday) {
      return true
    }

    const isBeleza = servico === 'Manicure' || servico === 'Pedicure'

    if (isBeleza) {
      return dayOfWeek !== 2 && dayOfWeek !== 4
    } else {
      return dayOfWeek === 0 || dayOfWeek === 6
    }
  }
  const isBeleza = servico === 'Manicure' || servico === 'Pedicure'
  const horariosAtuais = isBeleza ? horariosBeleza : horariosPadrao

  const handleAgendar = () => {
    if (!servico || !data || !horario) {
      alert('Por favor, selecione o serviço, a data e o horário.')
      return
    }
    const dataFormatada = format(data, "EEEE, dd/MM/yyyy", { locale: ptBR })
    console.log("dataFormatada", dataFormatada);

    const mensagem = `*Olá, Mari!* 

Gostaria de agendar um horário para:

*Serviço:* ${servico}
*Data:* ${dataFormatada}
*Horário:* ${horario}

Aguardo sua confirmação! `;

    const mensagemCodificada = encodeURIComponent(mensagem);

    const linkWhatsApp = `https://wa.me/${WHATSAPP}?text=${mensagemCodificada}`;
    window.open(linkWhatsApp, '_blank')
  }

  return (
    <>
      <HeadSection image="/images/mapa-astral.webp" titulo='Agendamento' />
      <section className="bg-brand-white py-20 md:py-24">
        <div className="max-w-4xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-lg font-serif font-bold text-brand-text mb-2">
                1. Escolha o Serviço
              </label>
              <select
                value={servico}
                onChange={(e) => setServico(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg bg-white text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-lilac"
              >
                <option value="">Selecione um serviço</option>
                {servicos.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-lg font-serif font-bold text-brand-text mb-2">
                2. Escolha a Data
              </label>
              <div className="p-2 border rounded-lg bg-brand-bg">
                <DayPicker
                  mode="single"
                  selected={data}
                  onSelect={setData}
                  locale={ptBR}
                  disabled={isDayDisabled}
                  styles={{
                    head_cell: { color: 'var(--color-brand-lilac)' },
                    day_selected: { backgroundColor: 'var(--color-brand-lilac)', color: '#fff' },
                    day_today: { color: 'var(--color-brand-lilac)' }
                  }}
                  className="[&_button:hover]:bg-brand-lilac-light [&_button[aria-selected='true']]:bg-brand-lilac [&_button[aria-selected='true']]:text-white"
                />
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <label className="block text-lg font-serif font-bold text-brand-text mb-2">
                3. Escolha o Horário
              </label>
              <div className="grid grid-cols-3 gap-2">
                {!data ? (
                  <p className="text-brand-text-muted text-sm col-span-3">
                    Selecione uma data para ver os horários.
                  </p>
                ) : (
                  horariosAtuais.map((h) => (
                    <button
                      key={h}
                      onClick={() => setHorario(h)}
                      className={`
                        p-2 rounded-md border text-sm transition-colors
                        ${horario === h
                          ? 'bg-brand-lilac text-white' 
                          : 'bg-white text-brand-text hover:bg-brand-lilac-light' 
                        }
                      `}
                    >
                      {h}
                    </button>
                  ))
                )}
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={handleAgendar}
                disabled={!servico || !data || !horario}
                className="w-full bg-brand-yellow text-brand-text font-bold py-3 px-6 rounded-lg shadow-md transition-colors hover:bg-brand-yellow-dark disabled:bg-gray-300 disabled:cursor-not-allowed"
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