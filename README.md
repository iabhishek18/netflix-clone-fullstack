# Netflix Clone — Full-Stack Streaming Platform

> A production-grade Netflix clone featuring video browsing, user authentication, subscription billing via Stripe, and personalized watchlists — built with Next.js 14, Prisma, and PostgreSQL.

## 🚀 Overview

This project replicates the core Netflix experience: a cinematic landing page, genre-based browsing, a hover-preview card system, user authentication with JWT sessions, and tiered subscription management powered by Stripe. It demonstrates server-side rendering with Next.js App Router, type-safe database access through Prisma, and responsive UI with Tailwind CSS.

The architecture follows a monolithic fullstack pattern using Next.js API routes for the backend — suitable for rapid development while remaining easy to decompose into microservices later.

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎬 Browse by Genre | Movies grouped by genre with horizontal scroll rows |
| 🖼️ Hover Preview Cards | Animated cards showing metadata on hover (rating, duration, genre) |
| 📺 Hero Billboard | Auto-rotating featured movie banner with play/info buttons |
| 🔐 Auth System | Email/password authentication via NextAuth.js with JWT strategy |
| 💳 Stripe Subscriptions | Three-tier plans (Basic/Standard/Premium) with webhook handling |
| ❤️ My List / Favorites | Add/remove movies from personal watchlist |
| 📊 Watch History | Track viewing progress across devices |
| 🔍 Search | Full-text search across titles and descriptions |
| 📱 Responsive | Mobile-first design that works on all screen sizes |
| 🌙 Dark Theme | Netflix's signature dark UI throughout |

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Frontend | Next.js 14 (App Router) | Server/client rendering, routing |
| Styling | Tailwind CSS | Utility-first responsive design |
| Database | PostgreSQL + Prisma | Type-safe ORM with migrations |
| Auth | NextAuth.js | Session management, JWT tokens |
| Payments | Stripe | Subscription billing + webhooks |
| Video | React Player | HLS/MP4 playback |
| State | Zustand | Client-side state management |
| Icons | React Icons | UI iconography |

## 📁 Project Structure

```
netflix-clone-fullstack/
├── prisma/
│   └── schema.prisma          # Database models (User, Movie, Subscription, etc.)
├── src/
│   ├── app/
│   │   ├── api/auth/[...nextauth]/route.ts  # Auth API
│   │   ├── browse/page.tsx                   # Main browse page
│   │   ├── layout.tsx                        # Root layout
│   │   ├── page.tsx                          # Landing page
│   │   └── globals.css                       # Tailwind imports
│   ├── components/
│   │   ├── Billboard.tsx      # Hero banner component
│   │   └── MovieCard.tsx      # Hover-preview card
│   └── lib/
│       └── prisma.ts          # Prisma client singleton
├── next.config.mjs
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
├── package.json
└── .env.example
```

## ⚡ Quick Start

### Prerequisites

- **Node.js** 20+
- **PostgreSQL** 14+
- **Stripe account** (for payments)

### Installation

```bash
# Clone the repository
git clone https://github.com/iabhishek18/netflix-clone-fullstack.git
cd netflix-clone-fullstack

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your actual credentials

# Run database migrations
npx prisma migrate dev --name init

# Seed the database (optional)
npm run db:seed

# Start development server
npm run dev
```

The app will be available at `http://localhost:3000`.

### Environment Variables

| Variable | Description | Where to get it |
|----------|-------------|-----------------|
| `DATABASE_URL` | PostgreSQL connection string | Your PostgreSQL instance |
| `NEXTAUTH_SECRET` | Random 32+ char secret | `openssl rand -base64 32` |
| `NEXTAUTH_URL` | App URL | `http://localhost:3000` |
| `STRIPE_SECRET_KEY` | Stripe API secret | Stripe Dashboard → Developers |
| `STRIPE_WEBHOOK_SECRET` | Webhook signing secret | Stripe CLI or Dashboard |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe public key | Stripe Dashboard |

### Running in Production

```bash
npm run build
npm start
```

## 📡 API Reference

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/[...nextauth]` | NextAuth handlers (login/signup/session) |
| GET | `/api/movies` | List all movies (paginated) |
| GET | `/api/movies/[id]` | Get single movie details |
| POST | `/api/favorites` | Add movie to favorites |
| DELETE | `/api/favorites/[id]` | Remove from favorites |
| POST | `/api/stripe/checkout` | Create Stripe checkout session |
| POST | `/api/stripe/webhook` | Handle Stripe webhook events |

## 🏗️ Architecture

```
Client (Browser)
    ↓ HTTPS
Next.js App Router (SSR + API Routes)
    ↓ Prisma Client
PostgreSQL Database
    ↓ Webhooks
Stripe (Payment Processing)
```

- **Server Components** fetch data directly via Prisma (no API calls needed)
- **Client Components** use API routes for mutations (favorites, auth)
- **Stripe Webhooks** update subscription status in real-time

## 🧪 Testing

```bash
# Run linting
npm run lint

# Type checking
npx tsc --noEmit
```

## 📸 Screenshots

_Screenshots coming soon — the UI replicates Netflix's dark theme with genre rows, hover cards, and a cinematic billboard._

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit changes: `git commit -m "Add your feature"`
4. Push to branch: `git push origin feat/your-feature`
5. Open a Pull Request

## 📄 License

MIT — free for personal and commercial use.
