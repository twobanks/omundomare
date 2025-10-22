import { WHATSAPP } from "@/utils/const";
import Link from "next/link";

export default function CardAtendimento({ dados } : { dados: { titulo: string; texto: string; titulo_link: string; page?: string; } }) {
    const mensagemCodificada = encodeURIComponent(`Olá, Mari! Tenho interesse no serviço "${dados.page}". Gostaria de agendar um horário com você.`)
    const urlWhatsapp = `https://wa.me/${WHATSAPP}?text=${mensagemCodificada}`
    return(
        <section className="bg-brand-white py-24 text-center">
            <div className="container mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="font-serif text-4xl font-bold tracking-wider text-brand-text-muted">
                {dados.titulo}
            </h2>
            <p className="mt-4 text-xl text-brand-text">
                {dados.texto}
            </p>
            <Link href={urlWhatsapp} target="_blank" className="mt-8 inline-block rounded-full border-2 bg-brand-yellow-dark px-12 py-3 text-lg font-bold uppercase tracking-wider text-brand-white transition-colors hover:bg-brand-text hover:text-white">
                {dados.titulo_link}
            </Link>
            </div>
        </section>
    )
}