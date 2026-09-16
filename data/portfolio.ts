export const personal = {
  name: 'Benevanio Santos',
  initials: 'BS',
  role: 'Engenheiro de Software Full Stack & Desktop',
  tagline: 'Desenvolvimento Full Stack e Desktop com foco em performance nativa e arquitetura moderna.',
  bio: 'Engenheiro de Software com experiência em ecossistemas corporativos e produtos modernos, com atuação atual em desenvolvimento Full Stack e Desktop com foco em performance nativa.',
  bio2: 'Formação em Engenharia de Software (Anhanguera) e pós-graduação em Arquitetura de Software Distribuído na PUC Minas (em andamento).',
  email: 'benevaniosantos930@gmail.com',
  linkedin: 'https://linkedin.com/in/bene-tesla',
  github: 'https://github.com/Benevanio',
  whatsapp: '(19)998283835',
  calendar: 'https://calendar.google.com/calendar/u/0?cid=NmNlMTYwZGVkZThlNmViYTVlMGJhMmIxZDYxMTdjNGM5MTIwMDZhZDU2YzEzNmUwNzMzMjI1MGRmNTg5NGYzMUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t',
  origin: {
    birthplace: 'Pão de Açúcar — AL',
    hometown: 'Porto da Folha — SE',
    current: 'Engenharia de Software',
  }
}

