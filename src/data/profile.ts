/**
 * PERFIL PROFISSIONAL — TALOHAMA MARQUES
 * -------------------------------------------------------------
 * Fonte única de conteúdo do site. Tudo aqui foi extraído do
 * LinkedIn público (prints enviados em out/2026).
 *
 * Regras de manutenção:
 *  - `status: 'confirmado'` -> aparece no site.
 *  - `status: 'pendente'`   -> fica oculto até ser preenchido/confirmado.
 *  - Datas no formato 'AAAA-MM'. `end: null` = "até o momento".
 *  - Durações e totais são calculados automaticamente (src/lib/dates.ts).
 */

export type Status = 'confirmado' | 'pendente'
export type YM = `${number}-${string}`

export interface Role {
  id: string
  company: string
  companyGroup: 'Itaú' | 'Serasa'
  unit?: string // ex.: "iti Itaú"
  title: string
  start: YM | null
  end: YM | null
  location?: string
  area: string // linha de contexto (texto do próprio perfil)
  highlights: string[]
  /** fase da carreira, usada para agrupar a jornada no Itaú */
  track: 'TI' | 'Projetos & Processos' | 'Coordenação' | 'Produto'
  team?: { internal: number; external?: number }
  status: Status
}

export interface Education {
  institution: string | null
  course: string
  degree: string
  start: string | null
  end: string | null // null = em andamento (quando start existe)
  status: Status
  note?: string
}

export interface Certification {
  name: string
  issuer: string
  date: string | null
  credentialUrl: string | null
  status: Status
}

export interface Insight {
  category: string
  title: string
  summary: string
  date: string // texto livre, ex.: "Set 2026"
  url: string
  status: Status
}

const linkedin = 'https://www.linkedin.com/in/talohama-marques-a2885215b/'

