import { Braces } from 'lucide-react'
import Image from 'next/image'
import { metrics, originChapters } from '@/data/portfolio'
import { AnimateIn } from '../ui/AnimateIn'
import { CountUp } from '../ui/CountUp'
import { Losango, SectionHead, Tags } from './primitives'

const aboutTags = ['MuleSoft', 'DataWeave', 'API-Led Connectivity', 'ActiveMQ', 'GraphQL', 'Node.js', 'TypeScript', 'Java']

export function Sobre() {
  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="wrap sobre">
      <div className="sobre__col-titulo">
        <AnimateIn>
          <SectionHead canto="CANTO I" secao="SOBRE MIM" id="sobre-titulo" title="Engenheiro de Software com foco em performance" />
        </AnimateIn>
      </div>

      <AnimateIn delay={0.1} className="sobre__col-texto">
        <div className="capitular-p">
          <span className="capitular" aria-hidden="true">E</span>
          <p>
            <span className="sr-only">E</span>ngenheiro de Software focado em backend e integrações corporativas, construindo APIs e
            sistemas distribuídos que conectam plataformas de grande porte — com atuação também Full Stack (React) e Desktop (Rust/Tauri).
          </p>
        </div>

        <dl className="formacao">
          <div className="formacao__item">
            <dt className="k-mono">FORMAÇÃO</dt>
            <dd className="formacao__t">Engenharia de Software</dd>
            <dd className="formacao__s">Anhanguera</dd>
          </div>
          <div className="formacao__item">
            <dt className="k-mono">PÓS-GRADUAÇÃO</dt>
            <dd className="formacao__t">Arquitetura de Software Distribuído</dd>
            <dd className="formacao__s">PUC Minas · em andamento</dd>
          </div>
        </dl>

        <Tags items={aboutTags} />
      </AnimateIn>
    </section>
  )
}

export function Resultados() {
  return (
    <section id="resultados" aria-labelledby="resultados-titulo" className="resultados">
      <div className="wrap resultados__inner">
        <AnimateIn>
          <SectionHead
            canto="CANTO II"
            secao="RESULTADOS CHAVE"
            id="resultados-titulo"
            title="Impacto mensurável em integrações para Natura e Avon"
            sub="Indicadores técnicos — números que contam a história do trabalho em produção."
          />
        </AnimateIn>

        <ul className="grid-3">
          {metrics.map((m, i) => (
            <li key={m.label}>
              <AnimateIn delay={(i % 3) * 0.08} className="indicador" >
                <div className="indicador__miolo">
                  <div className="indicador__topo">
                    <span className="indicador__idx">Nº {String(i + 1).padStart(2, '0')}</span>
                    <Losango />
                  </div>
                  <p className={`indicador__valor${i === metrics.length - 1 ? ' indicador__valor--ok' : ''}`}>
                    <CountUp value={m.value} />
                  </p>
                  <h3 className="indicador__rotulo">{m.label}</h3>
                  <p className="indicador__desc">{m.detail}</p>
                </div>
              </AnimateIn>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function Origem() {
  return (
    <section id="origem" aria-labelledby="origem-titulo" className="wrap origem">
      <AnimateIn>
        <SectionHead
          canto="CANTO III"
          secao="MINHA ORIGEM"
          id="origem-titulo"
          title="Uma trajetória moldada pelo Nordeste"
          sub="A história em cinco capítulos — do Rio São Francisco ao código."
        />
      </AnimateIn>

      <ol className="grid-5">
        {originChapters.map((c, i) => {
          const last = i === originChapters.length - 1
          return (
            <li key={c.num}>
              <AnimateIn delay={i * 0.1} className="capitulo">
                <div className="marco" aria-hidden="true">
                  <span className={`marco__circ${last ? ' marco__circ--fim' : ''}`}>{c.num}</span>
                  {!last && <span className="marco__fio" />}
                </div>

                <div className="moldura">
                  {c.image ? (
                    <div className="moldura__img">
                      <Image src={c.image} alt={c.alt ?? ''} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px" />
                    </div>
                  ) : (
                    <DiagramaV />
                  )}
                </div>

                <div className="capitulo__txt">
                  <span className="capitulo__cap">{c.cap}</span>
                  <h3 className="capitulo__lugar">{c.place}</h3>
                  <span className="capitulo__estado">{c.state}</span>
                  <p className="capitulo__desc">{c.desc}</p>
                </div>
              </AnimateIn>
            </li>
          )
        })}
      </ol>
    </section>
  )
}

function DiagramaV() {
  return (
    <div className="diagrama-iv" role="img" aria-label="Diagrama: AL, SE, SP e MG convergem para engenharia.software, que retorna 200 OK">
      <span className="diagrama-iv__coment">{'// capitulo_v.ts'}</span>
      <div className="diagrama-iv__raizes">
        {['AL', 'SE', 'SP', 'MG'].map(uf => (
          <div key={uf} className="diagrama-iv__no">
            <span className="diagrama-iv__box">{uf}</span>
            <span className="haste" />
          </div>
        ))}
      </div>
      <span className="diagrama-iv__bus" />
      <span className="haste" style={{ height: 20 }} />
      <span className="diagrama-iv__eng">
        <Braces size={16} aria-hidden="true" />
        engenharia.software
      </span>
      <span className="diagrama-iv__ret">→ 200 OK</span>
    </div>
  )
}
