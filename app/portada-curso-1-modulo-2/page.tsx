import { EbookCoverCModulo2 } from '@/components/hero/ebook-cover-c-modulo-2'
import { PrintButton } from '@/components/hero/print-button'

export default function PortadaCurso1Modulo2Page() {
  return (
    <main className="min-h-screen bg-background px-4 py-8 sm:px-8">
      <div className="mx-auto flex max-w-[210mm] flex-col items-center gap-6">
        <EbookCoverCModulo2 className="a4-sheet w-full" />
        <PrintButton />
      </div>
    </main>
  )
}
