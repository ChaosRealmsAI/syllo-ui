# Warm Coffee

Handcrafted warmth for café & artisan brands.

## Files

| File | What | AI reads? |
|------|------|-----------|
| `style.css` | CSS framework — all components as classes | **Yes, first** |
| `rules.md` | 30 design constraints | Yes |
| `tokens.json` | Raw token values (colors, fonts, spacing) | Only if creating new components |

## Quick Start

```html
<link rel="stylesheet" href="style.css">
<script src="https://unpkg.com/@phosphor-icons/web"></script>
```

## Palette

| Var | Hex | Role |
|-----|-----|------|
| `--espresso` | #3E2723 | Primary dark |
| `--bean` | #5D4037 | Body text |
| `--latte` | #F5E6CA | Page background |
| `--crema` | #D7CCC8 | Dividers |
| `--accent` | #FF7043 | CTAs, highlights |

**No cold colors. Ever.**

## Fonts

| Var | Latin | CJK | Use |
|-----|-------|-----|-----|
| `--font-head` | Pacifico | ZCOOL KuaiLe | Logos, hero titles |
| `--font-serif` | Lora | Noto Serif SC | Section headings |
| `--font-sans` | Nunito | Noto Sans SC | Body, UI |

Font stacks include CJK fallbacks. Chinese/Japanese/Korean text automatically uses the matching CJK font.

## Components (all in style.css)

| Component | Class | HTML Pattern |
|-----------|-------|-------------|
| Nav | `.nav` `.nav-logo` `.nav-links` | `<nav class="nav"><a class="nav-logo">Brand</a><div class="nav-links"><a>Link</a></div></nav>` |
| Hero | `.hero` `.hero-content` `.hero-actions` | `<header class="hero" style="background-image:url(...)"><div class="hero-content"><h1>Title</h1><p>Sub</p><div class="hero-actions"><a class="btn">CTA</a></div></div></header>` |
| Hero Short | `.hero.hero-short` | Same as hero, 40vh height |
| Button | `.btn` `.btn-outline` `.btn-accent` `.btn-sm` | `<a class="btn">Label</a>` |
| Ticker | `.ticker` `.ticker-track` | `<div class="ticker"><div class="ticker-track"><span>Item</span></div></div>` |
| Section | `.section` `.section-header` | `<section class="section"><div class="container"><div class="section-header"><h2>Title</h2><p>Desc</p></div></div></section>` |
| Card | `.card` `.card-body` `.card-tag` `.card-price` | `<div class="card"><img src="..."><div class="card-body"><h3>Title</h3><span class="card-tag">Tag</span><p>Desc</p></div></div>` |
| Shop Card | `.shop-card` `.badge` `.shop-card-price` | `<div class="shop-card"><div class="shop-card-img"><span class="badge">New</span></div><div class="shop-card-body"><h4>Name</h4><span class="shop-card-price">$22</span></div></div>` |
| Chalkboard | `.chalkboard` `.chalkboard-title` `.chalkboard-subtitle` | `<div class="chalkboard"><h2 class="chalkboard-title">Title</h2></div>` |
| Menu Item | `.menu-item` `.menu-item-name` `.menu-item-dots` `.menu-item-price` `.menu-item-desc` | `<div class="menu-item"><div class="menu-item-row"><span class="menu-item-name">Latte</span><span class="menu-item-dots"></span><span class="menu-item-price">$4.50</span></div><div class="menu-item-desc">Desc</div></div>` |
| Chalk Tabs | `.chalk-tabs` `.chalk-tab` | `<div class="chalk-tabs"><button class="chalk-tab active" data-tab="hot">Hot</button></div>` |
| Process | `.process` `.process-step` `.process-icon` | `<div class="process"><div class="process-step"><div class="process-icon"><i class="ph-fill ph-plant"></i></div><h3>Title</h3><p>Desc</p></div></div>` |
| Polaroid | `.polaroid-grid` `.polaroid` | `<div class="polaroid-grid"><div class="polaroid"><img src="..."><span>Caption</span></div></div>` |
| Timeline | `.timeline` `.timeline-item` `.timeline-dot` `.timeline-content` | `<div class="timeline"><div class="timeline-item"><div class="timeline-dot"></div><div class="timeline-content"><h4>2015</h4><p>Event</p></div></div></div>` |
| Filter | `.filter-sidebar` `.filter-group` | `<aside class="filter-sidebar"><div class="filter-group"><h5>Category</h5><label><input type="checkbox"> Option</label></div></aside>` |
| Footer | `.footer` `.footer-grid` `.footer-bottom` | `<footer class="footer"><div class="container"><div class="footer-grid"><div><h4>Title</h4></div></div><div class="footer-bottom">&copy; 2025</div></div></footer>` |
| CTA Banner | `.cta-banner` | `<div class="cta-banner"><div class="container"><h2>Ready?</h2><a class="btn btn-accent">Go</a></div></div>` |
| Form | `.form` `.form-group` `.form-input` `.form-textarea` | `<form class="form"><div class="form-group"><label>Name</label><input class="form-input"></div></form>` |
| Info Card | `.info-card` | `<div class="info-card"><i class="ph ph-map-pin"></i><h4>Title</h4><p>Info</p></div>` |

## Layout Helpers

| Class | What |
|-------|------|
| `.container` | Max 1100px centered |
| `.container-narrow` | Max 800px centered |
| `.grid-3` | 3-column grid |
| `.grid-2` | 2-column grid |
| `.grid-2-1` | Sidebar + main |
| `.fade-up` | Add `.visible` via JS for entry animation |

## JS Snippets

**Fade-up animation:**
```javascript
document.querySelectorAll('.fade-up').forEach(el => {
  new IntersectionObserver(([e]) => {
    if (e.isIntersecting) el.classList.add('visible');
  }, { threshold: 0.1 }).observe(el);
});
```

**Chalkboard tab switching:**
```javascript
document.querySelectorAll('.chalk-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.chalk-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    document.querySelectorAll('[data-menu-group]').forEach(g => {
      g.style.display = g.dataset.menuGroup === tab.dataset.tab ? 'block' : 'none';
    });
  });
});
```
