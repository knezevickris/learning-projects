This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Structured Data / Schema Markup

This project includes a complete JSON-LD schema markup file for the fictional **BrightSmile Dental Care** practice.

The schema file lives at:

- `lib/schema/bright-smile-schema.json`

It defines a single JSON-LD graph with:

- `Dentist` + `LocalBusiness` for the main practice entity (full NAP, geo coordinates, opening hours, aggregate rating)
- Multiple `Service` entities (general dentistry, cosmetic dentistry, orthodontics and their sub-offers)
- `Person` entities for lead doctors (with job titles and experience based on the About page content)
- An `FAQPage` node with patient questions and answers
- Internal connections between practice, services, and doctors using `@id`, `provider`, `worksFor`, and `knowsAbout`