export const techStack = [
  { name: 'Rust + Tauri', category: 'Desktop' },
  { name: 'Java + Spring', category: 'Back-End' },
  { name: 'Node.js 22', category: 'Back-End' },
  { name: 'TypeScript', category: 'Linguagem' },
  { name: 'React', category: 'Front-End' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Jenkins', category: 'DevOps' },
  { name: 'MuleSoft', category: 'Integração' },
  { name: 'PostgreSQL', category: 'Banco' },
  { name: 'MongoDB', category: 'Banco' },
  { name: 'ActiveMQ', category: 'Mensageria' },
  { name: 'JWT', category: 'Segurança' },
  { name: 'OpenAPI', category: 'Governança' },
  { name: 'Kibana', category: 'Observabilidade' },
  { name: 'DataWeave', category: 'Integração' },
  { name: 'GraphQL', category: 'Integração' },
  { name: 'ServiceNow', category: 'Suporte' }
]

export const metrics = [
  { value: '+40%', label: 'Rastreabilidade', detail: 'Observabilidade e rastreamento em fluxos API-Led' },
  { value: '+25%', label: 'Performance', detail: 'Otimização de processamento em APIs corporativas' },
  { value: '-30%', label: 'Tempo de Resposta', detail: 'Redução de latência em serviços críticos' },
  { value: '99.9%', label: 'Disponibilidade', detail: 'Confiabilidade operacional em ambiente produtivo' },
]

export const timeline = [
  {
    period: 'abr/2026 — Atual',
    role: 'Engenheiro de Software Full Stack',
    company: 'Geodigitus (via Frannar)',
    description: 'Desenvolvimento de aplicações Desktop modernas com Rust e Tauri, integradas a stacks Full Stack com Node.js 22, React, TypeScript, Docker e Jenkins, com foco em performance nativa e arquitetura escalável.',
    tech: ['Rust', 'Tauri', 'Node.js 22', 'React', 'TypeScript', 'Docker', 'Jenkins'],
    type: 'job',
  },
  {
    period: '2025 — 2027',
    role: 'Pós-graduação em Arquitetura de Software Distribuído',
    company: 'PUC Minas',
    description: 'Aprofundamento em sistemas distribuídos, observabilidade e arquitetura em nuvem. Em andamento.',
    tech: ['Sistemas Distribuídos', 'Cloud', 'Observabilidade'],
    type: 'education',
  },
  {
    period: 'jun/2023 — abr/2026',
    role: 'Engenheiro de Software',
    company: 'Sysmap Solutions (Natura & Avon)',
    description: 'Desenvolvimento de integrações MuleSoft, APIs Java e Node.js com foco em escalabilidade, governança, observabilidade e performance em ambientes corporativos.',
    tech: ['MuleSoft', 'Java', 'Node.js', 'API-Led', 'DataWeave'],
    type: 'job',
  },
  {
    period: '2021 — 2025',
    role: 'Bacharelado em Engenharia de Software',
    company: 'Anhanguera',
    description: 'Base forte em fundamentos de engenharia, modelagem e qualidade de software.',
    tech: ['Engenharia de Software', 'Arquitetura', 'Qualidade'],
    type: 'education',
  },
]

export const projects = [
  {
    type: 'Back-End',
    arch: 'Clean Architecture',
    name: 'AuthKnex',
    description: 'Sistema de autenticação com Node.js, TypeScript, JWT e estratégia de segurança para APIs empresariais.',
    tech: ['Node.js', 'TypeScript', 'PostgreSQL', 'JWT'],
    link: 'https://github.com/Benevanio/AuthKnex',
  },
  {
    type: 'Back-End',
    arch: 'MVC',
    name: 'RestSpring',
    description: 'API REST com Java e Spring Boot, documentação OpenAPI e padrões para governança de endpoints.',
    tech: ['Java', 'Spring Boot', 'JPA', 'OpenAPI'],
    link: 'https://github.com/Benevanio/RestSpring',
  },
  {
    type: 'Integrações',
    arch: 'API-Led',
    name: 'MuleSoft Integrations',
    description: 'Implementação de fluxos MuleSoft com DataWeave e políticas para integrações corporativas.',
    tech: ['MuleSoft', 'DataWeave', 'REST', 'SOAP'],
    link: 'https://github.com/Benevanio/api-specification',
  },
  {
    type: 'Full Stack',
    arch: 'SPA + API',
    name: 'Social Media API',
    description: 'Aplicação de estudo com back-end Node.js e front-end React, cobrindo autenticação e modelagem social.',
    tech: ['Node.js', 'React', 'MongoDB', 'Express'],
    link: 'https://github.com/Benevanio/socialmedia',
  },
  {
    type: 'Back-End',
    arch: 'Event-Driven',
    name: 'Async Product Pipeline',
    description: 'Sistema de processamento assíncrono de produtos em batch com Node.js, ActiveMQ e MongoDB. Cron jobs para retry automático — inspirado em fluxos de produção corporativos.',
    tech: ['Node.js', 'ActiveMQ', 'MongoDB', 'Cron'],
    link: 'https://github.com/Benevanio/Async-Product-Pipeline',
  },
  {
    type: 'Observabilidade',
    arch: 'MVC',
    name: 'Node Monitoring',
    description: 'Sistema de monitoramento que transforma logs JSON do MongoDB/Joi em inteligência de negócio no Kibana.',
    tech: ['Node.js', 'MongoDB', 'Kibana', 'Joi'],
    link: 'https://github.com/Benevanio/node-monitoring',
  },
  {
    type: 'Back-End',
    arch: 'Layered (MVC)',
    name: 'Bene Tesla API',
    description: 'Backend Java com Spring Boot estruturado em camadas com foco em testes automatizados. CRUD completo com busca por termo, email e contagem via H2.',
    tech: ['Java', 'Spring Boot', 'H2', 'JUnit'],
    link: 'https://github.com/Benevanio/bene_tesla/tree/master',
  },
  {
    type: 'Integrações',
    arch: 'Event-Driven',
    name: 'QueueMaster',
    description: 'Solução empresarial de mensageria assíncrona com MuleSoft Mule 4 e Apache ActiveMQ. Error handling avançado, UUID para rastreabilidade, priority queues, multiple consumers e logs estruturados.',
    tech: ['MuleSoft', 'ActiveMQ', 'Mule 4', 'HTTP'],
    link: 'https://github.com/Benevanio/QueueMaster',
  },
]

export const principles = [
  { icon: 'layers', name: 'Domain-Driven Design', desc: 'Modelagem de domínio alinhada ao negócio e linguagem ubíqua.' },
  { icon: 'zap', name: 'Event-Driven Architecture', desc: 'Integrações assíncronas para resiliência e desacoplamento.' },
  { icon: 'code', name: 'Clean Code', desc: 'Código legível, testável e orientado à manutenção.' },
  { icon: 'box', name: 'SOLID', desc: 'Design orientado a responsabilidade única e extensibilidade.' },
  { icon: 'network', name: 'API-Led Connectivity', desc: 'Camadas Experience, Process e System para integrações corporativas.' },
]

export const cvLinks = [
  { title: 'Back-End Java', desc: 'Java, Spring e arquitetura orientada a serviços.', url: 'https://drive.google.com/drive/folders/17hLBQxichMCgJ6w-TmcwApQ0WLBj6_-U?usp=sharing' },
  { title: 'Back-End Node.js', desc: 'Node.js 22, TypeScript e APIs escaláveis.', url: 'https://drive.google.com/drive/folders/1Biehfj6UQfVIIVd0p2Hv26uA2Dcof2_w?usp=sharing' },
  { title: 'MuleSoft Integrations', desc: 'API-Led Connectivity e DataWeave.', url: 'https://drive.google.com/drive/folders/1c5NRTrCOu9nyW_aFtWgFeDbhdOTA1Grd?usp=sharing' },
  { title: 'Node.js + React', desc: 'Full-Stack com Node.js e React.', url: 'https://drive.google.com/drive/folders/1elY2dmdPJ3oVvyzVFIvACW6gDDD49Df9?usp=sharing' },
  { title: 'Front-End React', desc: 'React, componentização e interfaces modernas.', url: 'https://drive.google.com/drive/folders/1L_p60TW3SOc1sz45_PD_a6ZgPIttdWH5?usp=sharing' },
  { title: 'Suporte', desc: 'Suporte técnico e atendimento especializado.', url: 'https://drive.google.com/drive/folders/1JHUZ3xxt2qpObMn4AJ3308We6DoLX9eA?usp=sharing' },
]
