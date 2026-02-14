# Task: Design a Premium Canvas View for a Design Language Showcase

## Context

We're building a **design language library** (like a Figma community, but for AI). Users browse themes on a home page, then click into a **canvas view** to explore a theme's tokens, components, and example pages.

The **home page is done and looks good**. The **canvas view needs to be premium quality** — think Figma's inspect mode meets Linear's polish meets Vercel's dark aesthetic.

## What to Build

A single self-contained HTML file that demonstrates a **premium canvas view** for ONE theme ("Warm Coffee" — a cozy cafe theme).

The canvas should showcase:

### 1. Token Section
- **Color palette** — 6 colors displayed as swatches with names and hex values
  - Espresso #3E2723, Bean #5D4037, Latte #F5E6CA, Crema #D7CCC8, Accent #FF7043, Chalkboard #222
- **Typography scale** — Show actual rendered text at each level
  - Display: Pacifico 5rem
  - Heading: Lora 3rem
  - Subheading: Lora 1.5rem
  - Body: Nunito 1rem
  - Caption: Nunito 0.75rem uppercase
- **Spacing & effects** — Radius, shadows, container widths, etc.

### 2. Component Section
- 5-6 components rendered as live HTML inside frames:
  - Navigation bar (dark overlay, Pacifico logo + links)
  - Buttons (primary pill + outline variant)
  - Product card (image, title, flavor tags)
  - Chalkboard menu (dark bg, dotted price lines)
  - Footer (3-column, dark espresso bg)

### 3. Page Preview Section
- 3-5 page thumbnails rendered as scaled-down iframes or screenshots
- Each labeled with page name

## Design Requirements

**This is the most important part — the canvas must feel premium:**

- Dark background (#0a0a0a to #141414 range) with subtle dot grid or noise texture
- Frames should look like Figma artboards — clean white rectangles with labels above
- Generous whitespace between sections
- Subtle section labels (like "TOKENS", "COMPONENTS", "PAGES") in uppercase tracking
- Smooth pan and zoom (mouse drag to pan, scroll to zoom)
- A top toolbar with: back button, theme name, zoom controls
- A left sidebar listing all frames as a tree (Tokens > Colors, Typography... / Components > Nav, Card... / Pages > Events, Gallery...)
- Clicking a sidebar item should smoothly scroll the canvas to that frame
- A minimap in bottom-right corner showing viewport position
- Frames should have subtle shadows and rounded corners
- On hover, frames should have a very subtle highlight/border glow
- Consider adding: frame dimension labels, zoom-dependent detail levels, smooth animations

**Visual reference points:**
- Figma's canvas (dot grid, frame labels, zoom behavior)
- Linear's UI (polish, transitions, dark theme)
- Vercel's dashboard (clean, modern, dark)
- Raycast's website (animations, premium feel)

## Technical Constraints

- Single HTML file, fully self-contained
- Use Google Fonts: Pacifico, Lora, Nunito, Inter (for the UI chrome)
- Use Phosphor Icons (CDN: https://unpkg.com/@phosphor-icons/web)
- No frameworks, just vanilla HTML/CSS/JS
- Must work in modern Chrome
- The canvas content should use the Warm Coffee theme colors/fonts
- The chrome/UI around the canvas should be dark (#0a-#1a range)

## Deliverable

One HTML file: `canvas-reference.html`

Focus on **visual quality and polish** over feature completeness. If you have to choose between "more features" and "more polish", choose polish every time. This is a reference design — it needs to look stunning.
