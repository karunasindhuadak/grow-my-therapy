# Step 2: Target Website Analysis
## conejovalleycounseling.com/home

This is your complete reference guide. Keep this open while you code.

---

## Overall Design System

### Color Palette (Original Site)
| Token | Color | Hex |
|-------|-------|-----|
| Background (main) | Warm cream/beige | `#F4F1EA` |
| Background (alt sections) | Slightly darker sand | `#EAE6E1` |
| Background (lightest) | Off-white | `#F9F8F6` |
| Text (primary) | Deep charcoal | `#2D3130` |
| Text (body) | Muted brown/slate | `#5C605E` |
| Accent | Muted sage green/teal | `#6A8D88` / `#7CA09A` |
| Footer bar | Teal green strip | `#749B95` |

### Typography (Original Site)
| Usage | Font Family | Style |
|-------|------------|-------|
| Headings (H1, H2) | **Cormorant Infant** (serif) | Elegant, light weight |
| Accent/emphasis words | **Script/Calligraphy font** | Used for words like *thrive*, *help*, *expertise*, *you* |
| Subheadings/labels | **Muli** (sans-serif) | UPPERCASE, wide letter-spacing |
| Body text | **Muli** (sans-serif) | Normal weight, light color |
| Buttons/CTAs | **Muli** (sans-serif) | UPPERCASE, letter-spacing |

### General Design Rules
- Max content width: ~1200px, centered
- Section vertical padding: ~80-120px top/bottom
- Lots of whitespace between sections
- Warm, organic, beach/coastal imagery
- Soft, non-harsh transitions between sections
- Very few sharp corners (rounded or borderless)

---

## Section-by-Section Breakdown (Top to Bottom)

---

### Section 1: Navigation Bar (Header)

**What it looks like:**
- Fixed/sticky at top of page
- White/cream background
- Logo on the LEFT side
- Nav links + CTA button on the RIGHT side

**Content:**
- Logo: "Conejo Valley FAMILY COUNSELING" (text-based logo)
- Nav links: `About` | `Our Team` | `Specialties` | `Methods` | `FAQs`
- CTA button: `CONTACT` (oval/pill border outline button)

**Layout:** Single row, `display: flex`, `justify-content: space-between`

**Styling Details:**
- Nav links: Uppercase, sans-serif, small font, wide letter-spacing
- Logo: Serif font, mixed case (first line larger)
- CTA: Pill-shaped outline button with hover fill effect
- Some nav items have dropdown menus on hover

**Mobile Behavior:** Hamburger menu icon, links collapse into a slide-out or dropdown menu

**For Dr. Maya's version:** 
- Logo: "Dr. Maya Reynolds" or "Maya Reynolds Therapy"
- Nav links: `About` | `Services` | `Our Office` | `FAQs` | `Contact`
- CTA: "Book a Consultation"

---

### Section 2: Hero Section (Main Banner)

**What it looks like:**
- Large, full-width section with warm beige background
- Asymmetric layout with photo on left, text in center/right

**Content:**
- Eyebrow text (small, uppercase): "ONLINE & IN-PERSON COUNSELING IN NEWBURY PARK & ACROSS CA"
- H1 heading: "Rebuild your foundation on solid ground and finally begin to *thrive*."
  - The word "thrive" is in a decorative script/cursive font
- Subtitle: "Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow."
- CTA link: "BOOK AN APPOINTMENT" (underlined text link, uppercase)

**Images:**
- Left side: Tall vertical portrait photo (family on beach)
- Right side: Subtle framing background image

**Layout:** 3-column asymmetric grid
- Column 1 (~30%): Portrait photo
- Column 2 (~40%): Text content, centered vertically
- Column 3 (~30%): Background accent image

**Styling Details:**
- H1: Very large serif font (~48-60px), light weight
- Eyebrow: ~12px, uppercase, sans-serif, wide letter-spacing
- Subtitle: ~18px, sans-serif, muted color
- Lots of vertical padding (~120px+)

**For Dr. Maya's version:**
- Eyebrow: "IN-PERSON & ONLINE THERAPY IN SANTA MONICA & ACROSS CALIFORNIA"
- H1: Something warm about anxiety/trauma healing
- Subtitle: Mentions her specialties
- CTA: "Book a Free Consultation"
- Image: Calming therapy office or Santa Monica scene

