'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { courses } from './courses'
import { ModuleCard } from './module-card'

export function CoverShowcase() {
  return (
    <section
      id="portadas"
      aria-labelledby="portadas-titulo"
      className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-20 md:px-10 md:py-24"
    >
      <div className="flex flex-col gap-3">
        <p className="text-xs font-bold tracking-[0.24em] text-primary uppercase">
          Biblioteca de portadas
        </p>
        <h2
          id="portadas-titulo"
          className="max-w-2xl font-serif text-3xl leading-tight font-medium text-balance md:text-4xl"
        >
          Portadas por curso
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-pretty text-muted-foreground">
          Elige un curso y abre la portada de cada módulo en formato A4, lista para imprimir o
          exportar a PDF.
        </p>
      </div>

      <Tabs defaultValue={courses[0].id} className="gap-8">
        <TabsList className="grid w-full grid-cols-1 gap-3 rounded-none bg-transparent p-0 group-data-horizontal/tabs:h-auto md:grid-cols-3">
          {courses.map((course) => {
            const count = course.modules.length
            return (
              <TabsTrigger
                key={course.id}
                value={course.id}
                className="h-full flex-col items-start justify-start gap-2 rounded-xl border-border bg-transparent p-5 text-left whitespace-normal hover:border-primary/50 data-active:border-primary data-active:bg-card dark:data-active:border-primary dark:data-active:bg-card"
              >
                <span className="flex w-full items-center justify-between gap-3">
                  <span className="text-xs font-bold tracking-[0.18em] text-primary uppercase">
                    {course.label}
                  </span>
                  <span className="text-xs font-medium text-muted-foreground">
                    {count > 0 ? `${count} portadas` : 'Próximamente'}
                  </span>
                </span>
                <span className="font-serif text-lg leading-snug font-medium text-pretty text-foreground">
                  {course.title}
                </span>
              </TabsTrigger>
            )
          })}
        </TabsList>

        {courses.map((course) => (
          <TabsContent key={course.id} value={course.id} className="text-base">
            {course.modules.length > 0 ? (
              <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
                {course.modules.map((module) => (
                  <li key={module.number}>
                    <ModuleCard module={module} />
                  </li>
                ))}
              </ul>
            ) : (
              <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-border px-6 py-20 text-center">
                <p className="font-serif text-xl font-medium">Portadas en preparación</p>
                <p className="max-w-md text-sm leading-relaxed text-pretty text-muted-foreground">
                  Las portadas de los módulos del {course.label} aparecerán aquí con el mismo diseño
                  del Curso 1.
                </p>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}
