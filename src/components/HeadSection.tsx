import Image from 'next/image'

interface HeadSectionProps {
  image: string
  titulo: string
  texto?: string
}

export default function HeadSection({ image, titulo, texto }: HeadSectionProps) {
  return (
    <section className="relative flex h-[40vh] min-h-[300px] items-center justify-center text-center">
      <div className="absolute inset-0 -z-10">
        <Image src={image} alt={titulo} fill className="object-cover brightness-50" priority />
      </div>
      <div className="z-10 container mx-auto px-4">
        <h1 className="font-serif text-4xl font-bold uppercase tracking-widest text-white sm:text-5xl md:text-6xl">
           {titulo}
        </h1>
        {texto && (
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-200 sm:text-lg md:text-xl">
            {texto}
          </p>
        )}
      </div>
    </section>
  )
}