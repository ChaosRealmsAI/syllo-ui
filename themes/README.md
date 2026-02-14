# Syllo UI — Theme Catalog

AI-native design language library. Pick a theme, read its docs, generate consistent pages.

## How to Use

1. **Tell the AI what you're building** — industry, vibe, audience
2. **Pick a theme** from the catalog below
3. **AI reads the theme's README** (the link in the table) to get component classes and HTML patterns
4. **AI downloads `style.css`** from the same directory and generates pages using those classes

No custom CSS needed. Just HTML + the theme's CSS framework.

## Theme Catalog

| Theme | Industry | Vibe | Colors | README |
|-------|----------|------|--------|--------|
| **Warm Coffee** | Cafe | Handcrafted warmth, paper textures, chalkboard, rounded & friendly | 🟫 Espresso #3E2723 / Latte #F5E6CA / Accent #FF7043 | [Read](https://raw.githubusercontent.com/ChaosRealmsAI/syllo-ui/main/themes/cafe/warm-coffee/README.md) |

## For AI Agents

### Step 1: Understand the user's needs
Ask the user:
- What industry? (cafe, restaurant, retail, tech, etc.)
- What vibe? (warm, minimal, bold, elegant, playful, etc.)
- What language? (English, Chinese, Japanese, etc.)
- What pages? (homepage, menu, about, contact, etc.)

### Step 2: Recommend a theme
Match the user's needs to a theme from the catalog above. Show them the options and let them choose.

### Step 3: Read the theme README
Fetch the theme's README via the raw GitHub URL. It contains:
- Component class table with HTML patterns
- Color palette
- Font stacks (with CJK fallbacks for multi-language)
- JS snippets for animations and interactions

### Step 4: Download style.css
The `style.css` is in the same directory as the README. Download it to your output directory:
```
{README_URL} → replace README.md with style.css
```
For example:
```
https://raw.githubusercontent.com/ChaosRealmsAI/syllo-ui/main/themes/cafe/warm-coffee/style.css
```

### Step 5: Generate pages
- Each HTML file links to the local `style.css`
- Add Phosphor Icons: `<script src="https://unpkg.com/@phosphor-icons/web"></script>`
- Use at least 6 different components per page
- Use Unsplash images
- Include fadeUp animation JS (see README)
- No custom CSS — all styling comes from the theme classes

### Step 6: Deeper understanding (optional)
If you need to understand component internals, read `rules.md` from the same directory:
```
{README_URL} → replace README.md with rules.md
```

## Adding New Themes

Each theme has exactly 4 files:
```
themes/{industry}/{theme-id}/
├── README.md      ← AI entry point
├── style.css      ← CSS framework
├── rules.md       ← Design constraints
└── tokens.json    ← Design tokens
```

Class names (`.nav`, `.hero`, `.card`, `.btn`, `.footer`, etc.) stay consistent across all themes. Only the styles change.
