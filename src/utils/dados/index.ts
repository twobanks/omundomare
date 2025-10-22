import { Servico } from "../types"

const terapiasHolisticas: Servico[] = [
  {
    titulo: 'Mapa Astral + Tarot',
    preco: 'R$ 440,00',
    descricao: 'Duração: 1h (duas sessões). O Mapa para autoconhecimento e o Tarot para direcionamento.',
    imagemUrl: '/images/bg-tarot.jpg',
    alt: 'Mapa Astral e Tarot',
  },
  {
    titulo: 'Mapa Astral Escrito',
    preco: 'R$ 421,00',
    descricao: 'Duração: Entrega em 15-30 dias (PDF). Ajuda você a tomar consciência da vida através de arquétipos.',
    imagemUrl: '/images/bg-mapa-astral.jpg',
    alt: 'Mapa Astral Escrito',
  },
  {
    titulo: 'Sinastria',
    preco: 'R$ 341,00',
    descricao: 'Duração: 1h 30m. Mapa de Casal, Sócios, Filhos (Vídeo Chamada ou Áudios).',
    imagemUrl: '/images/bg-mapa-astral.jpg',
    alt: 'Sinastria Astral',
  },
  {
    titulo: 'Mapa Astral',
    preco: 'R$ 320,00',
    descricao: 'Duração: 1h. Feito por Vídeo Chamada ou Áudios através do Whatsapp.',
    imagemUrl: '/images/mapa-astral.webp',
    alt: 'Mapa Astral',
  },
  {
    titulo: 'Revolução Solar',
    preco: 'R$ 274,00',
    descricao: 'Duração: 1h e 30 Minutos.',
    imagemUrl: '/images/mapa-astral.webp',
    alt: 'Revolução Solar',
  },
  {
    titulo: 'Consulta Mandala + Três Perguntas',
    preco: 'R$ 291,00',
    descricao: 'Atendimento de Tarot presencial (mandala ou 3 perguntas). Duração: 2h.',
    imagemUrl: '/images/bg-mapa-astral.jpg',
    alt: 'Tarot Mandala',
  },
  {
    titulo: 'Consulta Chave com 3 perguntas',
    preco: 'R$ 192,00',
    descricao: 'Leitura de Tarot + Reiki. Duração: 1h e 20 Minutos.',
    imagemUrl: '/images/bg-mapa-astral.jpg',
    alt: 'Tarot e Reiki',
  },
  {
    titulo: 'Consulta Direcionada',
    preco: 'R$ 152,00',
    descricao: 'Envio de Reiki + Cruz Celta (Tarot). Duração: 1h.',
    imagemUrl: '/images/bg-mapa-astral.jpg',
    alt: 'Reiki e Cruz Celta',
  },
  {
    titulo: 'Reiki',
    preco: 'R$ 120,00',
    descricao: 'Reiki com Cristais. Duração: 50 Minutos.',
    imagemUrl: '/images/bg-reiki.jpg',
    alt: 'Reiki com Cristais',
  },
  {
    titulo: 'Atendimento Presencial',
    preco: 'R$ 300,00',
    descricao: 'Reiki com Cristais + Sessão Tarot (não atendo sem o Reiki). Duração: 1h.',
    imagemUrl: '/images/bg-mapa-astral.jpg',
    alt: 'Atendimento Presencial Reiki e Tarot',
  },
]

const servicosBeleza: Servico[] = [
  {
    titulo: 'Sobrancelhas Simples',
    preco: 'A partir de R$ 35,00',
    descricao: 'Valor: R$ 35,00 | Valor a domicilio: R$ 49,00',
    imagemUrl: '/images/servico-reiki.jpg', 
    alt: 'Design de Sobrancelhas',
  },
  {
    titulo: 'Sobrancelhas com Henna',
    preco: 'A partir de R$ 45,00',
    descricao: 'Valor: R$ 45,00 | Valor a domicilio: R$ 59,00',
    imagemUrl: '/images/servico-reiki.jpg', 
    alt: 'Sobrancelhas com Henna',
  },
  {
    titulo: 'Pé e Mão Simples',
    preco: 'A partir de R$ 78,00',
    descricao: 'Valor: R$ 78,00 | Valor a domicilio: R$ 92,00',
    imagemUrl: '/images/servico-reiki.jpg', 
    alt: 'Pé e Mão Simples',
  },
  {
    titulo: 'Pé e Mão com Francesinha',
    preco: 'A partir de R$ 84,00',
    descricao: 'Valor: R$ 84,00 | Valor a domicilio: R$ 98,00',
    imagemUrl: '/images/servico-reiki.jpg', 
    alt: 'Pé e Mão com Francesinha',
  },
  {
    titulo: 'Pedicure',
    preco: 'A partir de R$ 45,00',
    descricao: 'Valor: R$ 45,00 | Valor a domicilio: R$ 59,00',
    imagemUrl: '/images/servico-reiki.jpg', 
    alt: 'Pedicure',
  },
  {
    titulo: 'Manicure',
    preco: 'A partir de R$ 39,00',
    descricao: 'Valor: R$ 39,00 | Valor a domicilio: R$ 53,00',
    imagemUrl: '/images/servico-reiki.jpg', 
    alt: 'Manicure',
  },
]

const categories = ['Terapias Holísticas', 'Serviços de Beleza']

const navLinks = [
  { name: 'INÍCIO', href: '/' },
  { name: 'A MARI Brañdz', href: '/mari-brandz' },
  { name: 'Vídeos', href: '/videos' },
  { name: 'Podcast', href: '/podcast' },
  {
    name: 'Atendimentos', href: '/atendimentos',
    subMenu: [
      { name: 'Mapa Astral', href: '/atendimentos/mapa-astral' },
      { name: 'Reiki', href: '/atendimentos/reiki' },
      { name: 'Tarot', href: '/atendimentos/tarot' },
      { name: 'Todos os atendimentos', href: '/atendimentos' },
    ]
  },
]

const dadosAtendimento = {
  titulo: 'Pronta para começar sua jornada?',
  texto: 'Estou aqui para te guiar. Veja os atendimentos disponíveis e encontre o que mais ressoa com você.',
  titulo_link: 'Ver Atendimentos',
}

const dadosMapa = {
  titulo: 'Pronto para se aprofundar?',
  texto: 'Estou aqui para te guiar. Veja os atendimentos disponíveis e encontre o que mais ressoa com você.',
  titulo_link: 'Agendar',
  page: 'Mapa Astral'
}

const dadosTarot = {
  titulo: 'Busca por clareza e direcionamento?',
  texto: 'Estou aqui para te guiar. Veja os atendimentos disponíveis e encontre o que mais ressoa com você.',
  titulo_link: 'Agendar',
  page: 'Tarot'
}

const dadosReiki = {
  titulo: 'Pronto para se reenergizar?',
  texto: 'Estou aqui para te guiar. Veja os atendimentos disponíveis e encontre o que mais ressoa com você.',
  titulo_link: 'Agendar',
  page: 'Reiki'
}

export { categories, servicosBeleza, terapiasHolisticas, navLinks, dadosAtendimento, dadosMapa, dadosTarot, dadosReiki }
