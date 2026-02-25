
import imgMapa from '../../../public/icons/icon_test.png'
import imgTarot from '../../../public/icons/icon_test_1.png'
import imgReiki from '../../../public/icons/icon_test_2.png'

const terapiasHolisticas = [
  {
    titulo: 'Pergunta objetiva',
    preco: 'R$ 35,00',
    descricao: 'Pergunta objetiva. Duração: 1h.',
    imagemUrl: '/icons/icon_test.png',
    alt: 'Pergunta objetiva',
  },
  {
    titulo: 'Mapa Astral',
    preco: 'R$ 320,00',
    descricao: 'Entrega em 15-30 dias (PDF).',
    imagemUrl: '/icons/icon_test_1.png',
    alt: 'Mapa Astral',
  },
  {
    titulo: 'Reiki',
    preco: 'R$ 120,00',
    descricao: 'Reiki com Cristais. Duração: 50 Minutos.',
    imagemUrl: '/icons/icon_test_2.png',
    alt: 'Reiki',
  },
  {
    titulo: '3 perguntas',
    preco: 'R$ 320,00',
    descricao: '3 perguntas. Duração: 1h e 20 Minutos.',
    imagemUrl: '/icons/icon_test_3.png',
    alt: '3 perguntas',
  },
  {
    titulo: 'Leitura Semi Completa',
    preco: 'R$ 206,00',
    descricao: 'Leitura Semi Semi Completa. Duração: 1h e 30 Minutos.',
    imagemUrl: '/icons/icon_test_4.png',
    alt: 'Leitura Semi Completa',
  },
  {
    titulo: 'Leitura Completa',
    preco: 'R$ 306,00',
    descricao: 'Leitura Completa. Duração: 2h.',
    imagemUrl: '/icons/icon_test_5.png',
    alt: 'Leitura Completa',
  },
  {
    titulo: 'Leitura do amor/Sinas',
    preco: 'R$ 192,00',
    descricao: 'Leitura do amor/Sinas. Duração: 1h e 20 Minutos.',
    imagemUrl: '/icons/icon_test.png',
    alt: 'Leitura do amor/Sinas',
  },
  {
    titulo: 'Revolu Solar',
    preco: 'R$ 289,00',
    descricao: 'Revolu Solar. Duração: 1h.',
    imagemUrl: '/icons/icon_test_1.png',
    alt: 'Revolu Solar',
  },
  {
    titulo: 'Leitura Mensal',
    preco: 'R$ 150,00',
    descricao: 'Leitura Mensal. Duração: 1h.',
    imagemUrl: '/icons/icon_test_2.png',
    alt: 'Leitura Mensal',
  },
  {
    titulo: 'Leitura Anual',
    preco: 'R$ 440,00',
    descricao: 'Leitura Anual. Duração: 1h.',
    imagemUrl: '/icons/icon_test_3.png',
    alt: 'Leitura Anual',
  },
]

const servicosBeleza = [
  {
    titulo: 'Sobrancelhas',
    preco: 'R$ 60,00',
    descricao: 'Valor a domicilio: R$ 90,00',
    imagemUrl: '/icons/icon_test_2.png', 
    alt: 'Design de Sobrancelhas',
  },
  {
    titulo: 'Pé e Mão',
    preco: 'R$ 100,00',
    descricao: 'Valor a domicilio: R$ 130,00',
    imagemUrl: '/icons/icon_test_2.png', 
    alt: 'Pé e Mão Simples',
  },
  {
    titulo: 'Pé',
    preco: 'R$ 50,00',
    descricao: 'Valor a domicilio: R$ 80,00',
    imagemUrl: '/icons/icon_test_2.png', 
    alt: 'Pedicure',
  },
  {
    titulo: 'Mão',
    preco: 'R$ 50,00',
    descricao: 'Valor a domicilio: R$ 80,00',
    imagemUrl: '/icons/icon_test_2.png', 
    alt: 'Manicure',
  },
]

const categories = ['Terapias Holísticas', 'Serviços de Beleza']

const navLinks = [
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
  { name: 'Agende seu horário', href: '/agenda' },
]

const dadosAtendimento = {
  titulo: 'Pronta para começar sua jornada?',
  texto: 'Estou aqui para te guiar. Veja os atendimentos disponíveis e encontre o que mais ressoa com você.',
  titulo_link: 'Ver Atendimentos',
}

const dadosMapa = {
  titulo: 'Pronto para se aprofundar?',
  texto: 'Estou aqui para te guiar. Veja os atendimentos disponíveis e encontre o que mais ressoa com você.',
  titulo_link: '✨ Agende seu atendimento',
  page: 'Mapa Astral'
}

const dadosTarot = {
  titulo: 'Busca por clareza e direcionamento?',
  texto: 'Estou aqui para te guiar. Veja os atendimentos disponíveis e encontre o que mais ressoa com você.',
  titulo_link: '✨ Agende seu atendimento',
  page: 'Tarot'
}

const dadosReiki = {
  titulo: 'Pronto para se reenergizar?',
  texto: 'Estou aqui para te guiar. Veja os atendimentos disponíveis e encontre o que mais ressoa com você.',
  titulo_link: '✨ Agende seu atendimento',
  page: 'Reiki'
}

const dadosAtendimentosArray = [
  {
    imagemUrl: imgMapa,
    titulo: 'Mapa Astral',
    descricao: 'Entenda sua personalidade, seus desafios e seu propósito de vida através da leitura do seu mapa de nascimento.',
    link: '/atendimentos/mapa-astral',
  },
  {
    imagemUrl: imgTarot,
    titulo: 'Tarot',
    descricao: 'Receba clareza, orientação e aconselhamento para suas decisões e desafios do momento presente.',
    link: '/atendimentos/tarot',
  },
  {
    imagemUrl: imgReiki,
    titulo: 'Reiki',
    descricao: 'Equilibre seus centros de energia (chakras) e promova o bem-estar físico, mental e emocional.',
    link: '/atendimentos/reiki',
  }
]

const dadosAtendimentoSobre = {
  titulo: 'Pronta para começar sua jornada?',
  texto: 'Estou aqui para te guiar. Veja os atendimentos disponíveis e encontre o que mais ressoa com você.',
  titulo_link: '✨ Ver todos os atendimentos',
  type: 'sobre',
}

const servicos = ['Mapa Astral', 'Reiki', 'Tarot', 'Manicure', 'Pedicure']
const horariosPadrao = [ '08:00', '09:00', '10:00', '15:00', '16:00', '17:00' ]
const horariosBeleza = [ '08:00', '09:00', '10:00', '15:00', '16:00', '17:00' ]

export { categories, dadosAtendimento, dadosAtendimentosArray, dadosAtendimentoSobre, dadosMapa, dadosReiki, dadosTarot, horariosBeleza, horariosPadrao, navLinks, servicos, servicosBeleza, terapiasHolisticas }

