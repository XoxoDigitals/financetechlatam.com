"use client";

import { ImageSlot } from "@/components/ImageSlot";
import {
  CtaBand,
  Eyebrow,
  MethodSteps,
  PageHero,
  SectionShell,
  ServiceGrid,
  SplitMedia,
} from "@/components/sections";
import { css } from "@/lib/css";
import { useT } from "@/lib/i18n";

export default function ConsultingPage() {
  const t = useT();

  return (
    <div>
      <PageHero
        accent="gold"
        eyebrow={t("Business & Finance Consulting", "Consultoría de negocio y finanzas")}
        title={t(
          "We redesign how your company is organized and run.",
          "Rediseñamos cómo se organiza y opera tu empresa."
        )}
        subtitle={t(
          "From the org chart down to the numbers — so it can operate efficiently and grow on solid ground.",
          "Del organigrama a los números — para operar con eficiencia y crecer sobre bases sólidas."
        )}
        imageSrc="/images/pexels-cottonbro-6567818.jpg"
        secondaryHref="/how-we-work"
        secondaryLabel={t("Our methodology", "Nuestra metodología")}
      />

      <SectionShell accentBg="#EEEEE8">
        <div style={css("max-width:760px")}>
          <Eyebrow accent="gold">{t("What we do", "Qué hacemos")}</Eyebrow>
          <h2 style={css("font-family:'Instrument Serif',serif;font-size:clamp(26px,3.4vw,40px);margin:0 0 14px")}>
            {t(
              "Structure first. Growth follows.",
              "Primero la estructura. Después el crecimiento."
            )}
          </h2>
          <p style={css("font-size:16.5px;line-height:1.6;color:#5A6577;margin:0")}>
            {t(
              "We help mid-sized companies and growing founders professionalize operations — eliminating duplicate roles, clarifying authority, and putting financial visibility back in your hands.",
              "Ayudamos a empresas medianas y fundadores en crecimiento a profesionalizar operaciones — eliminando roles duplicados, clarificando autoridad y devolviendo visibilidad financiera."
            )}
          </p>
        </div>
      </SectionShell>

      <SplitMedia
        accent="gold"
        eyebrow={t("5.1 Organizational Restructuring", "5.1 Reestructura organizacional")}
        title={t("Redesign the org chart with clear command.", "Rediseña el organigrama con mando claro.")}
        body={t(
          "We eliminate duplicate roles, close operational gaps, and define the chain of command.",
          "Eliminamos roles duplicados, cerramos brechas operativas y definimos la cadena de mando."
        )}
        bullets={[
          t("Diagnosis of the current org chart", "Diagnóstico del organigrama actual"),
          t("Design of a new organizational structure", "Diseño de nueva estructura"),
          t("Definition of positions, functions, and responsibilities", "Definición de puestos, funciones y responsabilidades"),
          t("Function manuals by department or team member", "Manuales de funciones por área o persona"),
          t("Reporting lines and decision-making authority", "Líneas de reporte y autoridad de decisión"),
        ]}
        imageSrc="/images/pexels-fauxels-3183153.jpg"
      />

      <SplitMedia
        reverse
        accent="gold"
        eyebrow={t("5.2 Internal Process Improvement", "5.2 Mejora de procesos internos")}
        title={t("Find bottlenecks. Redesign the flow.", "Encuentra cuellos de botella. Rediseña el flujo.")}
        body={t(
          "We identify duplicated tasks and inefficient workflows to optimize day-to-day operations.",
          "Identificamos tareas duplicadas y flujos ineficientes para optimizar el día a día."
        )}
        bullets={[
          t("Mapping of current processes", "Mapeo de procesos actuales"),
          t("Detection of inefficiencies and operational risks", "Detección de ineficiencias y riesgos"),
          t("Workflow redesign", "Rediseño de flujos de trabajo"),
          t("Documentation of SOPs", "Documentación de POEs"),
          t("Performance indicators per process", "Indicadores por proceso"),
        ]}
        imageSrc="/images/pexels-fauxels-3184418.jpg"
      />

      <SplitMedia
        accent="gold"
        eyebrow={t("5.3 Resource Optimization", "5.3 Optimización de recursos")}
        title={t("Do more with the resources you already have.", "Logra más con los recursos que ya tienes.")}
        body={t(
          "We analyze talent, time, and budget to stop overspend and unlock underused capacity.",
          "Analizamos talento, tiempo y presupuesto para frenar sobregasto y liberar capacidad subutilizada."
        )}
        bullets={[
          t("Diagnosis of human, material, and financial resource usage", "Diagnóstico de uso de recursos humanos, materiales y financieros"),
          t("Identification of overspending and underutilized resources", "Identificación de sobregasto y recursos subutilizados"),
          t("Resource reallocation and prioritization plan", "Plan de reasignación y priorización"),
          t("Automation and outsourcing recommendations", "Recomendaciones de automatización y outsourcing"),
        ]}
        imageSrc="/images/collab-phones.jpg"
      />

      <SplitMedia
        reverse
        accent="gold"
        eyebrow={t("5.4 Financial Structure and Health", "5.4 Estructura y salud financiera")}
        title={t("Visibility and control over your numbers.", "Visibilidad y control sobre tus números.")}
        body={t(
          "We organize and strengthen your financial structure so decisions rest on clear KPIs.",
          "Organizamos y fortalecemos tu estructura financiera para decidir con KPIs claros."
        )}
        bullets={[
          t("Comprehensive financial diagnosis", "Diagnóstico financiero integral"),
          t("Design or redesign of cost structure", "Diseño o rediseño de estructura de costos"),
          t("Cash flow analysis and financial projections", "Análisis de flujo y proyecciones"),
          t("Key financial indicators (KPIs)", "Indicadores financieros clave (KPIs)"),
          t("Recommendations for financial decision-making", "Recomendaciones para la toma de decisiones"),
        ]}
        imageSrc="/images/hero-desk-charts.jpg"
      />

      <MethodSteps
        accent="gold"
        title={t("Consulting methodology", "Metodología de consultoría")}
        steps={[
          {
            n: "01",
            title: t("Diagnosis", "Diagnóstico"),
            body: t(
              "We analyze your company's current structure, processes, and finances.",
              "Analizamos estructura, procesos y finanzas actuales."
            ),
          },
          {
            n: "02",
            title: t("Solution Design", "Diseño de solución"),
            body: t(
              "We build a restructuring proposal tailored to your goals.",
              "Construimos una propuesta de reestructura a tu medida."
            ),
          },
          {
            n: "03",
            title: t("Implementation", "Implementación"),
            body: t(
              "We support the rollout with clear manuals and tools.",
              "Acompañamos el despliegue con manuales y herramientas claras."
            ),
          },
          {
            n: "04",
            title: t("Follow-Up & Adjustment", "Seguimiento y ajuste"),
            body: t(
              "We measure results and refine the strategy over time.",
              "Medimos resultados y afinamos la estrategia con el tiempo."
            ),
          },
        ]}
      />

      <ServiceGrid
        accent="gold"
        title={t("Ideal for", "Ideal para")}
        items={[
          {
            title: t("Mid-sized companies", "Empresas medianas"),
            body: t(
              "Facing internal disorder, duplicated roles, unclear processes, or weak financial control.",
              "Con desorden interno, roles duplicados, procesos poco claros o control financiero débil."
            ),
          },
          {
            title: t("Growing entrepreneurs", "Emprendedores en crecimiento"),
            body: t(
              "Who want a professional organizational and financial foundation from the start.",
              "Que quieren una base organizacional y financiera profesional desde el inicio."
            ),
          },
        ]}
      />

      <SectionShell>
        <div
          style={css(
            "position:relative;min-height:280px;border-radius:22px;overflow:hidden"
          )}
        >
          <ImageSlot id="consulting-band" src="/images/pexels-alesiakozik-6772077.jpg" alt="" />
        </div>
      </SectionShell>

      <CtaBand
        accent="gold"
        title={t("Ready to strengthen your foundation?", "¿Listo para fortalecer tu base?")}
        body={t(
          "Book a free consultation and we'll map the right restructuring path.",
          "Agenda una consulta gratis y mapearemos el camino de reestructura correcto."
        )}
      />
    </div>
  );
}
