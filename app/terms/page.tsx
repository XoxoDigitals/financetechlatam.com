import type { Metadata } from "next";
import { LegalDoc } from "@/components/LegalDoc";

export const metadata: Metadata = {
  title: "Terms and Conditions — AI Content & Avatar Services",
  description: "Terms governing Financetech LATAM AI content and digital avatar creation services.",
};

export default function TermsPage() {
  return (
    <LegalDoc
      titleEn="Terms and Conditions — AI Content & Avatar Services"
      titleEs="Términos y Condiciones — Contenido IA y Avatares"
      effective="September 17, 2026"
      sections={[
        {
          hEn: "Agreement",
          hEs: "Acuerdo",
          pEn: "These Terms govern use of the AI content creation and digital avatar services (“AI Services”) offered by Financetech LATAM (“Company”) through financetechlatam.com. By accessing the site, requesting a quote, or engaging the AI Services, you agree to these Terms.",
          pEs: "Estos Términos rigen el uso de los servicios de creación de contenido IA y avatares digitales (“Servicios IA”) ofrecidos por Financetech LATAM (“la Empresa”) a través de financetechlatam.com. Al acceder al sitio, solicitar cotización o contratar Servicios IA, usted acepta estos Términos.",
        },
        {
          hEn: "1. Description of the AI Services",
          hEs: "1. Descripción de los Servicios IA",
          pEn: "AI Services include creation of AI-generated digital avatars, images, videos, voice-overs and related synthetic media for marketing, advertising, UGC-style campaigns, podcasts and content automation, using proprietary tools and third-party AI platforms.",
          pEs: "Los Servicios IA incluyen creación de avatares digitales, imágenes, videos, voice-overs y medios sintéticos relacionados para marketing, publicidad, campañas estilo UGC, podcasts y automatización de contenido, usando herramientas propias y plataformas de IA de terceros.",
        },
        {
          hEn: "2. Client-provided materials",
          hEs: "2. Materiales del cliente",
          pEn: "You represent that you own or have obtained all rights and consents needed to submit photographs, video, voice, likeness, logos, scripts or other materials, including written consent of any individual whose likeness is used. Do not submit materials depicting minors without documented guardian consent, or materials that are unlawful or used to impersonate a person without authorization. We may refuse materials we believe violate these Terms or law.",
          pEs: "Usted declara que posee o tiene todos los derechos y consentimientos necesarios para enviar fotografías, video, voz, likeness, logos, guiones u otros materiales, incluido el consentimiento escrito de cualquier persona cuya imagen se use. No envíe materiales de menores sin consentimiento documentado del tutor, ni materiales ilícitos o para suplantar a alguien sin autorización. Podemos rechazar materiales que consideremos contrarios a estos Términos o a la ley.",
        },
        {
          hEn: "3. AI-generated content",
          hEs: "3. Contenido generado por IA",
          pEn: "AI output may contain imperfections. You must review deliverables before publication. You are solely responsible for complying with laws and platform policies requiring disclosure that content is AI-generated or synthetic. AI Services may not be used to create an unauthorized likeness of a real person for misleading or defamatory purposes.",
          pEs: "El resultado de IA puede tener imperfecciones. Debe revisar los entregables antes de publicarlos. Usted es responsable de cumplir leyes y políticas de plataformas que exijan revelar que el contenido es generado por IA o sintético. Los Servicios IA no pueden usarse para crear likeness no autorizada de una persona real con fines engañosos o difamatorios.",
        },
        {
          hEn: "4. Intellectual property",
          hEs: "4. Propiedad intelectual",
          pEn: "You retain ownership of Client Materials and grant us a limited license to process them to create deliverables. Upon full payment, we assign to you rights in final deliverables created specifically for you, except Company tools/templates and third-party AI or stock elements. Unless you opt out in writing, we may display non-confidential deliverables in our portfolio.",
          pEs: "Usted conserva la propiedad de los Materiales del Cliente y nos otorga una licencia limitada para procesarlos y crear entregables. Tras el pago completo, le cedemos derechos sobre los entregables finales creados específicamente para usted, excepto herramientas/plantillas de la Empresa y elementos de IA o stock de terceros. Salvo que se oponga por escrito, podemos mostrar entregables no confidenciales en nuestro portafolio.",
        },
        {
          hEn: "5. Fees, revisions, disclaimers",
          hEs: "5. Honorarios, revisiones y descargos",
          pEn: "Fees are set in the applicable quote or invoice. Revision rounds and turnaround are defined in the proposal; extra revisions may incur fees. AI Services and deliverables are provided “as is” without warranties of merchantability, fitness for a particular purpose, or that they will achieve specific marketing results.",
          pEs: "Los honorarios se fijan en la cotización o factura aplicable. Las rondas de revisión y plazos se definen en la propuesta; revisiones adicionales pueden generar cargos. Los Servicios IA y entregables se proveen “tal cual”, sin garantías de comerciabilidad, idoneidad para un fin particular, ni de que lograrán resultados de marketing específicos.",
        },
        {
          hEn: "6. Liability and indemnification",
          hEs: "6. Responsabilidad e indemnización",
          pEn: "To the maximum extent permitted by law, our total liability related to the AI Services shall not exceed fees paid by you in the three months preceding the claim. You agree to indemnify us against claims arising from Client Materials, unlawful use of deliverables, or failure to obtain required consents or disclosures.",
          pEs: "En la máxima medida permitida por la ley, nuestra responsabilidad total relacionada con los Servicios IA no excederá los honorarios pagados por usted en los tres meses previos al reclamo. Usted acepta indemnizarnos por reclamaciones derivadas de Materiales del Cliente, uso ilícito de entregables o falta de consentimientos o revelaciones requeridas.",
        },
        {
          hEn: "7. Contact",
          hEs: "7. Contacto",
          pEn: "Questions: Financetech LATAM · Morelia, Michoacán, México · contacto@financetechlatam.com · +52 443 000 0000.",
          pEs: "Preguntas: Financetech LATAM · Morelia, Michoacán, México · contacto@financetechlatam.com · +52 443 000 0000.",
        },
      ]}
    />
  );
}
