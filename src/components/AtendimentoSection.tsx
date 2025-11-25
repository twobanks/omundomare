import Links from "./Links";
import { generateWhatsAppLink } from "@/utils/functions";

interface AtendimentoSectionProps {
  dados: {
    titulo: string;
    texto: string;
    titulo_link: string;
    page?: string;
    type?: string;
  }
}

export default function AtendimentoSection({ dados }: AtendimentoSectionProps) {
  const heroImageUrl = "/images/bg-dark.png"

  return (
    <section className="relative flex items-center justify-center text-white bg-cover bg-center bg-brand-contact py-32 text-center"style={{ backgroundImage: `url('${heroImageUrl}')` }} role="banner" aria-labelledby="cta-title">
      <div className="container relative z-10 mx-auto max-w-3xl px-6 lg:px-8">
        <h2 id="cta-title"className="font-serif text-3xl font-bold tracking-wider text-brand-icon sm:text-4xl md:text-5xl"> 
          {dados.titulo} 
        </h2>
        <p className="mt-4 mb-10 text-base text-brand-text sm:text-lg md:text-xl"> 
          {dados.texto}
        </p>
        <Links link={dados.type === 'sobre' ? '/atendimentos' : generateWhatsAppLink(dados)} texto={dados.titulo_link} colorBg='icon' colorTexto='black' />
      </div>
    </section>
  )
}