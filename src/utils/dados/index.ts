
import imgMapa from '../../../public/icons/icon_test.png'
import imgTarot from '../../../public/icons/icon_test_1.png'
import imgReiki from '../../../public/icons/icon_test_2.png'

const terapiasHolisticas = [
  
  {
    titulo: 'Mapa Astral + Tarot',
    preco: 'R$ 480,00',
    descricao: 'O Mapa Astral auxilia no autoconhecimento e na compreensão de como você lida consigo mesma(o), seus padrões, potenciais e desafios. O Tarot clarifica mensagens do seu inconsciente e traz direcionamento prático para áreas específicas da sua vida, principalmente físico e mental, via áudio ou chamada de vídeo.',
    duracao: 'Duração: 2h.',
    imagemUrl: '/icons/icon_test_1.png',
    alt: 'Mapa Astral + Tarot',
  },
  {
    titulo: 'Mapa Astral ou Revolu Solar',
    preco: 'R$ 320,00',
    descricao: 'Para adultos, infantil, empresarial ou relacionamento (sinastria). Leitura completa com Reiki incluso + conselho das cartas, via áudio ou chamada de vídeo.',
    duracao: 'Duração: 1h 30 min.',
    imagemUrl: '/icons/icon_test_1.png',
    alt: 'Mapa Astral ou Revolu Solar',
  },
  {
    titulo: 'Leitura Zodiacal Anual',
    preco: 'R$ 1.800,00 ou 3x de R$ 600,00',
    descricao: `Acompanhamento e aconselhamento mensal válido por 12 meses a partir da contratação, todos os meses você receberá:
✨ Tendências energéticas do mês
 ✨ Cartas de Tarot para direcionamento
 ✨ Reiki incluso
 Entrega via áudio + fotos das cartas`,
    duracao: 'Duração: cada sessão 40 min.',
    imagemUrl: '/icons/icon_test_4.png',
    alt: 'Leitura Zodiacal Anual',
  },
  {
    titulo: 'Leitura Mensal',
    preco: 'R$ 176,00',
    descricao: ' Leitura direcionada para compreender as energias e tendências do mês, com orientação prática para suas decisões. Atendimento via áudio ou chamada de vídeo',
    duracao: 'Duração: 40 min.',
    imagemUrl: '/icons/icon_test_2.png',
    alt: 'Leitura Mensal',
  },
  {
    titulo: 'Pergunta objetiva',
    preco: 'R$ 74,00',
    descricao: ' Consulta focada em uma questão específica, com leitura direta e clara. A pergunta pode ser aberta em até 3 desdobramentos para aprofundar a compreensão da situação, não inclusa envio de Reiki.',
    duracao: 'Duração: 25min.',
    imagemUrl: '/icons/icon_test.png',
    alt: 'Pergunta objetiva',
  },
  {
    titulo: 'Leitura de Verdade',
    preco: 'R$ 150,00',
    descricao: 'Atendimento via áudio ou chamada de vídeo + fotos das cartas pode fazer 2 pergunta objetiva + conselho início e final de sessão Inspirada na sacerdotisa da verdade, leitura profunda para revelar padrões ocultos, romper ilusões e trazer clareza em decisões importantes.Para quem está pronta para ouvir o que precisa, não apenas o que quer. (pergunta avulsa + 30$ cada)',
    duracao: 'Duração: 35min.',
    imagemUrl: '/icons/icon_test_3.png',
    alt: 'Leitura de Verdade',
  },
  {
    titulo: 'Leitura da Vida',
    preco: 'R$ 330,00',
    descricao: `Sessão destinada ao autodesenvolvimento e aprofundamento pessoal.
 Vamos à raiz da situação através da Mandala das 12 Áreas da Vida pode fazer +3 perguntas (avulsa + 30$ cada)
✨ Envio de Reiki incluso
 ✨ Conselho  das cartas no inicio e final
 Atendimento via áudio ou chamada de vídeo`,
    duracao: 'Duração: 1h 30min',
    imagemUrl: '/icons/icon_test_5.png',
    alt: 'Leitura da Vida',
  },
  {
    titulo: 'Reiki - 2 sessões online',
    preco: 'R$ 200,00',
    descricao: 'Reiki com Cristais e conselho do tarot.',
    duracao: 'Duração: 25min.',
    imagemUrl: '/icons/icon_test_2.png',
    alt: 'Reiki',
  },
]

const terapiasPresenciais = [
  {
    titulo: 'Tarot + Reiki com Cristais',
    preco: 'R$ 330,00',
    duracao: 'Duração: 1h.',
    imagemUrl: '/icons/icon_test_1.png',
    alt: 'Tarot + Reiki com Cristais'
  },
  {
    titulo: 'Mapa + Reiki + Tarot',
    preco: 'R$ 480,00',
    duracao: 'Duração: 2h.',
    imagemUrl: '/icons/icon_test_2.png',
    alt: 'Mapa + Reiki + Tarot',
  }
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

const categories = ['Terapias Holísticas', 'Terapias Energéticas Presenciais', 'Beleza & Autocuidado']

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
const horariosPadrao = [ '08:00', '09:00', '10:00', '11:00', '12:00' ]
const horariosBeleza = [ '08:00', '09:00', '10:00', '11:00', '12:00' ]

export { categories, dadosAtendimento, dadosAtendimentosArray, dadosAtendimentoSobre, dadosMapa, dadosReiki, dadosTarot, horariosBeleza, horariosPadrao, navLinks, servicos, servicosBeleza, terapiasHolisticas, terapiasPresenciais }

