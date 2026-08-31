# audomate-www

Marketing onepager for **Audomate** — the EU RegTech compliance platform by DeepTech.
Next.js 16 (App Router) · React 19 · Tailwind v4 · TypeScript. No CMS.

## Dev
    npm run dev   # http://localhost:3009

## Lead capture (Supabase)
The `#demo` form POSTs to `/api/lead`, which inserts into `public.audomate_leads`
using the service_role key (server-only). Set `SUPABASE_URL` and
`SUPABASE_SERVICE_ROLE_KEY` (see `.env.example`) and run
`supabase/migrations/001_audomate_leads.sql` in the Supabase SQL editor.
Without env vars the form still succeeds and logs the lead to the server console.

## Hero video
`public/bg.mp4` / `bg.webm` is a **cropped, watermark-removed** section of the
source clip. Replace with the licensed (watermark-free) export before go-live.

## Deploy
Vercel (project `audomate-www`). Domain audomate.eu to be repointed later.
