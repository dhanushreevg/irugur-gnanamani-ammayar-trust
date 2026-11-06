# Irugur Gnanamani Ammayar Charitable Trust

## Setup

```bash
npm install
npm run dev
```

The site uses Next.js App Router and Tailwind-compatible CSS variables. All visible copy is in `content/en.json` and `content/ta.json`. Keep their keys identical; validate with `npm run validate:translations`.

Place approved images in `public/images/gallery`, `public/images/home-life`, or `public/images/team`. Do not publish images in `pending-consent`.

Set `NEXT_PUBLIC_FORM_ENDPOINT` in `.env.local` when connecting the forms to Formspree or another endpoint. The current forms provide accessible client-side required-field handling and success states.
