import Image from 'next/image'
import { ArrowDown } from 'lucide-react'
import { courses } from './courses'
import { SiteHeader } from './site-header'

function moduleCountLabel(count: number) {
  if (count === 0) return 'En preparación'
  return count === 1 ? '1 módulo' : `${count} módulos`
}

export function DiplomadoHero() {
  return (
    <section className="relative isolate flex min-h-screen flex-col overflow-hidden bg-background">
      <Image
        src="/images/territorio-cuenca.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-right opacity-40"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/90 to-background/40"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background to-transparent"
      />

      <SiteHeader />

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center gap-14 px-6 pt-6 pb-16 md:px-10 lg:flex-row lg:gap-16 lg:pb-12">
        <div className="flex w-full flex-1 flex-col gap-7 lg:max-w-2xl">
          <p
            style={{ '--delay': '100ms' } as React.CSSProperties}
            className="animate-rise-in flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-accent uppercase"
          >
            <span aria-hidden="true" className="h-px w-8 bg-primary" />
            Diplomado
          </p>

          <h1
            style={{ '--delay': '220ms' } as React.CSSProperties}
            className="animate-rise-in font-serif text-4xl leading-[1.05] font-medium text-balance md:text-5xl xl:text-6xl"
          >
            Gestión Integral del{' '}
            <em className="text-primary italic">Riesgo de Desastres</em>
          </h1>

          <p
            style={{ '--delay': '300ms' } as React.CSSProperties}
            className="animate-rise-in max-w-xl text-base leading-relaxed text-pretty text-muted-foreground md:text-lg"
          >
            Un recorrido en tres cursos: del análisis de los componentes del riesgo, a sus causas
            sociales subyacentes y a las acciones operativas para prevenir, mitigar y adaptarse.
          </p>

          <div
            style={{ '--delay': '400ms' } as React.CSSProperties}
            className="animate-rise-in flex flex-wrap items-center gap-x-8 gap-y-5 border-t border-border pt-6"
          >
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                Cursos
              </span>
              <span className="font-serif text-2xl">{courses.length}</span>
            </div>
            <div className="h-10 w-px bg-border" aria-hidden="true" />
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                Autor
              </span>
              <span className="text-lg font-semibold">Yandy Rodríguez Cueto, Dr.</span>
            </div>
          </div>

          <a
            href="#portadas"
            style={{ '--delay': '500ms' } as React.CSSProperties}
            className="animate-rise-in inline-flex w-fit items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            Ver biblioteca de portadas
            <ArrowDown className="size-4" aria-hidden="true" />
          </a>
        </div>

        <div
          style={{ '--delay': '350ms' } as React.CSSProperties}
          className="animate-rise-in w-full flex-1 lg:max-w-md"
        >
          <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-md md:p-8">
            <h2 className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
              Estructura del diplomado
            </h2>
            <ol className="mt-6 flex flex-col">
              {courses.map((course, index) => (
                <li
                  key={course.id}
                  className="flex gap-5 border-t border-border py-5 first:border-t-0 first:pt-0 last:pb-0"
                >
                  <span
                    aria-hidden="true"
                    className="font-serif text-3xl leading-none text-primary"
                  >
                    {index + 1}
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                      {course.label}
                    </span>
                    <p className="font-serif text-lg leading-snug text-pretty">{course.title}</p>
                    <span className="text-sm text-muted-foreground">
                      {moduleCountLabel(course.modules.length)}
                    </span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
