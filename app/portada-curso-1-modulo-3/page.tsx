import { EbookCoverCModulo3 } from '@/components/hero/ebook-cover-c-modulo-3'
import { PrintButton } from '@/components/hero/print-button'

export default function PortadaCurso1Modulo3Page() {
  return (
    <main className="min-h-screen bg-background px-4 py-8 sm:px-8">
      <div className="mx-auto flex max-w-[210mm] flex-col items-center gap-6">
        <EbookCoverCModulo3 className="a4-sheet w-full" />
        <PrintButton />
      </div>
    </main>
  )
}
