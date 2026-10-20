import type { Metadata } from 'next'
import Link from 'next/link'
import { EbookCoverC2Modulo2 } from '@/components/hero/ebook-cover-c2-modulo-2'
import { PrintButton } from '@/components/hero/print-button'

export const metadata: Metadata = {
  title: 'Portada clara (A4) | Curso 2 · Módulo 2 · Fondo Verde',
  description:
    'Portada del Curso 2, Módulo 2, Capacidades locales y Gestión Integral del Riesgo de Desastres, en versión clara y tamaño A4 lista para imprimir o exportar a PDF.',
}

const printStyles = `
  @page { size: A4; margin: 0; }
  @media print {
    html, body { background: none !important; margin: 0 !important; padding: 0 !important; }
    .no-print { display: none !important; }
    .a4-stage { padding: 0 !important; display: block !important; }
    .a4-sheet { width: 210mm !important; height: 297mm !important; break-inside: avoid; page-break-after: avoid; }
    * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
  }
`

export default function PortadaCurso2Modulo2Page() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background">
      <style>{printStyles}</style>

      <header className="no-print flex w-full max-w-3xl flex-col items-center gap-4 px-6 pt-10 pb-8 text-center">
        <PrintButton />
        <p className="max-w-xl text-sm leading-relaxed text-pretty text-muted-foreground">
          En el diálogo de impresión elige papel A4, márgenes en &quot;Ninguno&quot; y activa &quot;Gráficos de
          fondo&quot;. Guarda como PDF para usarla como fondo de página.
        </p>
        <Link
          href="/"
          className="text-sm font-semibold text-primary underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-none"
        >
          Volver a las portadas
        </Link>
      </header>

      <div className="a4-stage flex w-full justify-start overflow-x-auto px-6 pb-16 md:justify-center">
        <EbookCoverC2Modulo2 priority className="w-[210mm] shrink-0" />
      </div>
    </main>
  )
}
