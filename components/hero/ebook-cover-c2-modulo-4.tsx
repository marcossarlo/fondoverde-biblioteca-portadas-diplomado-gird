import { EbookCoverLight } from './ebook-cover-light'

interface EbookCoverC2Modulo4Props {
  priority?: boolean
  className?: string
}

export function EbookCoverC2Modulo4({ priority = false, className = '' }: EbookCoverC2Modulo4Props) {
  return (
    <EbookCoverLight
      courseNumber={2}
      courseTitle="La construcción social y las causas subyacentes del riesgo de desastres"
      courseLabelSize={1.15}
      moduleNumber={4}
      moduleTitleText="Políticas públicas e incidencia en la Gestión Integral del Riesgo de Desastres"
      moduleTitle={
        <>
          Políticas públicas e incidencia en la{' '}
          <em className="text-primary italic">Gestión Integral del Riesgo de Desastres</em>
        </>
      }
      imageSrc="/images/politicas-publicas-incidencia.webp"
      imageAlt="Vista aérea de un territorio con valle y río, con un edificio institucional en el centro del que parten líneas hacia comunidades y capas de documentos, que representa las políticas públicas y la incidencia"
      priority={priority}
      className={className}
    />
  )
}
