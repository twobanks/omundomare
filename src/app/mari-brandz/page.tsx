import AtendimentoSection from '@/components/AtendimentoSection'
import HeadSection from '@/components/HeadSection'
import { dadosAtendimentoSobre } from '@/utils/dados'
import { Metadata } from 'next'
import Image from 'next/image'
import { FaHandHoldingHeart, FaLayerGroup, FaMoon, FaPaintBrush } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Sobre mim', 
  description: 'Conhecendo a Marî Brañdz',
}

export default function QuemSomosPage() {
  return (
    <>
      <HeadSection image="/images/bg_tarot.jpg" titulo='Marî Brañdz`' />
      <section className="bg-brand-contact py-16 md:py-24">
        <div className="container mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
            
            <div className="order-1">
              <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl">
                <Image
                  src="/images/sobre_mim.jpeg"
                  alt="Foto de Marî Brañdz"
                  width={600}
                  height={750}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </div>

            <div className="order-2 text-center md:text-left">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-brand-green">
                Sobre mim
              </p>

              <h2 className="font-serif text-4xl font-bold leading-tight tracking-wider text-brand-yellow-dark sm:text-5xl lg:text-6xl">
                Uma jornada que não cabe em uma única definição
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-brand-text-muted sm:text-xl">
                Antes de qualquer título, sou uma pessoa em constante construção.
                Entre arte, espiritualidade, beleza, cuidado e muitos caminhos,
                fui descobrindo quem sou — e o que hoje coloco a serviço.
              </p>

              <div className="mt-8 h-px w-24 bg-brand-green mx-auto md:mx-0" />
            </div>
          </div>

          {/* HISTÓRIA */}
          <article className="mx-auto mt-20 max-w-3xl md:mt-28">

            {/* CAPÍTULO 1 */}
            <section className="mb-16">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">
                01 · Os primeiros caminhos
              </p>

              <h3 className="font-serif text-3xl font-bold text-brand-brown sm:text-4xl">
                Antes de tudo isso
              </h3>

              <div className="mt-6 space-y-6 text-base leading-relaxed text-brand-text-muted sm:text-lg">
                <p>
                  Oi, eu sou <strong className="text-brand-green">Marî Brañdz</strong> —
                  e, antes de qualquer título, sou uma pessoa em constante construção.
                </p>

                <p>
                  <strong className="text-brand-green">
                    Terapeuta Reikiana, astróloga, taróloga, cartomante,
                    manicure-pedicure e empreendedora
                  </strong>
                  . Mas minha história profissional não começou assim.
                </p>

                <p>
                  Em 2012, assinei minha primeira carteira de trabalho.
                  Comecei como estoquista de uma loja, vivendo aquela realidade
                  bem CLT e trampando à noite, em baladas e festas universitárias.
                  Depois, fui descobrindo outros caminhos: trabalhei com vendas,
                  passei pelo universo da moda e por lojas multimarcas, incluindo
                  grandes marcas como Colcci e Forum em shopping.
                </p>

                <p>
                  Também transitei por outras áreas, experiências e estudos.
                  Trabalhei em sindicato de contabilistas, pronto-socorro de hospital,
                  estudei Técnico em Enfermagem, Serviço Social, Marketing,
                  Práticas Integrativas e História.
                </p>

                <p>
                  Ao longo de tudo isso, fui acumulando experiências que, naquela época,
                  talvez nem imaginasse que um dia fariam sentido juntas.
                </p>
              </div>
            </section>

            {/* DESTAQUE */}
            <div className="my-16 border-y border-brand-green/20 py-10 text-center md:my-20">
              <p className="font-serif text-2xl italic leading-relaxed text-brand-brown sm:text-3xl">
                “E, no meio de tudo, tinha algo que nunca saiu da minha vida:
                <strong className="text-brand-green"> fazer unhas.</strong>”
              </p>
            </div>

            {/* CAPÍTULO 2 */}
            <section className="mb-16">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">
                02 · Beleza e cuidado
              </p>

              <h3 className="font-serif text-3xl font-bold text-brand-brown sm:text-4xl">
                O encontro com as pessoas
              </h3>

              <div className="mt-6 space-y-6 text-base leading-relaxed text-brand-text-muted sm:text-lg">
                <p>
                  O que começou quase como um hobby sempre esteve ali.
                  Entre um trabalho e outro, uma mudança de rota e outra,
                  eu continuava fazendo unhas, cuidando de pessoas, conversando,
                  ouvindo histórias e percebendo que existia algo muito maior
                  no encontro entre{' '}
                  <strong className="text-brand-green">
                    beleza, cuidado e troca humana
                  </strong>
                  .
                </p>
              </div>
            </section>

            {/* CAPÍTULO 3 */}
            <section className="mb-16">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">
                03 · Espiritualidade
              </p>

              <h3 className="font-serif text-3xl font-bold text-brand-brown sm:text-4xl">
                Uma relação que começou cedo
              </h3>

              <div className="mt-6 space-y-6 text-base leading-relaxed text-brand-text-muted sm:text-lg">
                <p>
                  Minha relação com a espiritualidade também começou cedo.
                </p>

                <p>
                  Nascida na Zona Norte de São Paulo e criada entre diferentes
                  caminhos e territórios, cresci cercada por arte, música,
                  cores e espiritualidade.
                </p>

                <p>
                  Vivi experiências em terreiros afro-indígenas e mesas kardecistas
                  e fui desenvolvendo, aos poucos, minha própria forma de compreender
                  o mundo, incluindo as medicinas da floresta nesse caminho.
                </p>
              </div>
            </section>

            {/* CAPÍTULO 4 */}
            <section className="mb-16">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">
                04 · Estudos e caminhos
              </p>

              <h3 className="font-serif text-3xl font-bold text-brand-brown sm:text-4xl">
                O conhecimento foi se somando
              </h3>

              <div className="mt-6 space-y-6 text-base leading-relaxed text-brand-text-muted sm:text-lg">
                <p>
                  Me formei em{' '}
                  <strong className="text-brand-green">
                    Astrologia Humanista pela Escola de Saberes Ocultos — Tanto Astral
                  </strong>{' '}
                  e me especializei em práticas terapêuticas, estudando o Tarot com
                  Nilton Schutz e práticas espirituais não religiosas, como o{' '}
                  <strong className="text-brand-green">Reiki USUI</strong>.
                </p>

                <p>
                  Hoje, olhando para trás, percebo que nenhuma dessas versões minhas
                  ficou perdida no caminho — principalmente agora, que também sou mãe
                  junto com o empreendimento.
                </p>

                <p>
                  Talvez seja justamente por ter percorrido tantos caminhos diferentes
                  que hoje meu trabalho também não cabe em uma única definição.
                </p>
              </div>
            </section>

            {/* MANIFESTO */}
            <section className="my-20 rounded-2xl bg-brand-icon/60 px-6 py-10 text-center sm:px-10 md:my-24 md:py-14">
              <p className="font-serif text-2xl font-bold leading-relaxed text-brand-brown sm:text-3xl">
                Eu acredito no autoconhecimento,
                mas também acredito na vida prática.
              </p>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-text-muted sm:text-lg">
                Acredito na espiritualidade, mas sei que boletos existem.
                Acredito na cura, no cuidado, na beleza, na conversa, nos símbolos
                e na capacidade que temos de nos reinventar.
              </p>
            </section>

            {/* CAPÍTULO FINAL */}
            <section className="text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">
                05 · O Mundo
              </p>

              <h3 className="font-serif text-4xl font-bold text-brand-brown sm:text-5xl">
                omundomare 🌞
              </h3>

              <div className="mx-auto mt-6 max-w-2xl space-y-6 text-base leading-relaxed text-brand-text-muted sm:text-lg">
                <p>
                  Foi desse encontro do{' '}
                  <strong className="text-brand-green">
                    Arcano XXI — O Mundo
                  </strong>{' '}
                  e da minha mãe Yewa que nasceu o{' '}
                  <strong className="text-brand-green">omundomare 🌞</strong>.
                </p>

                <p>
                  Este espaço é uma extensão de tudo o que vivi, estudei,
                  criei e continuo descobrindo —{' '}
                  <strong className="text-brand-green">a serviço</strong>.
                </p>
              </div>
            </section>

          </article>
        </div>
      </section>

      <section className="bg-brand-icon py-16 md:py-24">
        <div className="container mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold tracking-wider text-brand-brown sm:text-4xl lg:text-5xl">
            Minhas Ferramentas
          </h2>
          <div className="grid grid-cols-2 gap-10 text-center md:grid-cols-4">
            <div className="flex flex-col items-center group">
              <FaMoon className="h-12 w-12 text-brand-brown transition-transform group-hover:scale-110 sm:h-16 sm:w-16" />
              <h3 className="mt-6 font-serif text-xl font-bold text-brand-brown-light sm:text-2xl lg:text-3xl">Astrologia</h3>
              <p className="mt-2 text-sm text-brand-bg sm:text-base">Leitura de Mapas</p>
            </div>
            <div className="flex flex-col items-center group">
              <FaLayerGroup className="h-12 w-12 text-brand-brown transition-transform group-hover:scale-110 sm:h-16 sm:w-16" />
              <h3 className="mt-6 font-serif text-xl font-bold text-brand-brown-light sm:text-2xl lg:text-3xl">Tarot</h3>
              <p className="mt-2 text-sm text-brand-bg sm:text-base">Orientação e Clareza</p>
            </div>
            <div className="flex flex-col items-center group">
              <FaHandHoldingHeart className="h-12 w-12 text-brand-brown transition-transform group-hover:scale-110 sm:h-16 sm:w-16" />
              <h3 className="mt-6 font-serif text-xl font-bold text-brand-brown-light sm:text-2xl lg:text-3xl">Reiki</h3>
              <p className="mt-2 text-sm text-brand-bg sm:text-base">Cura Energética</p>
            </div>
            <div className="flex flex-col items-center group">
              <FaPaintBrush className="h-12 w-12 text-brand-brown transition-transform group-hover:scale-110 sm:h-16 sm:w-16" />
              <h3 className="mt-6 font-serif text-xl font-bold text-brand-brown-light sm:text-2xl lg:text-3xl">Arte</h3>
              <p className="mt-2 text-sm text-brand-bg sm:text-base">Expressão e Terapia</p>
            </div>
          </div>
        </div>
      </section>
      <AtendimentoSection dados={dadosAtendimentoSobre} />
    </>
  )
}