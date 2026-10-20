import type { ComponentType } from 'react'
import { EbookCoverC } from './ebook-cover-c'
import { EbookCoverCModulo2 } from './ebook-cover-c-modulo-2'
import { EbookCoverCModulo3 } from './ebook-cover-c-modulo-3'
import { EbookCoverCModulo4 } from './ebook-cover-c-modulo-4'
import { EbookCoverC2Modulo1 } from './ebook-cover-c2-modulo-1'
import { EbookCoverC2Modulo2 } from './ebook-cover-c2-modulo-2'
import { EbookCoverC2Modulo3 } from './ebook-cover-c2-modulo-3'
import { EbookCoverC2Modulo4 } from './ebook-cover-c2-modulo-4'
import { EbookCoverC3Modulo1 } from './ebook-cover-c3-modulo-1'
import { EbookCoverC3Modulo2 } from './ebook-cover-c3-modulo-2'
import { EbookCoverC3Modulo3 } from './ebook-cover-c3-modulo-3'
import { EbookCoverC3Modulo4 } from './ebook-cover-c3-modulo-4'

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
      {
        number: 2,
        title: 'Capacidades locales y Gestión Integral del Riesgo de Desastres',
        href: '/portada-curso-2-modulo-2',
        Cover: EbookCoverC2Modulo2,
      },
      {
        number: 3,
        title: 'Instrumentos de gestión territorial y gobernanza del riesgo',
        href: '/portada-curso-2-modulo-3',
        Cover: EbookCoverC2Modulo3,
      },
      {
        number: 4,
        title: 'Políticas públicas e incidencia en la Gestión Integral del Riesgo de Desastres',
        href: '/portada-curso-2-modulo-4',
        Cover: EbookCoverC2Modulo4,
      },
    ],
  },
  {
    id: 'curso-3',
    label: 'Curso 3',
    title: 'Acciones operativas: prevención, mitigación y adaptación',
    modules: [
      {
        number: 1,
        title: 'Medidas de prevención y ordenamiento territorial',
        href: '/portada-curso-3-modulo-1',
        Cover: EbookCoverC3Modulo1,
      },
      {
        number: 2,
        title: 'Mitigación estructural e ingeniería',
        href: '/portada-curso-3-modulo-2',
        Cover: EbookCoverC3Modulo2,
      },
      {
        number: 3,
        title: 'Mitigación no estructural: sistemas de alerta temprana',
        href: '/portada-curso-3-modulo-3',
        Cover: EbookCoverC3Modulo3,
      },
      {
        number: 4,
        title: 'Adaptación climática y soluciones basadas en la naturaleza',
        href: '/portada-curso-3-modulo-4',
        Cover: EbookCoverC3Modulo4,
      },
    ],
  },
]
