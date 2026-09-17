import type { Metadata } from "next";
import { LegalDoc } from "@/components/LegalDoc";

export const metadata: Metadata = {
  title: "LFPIORPI Compliance",
  description: "Financetech LATAM compliance with Mexico’s LFPIORPI anti-money-laundering law.",
};

export default function CompliancePage() {
  return (
    <LegalDoc
      titleEn="LFPIORPI Compliance Notice"
      titleEs="Aviso de Cumplimiento LFPIORPI"
      effective="September 17, 2026"
      sections={[
        {
          hEn: "Commitment",
          hEs: "Compromiso",
          pEn: "Financetech LATAM complies with Mexico’s Federal Law for the Prevention and Identification of Operations with Resources of Illicit Origin (LFPIORPI). Where applicable, we identify clients, retain documentation, and report to the competent authority as required by law.",
          pEs: "Financetech LATAM cumple con la Ley Federal para la Prevención e Identificación de Operaciones con Recursos de Procedencia Ilícita (LFPIORPI). En los casos aplicables, identifica a sus clientes, resguarda la documentación y reporta a la autoridad cuando así lo exige la ley.",
        },
        {
          hEn: "Policies we implement",
          hEs: "Políticas que implementamos",
          pEn: "Full client identification when the operation requires it; registration of contracts, notices and relevant operations; collaboration with tax and financial authorities when legally required; internal controls and fund-traceability mechanisms.",
          pEs: "Identificación plena de clientes cuando la operación lo requiere; registro de contratos, avisos y operaciones relevantes; colaboración con autoridades fiscales y financieras cuando la ley lo exige; mecanismos de control interno y trazabilidad de fondos.",
        },
        {
          hEn: "Handling of third-party funds",
          hEs: "Manejo de fondos de terceros",
          pEn: "Our services may include temporary handling of funds on behalf of third parties under a prior written contract, without implying ownership or final disposition of those resources. Funds are used exclusively for the purposes agreed in each project.",
          pEs: "Nuestros servicios pueden incluir el manejo temporal de fondos por cuenta de terceros bajo contrato previo, sin que ello implique propiedad o disposición definitiva de dichos recursos. Los fondos se destinan exclusivamente a los fines pactados en cada proyecto.",
        },
        {
          hEn: "More information",
          hEs: "Más información",
          pEn: "For questions about this notice, contact contacto@financetechlatam.com. Also see our Privacy Notice and Terms.",
          pEs: "Para dudas sobre este aviso, escriba a contacto@financetechlatam.com. Consulte también el Aviso de Privacidad y los Términos.",
        },
      ]}
    />
  );
}