export const profile = {
  name: 'Talohama Marques',
  firstName: 'Talohama',
  headline:
    'Líder de Produtos | Plataforma Cartões | Dados & IA | Tecnologia | Operações | Experiência do Cliente',
  headlineAreas: [
    'Produtos',
    'Plataforma Cartões',
    'Dados & IA',
    'Tecnologia',
    'Operações',
    'Experiência do Cliente',
  ],
  location: 'São Paulo, Brasil',
  currentTitle: 'Consultora de Produtos — plataforma de cartões',
  currentCompany: 'Itaú Unibanco',
  connections: 'mais de 500 conexões',
  /** Foto: só preencher com autorização da Talohama (ex.: '/talohama.jpg'). */
  photo: null as string | null,

  /** Trechos do "Sobre" — palavras dela, usadas literalmente quando citadas. */
  purpose:
    'Meu propósito é desenvolver pessoas e evoluir produtos, conectando diferentes competências e transformando desafios complexos em soluções simples, eficientes e inovadoras, gerando impacto para clientes e negócio.',
  about: [
    'Líder de pessoas e produtos, com trajetória construída na interseção entre tecnologia, operações, dados, negócio e produtos.',
    'Experiência no mercado financeiro e em empresas de dados e tecnologia, liderando times multidisciplinares, iniciativas estratégicas e transformações de grande escala, com foco em negócio, tecnologia e experiência do cliente.',
    'Ao longo da carreira, evoluiu de processos e gestão de projetos de tecnologia para posições de liderança em operações, tecnologia, dados, analytics e produtos, passando pelo Itaú Unibanco e pela Serasa Experian.',
  ],
  currentPartners: ['Financeira Magalu', 'Pão de Açúcar', 'Extra', 'Assaí', 'Ponto Frio'],

  experience: [
    {
      id: 'tec-adm',
      company: 'Itaú Unibanco',
      companyGroup: 'Itaú',
      title: 'Técnico administrativo',
      start: null, // PENDENTE: data cortada no print
      end: null,
      area: 'Primeira posição no banco',
      highlights: [],
      track: 'TI',
      status: 'pendente',
    },
    {
      id: 'suporte-jr',
      company: 'Itaú Unibanco',
      companyGroup: 'Itaú',
      title: 'Analista de Suporte de TI Júnior',
      start: '2014-06',
      end: '2016-08',
      location: 'São Paulo e Região',
      area: 'MGP na TI · Metodologia de Gestão de Projetos com ênfase em Qualidade de TI',
      highlights: [
        'Liderança do Projeto de Simplificação do Pré-Projeto, com o objetivo de reduzir o lead time de execução.',
      ],
      track: 'TI',
      status: 'confirmado',
    },
    {
      id: 'suporte-pl',
      company: 'Itaú Unibanco',
      companyGroup: 'Itaú',
      title: 'Analista de Suporte de TI Pleno',
      start: '2016-09',
      end: '2017-04',
      location: 'São Paulo e Região',
      area: 'Arquitetura de Processos na TI · Práticas de Projeto e Pré-Projeto com ênfase em Ágil e Lean',
      highlights: ['Implementação da Simplificação do Pré-Projeto, reduzindo o lead time de execução da prática.'],
      track: 'TI',
      status: 'confirmado',
    },
    {
      id: 'projetos-pl-sr',
      company: 'Itaú Unibanco',
      companyGroup: 'Itaú',
      title: 'Analista de Projetos e Processos Pleno e Sênior',
      start: '2017-05',
      end: '2018-11',
      location: 'São Paulo e Região',
      area: 'Cobrança Cartão · Projetos e Processos',
      highlights: [
        'Condução de projetos de qualidade (redução de reclamação) e de eficiência (redução de custo).',
      ],
      track: 'Projetos & Processos',
      status: 'confirmado',
    },
    {
      id: 'iti',
      company: 'Itaú Unibanco',
      companyGroup: 'Itaú',
      unit: 'iti Itaú',
      title: 'Analista de Projetos e Processos Sênior',
      start: '2018-11',
      end: '2020-09',
      area: 'Atendimento iti · Projetos, Processos e Automações',
      highlights: [
        'Condução e governança de projetos estruturantes para transformar e evoluir o modelo de atendimento.',
      ],
      track: 'Projetos & Processos',
      status: 'confirmado',
    },
    {
      id: 'automacoes',
      company: 'Itaú Unibanco',
      companyGroup: 'Itaú',
      title: 'Coordenadora de Automações de TI',
      start: '2020-09',
      end: '2023-09',
      area: 'Cartão de crédito, cobrança, iti, itaushop e novos negócios',
      highlights: ['Gestão do time de automações de TI: 16 pessoas internas e 7 terceiros.'],
      track: 'Coordenação',
      team: { internal: 16, external: 7 },
      status: 'confirmado',
    },
    {
      id: 'serasa',
      company: 'Serasa Experian',
      companyGroup: 'Serasa',
      title: 'Coordenadora de Desenvolvimento — produto antifraude',
      start: '2023-10',
      end: '2024-04',
      location: 'São Paulo, Brasil',
      area: 'Serasa Premium · produto antifraude da Serasa',
      highlights: ['Gestão e desenvolvimento do time multidisciplinar de tecnologia do produto Serasa Premium.'],
      track: 'Coordenação',
      status: 'confirmado',
    },
    {
      id: 'chargeback',
      company: 'Itaú Unibanco',
      companyGroup: 'Itaú',
      title: 'Coordenadora de Cartões — Chargeback',
      start: '2024-04',
      end: '2025-10',
      area: 'Cartão de crédito, cobrança, iti, itaushop e novos negócios',
      highlights: [
        'Gestão e desenvolvimento do time de dados e analytics da operação de cartão de crédito (8 pessoas internas).',
        'Transformação com dados na jornada de contestação de despesas: estudos de cenários, painéis de indicadores e modelos preditivos (chance de ganho, perfil e atrito).',
        'Apoio ao planejamento, estratégia de priorização e acompanhamento de performance com OKRs e PDCA.',
      ],
      track: 'Coordenação',
      team: { internal: 8 },
      status: 'confirmado',
    },
    {
      id: 'produtos',
      company: 'Itaú Unibanco',
      companyGroup: 'Itaú',
      title: 'Consultora de Produtos — plataforma de cartões',
      start: '2025-11',
      end: null,
      location: 'São Paulo, Brasil · Híbrido',
      area: 'Liderança de produtos na estratégia de migração da plataforma de cartões',
      highlights: [
        'Atuação end-to-end na jornada de produtos: estratégia, discovery, priorização, execução e gestão de performance.',
        'Estruturação de estratégias e planos de ação que apoiam decisões executivas e direcionam prioridades de negócio.',
        'Estratégia do público apto à migração, considerando valor ao cliente, features disponíveis e otimização de jornada.',
        'Acompanhamento de indicadores como autorizações, reclamações, crédito e faturamento.',
      ],
      track: 'Produto',
      status: 'confirmado',
    },
  ] satisfies Role[],

  education: [
    {
      institution: 'Universidade Presbiteriana Mackenzie',
      course: 'Engenharia de Dados',
      degree: 'MBA',
      start: '2024-08',
      end: null,
      status: 'confirmado',
    },
    {
      institution: 'Fundação Getulio Vargas — FGV',
      course: 'Gestão Estratégica de Pessoas, Desenvolvimento Humano de Gestores',
      degree: 'MBA',
      start: '2018',
      end: '2020',
      status: 'confirmado',
    },
    {
      institution: null,
      course: 'Gestão de Projetos',
      degree: 'Pós-graduação',
      start: null,
      end: null,
      note: 'Declarada no "Sobre". Instituição e datas a confirmar.',
      status: 'confirmado',
    },
    {
      institution: null,
      course: 'Administração de Empresas',
      degree: 'Graduação',
      start: null,
      end: null,
      note: 'Declarada no "Sobre". Instituição e datas a confirmar.',
      status: 'confirmado',
    },
  ] satisfies Education[],

  /** O perfil lista 3 certificados; apenas 1 estava visível nos prints. */
  certificationsTotal: 3,
  certifications: [
    {
      name: 'Engenharia de Processos',
      issuer: 'Fundação Vanzolini',
      date: null,
      credentialUrl: null,
      status: 'confirmado',
    },
    { name: '', issuer: '', date: null, credentialUrl: null, status: 'pendente' },
    { name: '', issuer: '', date: null, credentialUrl: null, status: 'pendente' },
  ] satisfies Certification[],

  /** Competências extraídas das descrições de experiência (não da seção "Competências"). */
  skills: [
    {
      group: 'Produto',
      items: ['Estratégia de produto', 'Discovery', 'Priorização', 'Gestão de performance', 'Otimização de jornada'],
    },
    {
      group: 'Dados & IA',
      items: ['Analytics', 'Modelos preditivos', 'Painéis e indicadores', 'Cenários para decisão', 'Engenharia de dados'],
    },
    {
      group: 'Gestão',
      items: ['OKRs', 'PDCA', 'Gestão de projetos', 'Governança de projetos', 'Ágil e Lean'],
    },
    {
      group: 'Pessoas',
      items: ['Liderança de times multidisciplinares', 'Desenvolvimento de pessoas', 'Gestão de terceiros', 'Mentoria'],
    },
    {
      group: 'Negócio',
      items: ['Cartões de crédito', 'Chargeback', 'Cobrança', 'Antifraude', 'Experiência do cliente'],
    },
  ],

  mentoring: {
    program: 'Programa de Mentoria Mulheres de Produto + Itaú',
    role: 'Mentora',
    status: 'confirmado' as Status,
  },

  insights: [
    {
      category: 'Mentoria',
      title: 'Eu sou mentora',
      summary:
        'Anúncio da participação como mentora no Programa de Mentoria Mulheres de Produto + Itaú, com a mensagem "Seja uma mulher que levanta outras mulheres".',
      date: '2026',
      // PENDENTE: substituir pelo link direto da publicação
      url: `${linkedin}recent-activity/all/`,
      status: 'confirmado',
    },
  ] satisfies Insight[],

  social: {
    linkedin,
    linkedinActivity: `${linkedin}recent-activity/all/`,
    linkedinCertifications: `${linkedin}details/certifications/`,
  },
}

export type Profile = typeof profile
