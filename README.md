# Ruhunu Fitness

Next.js 14 (App Router), TypeScript, Tailwind CSS. No database.

## Run
```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck && npm run lint && npm run build
```

## Customise
- `src/data/site.ts`: name, phone, WhatsApp number (digits only), email, address, hours, nav
- `src/data/plans.ts` and `src/data/trainers.ts`: memberships and trainers
- `src/data/images.ts`: all photos (Unsplash placeholders; replace with your own in `public/images`)
- Add `public/opengraph-image.png` (1200x630) for social sharing previews

## Contact form
`POST /api/contact` validates input, blocks bots with a honeypot, and emails via [Resend](https://resend.com) when `RESEND_API_KEY` is set. Without it, submissions are logged to the server console. Copy `.env.example` to `.env.local`.

## Deploy
1. `git init && git add . && git commit -m "Initial commit"` then push to GitHub.
2. Import the repo at vercel.com/new (framework auto-detected).
3. Add the env vars from `.env.example`, set `NEXT_PUBLIC_SITE_URL` to your domain, deploy.
