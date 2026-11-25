import { ArrowUp, ArrowUpRight, Calendar, Mail, MapPin, MessageCircle, Play } from 'lucide-react'
import type { ReactNode } from 'react'
import { personal, projects, talks } from '@/data/portfolio'
import { AnimateIn } from '../ui/AnimateIn'
import { GithubIcon, LinkedinIcon, SectionHead, Tags } from './primitives'

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI']

export function Palestras() {
  return (
    <section id="palestras" aria-labelledby="palestras-titulo" className="wrap palestras">
      <div className="palestras__topo">
        <AnimateIn>
          <SectionHead
            canto="CANTO VII"
            secao="COMUNIDADE"
            id="palestras-titulo"
            title="Palestras"
            sub="Compartilhando conhecimento sobre MuleSoft, APIs e integrações com comunidades de tecnologia."
          />
        </AnimateIn>
        <aside className="nota">
          <span className="k-mono">NOTA DO AUTOR</span>
          <p className="nota__t">De volta às raízes: duas das três palestras aconteceram em Alagoas e Sergipe.</p>
        </aside>
      </div>

      <ul className="grid-3 palestras__grid">
        {talks.map((t, i) => {
          const video = t.platform === 'YouTube'
          return (
            <li key={t.title}>
              <AnimateIn delay={i * 0.08} className={`folheto${i === 0 ? ' folheto--destaque' : ''}`}>
                <div className="folheto__topo">
                  <span className="folheto__num">PALESTRA {ROMAN[i]}</span>
                  <span className="folheto__local">
                    <MapPin size={14} aria-hidden="true" />
                    {t.location}
                  </span>
                </div>
                <span className="folheto__evento">{t.event}</span>
                <h3 className="folheto__titulo">{t.title}</h3>
                <p className="folheto__desc">{t.description}</p>
                <a href={t.link} target="_blank" rel="noopener noreferrer" className="link-sub" aria-label={`${video ? 'Assistir palestra' : 'Ver publicação'}: ${t.title} (abre em nova aba)`}>
                  {video ? 'Assistir palestra' : 'Ver publicação'}
                  {video ? <Play size={16} aria-hidden="true" /> : <ArrowUpRight size={16} aria-hidden="true" />}
                </a>
              </AnimateIn>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export function Projetos() {
  return (
    <section id="projetos" aria-labelledby="projetos-titulo" className="projetos">
      <div className="wrap projetos__inner">
        <AnimateIn>
          <SectionHead
            canto="CANTO VIII"
            secao="CATÁLOGO DE PROJETOS"
            id="projetos-titulo"
            title="Projetos técnicos"
            sub="Engenharia aplicada com foco em arquitetura, integrações e performance."
          />
        </AnimateIn>

        <ul className="grid-3 projetos__grid">
          {projects.map((p, i) => (
            <li key={p.name}>
              <AnimateIn delay={(i % 3) * 0.08} className="projeto">
                <div className="projeto__topo">
                  <span className="projeto__num">FOLHETO Nº {String(i + 1).padStart(2, '0')}</span>
                  <span className="projeto__cat">{p.type.toUpperCase()} · {p.arch}</span>
                </div>
                <h3 className="projeto__titulo">{p.name}</h3>
                <p className="projeto__desc">{p.description}</p>
                <Tags items={p.tech} />
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="link-sub" aria-label={`Ver ${p.name} no GitHub (abre em nova aba)`}>
                  Ver no GitHub
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </AnimateIn>
            </li>
          ))}
          <li>
            <AnimateIn delay={0.16} className="indice">
              <div className="indice__topo">
                <span className="indice__k">ÍNDICE COMPLETO</span>
                <p className="indice__t">Repositórios técnicos e experimentos.</p>
                <p className="indice__d">Código fonte e evolução contínua.</p>
              </div>
              <div className="terminal" aria-hidden="true">
                <span>$ git clone github.com/Benevanio</span>
                <span className="terminal__ok">→ {projects.length} projetos neste catálogo</span>
              </div>
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="btn btn--sertao">
                Abrir perfil no GitHub
                <GithubIcon size={18} />
              </a>
            </AnimateIn>
          </li>
        </ul>
      </div>
    </section>
  )
}

const channels: { name: string; desc: string; sub: string; url: string; icon: ReactNode }[] = [
  { name: 'LinkedIn', desc: 'Networking e histórico profissional.', sub: 'Perfil com experiência e certificações.', url: personal.linkedin, icon: <LinkedinIcon size={22} /> },
  { name: 'GitHub', desc: 'Repositórios técnicos e experimentos.', sub: 'Código fonte e evolução contínua.', url: personal.github, icon: <GithubIcon size={22} /> },
  { name: 'WhatsApp', desc: 'Contato rápido para alinhamentos.', sub: 'Retorno em horário comercial.', url: 'https://wa.me/5519998283835', icon: <MessageCircle size={22} aria-hidden="true" /> },
]

export function Contato() {
  return (
    <footer id="contato" aria-labelledby="contato-titulo" className="contato on-ink">
      <div className="wrap contato__inner">
        <SectionHead canto="CANTO IX" secao="CONTATO" />

        <div className="contato__corpo">
          <AnimateIn className="fecho">
            <span className="fecho__aspas" aria-hidden="true">“</span>
            <blockquote className="fecho__citacao">Cada linha de código carrega um pouco da minha história.</blockquote>
            <div className="convite">
              <h2 id="contato-titulo" className="convite__t">Vamos conversar</h2>
              <p className="convite__d">Disponível para oportunidades em engenharia de software, arquitetura e integrações.</p>
            </div>
            <div className="fecho__botoes">
              <a href={personal.calendar} target="_blank" rel="noopener noreferrer" className="btn btn--sertao">
                Agendar conversa
                <Calendar size={18} aria-hidden="true" />
              </a>
              <a href={`mailto:${personal.email}`} className="btn btn--line-paper">
                <Mail size={18} aria-hidden="true" />
                Enviar email
              </a>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.12} className="canais">
            <ul className="canais__lista">
              {channels.map(c => (
                <li key={c.name}>
                  <a href={c.url} target="_blank" rel="noopener noreferrer" className="canal" aria-label={`${c.name}: ${c.desc} (abre em nova aba)`}>
                    <span className="canal__icon" aria-hidden="true">{c.icon}</span>
                    <span className="canal__txt">
                      <span className="canal__nome">{c.name}</span>
                      <span className="canal__desc">{c.desc}</span>
                      <span className="canal__sub">{c.sub}</span>
                    </span>
                    <ArrowUpRight size={22} className="canal__seta" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="nota-email">
              <span>Para confirmar detalhes, envie a pauta para</span>
              <a href={`mailto:${personal.email}`}>{personal.email}</a>
            </p>
          </AnimateIn>
        </div>

        <div className="rodape">
          <span className="selo" aria-hidden="true">Fim</span>
          <div className="rodape__txt">
            <p className="rodape__c">© {new Date().getFullYear()} Benevanio Santos. Engenharia de software orientada a resultados.</p>
            <p className="rodape__s">Cordel Digital — do sertão ao código · Pão de Açúcar → Porto da Folha → Nova Odessa → Uberlândia</p>
          </div>
          <a href="#capa" className="link-sub">
            Voltar à capa
            <ArrowUp size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
