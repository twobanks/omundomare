import Links from '@/components/Links'
import Image from 'next/image'

export default function HeroSection() {
  const heroImageUrl = "/images/team-bg.png" 
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center bg-cover bg-center bg-black bg-no-repeat" style={{ backgroundImage: `url('${heroImageUrl}')` }}  role="banner"  aria-labelledby="hero-title">
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col-reverse items-center gap-8 lg:flex-row lg:gap-16">
          <div className="w-full text-center lg:w-6/12 lg:text-left">
            <h1 
              id="hero-title"
              className="mb-6 font-serif text-4xl font-bold text-brand-yellow sm:text-5xl lg:text-7xl leading-tight"
            > 
              Desvende seu Caminho 
            </h1>
            
            <p className="mx-auto mb-8 max-w-lg font-sans text-base text-gray-100 sm:text-lg lg:mx-0 lg:text-xl">
              Desvende os segredos das estrelas e alinhe sua vida com o universo.
              Explore insights astrológicos personalizados que fortalecem sua jornada.
            </p>
            <Links link="/atendimentos" texto='Agende um atendimento ⚡' colorBg='yellow' colorTexto='text' />
          </div>
          <div className="flex w-full justify-center lg:w-6/12">
            <figure className="animate-turn360 relative">
              <div className="relative h-auto w-64 sm:w-80 lg:w-[500px]">
                <Image src="/images/sign-picture.png" alt="Signos de astrologia" width={500} height={500} priority className="h-auto w-full drop-shadow-2xl"  />
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}