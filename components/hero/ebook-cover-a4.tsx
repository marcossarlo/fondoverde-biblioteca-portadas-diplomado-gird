import Image from 'next/image'

export function EbookCoverA4() {
  return (
    <figure
      aria-label="Portada A4: Curso 1, Análisis transversal de los componentes del riesgo. Módulo 1, Introducción a la Gestión Integral del Riesgo de Desastres y conceptos clave"
      className="a4-sheet relative flex shrink-0 overflow-hidden bg-primary"
      style={{ width: '210mm', height: '297mm' }}
    >
      <div
        aria-hidden="true"
        className="w-5 shrink-0 bg-gradient-to-r from-black/35 via-black/10 to-transparent"
      />

      <div className="flex min-w-0 flex-1 flex-col p-12 pl-8 text-primary-foreground">
        <Image
          src="/images/fondo-verde-logo-blanco.png"
          alt="Fondo Verde"
          width={1650}
          height={400}
          priority
          className="h-16 w-auto self-center"
        />

        <div className="mt-10 flex flex-col gap-5">
          <p className="flex items-center gap-x-2 text-[0.8rem] leading-snug font-medium tracking-[0.1em] whitespace-nowrap uppercase">
            <span aria-hidden="true" className="mr-2 h-px w-8 shrink-0 bg-primary-foreground" />
            <span className="font-bold">Curso 1</span>
            <span aria-hidden="true">·</span>
            <span>Análisis transversal de los componentes del riesgo</span>
          </p>

          <h2 className="font-serif text-[2.9rem] leading-[1.08] font-medium text-balance text-foreground">
            Introducción a la{' '}
            <em className="text-primary-foreground italic">Gestión Integral del Riesgo de Desastres</em>{' '}
            y conceptos clave
          </h2>
        </div>

        <div className="relative mt-8 min-h-0 flex-1 overflow-hidden rounded-lg">
          <Image
            src="/images/territorio-cuenca.png"
            alt="Ilustración de una cuenca con río, montañas y comunidades rurales"
            fill
            priority
            sizes="34rem"
            className="object-cover object-[40%_50%]"
          />
        </div>

        <div className="mt-7 flex items-center justify-between gap-4 border-t border-primary-foreground/30 pt-5">
          <span className="inline-flex items-center rounded-full bg-background px-6 py-2 text-base font-bold tracking-[0.14em] text-foreground uppercase shadow-md">
            Módulo 1
          </span>
          <div className="flex flex-col gap-0.5 text-right">
            <span className="text-[0.65rem] font-bold tracking-[0.2em] uppercase">Autor</span>
            <span className="text-sm font-semibold">Yandy Rodríguez Cueto, Dr.</span>
          </div>
        </div>
      </div>
    </figure>
  )
}
