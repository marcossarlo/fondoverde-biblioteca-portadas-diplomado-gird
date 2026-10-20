import type { ReactNode } from 'react'
import Image from 'next/image'

export interface EbookCoverLightProps {
  courseNumber: number
  courseTitle: string
  moduleNumber: number
  moduleTitleText: string
  moduleTitle: ReactNode
  imageSrc: string
  imageAlt: string
  courseLabelSize?: number
  priority?: boolean
  className?: string
}

export function EbookCoverLight({
  courseNumber,
  courseTitle,
  moduleNumber,
  moduleTitleText,
  moduleTitle,
  imageSrc,
  imageAlt,
  courseLabelSize = 1.45,
  priority = false,
  className = '',
}: EbookCoverLightProps) {
  return (
    <figure
      aria-label={`Portada: Curso ${courseNumber}, ${courseTitle}. Módulo ${moduleNumber}, ${moduleTitleText}`}
      className={`theme-light a4-sheet relative isolate flex aspect-[210/297] flex-col overflow-hidden bg-background text-foreground [container-type:inline-size] ${className}`}
    >
      <Image
        src={imageSrc}
        alt=""
        fill
        priority={priority}
        sizes="(min-width: 1024px) 50rem, 100vw"
        className="-z-20 object-cover object-[60%_50%] opacity-50"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/85 to-background/30"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-[30cqw] bg-gradient-to-b from-background to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-[40cqw] bg-gradient-to-t from-background to-transparent"
      />

      <div className="flex h-full flex-col px-[7cqw] pt-[6cqw] pb-[6cqw]">
        <Image
          src="/images/fondo-verde-logo-claro.png"
          alt="Fondo Verde"
          width={1636}
          height={348}
          priority={priority}
          className="h-[8cqw] w-auto self-center"
        />

        <div className="mt-[6cqw] flex flex-col gap-[5cqw]">
          <p
            style={{ fontSize: `${courseLabelSize}cqw` }}
            className="flex items-center justify-end gap-[1.4cqw] leading-none font-medium tracking-[0.1em] whitespace-nowrap text-accent uppercase"
          >
            <span className="font-bold">Curso {courseNumber}</span>
            <span aria-hidden="true">·</span>
            <span>{courseTitle}</span>
            <span aria-hidden="true" className="h-px w-[5cqw] shrink-0 bg-primary" />
          </p>

          <div className="flex items-stretch gap-[2.6cqw]">
            <span className="shrink-0 rotate-180 self-center text-[2.2cqw] leading-none font-bold tracking-[0.18em] whitespace-nowrap text-foreground uppercase [writing-mode:vertical-rl]">
              Módulo {moduleNumber}
            </span>
            <span aria-hidden="true" className="w-[0.28cqw] shrink-0 bg-primary" />
            <h2 className="font-serif text-[6.1cqw] leading-[1.08] font-medium text-balance text-foreground">
              {moduleTitle}
            </h2>
          </div>
        </div>

        <div className="relative mt-[3.5cqw] min-h-0 flex-1 overflow-hidden rounded-[1.4cqw] shadow-[0_3cqw_6cqw_-2cqw_rgba(6,35,43,0.35)] ring-1 ring-foreground/10">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 44rem, 100vw"
            className="object-cover object-[55%_50%]"
          />
        </div>

        <div className="mt-[3.5cqw] flex flex-col items-end gap-[0.5cqw] border-t border-foreground/15 pt-[2.6cqw] text-right">
          <span className="text-[1.1cqw] font-semibold tracking-[0.22em] text-muted-foreground uppercase">
            Autor
          </span>
          <span className="text-[1.9cqw] font-semibold">Yandy Rodríguez Cueto, Dr.</span>
        </div>
      </div>
    </figure>
  )
}
