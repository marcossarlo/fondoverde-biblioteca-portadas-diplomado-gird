import Image from 'next/image'
import { EbookCover } from './ebook-cover'
import { SiteHeader } from './site-header'

export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-screen flex-col overflow-hidden bg-background">
      <Image
        src="/images/territorio-cuenca.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-right opacity-40"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/90 to-background/40"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background to-transparent"
      />

      <SiteHeader />

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center gap-14 px-6 pt-6 pb-16 md:px-10 lg:flex-row lg:gap-16 lg:pb-12">
        <div className="flex w-full flex-1 flex-col gap-7 lg:max-w-xl">
          <p
            style={{ '--delay': '100ms' } as React.CSSProperties}
            className="animate-rise-in flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-accent uppercase"
          >
            <span aria-hidden="true" className="h-px w-8 bg-primary" />
            Curso 1 · Análisis transversal de los componentes del riesgo
          </p>

          <h1
            style={{ '--delay': '220ms' } as React.CSSProperties}
            className="animate-rise-in font-serif text-4xl leading-[1.05] font-medium text-balance md:text-5xl xl:text-6xl"
          >
            Introducción a la{' '}
            <em className="text-primary italic">Gestión Integral del Riesgo</em> de Desastres y
            conceptos clave
          </h1>

          <div
            style={{ '--delay': '360ms' } as React.CSSProperties}
            className="animate-rise-in flex flex-wrap items-center gap-x-8 gap-y-5 border-t border-border pt-6"
          >
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                Módulo
              </span>
              <span className="font-serif text-2xl">1</span>
            </div>
            <div className="h-10 w-px bg-border" aria-hidden="true" />
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                Autor
              </span>
              <span className="text-lg font-semibold">Yandy Rodríguez Cueto, Dr.</span>
            </div>
          </div>
        </div>

        <div className="w-full flex-1 lg:max-w-md">
          <EbookCover />
        </div>
      </div>
    </section>
  )
}
