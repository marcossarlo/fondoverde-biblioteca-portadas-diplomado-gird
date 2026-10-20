import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { CourseModule } from './courses'

export function ModuleCard({ module }: { module: CourseModule }) {
  const { number, title, href, Cover } = module

  return (
    <Link
      href={href}
      aria-label={`Módulo ${number}: ${title}. Abrir versión A4 para imprimir`}
      className="group flex flex-col gap-4 rounded-xl focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background focus-visible:outline-none"
    >
      <div
        aria-hidden="true"
        className="overflow-hidden rounded-md shadow-[0_1.5rem_3rem_-1.5rem_rgba(0,0,0,0.8)] ring-1 ring-foreground/10 transition-transform duration-300 group-hover:-translate-y-1 group-focus-visible:-translate-y-1 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0"
      >
        <Cover className="w-full" />
      </div>

      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-bold tracking-[0.18em] text-primary uppercase">
            Módulo {number}
          </span>
          <span className="text-sm leading-relaxed text-pretty text-muted-foreground">{title}</span>
        </div>
        <ArrowUpRight
          aria-hidden="true"
          className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary group-focus-visible:text-primary"
        />
      </div>
    </Link>
  )
}
