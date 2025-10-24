import { WHATSAPP } from "../const";

export const generateWhatsAppLink = (value: { titulo: string  }) => {
    const mensagemCodificada = encodeURIComponent(`Olá, Mari! Tenho interesse no serviço "${value.titulo}". Gostaria de agendar um horário com você.`)
    const urlWhatsapp = `https://wa.me/${WHATSAPP}?text=${mensagemCodificada}`
    return urlWhatsapp;
}