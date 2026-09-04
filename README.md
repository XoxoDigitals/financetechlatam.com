# Financetech LATAM — Next.js

A Next.js (App Router, TypeScript) implementation of the **Financetech LATAM** website
redesign. Bilingual (EN/ES) marketing site for a five-unit financial operations firm.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Pages

| Route             | Section                          |
| ----------------- | -------------------------------- |
| `/`               | Home                             |
| `/about`          | About us (+ contact form)        |
| `/advertising`    | Advertising                      |
| `/fintech`        | Financial technologies           |
| `/accounting`     | Accounting & tax                 |
| `/collections`    | Collections & credit (C&C)       |
| `/international`  | International operations         |
| `/contact`        | Register (+ registration form)   |

The original design was a single-page app that swapped views in state; here each view
is a real route sharing one `Header` / `Footer` layout. Language (EN/ES) is a client
context in `lib/i18n.tsx` and persists across navigation via `localStorage`.

## Forms → one common data structure → one webhook

Every form on the site (the **About** contact form and the **Register** form) serialises
into a single shared payload, `LeadSubmission` (`lib/leadSchema.ts`), so the webhook
receiver only ever has to understand one shape:

```jsonc
{
  "schema": "financetech.lead/v1",
  "source": "register",            // or "about-contact" — which form
  "contact": {
    "fullName": "Ana Martínez",
    "company": "Grupo Ejemplo, S.A.",
    "email": "ana@empresa.com",
    "phone": "+52 55 0000 0000"
  },
  "units": ["collections", "fintech"], // selected units (empty when the form doesn't ask)
  "budget": "$10M – $50M MXN",          // portfolio/revenue bucket, or null
  "message": "Cartera vencida…",
  "meta": {
    "locale": "es",
    "page": "/contact",
    "submittedAt": "2026-08-25T12:00:00.000Z",
    "userAgent": "…",
    "referrer": "…"
  }
}
```

### Flow

1. `components/LeadForm.tsx` collects the fields for its `variant` (`about` | `register`).
2. `lib/submitLead.ts` builds the common `LeadSubmission` and `POST`s it to `/api/lead`.
3. `app/api/lead/route.ts` validates it and forwards it **unchanged** to your webhook.

Keeping the forwarding on the server means the webhook URL and token never reach the browser.

### Configuration

Copy `.env.example` to `.env.local` and set:

```bash
LEAD_WEBHOOK_URL=https://your-webhook.example.com/leads
LEAD_WEBHOOK_TOKEN=optional-shared-secret   # sent as the `x-webhook-token` header
```

If `LEAD_WEBHOOK_URL` is unset (e.g. local dev), submissions are logged to the server
console and still return success, so the UI can be tested end to end.

## Notes

- The design's `<image-slot>` placeholders are replaced by `components/ImageSlot.tsx`.
  The one filled image (`about` office photo) lives in `public/images/`; empty slots
  render a labelled placeholder.
- Inline styles from the source design are preserved via a small `css()` helper
  (`lib/css.ts`) that parses CSS strings into React style objects; hover behaviour is
  handled by `components/Box.tsx`. Responsive column counts are driven by CSS variables
  in `app/globals.css`.
