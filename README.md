# Netflix Clone - Full Stack Streaming Platform

A full-featured Netflix clone built with Next.js 14, TypeScript, Prisma, and Stripe for subscription billing.

## Features

- 🎬 Browse movies by genre with hover previews
- 🔐 Authentication (credentials + OAuth)
- 💳 Subscription plans via Stripe (Basic/Standard/Premium)
- ❤️ Add movies to favorites / My List
- 📺 Video playback with progress tracking
- 🔍 Search and filter movies
- 📱 Fully responsive design
- 🎯 Personalized recommendations

## Tech Stack

- **Frontend**: Next.js 14, React 18, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL
- **Auth**: NextAuth.js (JWT strategy)
- **Payments**: Stripe Subscriptions
- **Deployment**: Vercel

## Getting Started

```bash
git clone https://github.com/iabhishek18/netflix-clone-fullstack.git
cd netflix-clone-fullstack
npm install
cp .env.example .env
# Edit .env with your credentials
npx prisma migrate dev
npm run dev
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| DATABASE_URL | PostgreSQL connection string |
| NEXTAUTH_SECRET | NextAuth encryption key |
| STRIPE_SECRET_KEY | Stripe API secret |
| NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY | Stripe public key |

## Screenshots

_Coming soon_

## License

MIT
