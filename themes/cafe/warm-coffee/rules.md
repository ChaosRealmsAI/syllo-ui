# Warm Coffee — Design Rules

30 constraints that define the visual language. Violating any of these breaks the theme.

## Color & Background
1. Page background is always `var(--latte)` (#F5E6CA). Warm tone mandatory.
2. **Zero cold colors** — no blue, green, purple anywhere. Not in text, not in borders, not in shadows.
3. All colors via CSS variables. Never hardcode hex values in component HTML.

## Layout
4. Container: `max-width: var(--container-max)` (1100px wide, 800px narrow), centered, `padding: 0 20px`.
5. Sections: `padding: 100px 0`. Section header centered, `margin-bottom: 60px`. Creates breathing room.
6. Card grid: `display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px`. Mobile: single column.

## Cards
7. White background `#fff`, `border-radius: 12px`, warm shadow, `overflow: hidden`.
8. Image slot: `height: 250px; object-fit: cover`.
9. Content area: `padding: 30px`, text centered.
10. Hover: `transform: translateY(-10px)`, `transition: 0.3s`.

## Buttons
11. Pill shape: `border-radius: 30px`. Always.
12. Primary: `background: var(--espresso); color: var(--latte)`. `padding: 15px 40px`.
13. `font-weight: 700; text-transform: uppercase; letter-spacing: 1px`.
14. Outline variant: `background: transparent; border: 2px solid #fff; color: #fff`. Hover inverts.

## Typography
15. **Three fonts, strict hierarchy**: Pacifico (display/decorative) → Lora (headings/serif) → Nunito (body/UI).
16. Hero title: Pacifico 5rem + text-shadow. Subtitle: Lora italic 1.5rem.
17. Section title: Lora 3rem bold, espresso color. Description: Nunito 1.1rem, bean color, max-width 600px centered.
18. Nav links: Nunito 14px, 700 weight, uppercase, 1px letter-spacing.
19. Logo: Pacifico 32px.

## Hero
20. Full-screen: `height: 100vh`. Background image from Unsplash + gradient overlay: `linear-gradient(to bottom, rgba(62,39,35,0.4), rgba(62,39,35,0.8))`.
21. Content centered vertically and horizontally. White text + text-shadow.

## Chalkboard
22. Container: `background: #222; border: 15px solid #5D4037; border-radius: 10px; padding: 40px`.
23. Title: Pacifico 3rem, `text-shadow: 2px 2px 0 rgba(0,0,0,0.5)`.
24. Menu rows: item name + `flex:1` dotted border `#555` + price in accent color. Aligned baseline.

## Special Elements
25. Ticker: espresso bg, latte text, `border-top: 4px solid accent`. Lora italic. Infinite scroll animation.
26. Process steps: horizontal, 80px round icons (espresso bg, latte text), connected by dashed lines.
27. Polaroid: white padding `15px 15px 40px`, shadow, `filter: sepia(0.3)`, slight rotation.
28. Timeline: 4px solid espresso vertical line, 16px dot nodes, `padding-left: 40px`.

## Animation & Interaction
29. Entry animation: `fadeUp` (opacity 0→1, translateY 30px→0). Apply to sections on scroll.
30. All transitions 0.3s. Hover effects are smooth, never bouncy. Cards lift, buttons darken.

## Navigation & Footer
- Nav: `position: absolute` over hero, white text + text-shadow, logo left, links right.
- Footer: espresso bg, latte text, 3-column grid `gap: 60px`, headings in Lora accent color.

## Responsive
- Single breakpoint: `900px`.
- Cards → single column. Process steps → vertical. Footer → single column. Hero title → 3.5rem.

## Icons & Images
- Icons: Phosphor Icons. `<i class="ph ph-{name}"></i>` or `ph-fill` for filled.
- Images: Unsplash, `object-fit: cover`, dark gradient overlay on heroes, `sepia(0.3)` on polaroids.
