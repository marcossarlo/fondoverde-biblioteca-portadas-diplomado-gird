import Image from 'next/image'

export function EbookCover() {
  return (
    <figure
      aria-label="Portada del eBook: Módulo 1, Introducción a la Gestión Integral del Riesgo de Desastres y conceptos clave"
      className="animate-cover-in relative mx-auto aspect-[3/4] w-full max-w-[22rem] transition-transform duration-500 ease-out hover:-rotate-1 hover:scale-[1.02] md:max-w-[26rem]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-6 -bottom-6 h-10 rounded-[50%] bg-black/50 blur-2xl"
      />

      <div className="relative flex h-full overflow-hidden rounded-r-xl rounded-l-sm bg-primary shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]">
        <div
          aria-hidden="true"
          className="w-3 shrink-0 bg-gradient-to-r from-black/35 via-black/10 to-transparent"
        />

        <div className="flex min-w-0 flex-1 flex-col p-6 pl-4 text-primary-foreground md:p-7 md:pl-5">
          <div className="flex items-start justify-between gap-4">
            <Image
              src="/images/fondo-verde-logo-blanco.png"
              alt="Fondo Verde"
              width={1650}
              height={400}
              className="h-7 w-auto md:h-8"
            />
            <span className="rounded-full bg-primary-foreground px-3 py-1 text-[0.65rem] font-bold tracking-[0.18em] text-accent uppercase">
              eBook
            </span>
          </div>

          <div className="mt-7 flex flex-col gap-3">
            <p className="text-xs font-bold tracking-[0.22em] uppercase">Módulo 1</p>
            <h2 className="font-serif text-2xl leading-[1.12] font-medium text-balance md:text-[1.7rem]">
              Introducción a la Gestión Integral del Riesgo de Desastres y conceptos clave
            </h2>
          </div>

          <div className="relative mt-6 min-h-0 flex-1 overflow-hidden rounded-md">
            <Image
              src="/images/territorio-cuenca.webp"
              alt="Ilustración de una cuenca con río, montañas y comunidades rurales"
              fill
              sizes="(min-width: 768px) 26rem, 22rem"
              className="object-cover object-[40%_50%]"
            />
          </div>

          <p className="mt-5 text-sm leading-snug font-semibold">
            Yandy Rodríguez Cueto, Dr.
          </p>
        </div>
      </div>
    </figure>
  )
}
