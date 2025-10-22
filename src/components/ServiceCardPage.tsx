import Image from 'next/image'
import Link from 'next/link';

import { Servico } from "@/utils/types";
import { WHATSAPP } from '@/utils/const';

export function ServiceCard({ servico }: { servico: Servico }) {
  const mensagemCodificada = encodeURIComponent(`Olá, Mari! Tenho interesse no serviço "${servico.titulo}" (${servico.preco}). Gostaria de agendar um horário com você.`)
  const urlWhatsapp = `https://wa.me/${WHATSAPP}?text=${mensagemCodificada}`
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border bg-black shadow-lg transition-all duration-300 hover:scale-105">
      <div className="relative h-64 w-full">
        <Image src={servico.imagemUrl} alt={servico.alt} layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <h2 className="font-serif text-2xl font-bold text-white">
            {servico.titulo}
          </h2>
          <p className="mt-2 text-xl font-semibold text-brand-lilac">
            {servico.preco}
          </p>
          <p className="mt-4 text-base text-gray-300">
            {servico.descricao}
          </p>
        </div>
        <div className="mt-6">
          <Link href={urlWhatsapp} target='_blank' className="inline-block w-full rounded-full text-brand-lilac bg-black px-10 py-2 text-center text-sm font-bold uppercase tracking-wider transition-colors hover:bg-brand-lilac hover:text-white">
            AGENDE AQUI
          </Link>
        </div>
      </div>
    </div>
  )
}