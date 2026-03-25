# Product2Video MVP

A Next.js full-stack MVP scaffold for an ecommerce product-image-to-video SaaS.

## Included in this project
- Landing page (`/`)
- Generator page (`/generate`)
- Result page with polling (`/result/[taskId]`)
- Mock backend routes
  - `POST /api/generate`
  - `GET /api/task/[id]`
- Cloudflare Workers + OpenNext deployment config
- No real model API yet

## Tech choices
- Next.js App Router
- Route Handlers for backend endpoints
- Cloudflare Workers deployment target
- `@opennextjs/cloudflare`

## Local development
```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Cloudflare preview
```bash
npm install
npm run preview
```

## Cloudflare deploy
```bash
npm install
npm run deploy
```

## Project structure
```text
app/
  api/
    generate/route.ts
    task/[id]/route.ts
  generate/page.tsx
  result/[taskId]/page.tsx
  globals.css
  layout.tsx
  page.tsx
components/
  feature-section.tsx
  generate-form.tsx
  metrics-section.tsx
  task-status.tsx
lib/
  constants.ts
  mock-tasks.ts
  types.ts
public/
  _headers
  demo-video.mp4
docs/
  product2video-prd.md
```

## How the mock flow works
1. The generator form sends JSON metadata to `POST /api/generate`.
2. The server creates an in-memory mock task and returns a `taskId`.
3. The result page polls `GET /api/task/[id]`.
4. After a short delay, the mock task becomes `completed` and returns `/demo-video.mp4`.

## What to do next
- Replace `lib/mock-tasks.ts` with a real provider integration layer.
- Add file upload storage.
- Add auth, usage limits, billing, and saved history.
