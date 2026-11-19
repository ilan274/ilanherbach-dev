export type Locale = 'en' | 'pt';

export interface Content {
  nav: { about: string; stack: string; contact: string };
  hero: {
    greeting: string;
    name: string;
    role: string;
    tagline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scroll: string;
  };
  about: { kicker: string; title: string; paragraphs: string[]; languagesLabel: string; languages: string[] };
  stack: { kicker: string; title: string; groups: { label: string; items: string[] }[] };
  contact: { kicker: string; title: string; text: string };
  footer: { rights: string; built: string };
}

const FRONT = ['TypeScript', 'JavaScript', 'React', 'Next.js', 'HTML/CSS'];
const DATA = ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'OracleDB'];
const CLOUD = ['AWS Lambda', 'API Gateway', 'Route 53', 'KMS', 'Git'];

export const content: Record<Locale, Content> = {
  en: {
    nav: { about: 'About', stack: 'Stack', contact: 'Contact' },
    hero: {
      greeting: "Hi, I'm",
      name: 'Ilan Herbach',
      role: 'Full stack developer',
      tagline: 'I build web products end to end, from the database to the interface. Lately, a lot of it with AI.',
      ctaPrimary: 'Get in touch',
      ctaSecondary: 'About me',
      scroll: 'scroll',
    },
    about: {
      kicker: 'About me',
      title: 'I like building things that work well and feel good to use.',
      paragraphs: [
        "I've been a developer since 2020 and today I work at MahiGaming. I'm full stack and I enjoy the whole process: modeling data, designing APIs and building interfaces people actually like using.",
        'Along the way I worked on payment flows (tokenization, billing, refunds) with a strong focus on security and compliance, microservices with different databases and real-time apps.',
        "Lately I've been working a lot with AI: search with embeddings and RAG, LLM integrations, and agents that take care of the repetitive parts of development.",
      ],
      languagesLabel: 'Languages I speak',
      languages: ['Portuguese', 'English', 'Spanish', 'Hebrew'],
    },
    stack: {
      kicker: 'Stack',
      title: 'What I work with',
      groups: [
        { label: 'Front-end', items: FRONT },
        { label: 'Back-end', items: ['Node.js', 'Express', 'Fastify', 'REST APIs', 'Microservices', 'Socket.IO', 'Payment integrations'] },
        { label: 'Databases', items: DATA },
        { label: 'Cloud and tools', items: CLOUD },
        {
          label: 'AI',
          items: ['RAG', 'Vector search', 'Embeddings', 'LLM APIs', 'MCP', 'AI agents', 'Skills automation'],
        },
      ],
    },
    contact: {
      kicker: 'Contact',
      title: "Let's talk?",
      text: "I'm open to new opportunities and interesting projects. The easiest way to reach me is on LinkedIn.",
    },
    footer: { rights: 'All rights reserved.', built: 'Built with Next.js and Three.js' },
  },
  pt: {
    nav: { about: 'Sobre', stack: 'Stack', contact: 'Contato' },
    hero: {
      greeting: 'Oi, eu sou o',
      name: 'Ilan Herbach',
      role: 'Desenvolvedor full stack',
      tagline: 'Construo produtos web de ponta a ponta, do banco de dados à interface. Ultimamente, muita coisa com IA.',
      ctaPrimary: 'Fale comigo',
      ctaSecondary: 'Sobre mim',
      scroll: 'role',
    },
    about: {
      kicker: 'Sobre mim',
      title: 'Gosto de construir coisas que funcionam bem e são boas de usar.',
      paragraphs: [
        'Trabalho com desenvolvimento desde 2020 e hoje estou na MahiGaming. Sou full stack e gosto do processo inteiro: modelar dados, desenhar APIs e criar interfaces que as pessoas gostam de usar.',
        'No caminho trabalhei com fluxos de pagamento (tokenização, cobrança, reembolsos) com foco em segurança e compliance, microsserviços com bancos diferentes e aplicações em tempo real.',
        'Ultimamente tenho trabalhado bastante com IA: busca com embeddings e RAG, integração com LLMs e agentes que cuidam das partes repetitivas do desenvolvimento.',
      ],
      languagesLabel: 'Idiomas que falo',
      languages: ['Português', 'Inglês', 'Espanhol', 'Hebraico'],
    },
    stack: {
      kicker: 'Stack',
      title: 'O que eu uso',
      groups: [
        { label: 'Front-end', items: FRONT },
        { label: 'Back-end', items: ['Node.js', 'Express', 'Fastify', 'APIs REST', 'Microsserviços', 'Socket.IO', 'Integração de pagamentos'] },
        { label: 'Bancos de dados', items: DATA },
        { label: 'Cloud e ferramentas', items: CLOUD },
        {
          label: 'IA',
          items: ['RAG', 'Busca vetorial', 'Embeddings', 'APIs de LLM', 'MCP', 'Agentes de IA', 'Automação com skills'],
        },
      ],
    },
    contact: {
      kicker: 'Contato',
      title: 'Bora conversar?',
      text: 'Estou aberto a novas oportunidades e projetos interessantes. O jeito mais fácil de falar comigo é pelo LinkedIn.',
    },
    footer: { rights: 'Todos os direitos reservados.', built: 'Feito com Next.js e Three.js' },
  },
};
