import { EbookCoverLight } from './ebook-cover-light'

interface EbookCoverC2Modulo3Props {
  priority?: boolean
  className?: string
}

export function EbookCoverC2Modulo3({ priority = false, className = '' }: EbookCoverC2Modulo3Props) {
  return (
    <EbookCoverLight
      courseNumber={2}
      courseTitle="La construcción social y las causas subyacentes del riesgo de desastres"
      courseLabelSize={1.15}
      moduleNumber={3}
      moduleTitleText="Instrumentos de gestión territorial y gobernanza del riesgo"
      moduleTitle={
        <>
          Instrumentos de gestión territorial y{' '}
          <em className="text-primary italic">gobernanza del riesgo</em>
        </>
      }
      imageSrc="/images/instrumentos-gestion-territorial.webp"
      imageAlt="Vista aérea de un territorio con valle, río y poblado, cubierto por un mapa de zonificación con límites, corredor de riesgo de inundación, parcelas y brújula, que representa los instrumentos de gestión territorial"
      priority={priority}
      className={className}
    />
  )
}
