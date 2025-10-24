import Image from 'next/image'
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa' 

import { Servico } from "@/utils/types";
import { generateWhatsAppLink } from '@/utils/functions';

export function ServiceCard({ servico }: { servico: Servico }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border bg-brand-contact shadow-lg transition-all duration-300 hover:scale-115">
      <div className="relative h-64 w-full bg-brand-contact">
        <Image src={servico.imagemUrl} alt={servico?.titulo} width={200} height={200} className='mx-auto pt-10' />
      </div>
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <h2 className="font-serif text-2xl font-bold text-brand-brown">
            {servico.titulo}
          </h2>
          {servico.preco && (
            <p className="mt-2 text-xl font-semibold text-black">
              {servico.preco}
            </p>
          )}
          <p className="mt-4 text-base text-brand-text-muted">
            {servico.descricao}
          </p>
        </div>
        <div className="mt-6 flex justify-start">
          <Link  href={generateWhatsAppLink(servico)}  target='_blank'  className="inline-flex w-full justify-center gap-2 rounded-lg text-white bg-brand-brown px-4 py-2 text-sm font-bold uppercase tracking-wider">
            Agendar atendimento <FaWhatsapp className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}