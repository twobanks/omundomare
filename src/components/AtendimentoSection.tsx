import Links from "./Links";
import { generateWhatsAppLink } from "@/utils/functions";

export default function AtendimentoSection({ dados } : { dados: { titulo: string; texto: string; titulo_link: string; page?: string; type?: string; } }) {
    const heroImageUrl = "/images/bg-dark.png" 
    return(
        <section className="relative flex items-center justify-center text-white bg-cover bg-center bg-brand-contact py-32 text-center"  style={{ backgroundImage: `url('${heroImageUrl}')` }} role="banner" aria-labelledby="hero-title">
            <div className="container mx-auto max-w-3xl px-6 lg:px-8">
                <h2 className="font-serif text-5xl font-bold tracking-wider text-brand-icon"> {dados.titulo} </h2>
                <p className="mt-4 text-lg text-brand-text"> {dados.texto}</p>
                <Links link={dados.type === 'sobre' ? '/atendimentos' : generateWhatsAppLink(dados)} texto={dados.titulo_link} colorBg='icon' colorTexto='black' />
            </div>
        </section>
    )
}