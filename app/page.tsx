"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Box } from "@/components/Box";
import { ImageSlot } from "@/components/ImageSlot";
import {
  CtaBand,
  Eyebrow,
  LogoStrip,
  MethodSteps,
  MetricBand,
  SectionShell,
} from "@/components/sections";
import { css } from "@/lib/css";
import { color } from "@/lib/theme";
import { useT } from "@/lib/i18n";

export default function HomePage() {
  const t = useT();
  const router = useRouter();
  const go = (p: string) => () => router.push(p);

  return (
    <div>
      {/* 1. Hero */}
      <SectionShell>
        <div
          style={css(
            "display:grid;grid-template-columns:var(--gHero);gap:clamp(28px,4vw,56px);align-items:center"
          )}
        >
          <div className="ftl-fade-in">
            <Eyebrow accent="ink">
              {t("One company · Two clear paths", "Una empresa · Dos caminos claros")}
            </Eyebrow>
            <h1
              style={css(
                "font-family:'Instrument Serif',serif;font-size:clamp(40px,6.2vw,78px);line-height:0.98;letter-spacing:-0.025em;margin:0 0 26px;text-wrap:balance"
              )}
            >
              {t("Smarter Structure. Smarter Content.", "Estructura más inteligente. Contenido más inteligente.")}
            </h1>
            <p
              style={css(
                "font-size:19px;line-height:1.55;color:#5A6577;max-width:540px;margin:0 0 36px;text-wrap:pretty"
              )}
            >
              {t(
                "We help businesses grow on two fronts: building stronger organizational and financial foundations, and creating AI-powered content and digital avatars that scale marketing without scaling your team.",
                "Ayudamos a crecer en dos frentes: bases organizacionales y financieras más sólidas, y contenido e avatares con IA que escalan el marketing sin escalar el equipo."
              )}
            </p>
            <div style={css("display:flex;gap:12px;flex-wrap:wrap")}>
              <Box
                onClick={go("/contact")}
                s="background:#0C1524;color:#fff;padding:15px 26px;border-radius:999px;font-size:15px;font-weight:600;cursor:pointer"
                hover="background:#C9A227"
              >
                {t("Book a Free Consultation", "Agenda una consulta gratis")}
              </Box>
              <Box
                onClick={go("/how-we-work")}
                s="border:1px solid rgba(12,21,36,0.18);color:#0C1524;padding:15px 26px;border-radius:999px;font-size:15px;font-weight:600;cursor:pointer"
                hover="background:#fff"
              >
                {t("See how we work", "Ver cómo trabajamos")}
              </Box>
            </div>
          </div>
          <div
            className="ftl-fade-in"
            style={css(
              "position:relative;min-height:clamp(280px,42vw,480px);border-radius:24px;overflow:hidden"
            )}
          >
            <ImageSlot
              id="home-hero"
              src="/images/hero-main-page.jpg"
              alt={t("Team collaborating", "Equipo colaborando")}
            />
          </div>
        </div>
      </SectionShell>

      {/* 2. Dual entry panels */}
      <SectionShell accentBg="#EEEEE8">
        <div style={css("display:grid;grid-template-columns:var(--g2);gap:20px")}>
          <Box
            onClick={go("/consulting")}
            s="padding:32px 28px;border-radius:22px;background:#fff;border:1px solid rgba(201,162,39,0.35);cursor:pointer"
            hover="transform:translateY(-3px);box-shadow:0 12px 32px rgba(12,21,36,0.08)"
          >
            <Eyebrow accent="gold">{t("Consulting", "Consultoría")}</Eyebrow>
            <h2 style={css("font-family:'Instrument Serif',serif;font-size:30px;margin:0 0 12px")}>
              {t("Business & Finance Consulting", "Consultoría de negocio y finanzas")}
            </h2>
            <p style={css("font-size:15.5px;line-height:1.55;color:#5A6577;margin:0 0 18px")}>
              {t(
                "Restructure your organization, streamline your processes, and strengthen your finances.",
                "Reestructura tu organización, agiliza procesos y fortalece tus finanzas."
              )}
            </p>
            <span style={css("font-size:14px;font-weight:700;color:#C9A227")}>
              {t("Explore consulting →", "Explorar consultoría →")}
            </span>
          </Box>
          <Box
            onClick={go("/ai-content")}
            s="padding:32px 28px;border-radius:22px;background:#fff;border:1px solid rgba(30,138,138,0.35);cursor:pointer"
            hover="transform:translateY(-3px);box-shadow:0 12px 32px rgba(12,21,36,0.08)"
          >
            <Eyebrow accent="teal">{t("AI Content", "Contenido IA")}</Eyebrow>
            <h2 style={css("font-family:'Instrument Serif',serif;font-size:30px;margin:0 0 12px")}>
              {t("AI Content & Digital Avatars", "Contenido IA y avatares digitales")}
            </h2>
            <p style={css("font-size:15.5px;line-height:1.55;color:#5A6577;margin:0 0 18px")}>
              {t(
                "Launch AI-generated avatars, UGC, and automated content to promote and grow your brand.",
                "Lanza avatares, UGC y contenido automatizado con IA para impulsar tu marca."
              )}
            </p>
            <span style={css("font-size:14px;font-weight:700;color:#1E8A8A")}>
              {t("Explore AI content →", "Explorar contenido IA →")}
            </span>
          </Box>
        </div>
      </SectionShell>

      {/* 3. Trust stats */}
      <MetricBand
        dark
        items={[
          { value: "2", label: t("Specialized divisions", "Divisiones especializadas") },
          { value: "4", label: t("Step methodology", "Pasos de metodología") },
          { value: "1", label: t("Unified brand partner", "Socio de marca unificado") },
          { value: "∞", label: t("Content at scale", "Contenido a escala") },
        ]}
      />

      {/* 4. Two-line overview */}
      <SectionShell>
        <div style={css("max-width:820px;margin:0 auto;text-align:center")}>
          <h2
            style={css(
              "font-family:'Instrument Serif',serif;font-size:clamp(28px,3.8vw,44px);margin:0 0 16px"
            )}
          >
            {t(
              "Clarity, structure, and measurable results — on both fronts.",
              "Claridad, estructura y resultados medibles — en ambos frentes."
            )}
          </h2>
          <p style={css("font-size:17px;line-height:1.6;color:#5A6577;margin:0")}>
            {t(
              "Whether you need to fix internal disorder and financial blind spots, or a scalable way to produce marketing content without a full production team, we bring the same principle to both.",
              "Ya sea que necesites corregir desorden interno y puntos ciegos financieros, o una forma escalable de producir contenido sin un equipo completo de producción, aplicamos el mismo principio."
            )}
          </p>
        </div>
      </SectionShell>

      {/* 5. Featured consulting */}
      <SectionShell>
        <div
          style={css(
            "display:grid;grid-template-columns:var(--gHero);gap:clamp(24px,4vw,48px);align-items:center"
          )}
        >
          <div
            style={css(
              "position:relative;min-height:clamp(240px,36vw,380px);border-radius:20px;overflow:hidden"
            )}
          >
            <ImageSlot
              id="home-consulting"
              src="/images/pexels-diva-plavalaguna-6147028.jpg"
              alt=""
            />
          </div>
          <div>
            <Eyebrow accent="gold">{t("Line 1", "Línea 1")}</Eyebrow>
            <h2 style={css("font-family:'Instrument Serif',serif;font-size:clamp(26px,3.4vw,40px);margin:0 0 14px")}>
              {t(
                "We redesign how your company is organized and run.",
                "Rediseñamos cómo se organiza y opera tu empresa."
              )}
            </h2>
            <p style={css("font-size:16px;line-height:1.55;color:#5A6577;margin:0 0 20px")}>
              {t(
                "From the org chart down to the numbers — so you can operate efficiently and grow on solid ground.",
                "Del organigrama a los números — para operar con eficiencia y crecer sobre bases sólidas."
              )}
            </p>
            <Link href="/consulting" style={css("font-weight:700;color:#C9A227")}>
              {t("View consulting services →", "Ver servicios de consultoría →")}
            </Link>
          </div>
        </div>
      </SectionShell>

      {/* 6. Featured AI */}
      <SectionShell accentBg={color.tealSoft}>
        <div
          style={css(
            "display:grid;grid-template-columns:var(--gHero);gap:clamp(24px,4vw,48px);align-items:center"
          )}
        >
          <div>
            <Eyebrow accent="teal">{t("Line 2", "Línea 2")}</Eyebrow>
            <h2 style={css("font-family:'Instrument Serif',serif;font-size:clamp(26px,3.4vw,40px);margin:0 0 14px")}>
              {t(
                "Professional marketing content at scale — with AI.",
                "Contenido de marketing profesional a escala — con IA."
              )}
            </h2>
            <p style={css("font-size:16px;line-height:1.55;color:#5A6577;margin:0 0 20px")}>
              {t(
                "AI-generated images, video, and digital avatars — without the cost, time, or complexity of traditional production.",
                "Imágenes, video y avatares digitales con IA — sin el costo, tiempo o complejidad de la producción tradicional."
              )}
            </p>
            <Link href="/ai-content" style={css("font-weight:700;color:#1E8A8A")}>
              {t("View AI services →", "Ver servicios de IA →")}
            </Link>
          </div>
          <div
            style={css(
              "position:relative;min-height:clamp(240px,36vw,380px);border-radius:20px;overflow:hidden"
            )}
          >
            <ImageSlot
              id="home-ai"
              src="/images/generated/avatar-spokesperson-1.png"
              alt=""
            />
          </div>
        </div>
      </SectionShell>

      {/* 7. Client logos */}
      <LogoStrip title={t("Trusted by growing teams", "Equipos que confían en nosotros")} />

      {/* 8. How we work teaser */}
      <MethodSteps
        accent="ink"
        title={t("How we work", "Cómo trabajamos")}
        subtitle={t(
          "A shared discipline across consulting and AI content.",
          "Una disciplina compartida entre consultoría y contenido IA."
        )}
        steps={[
          {
            n: "01",
            title: t("Diagnosis / Discovery", "Diagnóstico / Descubrimiento"),
            body: t(
              "We learn your structure, brand voice, and goals.",
              "Conocemos tu estructura, voz de marca y objetivos."
            ),
          },
          {
            n: "02",
            title: t("Design", "Diseño"),
            body: t(
              "We build a tailored restructuring or content system.",
              "Diseñamos un plan de reestructura o un sistema de contenido."
            ),
          },
          {
            n: "03",
            title: t("Implement", "Implementar"),
            body: t(
              "Rollout with manuals, avatars, and pipelines.",
              "Ejecutamos con manuales, avatares y flujos."
            ),
          },
          {
            n: "04",
            title: t("Scale", "Escalar"),
            body: t(
              "Measure, refine, and grow output or results.",
              "Medimos, afinamos y escalamos resultados."
            ),
          },
        ]}
      />

      {/* 9. CTA */}
      <CtaBand
        accent="ink"
        title={t("Book a Free Consultation", "Agenda una consulta gratis")}
        body={t(
          "Tell us whether you need stronger structure, scalable content — or both.",
          "Cuéntanos si necesitas más estructura, contenido escalable — o ambos."
        )}
      />
    </div>
  );
}
