import type { Metadata } from "next";
import { LegalDoc } from "@/components/LegalDoc";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: "Financetech LATAM privacy notice under LFPDPPP and AI services privacy practices.",
};

export default function PrivacyPage() {
  return (
    <LegalDoc
      titleEn="Privacy Notice"
      titleEs="Aviso de Privacidad"
      effective="September 17, 2026"
      sections={[
        {
          hEn: "1. Identity of the controller",
          hEs: "1. Identidad del responsable",
          pEn: "Financetech LATAM (“Company,” “we,” “us”), with operations in Morelia, Michoacán, México, is responsible for the processing of your personal data in accordance with Mexico’s LFPDPPP and applicable AI-service privacy practices. Contact: contacto@financetechlatam.com.",
          pEs: "Financetech LATAM (“la Empresa”), con operaciones en Morelia, Michoacán, México, es responsable del tratamiento de sus datos personales conforme a la LFPDPPP y prácticas de privacidad aplicables a servicios de IA. Contacto: contacto@financetechlatam.com.",
        },
        {
          hEn: "2. Purposes of processing",
          hEs: "2. Finalidades del tratamiento",
          pEn: "Primary purposes: provide contracted services; fulfill contractual obligations; electronic invoicing and tax compliance; respond to lawful authority requests. Secondary purposes: service-related communications; internal statistics and service improvement. For AI Content & Avatar services we may also process photos, video, voice, likeness, logos, brand assets and scripts to create deliverables you request.",
          pEs: "Finalidades primarias: prestar servicios contratados; cumplir obligaciones contractuales; facturación electrónica y obligaciones fiscales; atender requerimientos legales. Secundarias: comunicaciones de servicio; estadísticas internas y mejora. En servicios de Contenido IA y Avatares también podemos tratar fotos, video, voz, likeness, logos, activos de marca y guiones para crear los entregables solicitados.",
        },
        {
          hEn: "3. Data we collect",
          hEs: "3. Datos que recabamos",
          pEn: "Name or business name; RFC/CURP and tax domicile when required; phone and email; banking information for payments; identification documents when applicable; project materials for AI avatars; and automatically collected usage data (IP, device, pages visited) via cookies or similar technologies.",
          pEs: "Nombre o razón social; RFC/CURP y domicilio fiscal cuando aplique; teléfono y correo; información bancaria para pagos; documentos de identificación cuando corresponda; materiales de proyecto para avatares IA; y datos de uso (IP, dispositivo, páginas) mediante cookies o tecnologías similares.",
        },
        {
          hEn: "4. Images, voice and likeness",
          hEs: "4. Imágenes, voz y likeness",
          pEn: "Because AI avatar services may process likeness-related materials, we use them only to generate, deliver, store and — if you authorize — showcase the resulting deliverables. We do not sell biometric or likeness data. You must have all required consents for any person whose likeness you submit.",
          pEs: "Como los servicios de avatar IA pueden tratar materiales de likeness, los usamos solo para generar, entregar, almacenar y — si usted autoriza — mostrar los entregables. No vendemos datos biométricos ni de likeness. Usted debe contar con los consentimientos necesarios de cualquier persona cuya imagen o voz envíe.",
        },
        {
          hEn: "5. Transfers",
          hEs: "5. Transferencias",
          pEn: "We may share data with Mexican or foreign authorities when legally required; processors acting on our behalf under confidentiality obligations; payment and professional service providers; and third-party AI platforms used to generate or host content. We do not sell personal information.",
          pEs: "Podemos compartir datos con autoridades mexicanas o extranjeras cuando la ley lo exija; encargados que actúan en nuestro nombre bajo confidencialidad; proveedores de pago y servicios profesionales; y plataformas de IA usadas para generar o alojar contenido. No vendemos información personal.",
        },
        {
          hEn: "6. ARCO rights",
          hEs: "6. Derechos ARCO",
          pEn: "You may Access, Rectify, Cancel or Oppose processing of your personal data by emailing contacto@financetechlatam.com with your full name, proof of identity, a clear description of the right you wish to exercise, and a contact method for our response.",
          pEs: "Puede Acceder, Rectificar, Cancelar u Oponerse al tratamiento enviando un correo a contacto@financetechlatam.com con nombre completo, documento de identidad, descripción clara del derecho a ejercer y medio para recibir respuesta.",
        },
        {
          hEn: "7. Cookies, retention and security",
          hEs: "7. Cookies, retención y seguridad",
          pEn: "The site may use cookies to operate and analyze traffic; you can disable them in your browser. We retain information as reasonably necessary for the purposes above and legal obligations, then delete or de-identify it. We apply administrative, technical and physical safeguards; no method is perfectly secure.",
          pEs: "El sitio puede usar cookies para operar y analizar tráfico; puede deshabilitarlas en su navegador. Conservamos la información el tiempo razonable para las finalidades anteriores y obligaciones legales, y luego la eliminamos o desidentificamos. Aplicamos salvaguardas administrativas, técnicas y físicas; ningún método es absolutamente seguro.",
        },
        {
          hEn: "8. Changes and consent",
          hEs: "8. Cambios y consentimiento",
          pEn: "We may update this notice and will publish changes on this page. By providing personal data you consent to processing under this notice.",
          pEs: "Podemos actualizar este aviso y publicaremos los cambios en esta página. Al proporcionar datos personales usted consiente su tratamiento conforme a este aviso.",
        },
      ]}
    />
  );
}
