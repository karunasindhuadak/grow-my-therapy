# CSS Measurements Reference Guide
## Target: conejovalleycounseling.com/home

Use this document while coding each section. All values are from DevTools inspection.

---

## Global Measurements

### Typography
| Element | Font Family | Size (Desktop) | Size (Mobile) | Weight | Line Height | Letter Spacing |
|---------|------------|----------------|---------------|--------|-------------|----------------|
| H1 (Hero) | Cormorant Infant | 52-60px | 36-40px | 400 (light) | 1.2 | normal |
| H2 (Section) | Cormorant Infant | 36-44px | 28-32px | 700 (bold) | 1.3 | normal |
| H3 (Card title) | Cormorant Infant | 24-28px | 22-24px | 700 | 1.3 | normal |
| Eyebrow/Label | Muli | 12-13px | 11-12px | 400 | 1.5 | 2-3px (wide) |
| Body | Muli | 16-17px | 15-16px | 300 | 1.7-1.8 | 0.5px |
| Nav Links | Muli | 12-13px | 14px | 400 | 1.5 | 2-3px |
| Button Text | Muli | 12-13px | 12px | 400 | 1.5 | 2-3px |
| Script accent | Calligraphy/Script | Same as parent | Same as parent | 400 | inherit | normal |

### Colors (Exact Hex from Site)
| Usage | Hex | Tailwind Equivalent |
|-------|-----|-------------------|
| Page background | `#F4F1EA` | `bg-secondary` |
| Alt section bg | `#EAE6DE` | `bg-secondary-dark` |
| Lightest bg | `#F9F8F6` | `bg-neutral-50` |
| Primary text | `#2D3130` | `text-neutral-900` |
| Body text | `#5C605E` | `text-neutral-500` |
| Muted text | `#8A8C8B` | `text-neutral-300` |
| Accent/Links | `#6A8D88` | `text-primary` (we use teal) |
| Footer bar | `#749B95` | `bg-primary` |
| White text on dark | `#FFFFFF` | `text-white` |
| Button border | `#2D3130` | `border-neutral-900` |

### Spacing
| Element | Value |
|---------|-------|
| Content max-width | ~1200px (varies 1100-1300px) |
| Content side padding | 5vw (~72px at 1440px) |
| Section vertical padding | 80-120px |
| Section vertical padding (mobile) | 48-64px |
| Gap between grid items | 24-32px |
| Paragraph spacing | 16-24px |

---

## Section-by-Section CSS Specs

---

### 1. NAVBAR

```css
/* Container */
height: ~90px (desktop), ~70px (mobile)
padding: 0 5vw
display: flex
justify-content: space-between
align-items: center
background: #F4F1EA (cream)
position: relative (not sticky/fixed on this site)

/* Logo */
font-family: mixed (serif + sans)
/* "Conejo Valley" in serif, "FAMILY COUNSELING" in sans uppercase */

/* Nav Links */
font-family: Muli
font-size: 12px
font-weight: 400
text-transform: uppercase
letter-spacing: 2.5px
color: #2D3130

/* CTA Button (CONTACT) */
border: 1.5px solid #2D3130
border-radius: 50px (pill shape)
padding: 10px 24px
font-size: 12px
text-transform: uppercase
letter-spacing: 2.5px
background: transparent
/* hover: background fills dark, text turns white */

/* Mobile: hamburger icon replaces nav links */
/* hamburger: 3 lines, ~24px wide */
```

**Tailwind classes (approximate):**
```
Container: flex justify-between items-center px-[5vw] h-[90px]
Nav links: text-xs uppercase tracking-[2.5px] font-sans text-neutral-900
CTA: border border-neutral-900 rounded-full px-6 py-2.5 text-xs uppercase tracking-[2.5px]
```

---

### 2. HERO SECTION

