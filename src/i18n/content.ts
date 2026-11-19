export type Locale = 'en' | 'pt';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  href?: string;
}

export interface Content {
  nav: { about: string; stack: string; projects: string; contact: string };
  hero: {
    greeting: string;
    name: string;
    role: string;
    tagline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scroll: string;
  };
  about: { kicker: string; title: string; paragraphs: string[]; stats: { value: string; label: string }[] };
  stack: { kicker: string; title: string; groups: { label: string; items: string[] }[] };
  projects: { kicker: string; title: string; viewOn: string; items: Project[] };
  contact: { kicker: string; title: string; text: string };
  footer: { rights: string; built: string };
}

// TODO(ilan): os textos abaixo são placeholders — ajuste com suas informações reais.
const stackGroups = (front: string, back: string, tools: string) => [
  { label: front, items: ['TypeScript', 'React', 'Next.js', 'Three.js', 'HTML/CSS'] },
  { label: back, items: ['Node.js', 'Express', 'MongoDB', 'SQL', 'REST APIs'] },
  { label: tools, items: ['Git', 'Docker', 'Jest', 'Linux', 'CI/CD'] },
];

export const content: Record<Locale, Content> = {
  en: {
    nav: { about: 'About', stack: 'Stack', projects: 'Projects', contact: 'Contact' },
    hero: {
      greeting: "Hey, I'm",
      name: 'Ilan Herbach',
      role: 'Back and front-end developer',
      tagline: 'I build fast, reliable products — from the database all the way to the pixels.',
      ctaPrimary: 'See my work',
      ctaSecondary: 'Get in touch',
      scroll: 'scroll',
    },
    about: {
      kicker: '01 — about',
      title: 'Code that ships, interfaces that feel alive.',
      paragraphs: [
        "I'm a full-stack developer who enjoys the whole journey: modeling data, designing APIs and crafting interfaces people actually enjoy using.",
        'I care about clean architecture, good developer experience and small details that make a product feel polished.',
      ],
      stats: [
        { value: '∞', label: 'cups of coffee' },
        { value: 'full', label: 'stack mindset' },
        { value: 'PT/EN', label: 'languages' },
      ],
    },
    stack: {
      kicker: '02 — stack',
      title: 'Tools I work with',
      groups: stackGroups('Front-end', 'Back-end', 'Tooling'),
    },
    projects: {
      kicker: '03 — projects',
      title: 'Selected work',
      viewOn: 'View on GitHub',
      items: [
        {
          title: 'ilanherbach.dev',
          description: 'This portfolio — Next.js with a real-time WebGL particle field built on Three.js and custom shaders.',
          tags: ['Next.js', 'Three.js', 'GLSL'],
          href: 'https://github.com/ilan274/ilanherbach-dev',
        },
        {
          title: 'Project two',
          description: 'Placeholder — describe a project you are proud of, the problem it solves and your role in it.',
          tags: ['Node.js', 'MongoDB'],
          href: 'https://github.com/ilan274',
        },
        {
          title: 'Project three',
          description: 'Placeholder — another highlight. Short, concrete and outcome-oriented descriptions work best.',
          tags: ['React', 'TypeScript'],
          href: 'https://github.com/ilan274',
        },
      ],
    },
    contact: {
      kicker: '04 — contact',
      title: "Let's build something.",
      text: 'Open to new opportunities and interesting projects. The fastest way to reach me is LinkedIn.',
    },
    footer: { rights: 'All rights reserved.', built: 'Built with Next.js & Three.js' },
  },
  pt: {
    nav: { about: 'Sobre', stack: 'Stack', projects: 'Projetos', contact: 'Contato' },
    hero: {
      greeting: 'Olá, eu sou o',
      name: 'Ilan Herbach',
      role: 'Desenvolvedor back e front-end',
      tagline: 'Construo produtos rápidos e confiáveis — do banco de dados até o último pixel.',
      ctaPrimary: 'Ver projetos',
      ctaSecondary: 'Fale comigo',
      scroll: 'role',
    },
    about: {
      kicker: '01 — sobre',
      title: 'Código que vai pra produção, interfaces que ganham vida.',
      paragraphs: [
        'Sou um desenvolvedor full-stack que gosta da jornada completa: modelar dados, desenhar APIs e criar interfaces que as pessoas realmente gostam de usar.',
        'Me importo com arquitetura limpa, boa experiência de desenvolvimento e os pequenos detalhes que deixam um produto polido.',
      ],
      stats: [
        { value: '∞', label: 'xícaras de café' },
        { value: 'full', label: 'stack' },
        { value: 'PT/EN', label: 'idiomas' },
      ],
    },
    stack: {
      kicker: '02 — stack',
      title: 'Ferramentas que uso',
      groups: stackGroups('Front-end', 'Back-end', 'Ferramentas'),
    },
    projects: {
      kicker: '03 — projetos',
      title: 'Trabalhos selecionados',
      viewOn: 'Ver no GitHub',
      items: [
        {
          title: 'ilanherbach.dev',
          description: 'Este portfólio — Next.js com um campo de partículas WebGL em tempo real, feito com Three.js e shaders próprios.',
          tags: ['Next.js', 'Three.js', 'GLSL'],
          href: 'https://github.com/ilan274/ilanherbach-dev',
        },
        {
          title: 'Projeto dois',
          description: 'Placeholder — descreva um projeto do qual você se orgulha, o problema que ele resolve e seu papel.',
          tags: ['Node.js', 'MongoDB'],
          href: 'https://github.com/ilan274',
        },
        {
          title: 'Projeto três',
          description: 'Placeholder — outro destaque. Descrições curtas, concretas e focadas em resultado funcionam melhor.',
          tags: ['React', 'TypeScript'],
          href: 'https://github.com/ilan274',
        },
      ],
    },
    contact: {
      kicker: '04 — contato',
      title: 'Vamos construir algo juntos.',
      text: 'Aberto a novas oportunidades e projetos interessantes. O jeito mais rápido de falar comigo é pelo LinkedIn.',
    },
    footer: { rights: 'Todos os direitos reservados.', built: 'Feito com Next.js & Three.js' },
  },
};
