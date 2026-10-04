# Portfólio — Benevanio Santos

Site de portfólio profissional de **Benevanio Santos**, Engenheiro de Software Full Stack & Desktop. Apresenta, em uma narrativa visual única, a trajetória profissional, a experiência corporativa, os princípios de arquitetura, a stack técnica, os projetos e as formas de contato.

A experiência foi pensada para o visitante entender rapidamente a sequência:

**quem sou → minha experiência → o que construí → minhas especialidades → minha stack → minha evolução profissional → como entrar em contato.**

## Sobre o projeto

Aplicação web de página única (single page), construída com **Next.js (App Router)** e renderização estática. Todo o conteúdo (dados pessoais, métricas, linha do tempo, projetos, princípios e currículos) é centralizado em um único arquivo de dados, facilitando a manutenção sem tocar na interface.

O design segue uma identidade sóbria e técnica — tipografia forte, hierarquia clara, tema claro/escuro e uma paleta inspirada na origem nordestina do autor. As animações comunicam **precisão, tecnologia e arquitetura**, sem exageros.

## Stack

| Camada | Tecnologia |
| --- | --- |
| Framework | Next.js 16 (App Router) + React 19 |
| Linguagem | TypeScript |
| Estilo | Tailwind CSS 4 + CSS variables (tema claro/escuro) |
| Animações | [Anime.js](https://animejs.com/) 4 |
| Logos de tecnologias | [Simple Icons](https://simpleicons.org/) |
| Ícones de interface | lucide-react |
| Fontes | Outfit + Public Sans (Google Fonts) |

## Funcionalidades

- **Hero** com backdrop SVG animado (malha de conexão inspirada em API-Led) e entrada em _stagger_.
- **Métricas** com contagem progressiva ao entrar em tela (25+ integrações MuleSoft, 100+ sistemas monitorados, performance, disponibilidade etc.).
- **Origem** — a trajetória geográfica do Nordeste até a engenharia de software.
- **Linha do tempo** profissional e acadêmica, com desenho progressivo da linha.
- **Princípios de arquitetura** (DDD, Event-Driven, Clean Code, SOLID, API-Led).
- **Stack técnica** com **logos oficiais** das marcas via Simple Icons e microinterações de hover.
- **Projetos** com tipo, arquitetura, stack e link para o GitHub.
- **Contato** com agenda, e-mail, LinkedIn, GitHub e WhatsApp.
- **Modal de currículos** por especialidade (Java, Node.js, MuleSoft, Full Stack, Front-End, Suporte).
- **Tema claro/escuro** com persistência em `localStorage` e detecção da preferência do sistema.

## Acessibilidade e performance

- Respeita `prefers-reduced-motion`: todas as animações têm fallback estático.
- _Skip link_, `aria-label`s, foco visível e contraste ajustado por tema.
- Backdrop e logos em SVG leve; animações baseadas em `opacity`/`transform` para renderização fluida.
- Página pré-renderizada como conteúdo estático.

## Estrutura

```
app/
  layout.tsx          Metadados, tema inicial e estilos globais
  page.tsx            Composição das seções
  globals.css         Tokens de tema (claro/escuro) e base
components/
  hero/               Hero
  three/HeroScene     Backdrop SVG animado (Anime.js)
  sections/           About, Results, Architecture, Technologies, Contact
  journey/Origin      Trajetória de origem
  timeline/Timeline   Linha do tempo
  projects/Projects   Projetos técnicos
  ui/
    AnimateIn         Revelação no scroll (Anime.js + IntersectionObserver)
    CountUp           Contagem progressiva de métricas
    TechIcon          Componente reutilizável de logo (Simple Icons)
    motion.ts         Helpers de animação (reduce-motion, lift, pop)
    CvModal, Nav, Footer, ThemeToggle
data/
  portfolio.ts        Conteúdo do site (fonte única de verdade)
  techIcons.ts        Registro dos logos usados (Simple Icons)
```

## Como executar

Pré-requisitos: Node.js 20+.

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

### Build de produção

```bash
npm run build
npm run start
```

> Observação: o ambiente de desenvolvimento usa o motor **webpack** (`next dev --webpack`). Caso o build padrão (Turbopack) apresente instabilidade na sua máquina, gere o build com `npx next build --webpack`.

## Personalização de conteúdo

Todo o texto e os dados exibidos ficam em `data/portfolio.ts` (dados pessoais, métricas, linha do tempo, projetos, princípios e links de currículo). Os logos das tecnologias são resolvidos por `slug` em `data/techIcons.ts` — para adicionar uma tecnologia, inclua-a em `techStack` com um `slug` existente no Simple Icons e registre o ícone correspondente.

## Autor

**Benevanio Santos** — Engenheiro de Software Full Stack & Desktop

- LinkedIn: https://linkedin.com/in/bene-tesla
- GitHub: https://github.com/Benevanio

## Performance e otimizações

Diagnóstico (Lighthouse inicial) e correções aplicadas, sem alterar layout, cores, tipografia ou animações:

- **Render-blocking**: o CSS global importava Google Fonts via @import (requisição externa bloqueante). Agora as fontes Outfit e Public Sans usam 
ext/font/google (self-hosted, display: swap), expostas como variáveis --font-outfit / --font-public-sans em --font-heading / --font-body. O CSS é inlinado (experimental.inlineCss). Na nova auditoria local o insight de render-blocking passou a 100%.
- **JavaScript**: removidas do package.json as dependências sem nenhum uso no código (	hree, @react-three/fiber, @react-three/drei, @types/three, ramer-motion; o HeroScene é SVG + Anime.js) e o 	ranspilePackages: ['three']. CvModal agora é carregado sob demanda (
ext/dynamic) apenas ao clicar em "Baixar currículos". optimizePackageImports para lucide-react e nimejs.
- **LCP**: o elemento LCP é o <h1> do Hero. Antes ele iniciava com opacity: 0 e era revelado por Anime.js após a hidratação. Agora a entrada do Hero é feita por animação CSS (.hero-reveal/.hero-move) e o <h1> anima somente 	ransform, ficando visível no HTML inicial. A animação de Anime.js continua no indicador de scroll.
- **Long task / TBT**: remover o reveal do Hero via JS, o modal e as libs 3D do bundle inicial reduziu o TBT medido localmente (580 ms → 310 ms).
- **JavaScript legado**: adicionado rowserslist (Chrome/Edge/Firefox ≥ 111, Safari/iOS ≥ 16.4). O aviso restante (~12 KiB) vem do chunk de polyfills do próprio Next.js (794-*.js) e não do código do projeto.
- **DOM**: 925 elementos, profundidade 11, a maior parte vem da seção Tecnologias (cards com ícones SVG, até 30 filhos por grupo). Não foi alterado para não mudar o layout; o insight está com score 100% no Lighthouse.
- **Contraste**: --text-subtle (dark e light) e --accent-bright (light) foram escurecidos/clareados minimamente; texto de botões primários usa --on-primary (branco no tema claro). Acessibilidade: 100 na auditoria local.

## SEO

- Domínio oficial: https://bene-tesla-dev.com.br/ (definido em pp/layout.tsx, pp/page.tsx, public/robots.txt, public/sitemap.xml).
- Metadata (title, description, canonical, robots index/follow, Open Graph, Twitter Card) em pp/layout.tsx.
- Imagens OG/Twitter geradas em pp/opengraph-image.tsx e pp/twitter-image.tsx.
- JSON-LD Person + WebSite em pp/page.tsx.
- public/robots.txt e public/sitemap.xml (apenas a rota /).
- Google Search Console: defina a variável de ambiente GOOGLE_SITE_VERIFICATION (meta tag de verificação); depois verifique o site e envie o sitemap manualmente.
- 
pm run build usa --webpack para evitar a string interna ile:///ROOT/ do runtime do Turbopack.

## Validação

- 
pm run build: passou. Não existem scripts lint nem 	est.
- Lighthouse local (
ext start, simulação mobile padrão, uma execução): Performance 0,79 → 0,86; Acessibilidade 1,0; TBT 580 → 310 ms; render-blocking: resolvido.
- Limitações: LCP continua ~3,1 s no ambiente local simulado (atraso de renderização do <h1>, relacionado à troca de fonte/hidratação); JavaScript não utilizado (~53 KiB) e legado (~12 KiB) permanecem nos chunks de framework do Next/React. Métricas de produção (Vercel/domínio) não foram medidas.