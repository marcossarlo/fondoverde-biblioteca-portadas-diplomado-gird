import Image from 'next/image'

interface EbookCoverCModulo4Props {
  priority?: boolean
  className?: string
}

export function EbookCoverCModulo4({ priority = false, className = '' }: EbookCoverCModulo4Props) {
  return (
    <figure
      aria-label="Portada: Curso 1, Análisis transversal de los componentes del riesgo. Módulo 4, Monitoreo, evaluación e indicadores de impacto"
      className={`a4-sheet relative isolate flex aspect-[210/297] flex-col overflow-hidden bg-background [container-type:inline-size] ${className}`}
    >
      <Image
        src="/images/monitoreo-indicadores.png"
        alt=""
        fill
        priority={priority}
        sizes="(min-width: 1024px) 50rem, 100vw"
        className="-z-20 object-cover object-[60%_50%] opacity-45"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/85 to-background/30"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-[30cqw] bg-gradient-to-b from-background to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-[40cqw] bg-gradient-to-t from-background to-transparent"
      />

      <div className="flex h-full flex-col px-[7cqw] pt-[6cqw] pb-[6cqw]">
        <Image
          src="/images/fondo-verde-logo-oscuro.png"
          alt="Fondo Verde"
          width={1650}
          height={340}
          priority={priority}
          className="h-[8cqw] w-auto self-center"
        />

        <div className="mt-[6cqw] flex flex-col gap-[2.6cqw]">
          <p className="flex items-center gap-[1.4cqw] text-[1.45cqw] leading-none font-medium tracking-[0.14em] whitespace-nowrap text-accent uppercase">
            <span aria-hidden="true" className="h-px w-[5cqw] shrink-0 bg-primary" />
            <span className="font-bold">Curso 1</span>
            <span aria-hidden="true">·</span>
            <span>Análisis transversal de los componentes del riesgo</span>
          </p>

          <h2 className="font-serif text-[6.1cqw] leading-[1.08] font-medium text-balance text-foreground">
            Monitoreo, evaluación e{' '}
            <em className="text-primary italic">indicadores de impacto</em>
          </h2>
        </div>

        <div className="mt-[3.5cqw] flex justify-end">
          <span className="inline-flex items-center rounded-full bg-primary px-[3cqw] py-[1cqw] text-[1.9cqw] font-bold tracking-[0.14em] whitespace-nowrap text-primary-foreground uppercase">
            Módulo 4
          </span>
        </div>

        <div className="relative mt-[3.5cqw] min-h-0 flex-1 overflow-hidden rounded-[1.4cqw] shadow-[0_3cqw_6cqw_-2cqw_rgba(0,0,0,0.7)] ring-1 ring-foreground/10">
          <Image
            src="/images/monitoreo-indicadores.png"
            alt="Ilustración de un territorio de montañas y río con estaciones de monitoreo luminosas y gráficos de indicadores flotando sobre el paisaje"
            fill
            sizes="(min-width: 1024px) 44rem, 100vw"
            className="object-cover object-[55%_50%]"
          />
        </div>

        <div className="mt-[3.5cqw] flex flex-col gap-[0.5cqw] border-t border-foreground/15 pt-[2.6cqw]">
          <span className="text-[1.1cqw] font-semibold tracking-[0.22em] text-muted-foreground uppercase">
            Autor
          </span>
          <span className="text-[1.9cqw] font-semibold">Yandy Rodríguez Cueto, Dr.</span>
        </div>
      </div>
    </figure>
  )
}
