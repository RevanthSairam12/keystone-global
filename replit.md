# Keystone Global - Premium Study Abroad Consultancy Website

## Overview
A professional multi-page website for Keystone Global, an overseas education consultancy based in Hyderabad. The site showcases services, destinations, about the company, and provides a contact form for consultation requests.

## Recent Changes
- 2026-02-16: Initial MVP build with all pages, navigation, footer, database, seed data

## Project Architecture
- **Frontend**: React + Vite + TailwindCSS + shadcn/ui + Framer Motion
- **Backend**: Express.js with PostgreSQL (Drizzle ORM)
- **Routing**: wouter for client-side routing
- **Data Fetching**: TanStack React Query v5

### Pages
- `/` - Home page with hero, benefits, services, destinations, journey steps, testimonials, CTA
- `/about` - About page with mission, vision, values, founder message, team
- `/services` - Detailed services page with 6 service pillars + scholarship guidance
- `/destinations` - Grid of 8 study destinations
- `/destinations/:slug` - Individual country detail pages (usa, uk, canada, australia, germany, ireland, new-zealand, singapore)
- `/contact` - Contact form with consultation request submission

### Key Components
- `components/navigation.tsx` - Sticky header with dropdown menus, mobile hamburger
- `components/footer.tsx` - 5-column footer with scroll-to-top button

### Database Tables
- `consultation_requests` - Contact form submissions
- `testimonials` - Student success stories (seeded with 3 entries)

### API Endpoints
- `GET /api/testimonials` - Fetch all testimonials
- `POST /api/consultations` - Submit consultation request

### Design Tokens
- Primary: Deep navy blue (222 47% 28%)
- Gold accents via chart-2 (43 96% 45%)
- Font: Poppins (headings), Open Sans (body)
- Brand: "Building Bridges to Your Global Future"

## User Preferences
- Premium, professional aesthetic
- Navy blue + gold color scheme
- Framer Motion animations
- Mobile-responsive design
