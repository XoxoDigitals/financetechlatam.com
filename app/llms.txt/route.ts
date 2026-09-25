import { absUrl } from "@/lib/site";

export const runtime = "nodejs";

export function GET() {
  const body = `# Financetech Group

> ${absUrl("/")}

FINANCETECH GROUP LLC is a business solutions company with two specialized divisions under one brand:

1. **Business & Finance Consulting** — organizational restructuring, process improvement, resource optimization, and financial structure.
2. **AI-Powered Content & Digital Avatars** — custom avatars, UGC-style content, voiceover & podcasts, and content automation.

## Contact

- Email: contact@financetechgroup.com
- Phone: +1 (307) 888-8475
- Address: 30 N Gould St 59020, Sheridan, WY 82801
- EIN: 32-0866683
- Instagram: @financetech.group

## Primary pages

- Home: ${absUrl("/")}
- About: ${absUrl("/about")}
- Consulting: ${absUrl("/consulting")}
- AI Content: ${absUrl("/ai-content")}
- How we work: ${absUrl("/how-we-work")}
- Who we help: ${absUrl("/who-we-help")}
- Results: ${absUrl("/results")}
- Team: ${absUrl("/team")}
- FAQ: ${absUrl("/faq")}
- Contact: ${absUrl("/contact")}
- Insights: ${absUrl("/blog")}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
