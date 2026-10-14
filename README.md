# Grow My Therapy

A responsive therapist homepage built for the Grow My Therapy Stage 2 front-end internship assignment.

The project began as a faithful recreation of the Conejo Valley Family Counseling homepage and was then redesigned for **Dr. Maya Reynolds, PsyD**, a fictional Licensed Clinical Psychologist in Santa Monica. The current implementation includes the required redesign and the custom **Our Office** section.

> This is an educational portfolio project using an imaginary therapist profile. It is not a production healthcare website and does not provide clinical advice or real appointment booking.

## Live Demo

Visit the deployed website: [grow-my-therapy-ten-puce.vercel.app](https://grow-my-therapy-ten-puce.vercel.app)

## Project Goals

The assignment has four parts:

1. Recreate the original homepage layout and responsive structure.
2. Redesign the experience for Dr. Maya Reynolds using her supplied profile as the content source of truth.
3. Add a new Our Office section that does not exist in the original homepage.
4. Record a five-minute, client-friendly Loom walkthrough.

Parts 1, 2, and 3 are implemented in this repository. A walkthrough script is prepared for Part 4; the Loom recording and final submission links remain manual deliverables.

## Current Experience

The redesigned homepage includes:

- A responsive navigation bar with desktop links and an accessible mobile menu.
- A profile-led hero section introducing Dr. Maya and her Santa Monica practice.
- Audience and positioning copy for adults, high-achieving people, entrepreneurs, creatives, and professionals.
- Three profile-based services:
  - Anxiety & Panic Therapy
  - Trauma & EMDR Therapy
  - Burnout & Perfectionism Counseling
- Local SEO language for anxiety therapy and trauma counseling in Santa Monica.
- An About section based on Dr. Maya's warm, collaborative, grounded approach.
- Method explanations for CBT, EMDR, mindfulness, and body-oriented techniques.
- An accessible FAQ accordion with profile-derived answers.
- A custom Our Office section using the supplied office photography.
- In-person Santa Monica and secure California telehealth messaging.
- Responsive layouts for desktop, tablet, and mobile screens.

## Design Direction

The redesign uses a calm, professional visual system built around:

| Role | Direction |
| --- | --- |
| Primary | Deep teal for trust, clarity, and strong contrast |
| Secondary | Warm ivory and soft sage for calm, spacious surfaces |
| Accent | Muted blush and lavender for warmth and visual distinction |
| Typography | Cormorant Garamond headings, Mulish/Inter body text, PrintedMoments accents |
| Layout | Preserved asymmetric source layout with updated content and imagery |

The copy is based on the local profile file `docs/Dr. Maya Reynolds, PsyD.docx`. No fees, insurance information, testimonials, phone number, email address, years of experience, or unsupported clinical claims have been added.

## Tech Stack

- [Next.js](https://nextjs.org/) 16.4.0 with the App Router
- [React](https://react.dev/) 19.3.0
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [shadcn/ui](https://ui.shadcn.com/) components using `@base-ui/react`
- [Lucide React](https://lucide.dev/) icons
- `next/font` for optimized fonts
- `next/image` for local image optimization and responsive loading

## Getting Started

### Prerequisites

- Node.js 20.9 or newer
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

### Create a production build

```bash
npm run build
npm run start
```

The project currently requires no environment variables for the static homepage experience.

## Available Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Next.js development server |
| `npm run lint` | Run ESLint across the project |
| `npm run build` | Create and type-check the production build |
| `npm run start` | Serve the production build locally |

## Project Structure

```text
grow-my-therapy/
├── docs/
│   ├── Dr. Maya Reynolds, PsyD.docx
│   ├── gmt_assignment_guide.md
│   ├── css_measurements_guide.md
│   ├── target_website_analysis.md
│   └── gmt_implementation_roadmap.md
├── public/
│   ├── fonts/
│   └── images/
│       ├── maya/
│       │   ├── dr-maya-reynolds.png
│       │   ├── office-1.jpeg
│       │   └── office-2.jpeg
│       └── original/
│           └── downloaded Part 1 reference assets
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Welcome.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Approach.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── FAQ.tsx
│   │   │   ├── OurOffice.tsx
│   │   │   ├── CTA.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/
│   ├── data/
│   │   ├── faq.ts
│   │   ├── maya.ts
│   │   ├── services.ts
│   │   └── testimonials.ts
│   └── lib/
│       └── utils.ts
├── eslint.config.mjs
├── next.config.ts
├── package.json
└── README.md
```

## Content Architecture

`src/data/maya.ts` contains the reusable content model for the redesigned homepage, including:

- Navigation anchors
- Hero and section copy
- Service descriptions
- Therapy focus areas
- Therapy methods
- FAQ questions and answers
- Local image paths and accessible image descriptions

Sections remain presentation-focused and consume the shared Maya content data. This keeps copy changes separate from layout code and makes future content review easier.

## Accessibility and Responsive Behavior

The interface includes:

- Semantic section headings and landmarks
- Descriptive image `alt` text for meaningful images
- Decorative images marked with empty alt text where appropriate
- Keyboard-accessible navigation and FAQ controls
- Escape handling and focus management for the mobile menu
- Visible focus states
- A skip-to-content link
- Responsive stacking at the existing mobile breakpoint
- Reduced-motion-friendly CSS transitions

## Verification

The following checks have been run successfully on the current implementation:

```bash
npm run lint
npm run build
git diff --check
```

Additional local smoke checks confirmed:

- The homepage responds with HTTP 200.
- Maya’s name and profile-specific content are rendered.
- All three required service names are rendered.
- The FAQ and Our Office sections are rendered.
- The three Maya image assets return successfully from the local server.
- Original Conejo Valley copy is not present in the active rendered homepage.

## Deployment

The current production deployment is available at [grow-my-therapy-ten-puce.vercel.app](https://grow-my-therapy-ten-puce.vercel.app) and is hosted on [Vercel](https://vercel.com/).

To create a new deployment:

1. Push the repository to a public GitHub repository.
2. Import the repository into Vercel.
3. Keep the default Next.js build settings.
4. Deploy and verify the homepage at the generated URL.
5. Test the deployed page at desktop and mobile widths before submitting.

No environment variables are currently required for the static homepage.

## Assignment Deliverables

| Deliverable | Status |
| --- | --- |
| Homepage clone | Complete |
| Dr. Maya Reynolds redesign | Complete |
| Custom Our Office section | Complete |
| Five-minute Loom walkthrough | Script prepared; recording pending |
| Live deployment URL | [View live site](https://grow-my-therapy-ten-puce.vercel.app) |
| Public GitHub repository | Pending final submission setup |

## Reference Links

- [Original homepage](https://www.conejovalleycounseling.com/home)
- [Live demo](https://grow-my-therapy-ten-puce.vercel.app)
- [Grow My Therapy assignment](https://app.notion.com/p/Stage-2-Internship-Selection-Process-2eb4db5dd6158019b585e9558b13780b)
- [Dr. Maya Reynolds profile](https://docs.google.com/document/d/1-IJVKEjuqV9CTd9QH16UNHJ7SQfdiweS4oAIZ8vmgHU/edit)
- [Office image folder](https://drive.google.com/drive/folders/1fbAMSdqGF_ltNc0JiltkpIr_C26kRvLs?usp=drive_link)

## Project Notes

- The therapist and practice details are fictional and used only for the assignment.
- The supplied office images and portrait are stored locally under `public/images/maya/`.
- The downloaded original-site assets are retained under `public/images/original/` for Part 1 reference and are not used by the active Dr. Maya redesign.
- The preserved source download is kept separately for analysis and comparison.
