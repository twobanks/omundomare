import Link from 'next/link'

export default function Links({ link, colorTexto, colorBg, texto }: { link: string, colorTexto: string, colorBg: string, texto: string }) {
    return (
        <Link href={link} className={`mt-8 inline-block bg-brand-${colorBg} text-brand-${colorTexto} font-bold uppercase tracking-wider py-3 px-8 rounded-lg hover:bg-black hover:text-white transition-colors duration-300`}>
            {texto}
        </Link>
    )
}