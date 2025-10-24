import Image from 'next/image'

export default function HeadSection({ image, titulo, texto } : { image: string, titulo: string, texto?: string }) {
    return(
        <section className="relative flex h-[40vh] min-h-[300px] items-center justify-center text-center">
            <Image src={image}  alt={titulo} layout="fill" objectFit="cover" quality={75} className="-z-10 brightness-50" />
            <div className="z-10 p-4 text-white">
                <h1 className="font-serif text-6xl font-bold tracking-widest"> {titulo}</h1>
                {texto && <p className="mt-4 text-xl text-gray-200 md:text-2xl">{texto}</p>}
            </div>
        </section>
    )
}