import { EbookCoverLarge } from './ebook-cover-large'

export function CoverShowcase() {
  return (
    <section
      aria-label="Portada del documento"
      className="flex min-h-screen items-center justify-center bg-background px-6 py-20 md:px-10"
    >
      <EbookCoverLarge />
    </section>
  )
}
