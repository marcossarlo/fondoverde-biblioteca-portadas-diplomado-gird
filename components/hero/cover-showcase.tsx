import Link from 'next/link'
import { EbookCoverC } from './ebook-cover-c'
import { EbookCoverLarge } from './ebook-cover-large'
import { EbookCoverLargeV2 } from './ebook-cover-large-v2'

const linkClassName =
  'text-sm font-bold tracking-[0.08em] text-primary uppercase underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-none'

export function CoverShowcase() {
  return (
    <>
      <section
        aria-label="Portada del documento, versión A"
        className="flex min-h-screen flex-col items-center justify-center gap-10 bg-background px-6 py-20 md:px-10"
      >
        <p className="text-xs font-bold tracking-[0.24em] text-muted-foreground uppercase">
          Versión A
        </p>
        <EbookCoverLarge />
      </section>

      <section
        aria-label="Portada del documento, versión B"
        className="flex min-h-screen flex-col items-center justify-center gap-10 bg-background px-6 py-20 md:px-10"
      >
        <p className="text-xs font-bold tracking-[0.24em] text-muted-foreground uppercase">
          Versión B
        </p>
        <EbookCoverLargeV2 />
        <Link href="/portada-a4" className={linkClassName}>
          Ver versión A4 para imprimir
        </Link>
      </section>

      <section
        aria-label="Portada del documento, versión C"
        className="flex min-h-screen flex-col items-center justify-center gap-10 bg-background px-6 py-20 md:px-10"
      >
        <p className="text-xs font-bold tracking-[0.24em] text-muted-foreground uppercase">
          Versión C
        </p>
        <EbookCoverC className="mx-auto w-full max-w-[22rem] sm:max-w-[34rem] lg:max-w-[49.625rem]" />
        <Link href="/portada-c" className={linkClassName}>
          Ver versión C en A4 para imprimir
        </Link>
      </section>
    </>
  )
}
