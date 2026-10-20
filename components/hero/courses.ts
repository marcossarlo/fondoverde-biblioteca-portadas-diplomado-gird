import type { ComponentType } from 'react'
import { EbookCoverC } from './ebook-cover-c'
import { EbookCoverCModulo2 } from './ebook-cover-c-modulo-2'
import { EbookCoverCModulo3 } from './ebook-cover-c-modulo-3'
import { EbookCoverCModulo4 } from './ebook-cover-c-modulo-4'
import { EbookCoverC2Modulo1 } from './ebook-cover-c2-modulo-1'

export interface CourseModule {
  number: number
  title: string
  href: string
  Cover: ComponentType<{ className?: string }>
}

export interface Course {
  id: string
  label: string
  title: string
  modules: CourseModule[]
}

export const courses: Course[] = [
  {
    id: 'curso-1',
    label: 'Curso 1',
    title: 'Análisis transversal de los componentes del riesgo',
    modules: [
      {
        number: 1,
        title: 'Introducción a la Gestión Integral del Riesgo de Desastres y conceptos clave',
        href: '/portada-c',
        Cover: EbookCoverC,
      },
      {
        number: 2,
        title: 'Evolución de los paradigmas del riesgo',
        href: '/portada-c-modulo-2',
        Cover: EbookCoverCModulo2,
      },
      {
        number: 3,
        title: 'Marcos internacionales de referencia: SENDAI, ODS, Agenda 2030',
        href: '/portada-c-modulo-3',
        Cover: EbookCoverCModulo3,
      },
      {
        number: 4,
        title: 'Monitoreo, evaluación e indicadores de impacto',
        href: '/portada-c-modulo-4',
        Cover: EbookCoverCModulo4,
      },
    ],
  },
  {
    id: 'curso-2',
    label: 'Curso 2',
    title: 'La construcción social y las causas subyacentes del riesgo de desastres',
    modules: [
      {
        number: 1,
        title: 'Características socioeconómicas y Gestión Integral del Riesgo de Desastres',
        href: '/portada-curso-2-modulo-1',
        Cover: EbookCoverC2Modulo1,
      },
    ],
  },
  {
    id: 'curso-3',
    label: 'Curso 3',
    title: 'Acciones operativas: prevención, mitigación y adaptación',
    modules: [],
  },
]
