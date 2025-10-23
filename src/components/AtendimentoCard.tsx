import { WHATSAPP } from "@/utils/const";
import Links from "./Links";

export default function CardAtendimento({ dados } : { dados: { titulo: string; texto: string; titulo_link: string; page?: string; } }) {
    const mensagemCodificada = encodeURIComponent(`Olá, Mari! Tenho interesse no serviço "${dados.page}". Gostaria de agendar um horário com você.`)
    const urlWhatsapp = `https://wa.me/${WHATSAPP}?text=${mensagemCodificada}`
    const heroImageUrl = "/images/bg-dark.png" 
    return(
        <section className="relative flex items-center justify-center text-white bg-cover bg-center bg-brand-contact py-32 text-center"  style={{ backgroundImage: `url('${heroImageUrl}')` }} role="banner" aria-labelledby="hero-title">
            <div className="container mx-auto max-w-3xl px-6 lg:px-8">
                <h2 className="font-serif text-5xl font-bold tracking-wider text-brand-yellow-dark"> {dados.titulo} </h2>
                <p className="mt-4 text-lg text-brand-text"> {dados.texto}</p>
                <Links link={urlWhatsapp} texto={dados.titulo_link} colorBg='yellow-dark' colorTexto='white' />
            </div>
        </section>
    )
}