import { NAME } from "@/utils/const";
import { FaInstagram, FaTiktok, FaTwitter, FaFacebook, FaYoutube, FaWhatsapp } from 'react-icons/fa'
import { WHATSAPP } from '@/utils/const'

const socialLinks = [
  { icon: <FaInstagram />, href: 'https://www.instagram.com/omundomare/' },
  { icon: <FaTiktok />, href: 'https://www.tiktok.com/@omundomar' },
  { icon: <FaTwitter />, href: 'https://twitter.com/omundomare' },
  { icon: <FaFacebook />, href: 'https://www.facebook.com/omundomare' },
  { icon: <FaYoutube />, href: 'https://www.youtube.com/channel/UClb9J77K-QkZ_WSB_4dL2jw' },
  { icon: <FaWhatsapp />, href: `https://wa.me/${WHATSAPP}?text=Olá, Mari! Gostaria de agendar um horário com você.`}
]

export default function Footer() {
  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();
  return (
    <footer className="border-t border-gray-200 py-8 px-8 text-brand-white flex items-center justify-between relative bg-black">
      <div className="text-sm relative">
        <p className="text-brand-white">{NAME} © {anoAtual}</p>
      </div>
      <div className="hidden md:flex md:items-center md:space-x-4 relative">
        {socialLinks.map((social) => (
          <a key={social.href} href={social.href} target="_blank" rel="noopener noreferrer" className="text-brand-white hover:text-brand-blue">
            {social.icon}
          </a>
        ))}
      </div>
    </footer>
  )
}