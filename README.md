# Syllo UI

AI-native design language library. Each theme is a complete CSS framework + docs that AI can read to generate consistent pages.

## How It Works

1. Pick a theme from `themes/`
2. AI reads the theme's `README.md` (or `style.css` for deeper understanding)
3. AI writes HTML using the theme's CSS classes
4. Pages are visually consistent without custom CSS

## Theme Structure

Each theme has exactly 4 files:

```
themes/{industry}/{theme-id}/
├── README.md      ← AI entry point: component table, HTML patterns, colors, fonts
├── style.css      ← CSS framework: all components as classes
├── rules.md       ← Design constraints (colors, spacing, animation rules)
└── tokens.json    ← Design tokens (raw color/font/spacing values)
```

## For AI Agents

**Default (Layer 2):** Read only `README.md` — it has everything you need.

```
https://raw.githubusercontent.com/Zhuanz-AI/syllo-ui/main/themes/cafe/warm-coffee/README.md
```

**Deep (Layer 1):** Read `style.css` + `rules.md` for full component understanding.

## Available Themes

| Theme | Industry | Vibe |
|-------|----------|------|
| [warm-coffee](themes/cafe/warm-coffee/) | Cafe | Handcrafted warmth, paper textures, chalkboard elements |

## Creating a New Theme

1. Copy `themes/cafe/warm-coffee/` as template
2. Replace tokens in `tokens.json` (colors, fonts)
3. Rewrite `style.css` with new component styles (keep class names consistent)
4. Update `rules.md` with design constraints
5. Update `README.md` with component reference table

Class names (`.nav`, `.hero`, `.card`, `.btn`, etc.) stay consistent across themes. Only the styles change.

## Tech Stack

- Pure HTML + CSS + vanilla JS (no frameworks)
- Phosphor Icons
- Google Fonts (with CJK fallbacks)
- Unsplash images
