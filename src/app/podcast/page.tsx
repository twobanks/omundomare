import Image from 'next/image'

export default async function VideosPage() {
  return (
    <>
      <section className="relative flex h-[40vh] min-h-[300px] items-center justify-center text-center">
        <Image src="/images/bg-tarot.jpg" alt="Galáxia com tons de roxo e azul" layout="fill" objectFit="cover" quality={75} className="-z-10 brightness-50"  />
        <div className="z-10 p-4 text-brand-white">
          <h1 className="font-serif text-5xl font-bold tracking-widest"> Entregando o Ouro </h1>
          <p className="mt-4 text-xl md:text-2xl"> Conteúdo sobre Astrologia, Tarot e Espiritualidade. </p>
        </div>
      </section>
    </>
  )
}