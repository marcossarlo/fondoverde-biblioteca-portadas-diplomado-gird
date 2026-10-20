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
      imageSrc="/images/caracteristicas-socioeconomicas-claro.png"
      imageAlt="Ilustración clara de un valle con río, campos en terrazas y comunidades conectadas por caminos, que representa el territorio y las condiciones socioeconómicas de la población"
      priority={priority}
      className={className}
    />
  )
}
