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
import { color } from "@/lib/theme";
import { useT } from "@/lib/i18n";

export default function AiContentPage() {
  const t = useT();

  return (
    <div>
      <PageHero
        accent="teal"
        eyebrow={t("AI-Powered Content & Digital Avatars", "Contenido con IA y avatares digitales")}
        title={t(
          "Scale marketing without scaling your team.",
          "Escala el marketing sin escalar tu equipo."
        )}
        subtitle={t(
          "We help brands create professional marketing content at scale — using AI-generated images, video, and digital avatars — without the cost or complexity of traditional production.",
          "Ayudamos a marcas a crear contenido profesional a escala — con imágenes, video y avatares de IA — sin el costo o complejidad de la producción tradicional."
        )}
        imageSrc="/images/generated/avatar-spokesperson-1.png"
        secondaryHref="/results"
        secondaryLabel={t("See results format", "Ver formato de resultados")}
      />

      <SectionShell accentBg={color.tealSoft}>
        <div style={css("max-width:760px")}>
          <Eyebrow accent="teal">{t("What we build", "Qué construimos")}</Eyebrow>
          <h2 style={css("font-family:'Instrument Serif',serif;font-size:clamp(26px,3.4vw,40px);margin:0 0 14px")}>
            {t(
              "Professional content. Production without the crew.",
              "Contenido profesional. Producción sin el equipo completo."
            )}
          </h2>
          <p style={css("font-size:16.5px;line-height:1.6;color:#5A6577;margin:0")}>
            {t(
              "From custom brand avatars to UGC-style ads, voiceover, podcasts, and automated pipelines — built for e-commerce, creators, and digital businesses.",
              "Desde avatares de marca hasta anuncios estilo UGC, voiceover, podcasts y flujos automatizados — para e-commerce, creadores y negocios digitales."
            )}
          </p>
        </div>
      </SectionShell>

      <SplitMedia
        accent="teal"
        eyebrow={t("6.1 AI Digital Avatars", "6.1 Avatares digitales con IA")}
        title={t("A consistent digital spokesperson for every platform.", "Un portavoz digital consistente en cada plataforma.")}
        body={t(
          "Custom AI avatars that represent your brand, promote your products, and stay on-message across channels.",
          "Avatares de IA a medida que representan tu marca, promueven productos y mantienen el mensaje en todos los canales."
        )}
        bullets={[
          t("Custom avatar design and branding", "Diseño y branding de avatar a medida"),
          t("Voice matching and personality development", "Voz y desarrollo de personalidad"),
          t("Script-to-video avatar content production", "Producción de avatar de guion a video"),
          t("Multi-format delivery for social, ads, and websites", "Entrega multi-formato para social, ads y web"),
        ]}
        imageSrc="/images/generated/avatar-spokesperson-2.png"
      />

      <SplitMedia
        reverse
        accent="teal"
        eyebrow={t("6.2 AI-Generated UGC", "6.2 UGC generado con IA")}
        title={t("Realistic UGC-style ads — without actors or filming.", "Anuncios estilo UGC reales — sin actores ni filmación.")}
        body={t(
          "Batch content for ongoing campaigns: testimonials, product demos, and organic-style creatives.",
          "Contenido por lotes para campañas: testimonios, demos de producto y creatividades orgánicas."
        )}
        bullets={[
          t("UGC-style video ads", "Anuncios video estilo UGC"),
          t("Testimonial-style promotional content", "Contenido promocional tipo testimonio"),
          t("Product demo videos", "Videos demo de producto"),
          t("Batch content generation for campaigns", "Generación por lotes para campañas"),
        ]}
        imageSrc="/images/generated/ugc-phone-mock.png"
      />

      <SplitMedia
        accent="teal"
        eyebrow={t("6.3 AI Voiceover & Podcast", "6.3 Voiceover y podcast con IA")}
        title={t("Professional voice — powered by AI.", "Voz profesional — impulsada por IA.")}
        body={t(
          "Voiceover, dubbing, and end-to-end podcast pipelines for ads, e-learning, and shows.",
          "Voiceover, doblaje y pipelines de podcast de punta a punta para ads, e-learning y programas."
        )}
        bullets={[
          t("AI voiceover for ads, videos, and e-learning", "Voiceover IA para ads, video y e-learning"),
          t("Multi-language voice dubbing", "Doblaje multi-idioma"),
          t("Podcast scripting, editing, and narration", "Guion, edición y narración de podcast"),
          t("Automated end-to-end podcast pipelines", "Pipelines automatizados de podcast"),
        ]}
        imageSrc="/images/generated/podcast-waveform.png"
      />

      <SplitMedia
        reverse
        accent="teal"
        eyebrow={t("6.4 Digital Content Automation", "6.4 Automatización de contenido digital")}
        title={t("Scale output without scaling headcount.", "Escala la producción sin escalar el equipo.")}
        body={t(
          "We automate repetitive content workflows so digital businesses can keep publishing.",
          "Automatizamos flujos repetitivos para que los negocios digitales sigan publicando."
        )}
        bullets={[
          t("Automated content calendars and generation pipelines", "Calendarios y pipelines de generación"),
          t("Batch avatar and video generation for campaigns", "Generación por lotes de avatares y video"),
          t("Integration with marketing and social tools", "Integración con herramientas de marketing y social"),
          t("Ongoing content-as-a-service plans", "Planes de contenido como servicio"),
        ]}
        imageSrc="/images/generated/content-grid-collage.png"
      />

      <MethodSteps
        accent="teal"
        title={t("AI content methodology", "Metodología de contenido IA")}
        steps={[
          {
            n: "01",
            title: t("Discovery & Brand Alignment", "Descubrimiento y alineación de marca"),
            body: t(
              "We learn your brand voice, audience, and content goals.",
              "Conocemos voz de marca, audiencia y objetivos de contenido."
            ),
          },
          {
            n: "02",
            title: t("Avatar & Content Design", "Diseño de avatar y contenido"),
            body: t(
              "We build avatars, formats, and voice suited to your brand.",
              "Construimos avatares, formatos y voz acordes a tu marca."
            ),
          },
          {
            n: "03",
            title: t("Production & Automation Setup", "Producción y automatización"),
            body: t(
              "We produce content and set up recurring generation pipelines.",
              "Producimos contenido y montamos pipelines recurrentes."
            ),
          },
          {
            n: "04",
            title: t("Delivery & Scaling", "Entrega y escalado"),
            body: t(
              "We deliver ongoing content and scale output as you grow.",
              "Entregamos contenido continuo y escalamos conforme creces."
            ),
          },
        ]}
      />

      <ServiceGrid
        accent="teal"
        title={t("Ideal for", "Ideal para")}
        items={[
          {
            title: t("E-commerce brands", "Marcas e-commerce"),
            body: t(
              "That need constant, affordable content for ads and social media.",
              "Que necesitan contenido constante y asequible para ads y redes."
            ),
          },
          {
            title: t("Creators & agencies", "Creadores y agencias"),
            body: t(
              "Looking to produce content faster and at lower cost.",
              "Que buscan producir más rápido y a menor costo."
            ),
          },
          {
            title: t("Digital business owners", "Dueños de negocios digitales"),
            body: t(
              "Who want to automate content instead of hiring a full production team.",
              "Que quieren automatizar contenido en vez de contratar un equipo completo."
            ),
          },
        ]}
      />

      <SectionShell>
        <div style={css("display:grid;grid-template-columns:var(--g3);gap:14px")}>
          {[
            "/images/generated/avatar-spokesperson-1.png",
            "/images/generated/ugc-phone-mock.png",
            "/images/pexels-mikhail-nilov-8296977.jpg",
          ].map((src) => (
            <div
              key={src}
              style={css(
                "position:relative;min-height:220px;border-radius:16px;overflow:hidden"
              )}
            >
              <ImageSlot id={src} src={src} alt="" />
            </div>
          ))}
        </div>
      </SectionShell>

      <CtaBand
        accent="teal"
        title={t("Ready to scale your content?", "¿Listo para escalar tu contenido?")}
        body={t(
          "Book a free consultation to design avatars, UGC, and automation for your brand.",
          "Agenda una consulta gratis para diseñar avatares, UGC y automatización para tu marca."
        )}
      />
    </div>
  );
}
