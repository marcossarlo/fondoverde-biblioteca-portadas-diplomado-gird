import { EbookCoverLight } from './ebook-cover-light'

interface EbookCoverC2Modulo1Props {
  priority?: boolean
  className?: string
}

export function EbookCoverC2Modulo1({ priority = false, className = '' }: EbookCoverC2Modulo1Props) {
  return (
    <EbookCoverLight
      courseNumber={2}
      courseTitle="La construcción social y las causas subyacentes del riesgo de desastres"
      courseLabelSize={1.15}
      moduleNumber={1}
      moduleTitleText="Características socioeconómicas y Gestión Integral del Riesgo de Desastres"
      moduleTitle={
        <>
          Características socioeconómicas y{' '}
          <em className="text-primary italic">Gestión Integral del Riesgo de Desastres</em>
        </>
      }
      imageSrc="/images/caracteristicas-socioeconomicas.webp"
      imageAlt="Ilustración de un valle con río: un asentamiento denso en laderas y ribera, un centro urbano con comercio e industria y zonas rurales dispersas, que representa las condiciones socioeconómicas del territorio"
      priority={priority}
      className={className}
    />
  )
}