---

### Section 3: Welcome / Empathy Statement

**What it looks like:**
- 2-column text layout with a right-side image
- Warm beige/cream background

**Content:**
- H2: "You're holding onto hope that life can be better than it is right now."
- Left column subheading (uppercase, sans-serif): "AT CONEJO VALLEY FAMILY COUNSELING WE WANT TO MAKE THAT HOPE A REALITY."
- Left column body: Who they serve (adults, couples, parents)
- Right column body: Their philosophy about validation and connection
- Right edge: Beach landscape photo

**Layout:** 2 text columns + 1 image column

**Styling Details:**
- H2: Large serif, ~36-42px
- Subhead: Uppercase sans-serif, wide letter-spacing, ~14px
- Body: Sans-serif, ~16px, muted color, generous line-height (~1.7)

**For Dr. Maya's version:**
- H2: An empathetic statement about her clients' struggles
- Body: Who she works with (high-achievers, entrepreneurs, people with anxiety)

---

### Section 4: "Who We Help" (Services Preview Cards)

**What it looks like:**
- Section title + 3 equal cards in a row
- Each card has: Image on top, Title below, Description, Link

**Content:**
- Section title: "Who we *help*" (the word "help" is in script font)
- Card 1: Adults (beach photo, description about clarity/resilience)
- Card 2: Couples (couple embrace photo, communication/trust)
- Card 3: Children & Teens (kids on shore, emotion processing)

**Layout:** `grid grid-cols-3 gap-8` (3 equal columns, stacks to 1 column on mobile)

**Card Structure:**
```
┌─────────────────┐
│     [IMAGE]     │  <- Rectangular, ~3:4 aspect ratio
│                 │
├─────────────────┤
│ Card Title      │  <- Serif font, ~24px
│                 │
│ Description     │  <- Sans-serif, ~16px, muted color
│ text here...    │
│                 │
│ Learn More →    │  <- Optional link
└─────────────────┘
```

**Styling Details:**
- No visible card borders or shadows (clean, minimal)
- Image takes full width of card
- Title in serif font, may be a link with hover underline
- Gap between cards: ~24-32px

**For Dr. Maya's version:**
- Card 1: "Anxiety & Panic Therapy"
- Card 2: "Trauma & EMDR Therapy"
- Card 3: "Burnout & Perfectionism Therapy"

---

### Section 5: Full-Width Quote Banner

**What it looks like:**
- Full-width background image with dark overlay
- Centered white text (a powerful quote)
- No buttons or CTAs, just an emotional pause

**Content:**
- "You deserve a place where your story is heard, valued, and understood. *Nothing will be too heavy for us to carry together.*"

**Layout:** Full width, centered text, `text-align: center`

**Styling Details:**
- Background: Beach sunset image with dark semi-transparent overlay (`bg-black/50`)
- Text: White, serif font, ~28-36px, italic second sentence
- Padding: Very generous (~100-120px top/bottom)
- This section creates an emotional break between content-heavy sections

**For Dr. Maya's version:**
- A warm, therapeutic quote that matches her tone

---

### Section 6: Areas of Expertise (Topic Grid)

**What it looks like:**
- 2-column layout
- Left side: Section title (sticky/static)
- Right side: 2-column list of specialties separated by horizontal lines

**Content:**
- Left title: "Our areas of *expertise*"
- Right list (2 columns):
  - Column A: Dissociation, Trauma, Family Conflict, Depression, Marriage
  - Column B: Anxiety, Relationships, Children, Intimacy & Connection, ...and more

**Layout:** `grid grid-cols-2` (outer) with `grid grid-cols-2` (inner list)

**Styling Details:**
- Left title: Large serif, with "expertise" in script font
- Right items: Uppercase, sans-serif, wide spacing, clickable links
- Thin horizontal divider lines between items (`border-b`)
- ~60-80px vertical padding

**For Dr. Maya's version:**
- Left title: "Areas of *focus*" or "How I can *help*"
- Items: Anxiety, Panic, Trauma, PTSD, EMDR, Burnout, Perfectionism, Stress, Overwhelm, and more

---

### Section 7: "How We Work" (Approach Section)

