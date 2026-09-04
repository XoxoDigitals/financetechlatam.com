import type { PostRow } from "@/lib/types";

function at(isoDate: string): string {
  return `${isoDate}T20:00:00.000Z`;
}

const AUTHOR = "Financetech LATAM Research";

export const SEED_POSTS: PostRow[] = [
  {
    id: "11111111-1111-4111-8111-111111111101",
    slug: "how-collections-work-in-mexico-condusef-lfpdppp",
    title_en: "How collections work in Mexico: CONDUSEF, LFPDPPP and what lenders can actually do",
    title_es: "Cómo funciona la cobranza en México: CONDUSEF, LFPDPPP y lo que sí puede hacer un acreedor",
    excerpt_en:
      "A practical map of preventive, early, extrajudicial and legal recovery in Mexico — including debtor-treatment rules that decide whether a programme scales or generates complaints.",
    excerpt_es:
      "Mapa práctico de cobranza preventiva, temprana, extrajudicial y jurídica en México, incluyendo las reglas de trato al deudor que determinan si un programa escala o genera quejas.",
    seo_title: "Collections in Mexico: CONDUSEF rules, LFPDPPP and recovery stages",
    seo_description:
      "How Mexican collections actually operate: ageing stages, CONDUSEF complaint risk, LFPDPPP data rules, and when to move from early contact to extrajudicial or legal recovery.",
    keywords:
      "collections Mexico, cobranza, CONDUSEF, LFPDPPP, extrajudicial recovery, credit collections agency Mexico",
    category: "Collections",
    author: AUTHOR,
    status: "published",
    published_at: at("2026-09-06"),
    updated_at: at("2026-09-04"),
    faq: [
      {
        q_en: "Is collections legal in Mexico?",
        a_en: "Yes. Creditors and authorised agencies may contact debtors to recover lawful balances, but contact methods, hours, language and personal data use are constrained by CONDUSEF guidance and the LFPDPPP.",
        q_es: "¿La cobranza es legal en México?",
        a_es: "Sí. Acreedores y despachos autorizados pueden contactar deudores para recuperar saldos legítimos, con límites de medio, horario, lenguaje y uso de datos personales (CONDUSEF y LFPDPPP).",
      },
      {
        q_en: "What usually recovers the most balance?",
        a_en: "Early-stage work (roughly 1–90 days past due) recovers most of the placed balance when contact data is current and payment options are offered in the first conversations.",
        q_es: "¿Dónde se recupera más saldo?",
        a_es: "En cobranza temprana (aprox. 1–90 días de mora), si los datos de contacto están vigentes y se ofrecen opciones de pago desde el primer contacto.",
      },
      {
        q_en: "When does legal recovery make sense?",
        a_en: "Only when scoring shows expected recovery after legal cost, notarial fees and time. Many 360+ day accounts should stay in structured extrajudicial negotiation.",
        q_es: "¿Cuándo conviene la vía jurídica?",
        a_es: "Sólo cuando el scoring muestra recuperación esperada neta de costo legal, notaría y tiempo. Muchas cuentas de 360+ días deben quedarse en negociación extrajudicial.",
      },
    ],
    content_en: `**Direct answer:** In Mexico, collections is a staged operating process — preventive, early, extrajudicial, then legal — not a single call centre. What you may say, when you may call, and how you store debtor data is shaped by CONDUSEF expectations and the LFPDPPP. Programmes that ignore those constraints do not fail in court first; they fail in complaint rate and contact quality.

## What “collections” means for a Mexican credit book

A lender who sold on terms already booked revenue. Collections is the work of converting that receivable into cash without destroying the franchise. For banking, retail, subscriptions and B2B credit, the same ageing logic applies:

- **Preventive (before due date):** reminders, portals, and payment options that keep the account out of arrears.
- **Early (about 1–90 days):** omnichannel contact and agreements. This is where most recoverable balance sits.
- **Extrajudicial (about 91–360 days):** structured negotiation, authorised discounts, restructures, notarial follow-up.
- **Legal (typically 360+ days):** commercial litigation with partner firms — only when scoring justifies cost.

Financetech LATAM runs this as one pipeline with a shared scorecard. See [Collections & credit](/collections) for the operating view.

## CONDUSEF and complaint economics

CONDUSEF is not a collections ban. It is a consumer-protection overlay: harassment, misleading statements, contacting third parties as pressure, and sloppy identity handling generate complaints that are expensive even when the debt is real.

Operators should instrument **complaints per 1,000 contacts**, not only roll rate. A 0.4% complaint ratio with a high contact rate is a different company from a “tough” shop that cannot pass a bank vendor review.

## LFPDPPP: data is part of the recovery file

The LFPDPPP (federal personal data law) treats phone numbers, IDs, emails and location as personal data. A collections file is a processing purpose. That implies:

1. A privacy notice aligned to the actual use (recovery, skip tracing, payment processing).
2. Vendor contracts that match what the agency really does.
3. Retention rules when the account is paid, written off, or disputed.

If your CRM dumps the full electoral roll into an agent screen, you do not have a collections problem — you have a data problem.

## How to brief an operator

Send an anonymised extract: original balance, ageing bucket, product, last payment date, last contact result. A serious partner returns a **recovery projection by bucket**, a cost comparison against in-house payroll, and a compliance note. [Register](/contact) if you want that pack within five business days.

### Key takeaway for CFOs and credit managers

The constraint is not “can we call.” The constraint is **contact rate × promise-to-pay × complaint rate**, under Mexican rules. Design the operation around that product, not around seat count.`,
    content_es: `**Respuesta directa:** En México la cobranza es un proceso por etapas — preventiva, temprana, extrajudicial y jurídica — no un call center genérico. Qué se puede decir, cuándo llamar y cómo guardar datos del deudor lo marcan CONDUSEF y la LFPDPPP. Los programas que ignoran eso no fallan primero en juzgado: fallan en quejas y en calidad de contacto.

## Qué significa “cobranza” para una cartera mexicana

Quien vendió a crédito ya reconoció ingreso. Cobrar es convertir esa cuenta por cobrar en efectivo sin romper la marca. Aplica a banca, retail, suscripciones y crédito B2B:

- **Preventiva (antes del vencimiento):** recordatorios, portales y facilidades de pago.
- **Temprana (aprox. 1–90 días):** contacto omnicanal y convenios. Aquí está la mayor parte del saldo recuperable.
- **Extrajudicial (aprox. 91–360 días):** negociación, quitas autorizadas, reestructuras, seguimiento notarial.
- **Jurídica (típicamente 360+ días):** demanda mercantil con despachos aliados, sólo si el scoring cubre el costo.

Financetech LATAM opera esto como un solo pipeline. Ver [Cobranza y crédito](/collections).

## CONDUSEF y la economía de las quejas

CONDUSEF no prohíbe cobrar. Sí limita hostigamiento, mensajes engañosos, presión a terceros y un mal manejo de identidad. Hay que medir **quejas por cada mil contactos**, no sólo roll rate.

## LFPDPPP: los datos son parte del expediente

Teléfono, identificadores, correo y ubicación son datos personales. El expediente de cobranza es una finalidad de tratamiento: aviso de privacidad, contratos con el despacho y reglas de retención.

## Cómo briefear a un operador

Envía un extracto anonimizado: saldo original, tramo de antigüedad, producto, última fecha de pago, último resultado de contacto. Un socio serio devuelve proyección por tramo, comparativo de costo y nota de cumplimiento. [Registro](/contact).

### Conclusión

La restricción no es “¿podemos llamar?” Es **contactabilidad × promesa de pago × quejas**, bajo reglas mexicanas.`,
  },
  {
    id: "11111111-1111-4111-8111-111111111102",
    slug: "recovery-rate-by-portfolio-age-mexico",
    title_en: "Recovery rate by portfolio age: why 0–30 days is not the same product as 360+",
    title_es: "Tasa de recuperación por antigüedad: por qué 0–30 días no es el mismo producto que 360+",
    excerpt_en:
      "Ageing buckets change contact strategy, discount policy and legal spend. Here is how Mexican operators should read recovery curves before they staff a floor.",
    excerpt_es:
      "Los tramos de antigüedad cambian estrategia de contacto, política de quitas y gasto legal. Cómo leer las curvas de recuperación antes de armar un piso.",
    seo_title: "Portfolio recovery by ageing bucket in Mexico (0–30 to 360+ days)",
    seo_description:
      "Typical recovery patterns by days past due in Mexican consumer and commercial books, and how to set SLAs, discounts and legal gates per bucket.",
    keywords: "portfolio ageing, recovery rate, days past due, collections KPIs Mexico, roll rate",
    category: "Collections",
    author: AUTHOR,
    status: "published",
    published_at: at("2026-09-08"),
    updated_at: at("2026-09-04"),
    faq: [
      {
        q_en: "Why does recovery fall so fast after 90 days?",
        a_en: "Contact data decays, competing creditors appear, and the debtor’s cash is already allocated. Intensity of contact cannot fully offset stale phones and unpaid utilities.",
        q_es: "¿Por qué cae tanto la recuperación después de 90 días?",
        a_es: "Los datos de contacto envejecen, aparecen otros acreedores y el flujo del deudor ya está comprometido. Más llamadas no compensan teléfonos muertos.",
      },
      {
        q_en: "Should every bucket have the same SLA?",
        a_en: "No. First-contact SLAs should be hours in early stage and days in late extrajudicial. Legal files need a scoring gate, not a speed contest.",
        q_es: "¿El mismo SLA para todos los tramos?",
        a_es: "No. El primer contacto es cuestión de horas en temprana y de días en extrajudicial tardía. Lo jurídico necesita un umbral de scoring, no una carrera.",
      },
      {
        q_en: "Is a 86% 0–30 recovery claim realistic?",
        a_en: "It can be for fresh, well-originated books with good phones. It is not a benchmark you copy onto purchased NPLs.",
        q_es: "¿Es realista 86% en 0–30?",
        a_es: "Puede serlo en originación propia con buenos teléfonos. No es un benchmark para NPL comprada.",
      },
    ],
    content_en: `**Direct answer:** Recovery is a function of **days past due × data quality × product**. Treating a 14-day retail card like a 400-day commercial invoice with the same script and the same discount grid is how programmes overspend and under-collect.

## Read the curve, then staff it

Illustrative operator curves (managed books, not purchased distress) often look like this:

- **0–30 days:** high share of balance recovered with reminders and easy payment paths.
- **31–90 days:** still the economic core of most consumer programmes if you keep omnichannel contact.
- **91–180 days:** recovery depends on authorised concessions and a real negotiator, not a dialer.
- **181–360 days:** expect a steep drop; invest only where propensity models say yes.
- **360+ days:** legal or structured settlement — never “more of the same calls.”

Use the curve to set **cost per peso recovered**, not vanity contact counts.

## What changes in the operating design

1. **Script and offer:** early stage sells convenience; late stage sells certainty (settlement, notary, payment plan).
2. **Channel mix:** SMS and app nudges dominate preventive; voice and WhatsApp dominate early; field and legal dominate late.
3. **Governance:** discount authority must sit with a named role. Uncapped agent discounts will eat the book.

## How CFOs should use this in a vendor review

Ask for recovery **by original ageing at placement**, not blended. A shop that only shows a headline 78% contact rate is hiding the mix. Demand a table: placed balance, cash in 30/60/90, complaints, and cost-to-collect by bucket.

If you want a projection on your mix, [send an anonymised extract](/contact). The [collections unit](/collections) is built around this staging.`,
    content_es: `**Respuesta directa:** La recuperación depende de **días de mora × calidad de datos × producto**. Tratar una tarjeta a 14 días como una factura comercial a 400 días, con el mismo guion y la misma parrilla de quitas, es la receta para gastar de más y cobrar de menos.

## Lee la curva y luego arma el piso

En carteras gestionadas (no NPL comprada) suele verse:

- **0–30 días:** alta recuperación con recordatorios y facilidades.
- **31–90 días:** núcleo económico si hay contacto omnicanal.
- **91–180 días:** quitas autorizadas y negociador real, no sólo marcador.
- **181–360 días:** caída fuerte; invierte sólo donde el modelo de propensión dice sí.
- **360+ días:** jurídica o convenio estructurado.

Mide **costo por peso recuperado**, no vanidad de llamadas.

## Qué cambia en el diseño operativo

Guion y oferta, mezcla de canales y gobierno de descuentos. La autoridad de quita debe tener dueño.

## Qué pedir en un vendor review

Recuperación **por antigüedad al colocar**, no un blended. Tabla: saldo colocado, caja a 30/60/90, quejas y costo de cobranza por tramo. [Registro](/contact) · [Cobranza](/collections).`,
  },
  {
    id: "11111111-1111-4111-8111-111111111103",
    slug: "in-house-vs-outsourced-collections-cost-mexico",
    title_en: "In-house vs outsourced collections in Mexico: a cost model CFOs can defend",
    title_es: "Cobranza interna vs. tercerizada en México: un modelo de costo que el CFO puede defender",
    excerpt_en:
      "Payroll is not the cost of collections. Licences, turnover, quality, audit and idle capacity are. Here is a base-100 way to compare a floor you own with an operating partner.",
    excerpt_es:
      "La nómina no es el costo de cobrar. Licencias, rotación, calidad, auditoría y capacidad ociosa sí. Una base 100 para comparar un piso propio con un socio operador.",
    seo_title: "Cost of in-house vs outsourced collections in Mexico",
    seo_description:
      "Fully loaded cost of a Mexican collections floor versus year-1 and year-2 outsourced operations, including payroll, licences, quality and audit.",
    keywords: "collections outsourcing cost, BPO Mexico, in-house call center, cost to collect",
    category: "Operations",
    author: AUTHOR,
    status: "published",
    published_at: at("2026-09-10"),
    updated_at: at("2026-09-04"),
    faq: [
      {
        q_en: "When is in-house cheaper?",
        a_en: "When volume is stable, systems are already paid for, and you can keep trained agents. Spike volumes and multi-product books usually favour a partner with shared infrastructure.",
        q_es: "¿Cuándo sale más barato lo interno?",
        a_es: "Con volumen estable, sistemas ya pagados y agentes retenidos. Picos y multi-producto suelen favorecer a un socio con infraestructura compartida.",
      },
      {
        q_en: "What should be in a fully loaded cost?",
        a_en: "Salaries, benefits, seats, dialer/CRM licences, telecom, quality, training attrition, legal support, and management overhead. Skip any of those and the comparison is theatre.",
        q_es: "¿Qué entra en el costo fully loaded?",
        a_es: "Sueldos, prestaciones, posiciones, licencias de marcador/CRM, telecom, calidad, rotación, soporte legal y overhead de dirección.",
      },
      {
        q_en: "Does outsourcing mean losing the customer relationship?",
        a_en: "Only if you outsource brand and policy. Keep scripts, discount matrix and complaint ownership; outsource execution and systems.",
        q_es: "¿Tercerizar es perder al cliente?",
        a_es: "Sólo si cedes marca y política. Quédate con guiones, matriz de quitas y dueño de quejas; terceriza ejecución y sistemas.",
      },
    ],
    content_en: `**Direct answer:** Compare **fully loaded cost per peso recovered**, not headcount. In Mexico, an in-house floor looks cheap until you add licences, attrition, idle seats in low-volume months, and the audit trail a bank or retailer will demand.

## A base-100 model

Set in-house fully loaded cost = 100. A well-run operating partner often lands near **68 in year 1** (transition, dual running, integrations) and **~59 in year 2** once the book is on shared rails. Those figures are illustrative — your mix, labour market and system estate will move them.

What year 1 usually contains:

- Integration of ERP/CRM/banks without pausing collections
- Dual running while you decommission seats
- Training on your product, not a generic script

Year 2 is where shared scoring, shared quality, and fewer software contracts show up in the P&L.

## Hidden in-house line items

- Agent turnover: replacement cost is months of productivity, not a recruiting fee.
- Compliance: CONDUSEF complaints handled by untrained staff become legal spend.
- Night and weekend coverage for omnichannel — expensive if you staff it for peak.

## How to run the comparison without politics

1. Freeze a 90-day book snapshot.
2. Allocate in-house cost with finance, not with operations’ “we already have the people.”
3. Ask the partner for a **cost-to-collect by ageing bucket**.
4. Keep policy (discounts, write-off, tone) in-house.

[Register](/contact) for a comparison pack. The same logic applies to [accounting](/accounting) seats, not only voice collections.`,
    content_es: `**Respuesta directa:** Compara **costo fully loaded por peso recuperado**, no headcount. En México un piso interno se ve barato hasta que sumas licencias, rotación, asientos ociosos y la bitácora que pedirá un banco o un retailer.

## Modelo base 100

Interno fully loaded = 100. Un socio operador bien corrido suele caer cerca de **68 en año 1** y **~59 en año 2**. Son cifras ilustrativas.

El año 1 incluye integración, dual running y entrenamiento en tu producto. El año 2 es cuando scoring, calidad y menos contratos de software se ven en el P&L.

## Partidas que el interno esconde

Rotación, quejas CONDUSEF mal gestionadas y cobertura nocturna omnicanal.

## Cómo comparar sin política

Congela 90 días de cartera, asigna costo con finanzas, pide costo-por-tramo al socio y quédate con la política (quitas, castigos, tono). [Registro](/contact) · [Contabilidad](/accounting).`,
  },
  {
    id: "11111111-1111-4111-8111-111111111104",
    slug: "sat-cfdi-monthly-close-outsourcing-mexico",
    title_en: "SAT, CFDI and a five-day monthly close: what outsourced accounting must actually deliver",
    title_es: "SAT, CFDI y un cierre en cinco días: lo que la contabilidad tercerizada sí tiene que entregar",
    excerpt_en:
      "Mexican statutory accounting is not “bookkeeping plus a stamp.” CFDI, SAT reconciliations and an auditable close calendar are the product. Here is the operating brief.",
    excerpt_es:
      "La contabilidad estatutaria mexicana no es “registros más un sello”. CFDI, conciliaciones SAT y un calendario de cierre auditable son el producto. El brief operativo.",
    seo_title: "Outsourced accounting in Mexico: SAT, CFDI and monthly close",
    seo_description:
      "How to outsource Mexican accounting without losing the close: CFDI 4.0, SAT reconciliations, tax calendar, and a five-day monthly close operating model.",
    keywords: "SAT, CFDI 4.0, monthly close Mexico, accounting BPO, tax compliance, e-invoicing",
    category: "Accounting",
    author: AUTHOR,
    status: "published",
    published_at: at("2026-09-12"),
    updated_at: at("2026-09-04"),
    faq: [
      {
        q_en: "What is CFDI in one sentence?",
        a_en: "CFDI is Mexico’s mandatory electronic invoice/tax receipt format; if it is not stamped correctly, your VAT and deduction file is already wrong.",
        q_es: "¿Qué es el CFDI en una frase?",
        a_es: "El CFDI es el comprobante fiscal digital obligatorio; si no está timbrado bien, el expediente de IVA y deducciones ya está mal.",
      },
      {
        q_en: "Can a five-day close work with SAT lag?",
        a_en: "Yes if you close on a defined cut-off, reconcile SAT downloads on a cadence, and park exceptions instead of holding the entire close.",
        q_es: "¿Se puede cerrar en cinco días con el desfase del SAT?",
        a_es: "Sí, si hay corte definido, conciliación SAT en calendario y las excepciones se apartan sin detener todo el cierre.",
      },
      {
        q_en: "What should stay in-house?",
        a_en: "Judgement on provisions, related-party policy, and sign-off. Transaction processing and reconciliations are the outsourceable factory.",
        q_es: "¿Qué se queda interno?",
        a_es: "Juicio de provisiones, partes relacionadas y la firma. El factory de transacciones y conciliaciones sí se terceriza.",
      },
    ],
    content_en: `**Direct answer:** In Mexico the accounting product is **CFDI-complete books + SAT-reconciled taxes + a dated close**. If an outsourcing pitch talks only about “accountants per entity,” you are buying seats, not a close.

## Why CFDI sits in the critical path

Every deductible expense and most income traces to a stamped CFDI. That means AP, AR, payroll receipts and credit notes are not back-office trivia — they are tax evidence. Auto-reconciliation of entries (the share that matches without a human) is a real KPI. We treat **~91% auto-reconciled** as an operating target on clean books, not a slogan.

## A close calendar an auditor can follow

Day 0: cut-off. Days 1–2: bank, SAT download, CFDI vs GL. Days 3–4: exceptions, provisions, intercompany. Day 5: pack and sign-off. Anything that cannot be resolved is an **open item with an owner**, not a reason to slip the whole close.

## Tax is a workflow, not a May surprise

ISR, IVA, DIOT-style information returns and local taxes need a named calendar. The outsourcer should show you last month’s pack: trial balance, SAT diffs, CFDI missing list, and tax computation — the same every month.

## How this ties to collections and banks

Unapplied cash and unstamped invoices create both a collections dispute and a SAT difference. Finance operations only work when [accounting](/accounting), [fintech rails](/fintech) and [collections](/collections) share the same customer key.

[Register](/contact) if you want a close-and-tax diagnostic.`,
    content_es: `**Respuesta directa:** En México el producto contable es **libros completos en CFDI + impuestos conciliados con SAT + cierre con fecha**. Si el pitch de outsourcing habla sólo de “contadores por entidad”, estás comprando asientos, no un cierre.

## Por qué el CFDI está en la ruta crítica

Gasto deducible e ingreso se sostienen en CFDI timbrado. AP, AR, nómina y notas de crédito son evidencia fiscal. La conciliación automática de pólizas es un KPI real.

## Calendario de cierre que un auditor puede seguir

Día 0: corte. Días 1–2: bancos, descarga SAT, CFDI vs mayor. Días 3–4: excepciones, provisiones, intercompañía. Día 5: paquete y firma. Lo no resuelto es un **open item con dueño**.

## El impuesto es un workflow

ISR, IVA e informativas necesitan calendario con nombre. El paquete del mes pasado debe repetirse: balanza, diferencias SAT, CFDI faltantes, cálculo.

Contabilidad, rieles y cobranza deben compartir la misma llave de cliente. [Registro](/contact) · [Contabilidad](/accounting).`,
  },
  {
    id: "11111111-1111-4111-8111-111111111105",
    slug: "portfolio-scoring-consumer-credit-latam",
    title_en: "Portfolio scoring for consumer and SMB credit in LATAM: what to score before you dial",
    title_es: "Scoring de cartera de crédito al consumo y PyME en LATAM: qué puntuar antes de marcar",
    excerpt_en:
      "Scoring is not a bureau clone. For recovery and origination support, score contactability, propensity to pay, complaint risk and legal NPV — then throttle the floor.",
    excerpt_es:
      "El scoring no es un clon de buró. Para recuperación, puntúa contactabilidad, propensión de pago, riesgo de queja y VAN jurídico — y luego acelera o frena el piso.",
    seo_title: "Credit and collections scoring for LATAM portfolios",
    seo_description:
      "Build a recovery scorecard for Mexican and LATAM books: contactability, pay propensity, CONDUSEF complaint risk, and legal NPV before you spend agent time.",
    keywords: "portfolio scoring, collections scorecard, credit risk LATAM, propensity to pay, skip tracing",
    category: "Credit",
    author: AUTHOR,
    status: "published",
    published_at: at("2026-09-14"),
    updated_at: at("2026-09-04"),
    faq: [
      {
        q_en: "Do we need the credit bureau to score collections?",
        a_en: "Bureau data helps origination and some late-stage legal gates. Most early recovery lift comes from your own payment history, contact outcomes and ageing.",
        q_es: "¿Necesito buró para scorear cobranza?",
        a_es: "El buró ayuda en originación y en algunos filtros jurídicos. El lift temprano sale de tu propia historia de pago, resultados de contacto y antigüedad.",
      },
      {
        q_en: "What is contactability scoring?",
        a_en: "A model of whether a phone, email or app token will reach the right person this week — the binding constraint in Mexican mobile-number churn.",
        q_es: "¿Qué es scoring de contactabilidad?",
        a_es: "Un modelo de si teléfono, correo o token de app llega a la persona correcta esta semana — la restricción real con la rotación de números en México.",
      },
      {
        q_en: "How often should scores refresh?",
        a_en: "Daily for early buckets if you have overnight payments; weekly is acceptable for 180+ day books. Stale scores waste the expensive channels.",
        q_es: "¿Cada cuándo refrescar?",
        a_es: "Diario en tramos tempranos si hay pagos nocturnos; semanal puede bastar en 180+ días.",
      },
    ],
    content_en: `**Direct answer:** Score **who to work, in which channel, with which offer** — not a single “risk grade” copied from origination. A 720 originations score does not tell you if last night’s WhatsApp will connect.

## Four scores, one throttle

1. **Contactability:** probability of a live, right-party contact in the next attempt.
2. **Propensity to pay:** probability of a kept promise in 7–14 days given an offer set.
3. **Complaint / conduct risk:** probability of a CONDUSEF-style complaint given intensity.
4. **Legal NPV:** expected cash minus legal and time cost if you escalate.

Agents should see a **next-best action**, not a raw probability. High legal NPV and low contactability is a skip-trace problem, not a “call more” problem.

## Features that actually move Mexican books

- Recency and result of last contact
- Number of competing products in the same RFC household (when you lawfully have it)
- Payment-channel preference (SPEI vs store vs card)
- Vintage and original approval channel (organic vs heavy acquisition)

Keep features inside the LFPDPPP purpose. More data is not always more legal.

## Governance

Model changes go through a credit/collections committee with a champion/challenger. If marketing can silently change the intensity dial, you will buy complaints.

This is the scoring layer behind [C&C services](/collections) and [fintech operations](/fintech).`,
    content_es: `**Respuesta directa:** Scorea **a quién trabajar, en qué canal y con qué oferta** — no un “grado de riesgo” copiado de originación. Un 720 de originación no dice si el WhatsApp de anoche va a conectar.

## Cuatro scores, un acelerador

Contactabilidad, propensión de pago, riesgo de queja/conducta y VAN jurídico. El agente debe ver **siguiente mejor acción**, no una probabilidad cruda.

## Features que sí mueven carteras mexicanas

Recencia y resultado del último contacto, preferencia de canal de pago (SPEI vs tienda vs tarjeta), vintage y canal de originación. Todo dentro de la finalidad LFPDPPP.

## Gobierno

Cambios de modelo por comité, con champion/challenger. Si mercadotecnia mueve la intensidad a solas, compras quejas.

Capa de scoring de [C&C](/collections) y [fintech](/fintech).`,
  },
  {
    id: "11111111-1111-4111-8111-111111111106",
    slug: "extrajudicial-vs-legal-recovery-mexico",
    title_en: "Extrajudicial vs legal recovery in Mexico: a decision tree, not a threat script",
    title_es: "Cobranza extrajudicial vs. jurídica en México: un árbol de decisión, no un guion de amenaza",
    excerpt_en:
      "Legal recovery is a priced option. Most late balances should stay in structured extrajudicial work with notarial follow-up. Here is how to gate litigation.",
    excerpt_es:
      "La vía jurídica es una opción con precio. La mayoría de saldos tardíos deben quedarse en extrajudicial estructurada con seguimiento notarial. Cómo filtrar el litigio.",
    seo_title: "Extrajudicial vs judicial collections in Mexico",
    seo_description:
      "When to keep a Mexican account in extrajudicial negotiation versus commercial litigation: scoring gates, notarial process, and cost of capital.",
    keywords: "extrajudicial collections Mexico, demanda mercantil, notary, legal recovery, cobranza jurídica",
    category: "Collections",
    author: AUTHOR,
    status: "published",
    published_at: at("2026-09-16"),
    updated_at: at("2026-09-04"),
    faq: [
      {
        q_en: "Does mentioning a lawsuit increase recovery?",
        a_en: "Unverified threats increase complaints and can violate conduct rules. A truthful, dated path (“file referred on date X if no plan”) is different from theatre.",
        q_es: "¿Hablar de demanda aumenta la recuperación?",
        a_es: "La amenaza sin respaldo sube quejas y puede violar reglas de conducta. Un camino fechado y real es distinto al teatro.",
      },
      {
        q_en: "What does notarial follow-up add?",
        a_en: "It creates a stronger documentary trail for settlements and some enforcement paths. It is not magic; it is process discipline.",
        q_es: "¿Qué aporta lo notarial?",
        a_es: "Una bitácora documental más sólida para convenios y algunas rutas de ejecución. No es magia; es disciplina de proceso.",
      },
      {
        q_en: "Who should own the legal gate?",
        a_en: "A named collections-legal committee with a minimum NPV and a maximum vintage, reviewed monthly — not individual agents.",
        q_es: "¿Quién dueña el filtro jurídico?",
        a_es: "Un comité cobranza-legal con VAN mínimo y vintage máximo, revisado cada mes — no el agente suelto.",
      },
    ],
    content_en: `**Direct answer:** Escalate to legal when **expected recovery after cost and time exceeds the extrajudicial alternative**. If you cannot write that inequality, you are running on folklore.

## Extrajudicial is a product

It needs a playbook: offer grid, cooling-off, documentation, payment plan monitoring, and a stop rule. “Call until they pay” is not extrajudicial work; it is unstructured intensity.

Authorised write-downs belong here. So do restructures that a credit committee already priced.

## Legal is a queue with WIP

Mexican commercial litigation consumes months and professional fees. WIP without a cash forecast is a hidden NPL. Partner firms should report **status, next hearing, and expected cash date**, the same way a factory reports WIP.

## A simple gate

Place into legal only if:

- Identity and balance are documentary-clean
- Contactability is exhausted or the debtor is a skip with assets
- Legal NPV > remaining extrajudicial expected value
- Product is not a CONDUSEF-sensitive retail unsecured with tiny tickets (those often never clear the fee hurdle)

[Collections](/collections) at Financetech is built with this gate. [Register](/contact) to pressure-test your current legal stock.`,
    content_es: `**Respuesta directa:** Escala a jurídica cuando **la recuperación esperada neta de costo y tiempo supera la alternativa extrajudicial**. Si no puedes escribir esa desigualdad, estás operando con folclore.

## Lo extrajudicial es un producto

Playbook: parrilla de ofertas, documentación, monitoreo del plan y regla de corte. “Marcar hasta que paguen” no es extrajudicial.

## Lo jurídico es un WIP

Meses y honorarios. El inventario sin pronóstico de caja es un NPL escondido. El despacho debe reportar estatus, siguiente audiencia y fecha esperada de caja.

## Filtro simple

Identidad y saldo limpios, contactabilidad agotada o skip con activos, VAN jurídico mayor al extrajudicial, y tickets que cubran honorarios.

[Cobranza](/collections) · [Registro](/contact).`,
  },
  {
    id: "11111111-1111-4111-8111-111111111107",
    slug: "spei-payment-operations-collections-mexico",
    title_en: "SPEI, STP and collections: payment operations that do not pause recovery",
    title_es: "SPEI, STP y cobranza: operación de pagos que no detiene la recuperación",
    excerpt_en:
      "If cash application lags, collectors sell the wrong balance. This is how Mexican payment rails should sit inside a collections and finance operating system.",
    excerpt_es:
      "Si la aplicación de caja se retrasa, el gestor vende el saldo equivocado. Cómo deben vivir los rieles de pago mexicanos dentro de cobranza y finanzas.",
    seo_title: "SPEI and payment operations for collections in Mexico",
    seo_description:
      "Connect SPEI/STP references, reconcilers and collector screens so Mexican recovery never quotes a stale balance. Operating notes for CFOs and ops leads.",
    keywords: "SPEI, STP, payment operations Mexico, cash application, bank reconciliation, collections fintech",
    category: "Fintech",
    author: AUTHOR,
    status: "published",
    published_at: at("2026-09-18"),
    updated_at: at("2026-09-04"),
    faq: [
      {
        q_en: "What is a payment reference in collections?",
        a_en: "A unique SPEI/CLABE or convenience-store reference that posts to one account. Shared references are how cash goes to unapplied hell.",
        q_es: "¿Qué es una referencia de pago?",
        a_es: "Una referencia SPEI/CLABE o de tienda de conveniencia única por cuenta. Las referencias compartidas mandan la caja a no identificados.",
      },
      {
        q_en: "How fast should cash hit the collector screen?",
        a_en: "Same day for SPEI in a serious operation; next business morning is the outer SLA. Anything slower creates double-collect and complaints.",
        q_es: "¿Qué tan rápido debe verse el pago?",
        a_es: "El mismo día en SPEI en una operación seria; la mañana hábil siguiente es el SLA máximo. Más lento genera doble gestión y quejas.",
      },
      {
        q_en: "Do we need our own bank?",
        a_en: "No. You need a treasury design: concentration accounts, named reconcilers, and exception queues. The bank is a rail, not the operating system.",
        q_es: "¿Necesitamos banco propio?",
        a_es: "No. Necesitas diseño de tesorería: cuentas de concentración, conciliadores con nombre y colas de excepción.",
      },
    ],
    content_en: `**Direct answer:** Collections software without **same-day cash application** trains agents to argue with customers who already paid. In Mexico that argument happens on WhatsApp and becomes a CONDUSEF story.

## Rails are not the product; posting is

SPEI, store networks and cards all fail the same way: money arrives, the reference is wrong or delayed, the screen still shows due. Fix posting, then brag about channels.

Operating rules:

- One live reference per account, rotated only with a documented reason
- Unapplied cash queue with an owner every morning
- Collector desktop shows **as-of timestamp** of last posting

## Reconciliation as a factory

Bank files vs GL vs collections subledger. Auto-match on reference + amount + date; humans only see breaks. This is the same muscle as [accounting close](/accounting) and [fintech operations](/fintech).

## Do not pause recovery for a migration

When you change ERP or banks, dual-post for a window. The [international](/international) books make this worse (two calendars, two rails). Plan the cutover like a plant shutdown, not an IT ticket.

[Register](/contact) for a rails-and-recon diagnostic.`,
    content_es: `**Respuesta directa:** Un sistema de cobranza sin **aplicación de caja el mismo día** entrena gestores a pelear con clientes que ya pagaron. En México esa pelea ocurre en WhatsApp y termina en CONDUSEF.

## El riel no es el producto; el posteao sí

SPEI, tiendas y tarjetas fallan igual: llega el dinero y la pantalla sigue en adeudo. Arregla el posting.

Reglas: referencia viva por cuenta, cola de no identificados con dueño, timestamp de última aplicación en la pantalla del gestor.

## Conciliación como factory

Archivo bancario vs mayor vs subdiario de cobranza. Match automático; el humano ve quiebres. Misma musculatura que [cierre contable](/accounting) y [fintech](/fintech).

[Registro](/contact).`,
  },
  {
    id: "11111111-1111-4111-8111-111111111108",
    slug: "cross-border-collections-mexico-united-states",
    title_en: "Cross-border collections: Mexico–US corridor without two conflicting playbooks",
    title_es: "Cobranza transfronteriza: el corredor México–EE.UU. sin dos playbooks en conflicto",
    excerpt_en:
      "Groups that originate in one country and collect in another fail on data residency, consumer-law mix and cash rails — not on “culture.” Here is an operating split that works.",
    excerpt_es:
      "Los grupos que originan en un país y cobran en otro fallan por residencia de datos, mezcla de derecho del consumidor y rieles de caja — no por “cultura”. Un split operativo que sí funciona.",
    seo_title: "Mexico–US cross-border collections and finance operations",
    seo_description:
      "How to run collections and accounting across Mexico and the United States: consumer-law split, data, SPEI vs ACH, and a single executive scorecard.",
    keywords: "cross-border collections, Mexico US, ACH SPEI, multi-entity accounting, LATAM operations",
    category: "International",
    author: AUTHOR,
    status: "published",
    published_at: at("2026-09-20"),
    updated_at: at("2026-09-04"),
    faq: [
      {
        q_en: "Can one script serve Mexico and the US?",
        a_en: "No. Hours, disclosure language, and third-party contact rules differ. Share scoring and cash application; split conduct rules.",
        q_es: "¿Un solo guion para México y EE.UU.?",
        a_es: "No. Horarios, leyendas y contacto a terceros cambian. Comparte scoring y caja; separa reglas de conducta.",
      },
      {
        q_en: "Where should data live?",
        a_en: "Default to storing Mexican debtor data in a Mexico-aware processing purpose and US data under US policy. Mixing lakes “because the CRM can” is how you fail both regimes.",
        q_es: "¿Dónde viven los datos?",
        a_es: "Por defecto, deudores mexicanos con finalidad mexicana y datos US bajo política US. Mezclar lagos “porque el CRM puede” es fallar los dos regímenes.",
      },
      {
        q_en: "What belongs on the group scorecard?",
        a_en: "Cash, cost-to-collect, complaints, and close timeliness — by country. Blended group numbers hide a broken corridor.",
        q_es: "¿Qué va al tablero de grupo?",
        a_es: "Caja, costo de cobranza, quejas y puntualidad de cierre — por país. El blended esconde el corredor roto.",
      },
    ],
    content_en: `**Direct answer:** Run **one economic scorecard and two legal playbooks**. The Mexico–US corridor breaks when a US FDCPA-style instinct is pasted onto CONDUSEF work, or when Mexican CFDI cash is reconciled like ACH.

## Split conduct, share physics

Physics: invoices, ageing, promises, payments. Those can be one data model.

Conduct: call windows, mini-Miranda-style disclosures where required, Mexican identity and data rules. Those cannot be one script.

## Cash is two rails

SPEI vs ACH/wire vs cards. Collectors must see the rail the customer actually used. Treasury must know which entity is the beneficiary.

## Accounting is two closes

Mexican SAT/CFDI close and US GAAP/local close can share a group pack, but exception queues stay local. See [international operations](/international) and [accounting](/accounting).

If you are building the corridor now, [register](/contact) with a two-entity extract (no names required).`,
    content_es: `**Respuesta directa:** Un **tablero económico y dos playbooks legales**. El corredor México–EE.UU. se rompe cuando se pega un instinto tipo FDCPA sobre trabajo CONDUSEF, o cuando la caja CFDI se concilia como ACH.

## Separa conducta, comparte física

Física: facturas, mora, promesas, pagos. Conducta: ventanas de llamada, leyendas, identidad y datos.

## La caja son dos rieles

SPEI vs ACH/wire vs tarjetas. El gestor debe ver el riel real.

## Dos cierres

SAT/CFDI y US GAAP pueden compartir paquete de grupo; las excepciones se quedan locales. [Internacional](/international) · [Registro](/contact).`,
  },
  {
    id: "11111111-1111-4111-8111-111111111109",
    slug: "monthly-close-process-efficiency-finance-operations",
    title_en: "Process efficiency in finance operations: monthly close, recon and contact rate as one system",
    title_es: "Eficiencia operativa en finanzas: cierre mensual, conciliación y contactabilidad como un solo sistema",
    excerpt_en:
      "Close days, auto-reconciled entries, portfolio contact rate and audit findings are not four dashboards. They are one operating system. Here is how to wire them.",
    excerpt_es:
      "Días de cierre, pólizas auto-conciliadas, contactabilidad de cartera y hallazgos de auditoría no son cuatro tableros. Son un sistema. Cómo cablearlo.",
    seo_title: "Finance operations KPIs: close, reconciliation, contact rate, audit",
    seo_description:
      "How Mexican finance teams should run a five-day close, high auto-reconciliation, collections contact rate and zero-surprise audits as one operating cadence.",
    keywords: "monthly close, process efficiency, auto reconciliation, contact rate, audit findings, finance operations",
    category: "Operations",
    author: AUTHOR,
    status: "published",
    published_at: at("2026-09-22"),
    updated_at: at("2026-09-04"),
    faq: [
      {
        q_en: "What is a good monthly close in this model?",
        a_en: "A dated five-day close with a residual open-item list is the target we operate to. Faster is allowed; slipping without an owner is not.",
        q_es: "¿Qué es un buen cierre en este modelo?",
        a_es: "Cierre a cinco días con lista residual de open items. Más rápido vale; resbalar sin dueño no.",
      },
      {
        q_en: "Why is contact rate a finance KPI?",
        a_en: "Because unapplied cash and bad master data show up as “cannot reach debtor” and as GL breaks. Ops and finance share the same root causes.",
        q_es: "¿Por qué la contactabilidad es KPI de finanzas?",
        a_es: "Porque la caja no aplicada y el maestro sucio aparecen como “no localizo al deudor” y como quiebres de mayor.",
      },
      {
        q_en: "How do we get to zero audit findings?",
        a_en: "By making the monthly pack identical to what auditors will sample: CFDI evidence, bank recs, access logs, and collections conduct samples.",
        q_es: "¿Cómo llegar a cero hallazgos?",
        a_es: "Haciendo que el paquete mensual sea lo que el auditor va a muestrear: evidencia CFDI, conciliación bancaria, accesos y muestra de conducta de cobranza.",
      },
    ],
    content_en: `**Direct answer:** If close, recon, collections contact and audit live on four tools with four owners, you will always have a heroic month-end. Wire them to **one cadence and one customer/account key**.

## The four instruments we publish

On the Financetech operating view we instrument:

- Monthly close in **5 days**
- Auto-reconciled entries around **91%** on clean books
- Portfolio contact rate around **78%** when data is maintained
- **0** material audit findings as the standard, not a hope

Those numbers are operating targets, not guarantees. Your starting point will differ; the design does not.

## Cadence

Weekly: contact rate, unapplied cash, CFDI missing. Monthly: close pack, tax computation, collections committee. Quarterly: target reset and model review.

## Why advertising and credit sit in the same firm

Acquisition quality (the [advertising](/advertising) unit) shows up 60 days later as contactability. If you buy bad phones, no close calendar will save recovery.

[Register](/contact) to see this cadence on your entities.`,
    content_es: `**Respuesta directa:** Si cierre, conciliación, contacto de cobranza y auditoría viven en cuatro tools con cuatro dueños, siempre tendrás un cierre heroico. Cáblalos a **un ritmo y una llave de cliente/cuenta**.

## Cuatro instrumentos

Cierre en **5 días**, pólizas auto-conciliadas ~**91%**, contactabilidad ~**78%** con datos vivos, **0** hallazgos materiales como estándar.

## Ritmo

Semanal: contactabilidad, no identificados, CFDI faltantes. Mensual: paquete de cierre, impuesto, comité de cobranza. Trimestral: reset de metas.

La calidad de adquisición ([publicidad](/advertising)) se ve 60 días después en contactabilidad. [Registro](/contact).`,
  },
  {
    id: "11111111-1111-4111-8111-111111111110",
    slug: "how-to-write-a-finance-bpo-rfp-mexico",
    title_en: "How to write an RFP for a finance and collections BPO in Mexico",
    title_es: "Cómo escribir un RFP de BPO de finanzas y cobranza en México",
    excerpt_en:
      "Most RFPs ask for prices and seats. The ones that produce a working partner ask for recovery by bucket, complaint ratios, close packs and a five-day implementation truth.",
    excerpt_es:
      "La mayoría de RFP pide precios y asientos. Los que sí producen un socio piden recuperación por tramo, quejas, paquetes de cierre y una verdad de implementación a cinco días vista.",
    seo_title: "RFP template: collections and finance BPO in Mexico",
    seo_description:
      "A buyer’s checklist for Mexican collections, accounting and fintech operations RFPs: data room, SLAs, CONDUSEF, CFDI, and how to compare vendors without theatre.",
    keywords: "BPO RFP Mexico, collections RFP, accounting outsourcing tender, vendor scoring, SLA",
    category: "Operations",
    author: AUTHOR,
    status: "published",
    published_at: at("2026-09-24"),
    updated_at: at("2026-09-04"),
    faq: [
      {
        q_en: "What belongs in the data room?",
        a_en: "Anonymised account-level extract, product dictionary, current SLA, complaint samples, system list (ERP/CRM/banks), and last two close packs.",
        q_es: "¿Qué va en el data room?",
        a_es: "Extracto anonimizado a nivel cuenta, diccionario de producto, SLA actual, muestra de quejas, lista de sistemas y los últimos dos paquetes de cierre.",
      },
      {
        q_en: "Should we require onshore agents?",
        a_en: "Require language, hours and conduct competence. Onshore vs nearshore is a control choice, not a magic quality switch.",
        q_es: "¿Exigir agentes en México?",
        a_es: "Exige idioma, horario y competencia de conducta. Onshore vs nearshore es un control, no un interruptor mágico de calidad.",
      },
      {
        q_en: "How long should implementation take?",
        a_en: "A truthful plan names integrations that can go live in weeks versus data-quality work that takes months. Distrust a “four weeks, all products, no dual run.”",
        q_es: "¿Cuánto debe durar la implementación?",
        a_es: "Un plan honesto nombra integraciones de semanas versus calidad de datos de meses. Desconfía de “cuatro semanas, todos los productos, sin dual run.”",
      },
    ],
    content_en: `**Direct answer:** An RFP should buy **outcomes with evidence** — recovery by ageing, cost-to-collect, complaint rate, close timeliness — not a blended hourly rate.

## Sections that change the vendor you get

1. **Book physics:** products, vintages, ticket sizes, channels.
2. **Constraints:** CONDUSEF, LFPDPPP, SAT/CFDI, internal audit.
3. **Systems:** ERP, CRM, dialer, banks, SPEI references.
4. **Service:** hours, languages, legal panel, disaster recovery.
5. **Commercial:** success fee vs unit cost, and what happens when volume halves.

## Questions that expose theatre

- Show last quarter’s recovery **by placement ageing**.
- Show complaints per 1,000 contacts and what you changed.
- Show a redacted monthly close pack.
- Name the owner of unapplied cash.

## Scoring the responses

Weight evidence 60%, commercial 25%, culture/fit 15%. If procurement inverts that, you will sign a cheap floor you cannot take to the board.

When you are ready, [register](/contact). We answer this RFP shape as the [operating partner](/about) across [collections](/collections), [accounting](/accounting) and [fintech](/fintech).`,
    content_es: `**Respuesta directa:** Un RFP debe comprar **resultados con evidencia** — recuperación por antigüedad, costo de cobranza, quejas, puntualidad de cierre — no una tarifa horaria blended.

## Secciones que cambian al vendor

Física de la cartera, restricciones (CONDUSEF, LFPDPPP, SAT/CFDI), sistemas, servicio y comercial (success fee vs unitario, y qué pasa si el volumen se parte a la mitad).

## Preguntas que exponen teatro

Recuperación por antigüedad al colocar, quejas por mil contactos, paquete de cierre redactado, dueño de no identificados.

## Ponderación

Evidencia 60%, comercial 25%, encaje 15%. [Registro](/contact) · [Nosotros](/about).`,
  },
];
