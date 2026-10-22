import Image from 'next/image'

export function EbookCoverLarge() {
  return (
    <figure
      aria-label="Portada: Curso 1, Análisis transversal de los componentes del riesgo. Módulo 1, Introducción a la Gestión Integral del Riesgo de Desastres y conceptos clave"
      className="relative mx-auto aspect-[3/4] w-full max-w-[22rem] sm:max-w-[34rem] lg:max-w-[40rem]"
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
            className="h-8 w-auto self-start sm:h-11 lg:h-12"
          />

          <div className="mt-6 flex flex-col gap-3 sm:mt-10 sm:gap-5">
            <p className="flex items-start gap-3 text-[0.6rem] leading-snug font-bold tracking-[0.18em] uppercase sm:text-xs sm:tracking-[0.2em]">
              <span aria-hidden="true" className="mt-[0.45em] h-px w-6 shrink-0 bg-primary-foreground sm:w-8" />
              Curso 1 · Análisis transversal de los componentes del riesgo
            </p>

            <h2 className="font-serif text-[1.65rem] leading-[1.08] font-medium text-balance sm:text-4xl lg:text-[2.9rem]">
              Introducción a la{' '}
              <em className="italic">Gestión Integral del Riesgo</em> de Desastres y conceptos clave
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

          <div className="mt-5 flex items-end justify-between gap-4 border-t border-primary-foreground/30 pt-4 sm:mt-7 sm:pt-5">
            <div className="flex flex-col gap-1">
              <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase sm:text-xs">
                Módulo
              </span>
              <span className="font-serif text-3xl leading-none sm:text-5xl">1</span>
            </div>
            <div className="flex flex-col gap-1 text-right">
              <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase sm:text-xs">
                Autor
              </span>
              <span className="text-sm font-semibold sm:text-lg">Yandy Rodríguez Cueto, Dr.</span>
            </div>
          </div>
        </div>
      </div>
    </figure>
  )
}
