import { ArrowRight, FileDown } from 'lucide-react'
import Image from 'next/image'
import { personal, route } from '@/data/portfolio'
import { OpenCvButton } from './Cv'
import { Losango } from './primitives'

export function Hero() {
  return (
    <>
      <section id="capa" aria-labelledby="capa-titulo" className="wrap hero">
        <div className="hero__texto">
          <p className="hero__kicker">
            <Losango />
            <span>FOLHETO Nº 01 · CORDEL DIGITAL<span className="ano"> · 2026</span></span>
          </p>

          <div className="hero__titulo">
            <p className="hero__frase">Do sertão ao código.</p>
            <h1 id="capa-titulo" className="hero__nome">
              <span>Benevanio</span>
              <span>Santos</span>
            </h1>
          </div>

          <p className="hero__cargo">
            <strong>Engenheiro de Software</strong>
            <Losango className="losango--sm" />
            <span>Backend &amp; Integrações</span>
            <span className="sp" aria-hidden="true" />
            <span className="hero__stack">{'{ api-led }'}</span>
          </p>

          <p className="hero__resumo">{personal.tagline}</p>

          <div className="hero__botoes">
            <a href="#contato" className="btn btn--ink">
              Vamos conversar
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <OpenCvButton className="btn btn--line">
              <FileDown size={18} aria-hidden="true" />
              Baixar currículos
            </OpenCvButton>
          </div>
        </div>

        <figure className="gravura">
          <div className="gravura__moldura">
            <div className="gravura__interna">
              <Image
                src="/gravuras/hero.png"
                alt="Xilogravura: o sol do sertão, mandacarus e o Rio São Francisco se transformando em código"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 540px"
              />
              <span className="anotacao anotacao--ink" aria-hidden="true">rio.flow() → api.led()</span>
              <span className="anotacao anotacao--sertao" aria-hidden="true">lat -9.74 · lon -37.43</span>
            </div>
          </div>
          <figcaption className="gravura__legenda">
            <span className="gravura__prancha">GRAVURA I — O rio que virou código</span>
            <span className="gravura__tecnica">xilogravura digital</span>
          </figcaption>
        </figure>
      </section>

      <Rota />
    </>
  )
}

function Rota() {
  return (
    <section className="rota" aria-label="A rota: do sertão ao código">
      <ol className="wrap rota__inner">
        <li className="rota__label" aria-hidden="true">A ROTA</li>
        {route.map((p, i) => (
          <RotaItem key={p.city} stop={p} last={i === route.length - 1} />
        ))}
      </ol>
    </section>
  )
}

function RotaItem({ stop, last }: { stop: (typeof route)[number]; last: boolean }) {
  const dot = <span className={`ponto${stop.end ? ' ponto--fim' : ''}`} aria-hidden="true" />
  return (
    <>
      <li className="parada">
        <span className="parada__trilho" aria-hidden="true">
          {dot}
          {!last && <i />}
        </span>
        <span className="parada__txt">
          <span className="parada__linha">
            {dot}
            <span className="parada__cidade">{stop.city}</span>
          </span>
          <span className="parada__coord">{stop.coord}</span>
          <span className="parada__curto">{stop.short}</span>
        </span>
      </li>
      {!last && (
        <li className="rota__seta" aria-hidden="true">
          <ArrowRight size={20} />
        </li>
      )}
    </>
  )
}
