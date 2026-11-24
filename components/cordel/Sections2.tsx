import { FolderOpen } from 'lucide-react'
import { Fragment } from 'react'
import { apiLedLayers, principles, stackGroups, timeline } from '@/data/portfolio'
import { AnimateIn } from '../ui/AnimateIn'
import { SectionHead, Tags } from './primitives'

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']

export function Trajetoria() {
  return (
    <section id="trajetoria" aria-labelledby="trajetoria-titulo" className="trajetoria">
      <div className="wrap trajetoria__inner">
        <AnimateIn>
          <SectionHead
            canto="CANTO IV"
            secao="TRAJETÓRIA PROFISSIONAL"
            id="trajetoria-titulo"
            title="Linha do tempo técnica"
            sub="Evolução técnica e impacto de negócio em cada etapa — cada experiência, um capítulo."
          />
        </AnimateIn>

        <ol>
          {timeline.map((t, i) => (
            <li key={t.role} className="cap-prof">
              <div className="cap-prof__data">
                <span className="cap-prof__num">Capítulo {ROMAN[timeline.length - 1 - i]}</span>
                <span className={`cap-prof__periodo${i === 0 ? ' cap-prof__periodo--atual' : ''}`}>{t.period.toUpperCase()}</span>
              </div>
              <AnimateIn className="cap-prof__conteudo" direction="left">
                <h3 className="cap-prof__cargo">{t.role}</h3>
                <p className="cap-prof__org">{t.company}</p>
                <p className="cap-prof__desc">{t.description}</p>
                <Tags items={t.tech} />
              </AnimateIn>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function Arquitetura() {
  return (
    <section id="arquitetura" aria-labelledby="arquitetura-titulo" className="arquitetura on-ink">
      <div className="wrap arquitetura__inner">
        <AnimateIn>
          <SectionHead
            canto="CANTO V"
            secao="PRINCÍPIOS DE ARQUITETURA"
            id="arquitetura-titulo"
            title="Decisões técnicas orientadas à escalabilidade"
            sub="Aqui o folheto vira planta técnica: do sertão ao sistema distribuído."
          />
        </AnimateIn>

        <div className="arquitetura__corpo">
          <ol className="principios">
            {principles.map((p, i) => (
              <li key={p.code} className="principio">
                <span className="principio__idx" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <span className="principio__cod" aria-hidden="true">{p.code}</span>
                <div className="principio__txt">
                  <h3 className="principio__t">{p.name}</h3>
                  <p className="principio__d">{p.desc}</p>
                </div>
              </li>
            ))}
          </ol>

          <AnimateIn delay={0.15} className="apiled">
            <figure aria-label="Diagrama de arquitetura API-Led: camadas Experience, Process e System">
              <div className="apiled__barra">
                <span className="apiled__arquivo">api-led.architecture</span>
                <span className="apiled__pontos" aria-hidden="true">
                  <i style={{ background: 'var(--terracota)' }} />
                  <i style={{ background: 'var(--sertao)' }} />
                  <i style={{ background: 'var(--mandacaru)' }} />
                </span>
              </div>
              {apiLedLayers.map(layer => (
                <Fragment key={layer.name}>
                  <div className="camada" style={{ ['--c' as string]: layer.color }}>
                    <div className="camada__head">
                      <span className="camada__n">{layer.name}</span>
                      <span className="camada__s">{layer.sub}</span>
                    </div>
                    <div className="camada__nos">
                      {layer.nodes.map(n => <span key={n} className="camada__no">{n}</span>)}
                    </div>
                  </div>
                  {layer.link && (
                    <div className="conector">
                      <i aria-hidden="true" />
                      <span>{layer.link}</span>
                    </div>
                  )}
                </Fragment>
              ))}
            </figure>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}

export function Stack() {
  return (
    <section id="stack" aria-labelledby="stack-titulo" className="stack on-ink">
      <div className="wrap stack__inner">
        <div className="stack__head">
          <div className="stack__head-esq">
            <span className="kicker-row__canto">CANTO VI · STACK TÉCNICA</span>
            <h2 id="stack-titulo" className="sec-title">Ferramentas &amp; Tecnologias</h2>
          </div>
          <p className="sec-sub">
            Do backend e das integrações corporativas ao produto full-stack — web, desktop e mobile — com observabilidade e qualidade de ponta a ponta.
          </p>
        </div>

        <ul className="grid-3">
          {stackGroups.map((g, i) => (
            <li key={g.path}>
              <AnimateIn delay={(i % 3) * 0.08} className="stack-card">
                <span className="stack-card__path">
                  <FolderOpen size={15} aria-hidden="true" />
                  {g.path}
                </span>
                <h3 className="stack-card__t">{g.title}</h3>
                <Tags items={g.tools} dark />
                <span className="stack-card__count">{`// ${g.tools.length} ferramentas`}</span>
              </AnimateIn>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