```css
/* Container */
padding: 80px 5vw 100px
background: #F4F1EA
display: grid
grid-template-columns: ~30% ~40% ~30% (asymmetric 3-col)
align-items: center
gap: 32px
min-height: ~85vh

/* Eyebrow Text */
font-family: Muli
font-size: 12px
text-transform: uppercase
letter-spacing: 3px
color: #5C605E
margin-bottom: 24px

/* H1 */
font-family: Cormorant Infant
font-size: 52px
font-weight: 400
line-height: 1.15
color: #2D3130
margin-bottom: 20px
/* Key: the word "thrive" is in a script/cursive font */

/* Subtitle */
font-family: Muli
font-size: 17px
font-weight: 300
line-height: 1.8
color: #5C605E
margin-bottom: 32px

/* CTA Link */
font-family: Muli
font-size: 12px
text-transform: uppercase
letter-spacing: 2.5px
text-decoration: underline
color: #2D3130

/* Left Image */
width: 100%
height: ~500px
object-fit: cover
border-radius: 0

/* Mobile: stacks vertically, 1 column */
/* Image goes full width, text below */
/* H1 drops to ~36px */
/* Padding drops to ~48px top/bottom */
```

---

### 3. WELCOME / EMPATHY SECTION

```css
/* Container */
padding: 100px 5vw
background: #F4F1EA
display: grid
grid-template-columns: 1fr 1fr ~300px (2 text cols + 1 image)
gap: 48px

/* H2 */
font-family: Cormorant Infant
font-size: 40px
font-weight: 700
line-height: 1.25
color: #2D3130
grid-column: span 3 (full width heading)
margin-bottom: 48px

/* Left Column Subheading */
font-family: Muli
font-size: 13px
text-transform: uppercase
letter-spacing: 2.5px
color: #2D3130
margin-bottom: 16px

/* Body paragraphs */
font-family: Muli
font-size: 16px
font-weight: 300
line-height: 1.8
color: #5C605E

/* Right side image */
width: ~280px
height: ~400px
object-fit: cover

/* Mobile: single column, image goes full width below text */
```

---

### 4. SERVICE CARDS ("Who We Help")

```css
/* Section */
padding: 80px 5vw
background: #F4F1EA

/* Section Title */
text-align: center
font-family: Cormorant Infant
font-size: 40px
font-weight: 700
margin-bottom: 48px
/* "help" word in script font */

/* Cards Grid */
display: grid
grid-template-columns: repeat(3, 1fr)
gap: 32px

/* Individual Card */
background: transparent (no card bg, no shadow, no border)
text-align: left

/* Card Image */
width: 100%
aspect-ratio: 3/4 (portrait)
object-fit: cover
margin-bottom: 24px

/* Card Title */
font-family: Cormorant Infant
font-size: 26px
font-weight: 700
color: #2D3130
margin-bottom: 12px

/* Card Description */
font-family: Muli
font-size: 16px
font-weight: 300
line-height: 1.8
color: #5C605E

/* Mobile: 1 column, cards stack vertically */
```

---

### 5. QUOTE BANNER (Full-Width)

```css
/* Container */
padding: 100px 5vw
background-image: url(beach-sunset.jpg)
background-size: cover
background-position: center
position: relative

/* Dark overlay */
background-color: rgba(0, 0, 0, 0.4) /* or use ::before pseudo-element */

/* Quote Text */
font-family: Cormorant Infant
font-size: 32px
font-weight: 400
line-height: 1.4
color: #FFFFFF
text-align: center
max-width: 800px
margin: 0 auto
/* Second sentence may be italic */

/* Mobile: font-size drops to ~24px, padding to 64px */
```

---

### 6. EXPERTISE GRID

```css
/* Container */
padding: 80px 5vw
background: #F4F1EA
display: grid
grid-template-columns: 1fr 1fr (title left, grid right)
gap: 64px

/* Left Title */
font-family: Cormorant Infant
font-size: 44px
font-weight: 700
/* "expertise" in script font */

/* Right Grid */
display: grid
grid-template-columns: 1fr 1fr
gap: 0 /* items separated by borders, not gaps */

/* Each Item */
padding: 20px 0
border-bottom: 1px solid rgba(45, 49, 48, 0.2)
font-family: Muli
font-size: 13px
text-transform: uppercase
letter-spacing: 2px
color: #2D3130

/* Mobile: single column for both title and grid */
/* Grid items go to 1 column */
```

---

### 7. "HOW WE WORK" (About Section)