**What it looks like:**
- 2-column split: Text on left (~60%), Image on right (~40%)
- Warm taupe/darker beige background

**Content:**
- Small uppercase label: "HOW WE WORK"
- H2: "We're here to make a difference."
- Body: 3 paragraphs about their tailored, client-centered approach
- Button: "LEARN MORE ABOUT US" (solid pill button)
- Image: Person walking on beach

**Layout:** `grid grid-cols-2` with text left, image right

**Styling Details:**
- Background: Slightly darker than other sections (`#EAE6E1`)
- Button: Filled pill/rounded button, uppercase, letter-spacing
- Image: Full height of section, object-cover

**For Dr. Maya's version:**
- Title: "My Approach" or "How I Work"
- Body: Her warm, collaborative, grounded approach (from her profile)
- Button: "Learn More About Me"
- Image: Calming therapy-related stock photo

---

### Section 8: Specialties Cards (2x2 Grid)

**What it looks like:**
- Banner heading across full width
- 2x2 grid of detailed specialty cards below

**Content:**
- Banner: "Honoring where you've been *&* helping shape where you're headed."
- Sub-header: "Our *specialties* include..."
- 4 cards: Trauma, EMDR, Dissociation, Special Needs Parenting
- Each card: Title + 2-3 sentence description + "LEARN MORE" button

**Layout:** 
- Full-width banner text
- `grid grid-cols-2 gap-6` for the 4 cards (2x2)
- On mobile: stacks to 1 column

**For Dr. Maya's version:**
- You already have 3 services (Anxiety, Trauma, Burnout)
- You can either make 3 cards or add a 4th (like "Therapy for High-Achievers")

---

### Section 9: Final CTA / Booking Banner

**What it looks like:**
- Centered text with CTA button
- Framing images on both sides
- Warm beige background

**Content:**
- Small uppercase label: "SCHEDULE AN APPOINTMENT"
- H2: "Find a therapist who is the right fit for *you*."
- Body: Encouraging text about taking the first step
- Button: "BOOK NOW" (pill outline button)

**Layout:** Centered text container, flanked by subtle images

**For Dr. Maya's version:**
- Label: "START YOUR JOURNEY"
- H2: "You do not have to go through this alone."
- Button: "Book a Free Consultation"

---

### Section 10: Footer

**What it looks like:**
- 4-column layout on cream background
- Teal/green bottom bar with copyright

**Content:**
- Column 1: Logo + short bio paragraph
- Column 2: Navigation links (Home, About, FAQs, Contact)
- Column 3: Team member links (9 therapists)
- Column 4: Contact info (address, email, phone, service areas)
- Bottom bar: Copyright | Terms | Privacy Policy | Disclaimer | "Website by..."

**Layout:** `grid grid-cols-4` on desktop, stacks on mobile

**Styling Details:**
- Footer background: Same cream/beige as rest of site
- Bottom bar: Teal/sage green background (`#749B95`), white text
- Links: Hover underline effect

**For Dr. Maya's version:**
- Column 1: Logo + short bio
- Column 2: Quick links (Home, About, Services, Our Office, FAQs)
- Column 3: Contact info (Santa Monica address, email, phone)
- Column 4: Service areas ("Serving Santa Monica, Los Angeles, and all of California via telehealth")
- Bottom bar: Copyright + "In-person in Santa Monica | Telehealth across California"

---

## Quick Reference: Section Count

| # | Section Name | Background Color | Columns |
|---|-------------|-----------------|---------|
| 1 | Navbar | White/cream | Flex row |
| 2 | Hero | Warm beige | 3-col asymmetric |
| 3 | Welcome/Intro | Cream | 2-col + image |
| 4 | Service Cards | White/cream | 3-col grid |
| 5 | Quote Banner | Dark image overlay | 1-col centered |
| 6 | Expertise Grid | Cream | 2-col (left title + right grid) |
| 7 | How We Work | Darker beige | 2-col (text + image) |
| 8 | Specialties Cards | Cream | 2x2 grid |
| 9 | CTA Banner | Beige | Centered |
| 10 | Footer | Cream + teal bar | 4-col grid |
| **NEW** | Our Office | TBD | 2-3 photos + text |

---

> **You now have the complete blueprint.** Save this document and refer to it while building each section in Steps 3-11.
