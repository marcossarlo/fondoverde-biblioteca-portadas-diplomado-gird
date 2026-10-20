import Image from 'next/image'

export function SiteHeader() {
  return (
    <header className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 md:px-10">
      <Image
        src="/images/fondo-verde-logo-oscuro.png"
        alt="Fondo Verde"
        width={1650}
        height={340}
        priority
        className="h-8 w-auto md:h-10"
      />
      <p className="hidden text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase sm:block">
        eBook · Material del curso
      </p>
    </header>
  )
}