```css
/* Container */
padding: 100px 5vw
background: #EAE6DE (slightly darker)
display: grid
grid-template-columns: 55% 45%
gap: 48px
align-items: center

/* Label */
font-family: Muli
font-size: 12px
text-transform: uppercase
letter-spacing: 3px
color: #5C605E
margin-bottom: 16px

/* H2 */
font-family: Cormorant Infant
font-size: 40px
font-weight: 700
color: #2D3130
margin-bottom: 24px

/* Body */
font-family: Muli
font-size: 16px
font-weight: 300
line-height: 1.8
color: #5C605E

/* Button */
display: inline-block
padding: 14px 32px
border: 1.5px solid #2D3130
border-radius: 50px
font-family: Muli
font-size: 12px
text-transform: uppercase
letter-spacing: 2.5px
margin-top: 32px
/* hover: bg fills, text turns white */

/* Right Image */
width: 100%
height: 100% (fills section height)
object-fit: cover

/* Mobile: 1 column, image below text */
```

---

### 8. SPECIALTIES CARDS (2x2)

```css
/* Banner/Header area */
padding: 80px 5vw 40px
text-align: center

/* Banner Quote */
font-family: Cormorant Infant
font-size: 36px
font-weight: 400
font-style: italic
margin-bottom: 16px

/* Sub-header */
font-family: Cormorant Infant
font-size: 28px
font-weight: 700
margin-bottom: 48px

/* Cards Grid */
display: grid
grid-template-columns: repeat(2, 1fr)
gap: 24px
padding: 0 5vw 80px

/* Card */
padding: 40px
background: #F9F8F6 or transparent
border: none

/* Card Title */
font-family: Cormorant Infant
font-size: 24px
font-weight: 700
margin-bottom: 16px

/* Card Body */
font-family: Muli
font-size: 16px
line-height: 1.7
color: #5C605E

/* Card Button */
Same as other buttons (pill outline, uppercase)
margin-top: 24px

/* Mobile: 1 column */
```

---

### 9. FINAL CTA SECTION

```css
/* Container */
padding: 100px 5vw
background: #F4F1EA
text-align: center

/* Label */
font-size: 12px
text-transform: uppercase
letter-spacing: 3px
margin-bottom: 16px

/* H2 */
font-family: Cormorant Infant
font-size: 44px
font-weight: 700
margin-bottom: 24px
/* "you" in script font */

/* Body */
font-size: 16px
max-width: 600px
margin: 0 auto 32px

/* Button */
Same pill style as other buttons
```

---

### 10. FOOTER

```css
/* Main Footer */
padding: 64px 5vw
background: #F4F1EA
display: grid
grid-template-columns: repeat(4, 1fr)
gap: 32px

/* Column Headings */
font-family: Muli
font-size: 12px
text-transform: uppercase
letter-spacing: 2px
margin-bottom: 16px
color: #2D3130

/* Column Links */
font-family: Muli
font-size: 14px
font-weight: 300
color: #5C605E
line-height: 2
/* hover: underline */

/* Bottom Bar */
padding: 16px 5vw
background: #749B95 (sage green/teal)
color: #FFFFFF
font-size: 12px
display: flex
justify-content: space-between

/* Mobile: 2 columns or 1 column stacked */
/* Bottom bar: stacks vertically */
```

---

## Responsive Breakpoints Summary

| Breakpoint | Width | Key Changes |
|-----------|-------|-------------|
| Desktop | 1200px+ | Full grid layouts, side-by-side sections |
| Tablet | 768-1199px | 2-column grids become 1 or 2, font sizes slightly smaller |
| Mobile | < 768px | Everything single column, hamburger nav, reduced padding |

### Mobile-Specific Changes:
- Navbar: Hamburger menu replaces nav links
- Hero: 3 columns become 1 column (image stacks above or below text)
- Service cards: 3 columns become 1 column
- About section: 2 columns become 1 (text on top, image below)
- Expertise grid: 2 columns become 1
- Specialties: 2x2 grid becomes 1 column
- Footer: 4 columns become 2 or 1
- All padding reduces from 80-120px to 48-64px
- H1 font reduces from 52px to 36px
- H2 font reduces from 40-44px to 28-32px
- Body font stays ~15-16px (never goes below 14px for readability)

---

## Important Patterns to Note:

1. **Eyebrow + H2 + Body + Button** - This pattern repeats in almost every section
2. **Pill-shaped outline buttons** - All buttons are rounded-full, outline style
3. **Script accent words** - Key emotional words ("thrive", "help", "expertise", "you") use a decorative script font
4. **No harsh shadows** - The design is very flat and warm
5. **Generous whitespace** - Sections breathe with 80-120px padding
6. **Asymmetric grids** - Not everything is perfectly 50/50 split
7. **Uppercase labels** - Small text is almost always uppercase with wide letter-spacing
