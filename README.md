# Bookas Cleaning Service

Bookas Cleaning Service is a Next.js landing and booking website for a professional cleaning business in Machakos, Kenya. It presents home, office, and auto detailing services, highlights featured offerings, and lets customers send booking requests through WhatsApp.

## Features

- Responsive landing page with hero, navigation, services, contact, and footer sections
- Featured services with image-led layouts
- Tabbed service catalog for Home & Office and Auto Detailing
- Booking modal with service selection, preferred date, preferred time, and special instructions
- WhatsApp booking link generation
- Shared company constants for location, business hours, email, and WhatsApp number
- Tailwind CSS styling with animated UI interactions

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React icons
- Base UI / local UI components

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

```bash
npm run dev
```

Starts the local development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run start
```

Runs the production build locally.

```bash
npm run lint
```

Checks the project with Next.js ESLint rules.

## Project Structure

```text
app/
  layout.tsx        Site metadata and root layout
  page.tsx          Main page composition
  globals.css       Global styles

components/
  Hero.tsx          Homepage hero section
  Navbar.tsx        Main navigation
  Services.tsx      Featured services and tabbed service list
  BookingModal.tsx  WhatsApp booking form
  Contact.tsx       Contact section
  Footer.tsx        Footer content
  ui/               Reusable UI components

lib/
  constants.ts      Business details and contact constants
  services.ts       Service catalog data
  features.ts       Why-choose-us feature data
  utils.ts          Shared utility helpers

types/
  index.ts          Shared TypeScript interfaces
```

## Customization

Update business details in `lib/constants.ts`:

- `COMPANY_NAME`
- `TAGLINE`
- `LOCATION`
- `WHATSAPP_NUMBER`
- `WHATSAPP_DISPLAY`
- `BUSINESS_HOURS`
- `BUSINESS_EMAIL`

Update service cards and featured services in `lib/services.ts`.

To make a service appear in the featured section, set:

```ts
featured: true
```

Featured services should also include an `image` URL.

## Booking Flow

The booking modal collects:

- Full name
- Phone number
- Service
- Preferred date
- Preferred time
- Optional special instructions

On submit, it formats the booking details into a WhatsApp message and opens a `wa.me` link using the number from `lib/constants.ts`.

## Deployment

This project can be deployed on Vercel or any platform that supports Next.js.

Before deploying, run:

```bash
npm run lint
npm run build
```

Make sure the WhatsApp number and business contact details are correct before publishing.
