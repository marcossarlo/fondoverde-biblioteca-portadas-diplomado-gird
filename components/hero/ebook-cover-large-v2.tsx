import Image from 'next/image'

export function EbookCoverLargeV2() {
  return (
    <figure
      aria-label="Portada: Curso 1, Análisis transversal de los componentes del riesgo. Módulo 1, Introducción a la Gestión Integral del Riesgo de Desastres y conceptos clave"
      className="relative mx-auto aspect-[210/297] w-full max-w-[22rem] sm:max-w-[34rem] lg:max-w-[49.625rem]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-10 -bottom-8 h-14 rounded-[50%] bg-black/50 blur-3xl"
      />

      <div className="relative flex h-full overflow-hidden rounded-r-2xl rounded-l-sm bg-primary shadow-[0_40px_80px_-24px_rgba(0,0,0,0.7)]">
        <div
          aria-hidden="true"
          className="w-4 shrink-0 bg-gradient-to-r from-black/35 via-black/10 to-transparent sm:w-5"
        />

        <div className="flex min-w-0 flex-1 flex-col p-6 pl-4 text-primary-foreground sm:p-10 sm:pl-6 lg:p-12 lg:pl-8">
          <Image
            src="/images/fondo-verde-logo-blanco.png"
            alt="Fondo Verde"
            width={1650}
            height={400}
            className="h-10 w-auto self-center sm:h-14 lg:h-16"
          />

          <div className="mt-6 flex flex-col gap-3 sm:mt-10 sm:gap-5">
            <p className="flex flex-wrap items-center gap-x-2 text-[0.65rem] leading-snug font-medium tracking-[0.08em] uppercase sm:text-[0.8rem] sm:tracking-[0.1em] lg:flex-nowrap lg:whitespace-nowrap">
              <span aria-hidden="true" className="mr-1 h-px w-6 shrink-0 bg-primary-foreground sm:mr-2 sm:w-8" />
              <span className="font-bold">Curso 1</span>
              <span aria-hidden="true">·</span>
              <span>Análisis transversal de los componentes del riesgo</span>
            </p>

            <h2 className="font-serif text-[1.65rem] leading-[1.08] font-medium text-balance text-foreground sm:text-4xl lg:text-[2.9rem]">
              Introducción a la{' '}
              <em className="text-primary-foreground italic">Gestión Integral del Riesgo de Desastres</em>{' '}
              y conceptos clave
            </h2>
          </div>

          <div className="relative mt-6 min-h-0 flex-1 overflow-hidden rounded-lg sm:mt-8">
            <Image
              src="/images/territorio-cuenca.webp"
              alt="Ilustración de una cuenca con río, montañas y comunidades rurales"
              fill
              sizes="(min-width: 1024px) 34rem, (min-width: 640px) 28rem, 18rem"
              className="object-cover object-[40%_50%]"
            />
          </div>

          <div className="mt-5 flex items-center justify-between gap-4 border-t border-primary-foreground/30 pt-4 sm:mt-7 sm:pt-5">
            <span className="inline-flex items-center rounded-full bg-background px-4 py-1.5 text-xs font-bold tracking-[0.14em] text-foreground uppercase shadow-md sm:px-6 sm:py-2 sm:text-base">
              Módulo 1
            </span>
            <div className="flex flex-col gap-0.5 text-right">
              <span className="text-[0.55rem] font-bold tracking-[0.2em] uppercase sm:text-[0.65rem]">
                Autor
              </span>
              <span className="text-xs font-semibold sm:text-sm">Yandy Rodríguez Cueto, Dr.</span>
            </div>
          </div>
        </div>
      </div>
    </figure>
  )
}
