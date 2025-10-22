"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaInstagram, FaTiktok, FaTwitter, FaFacebook, FaYoutube, FaBars, FaTimes, FaWhatsapp, FaChevronDown } from 'react-icons/fa'
import { navLinks } from '@/utils/dados'
import { WHATSAPP } from '@/utils/const'

const socialLinks = [
  { icon: <FaInstagram />, href: 'https://www.instagram.com/omundomare/' },
  { icon: <FaTiktok />, href: 'https://www.tiktok.com/@omundomar' },
  { icon: <FaTwitter />, href: 'https://twitter.com/omundomare' },
  { icon: <FaFacebook />, href: 'https://www.facebook.com/omundomare' },
  { icon: <FaYoutube />, href: 'https://www.youtube.com/channel/UClb9J77K-QkZ_WSB_4dL2jw' },
  { icon: <FaWhatsapp />, href: `https://wa.me/${WHATSAPP}?text=Olá, Mari! Gostaria de agendar um horário com você.` },
]

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openMobileSubMenu, setOpenMobileSubMenu] = useState(false)

  return (
    <header className="sticky py-5 top-0 z-50 relative bg-cover bg-center" style={{ backgroundImage: "url('/images/bg-mapa-astral.jpg')" }}>
      <div className="absolute inset-0 bg-black/75 -z-10"></div>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src="/images/omundomare.png" alt="Logo OMUNDOMARE" width={200} height={40} priority />
            </Link>
          </div>
          <nav className="hidden md:flex md:justify-center md:space-x-4 md:py-4">
            {navLinks.map((link) =>
              link.subMenu ? (
                <div key={link.name} className="relative group">
                  <span
                    className="px-2 py-1 text-sm font-medium uppercase tracking-wider text-brand-lilac-light hover:text-brand-yellow-dark cursor-pointer flex items-center"
                  >
                    {link.name}
                    <FaChevronDown className="ml-1 h-3 w-3" />
                  </span>
                  <div className="absolute left-0 top-full mt-0 w-56 origin-top-left rounded-md shadow-lg bg-black ring-1 ring-white ring-opacity-10 focus:outline-none 
                                hidden group-hover:block z-50 transition-all duration-300">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      {link.subMenu.map((subLink) => (
                        <Link
                          key={subLink.name}
                          href={subLink.href}
                          className="block px-4 py-2 text-sm uppercase tracking-wider text-brand-lilac-light hover:bg-gray-800 hover:text-brand-yellow-dark"
                          role="menuitem"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-2 py-1 text-sm font-medium uppercase tracking-wider text-brand-lilac-light hover:text-brand-yellow-dark"
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="inline-flex items-center justify-center rounded-md p-2 text-brand-text-muted hover:bg-gray-100 focus:outline-none" aria-expanded={isMobileMenuOpen}>
              <span className="sr-only">Abrir menu</span>
              {isMobileMenuOpen ? (
                <FaTimes className="block h-6 w-6" />
              ) : (
                <FaBars className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <nav className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            {navLinks.map((link) =>
              link.subMenu ? (
                <div key={link.name}>
                  <button
                    onClick={() => setOpenMobileSubMenu(!openMobileSubMenu)}
                    className="w-full flex justify-between items-center rounded-md px-3 py-2 text-base font-medium uppercase tracking-wider text-brand-text-muted hover:bg-gray-100 hover:text-brand-lilac"
                  >
                    <span>{link.name}</span>
                    <FaChevronDown className={`h-4 w-4 transform transition-transform ${openMobileSubMenu ? 'rotate-180' : 'rotate-0'}`} />
                  </button>
                  {openMobileSubMenu && (
                    <div className="pl-4 mt-1 space-y-1">
                      {link.subMenu.map((subLink) => (
                        <Link
                          key={subLink.name}
                          href={subLink.href}
                          onClick={() => setIsMobileMenuOpen(false)} 
                          className="block rounded-md px-3 py-2 text-base font-medium uppercase tracking-wider text-brand-text-muted hover:bg-gray-100 hover:text-brand-lilac"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block rounded-md px-3 py-2 text-base font-medium uppercase tracking-wider text-brand-text-muted hover:bg-gray-100 hover:text-brand-lilac"
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>
          <div className="border-t border-gray-200 pt-4 pb-3">
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social) => (
                <a key={social.href} href={social.href} target="_blank" rel="noopener noreferrer" className="text-brand-text-muted hover:text-brand-lilac text-2xl">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}