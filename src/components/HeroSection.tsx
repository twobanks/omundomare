import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
  const heroImageUrl = "/images/team-bg.png" 
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white bg-cover bg-center bg-black" style={{ backgroundImage: `url('${heroImageUrl}')` }} role="banner" aria-labelledby="hero-title">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="w-full lg:w-6/12 text-center lg:text-left">
            <h1 className="font-serif text-6xl md:text-6xl font-bold text-brand-yellow mb-4"> Desvende seu Caminho </h1>
            <p className="font-sans text-lg text-white max-w-2xl mx-auto lg:mx-0 mb-8">
              Desvende os segredos das estrelas e alinhe sua vida com o universo.
              Explore insights astrológicos personalizados que fortalecem sua jornada.
            </p>
            <Link href="/atendimentos" className="inline-block bg-brand-yellow text-brand-text font-bold uppercase tracking-wider py-3 px-8 rounded-lg hover:bg-brand-yellow-dark transition-colors duration-300">
              Agende um atendimento ⚡
            </Link>
          </div>
          <div className="w-full lg:w-5/12 flex justify-center">
            <figure className="animate-turn360">
              <Image src="/images/sign-picture.png" alt="Signos de astrologia" width={450}  height={450}  className="rounded-lg w-full h-auto" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}