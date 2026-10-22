import { EbookCoverLight } from './ebook-cover-light'

interface EbookCoverC2Modulo2Props {
  priority?: boolean
  className?: string
}

export function EbookCoverC2Modulo2({ priority = false, className = '' }: EbookCoverC2Modulo2Props) {
  return (
    <EbookCoverLight
      courseNumber={2}
      courseTitle="La construcción social y las causas subyacentes del riesgo de desastres"
      courseLabelSize={1.15}
      moduleNumber={2}
      moduleTitleText="Capacidades locales y Gestión Integral del Riesgo de Desastres"
      moduleTitle={
        <>
          Capacidades locales y{' '}
          <em className="text-primary italic">Gestión Integral del Riesgo de Desastres</em>
        </>
      }
      imageSrc="/images/capacidades-locales.webp"
      imageAlt="Ilustración de una comunidad en un valle de montaña: plaza comunal con vecinos reunidos, torre de alerta temprana, ruta de evacuación hacia un refugio y huertos en terrazas, conectados por una red de caminos que representa las capacidades locales"
      priority={priority}
      className={className}
    />
  )
}
