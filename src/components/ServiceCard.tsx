import { ServiceCardProps } from "@/utils/types"
import Image from "next/image"
import Link from "next/link"

export default function ServiceCard({ imagemUrl, alt, titulo, descricao, link }: ServiceCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-brand-white shadow-lg transition-all duration-300 hover:shadow-2xl">
      <div className="relative h-56 w-full">
        <Image src={imagemUrl} alt={alt} layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-2xl font-bold text-violet-500">{titulo}</h3>
        <p className="mt-3 flex-1 text-base text-brand-text-muted">{descricao}</p>
        <Link
          href={link}
          className="mt-6 inline-block text-base font-bold uppercase tracking-wider text-black-100 hover:text-violet-300"
        >
          Saiba Mais &rarr;
        </Link>
      </div>
    </div>
  )
}