import React from 'react'
import { FaCalendarAlt, FaClock, FaWhatsapp } from 'react-icons/fa' 
import { WHATSAPP } from '@/utils/const'

export default function AtendimentoInfoCard() {
  const mensagemPadrao = 'Olá! Gostaria de mais informações sobre os atendimentos.'
  const urlWhatsapp = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagemPadrao)}`

  return (
    <div className="relative overflow-hidden rounded-lg mb-20 bg-brand-contact p-8 shadow-xl md:p-10 lg:p-12">
      <div className="relative z-10 space-y-6 text-brand-text">
        <p className="font-serif text-brand-brown font-semibold md:text-xl">
          A cima de 1 pergunta o envio do Reiki está incluso e no final da sessão
          você recebe um conselho pessoal.
        </p>
        <p className="text-md md:text-lg">
          As sessões são via WhatsApp ou chamada de vídeo.
        </p>
        <div className="flex gap-6">
          <div className="flex items-start space-x-3">
            <FaCalendarAlt className="mt-1 h-6 w-6 text-brand-brown" />
            <div>
              <p className="text-lg font-bold text-brand-text">Segunda-Quarta-Sexta</p>
              <p className="ml-2 text-md text-brand-text-muted">Das 10h às 15h</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <FaCalendarAlt className="mt-1 h-6 w-6 text-brand-brown" />
            <div>
              <p className="text-lg font-bold text-brand-text">Terça-Quinta</p>
              <p className="ml-2 text-md text-brand-text-muted">Das 17h às 22h</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <FaClock className="mt-1 h-6 w-6 text-brand-brown" />
            <div>
              <p className="text-lg font-bold text-brand-text">PLANTÃO FDS</p>
              <p className="ml-2 text-md text-brand-text-muted">
                (consultar disponibilidade)
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <a
              href={urlWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-lg font-bold uppercase tracking-wider text-brand-text"
            >
              <FaWhatsapp className="mr-3 h-5 w-5 text-brand-brown" />
              Agende via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}