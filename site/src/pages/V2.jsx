import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { theme as t } from '../data/warmCoffee'

/* V2 — Masonry / Waterfall + Sidebar Navigation
   CSS columns for natural waterfall flow, components auto-size to content */

const NAV = [
  { group: 'Tokens', items: [
    { id: 'sec-colors', label: 'Colors', icon: 'ph-palette' },
    { id: 'sec-type', label: 'Typography', icon: 'ph-text-aa' },
    { id: 'sec-spacing', label: 'Spacing', icon: 'ph-ruler' },
  ]},
  { group: 'Components', items: t.components.map((c, i) => ({ id: `sec-comp-${i}`, label: c.name, icon: 'ph-cube' })) },
  { group: 'Pages', items: [{ id: 'sec-pages', label: 'Example Pages', icon: 'ph-browser' }] },
]
const ALL_IDS = NAV.flatMap(g => g.items.map(i => i.id))

function FadeIn({ children, className = '', delay = 0, style }) {
  const ref = useRef()
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect() } }, { threshold: 0.05 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className={`transition-all duration-700 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}>
      {children}
    </div>
  )
}

function Card({ className = '', children, ...props }) {
  return (
    <div className={`rounded-2xl border border-border2 bg-surface overflow-hidden hover:border-dim transition-all duration-300 ${className}`} {...props}>
      {children}
    </div>
  )
}

function CompFrame({ comp, id }) {
  const ref = useRef()

  // Event delegation — handles all clicks via bubbling, immune to DOM recreation
  const handleClick = (e) => {
    const el = ref.current
    if (!el) return

    // Switch toggle
    const sw = e.target.closest('[data-switch]')
    if (sw) {
      const on = sw.dataset.on !== '1'
      sw.dataset.on = on ? '1' : '0'
      sw.style.background = on ? '#3E2723' : '#D7CCC8'
      const k = sw.querySelector('[data-knob]')
      if (k) {
        Object.assign(k.style, on
          ? { right: '2px', left: 'auto', background: '#F5E6CA' }
          : { left: '2px', right: 'auto', background: '#fff' })
      }
      return
    }

    // Tab click
    const tab = e.target.closest('[data-tab]')
    if (tab) {
      const group = tab.closest('[data-tab-group]')
      if (!group) return
      const container = group.parentElement
      group.querySelectorAll('[data-tab]').forEach(t => {
        Object.assign(t.style, { fontWeight: '600', color: '#5D4037', opacity: '0.6', borderBottom: 'none', marginBottom: '0' })
      })
      Object.assign(tab.style, { fontWeight: '700', color: '#3E2723', opacity: '1', borderBottom: '2px solid #3E2723', marginBottom: '-2px' })
      container.querySelectorAll('[data-tab-content]').forEach(c => {
        c.style.display = c.dataset.tabContent === tab.dataset.tab ? '' : 'none'
      })
      return
    }

    // Toggle button
    const toggle = e.target.closest('[data-toggle]')
    if (toggle) {
      const group = toggle.closest('[data-toggle-group]')
      if (!group) return
      const pill = group.style.borderRadius.includes('30')
      group.querySelectorAll('[data-toggle]').forEach(b => {
        Object.assign(b.style, { background: pill ? 'transparent' : '#fff', color: '#5D4037', fontWeight: '600' })
        if (pill) b.style.borderRadius = ''
      })
      Object.assign(toggle.style, { background: '#3E2723', color: '#F5E6CA', fontWeight: '700' })
      if (pill) toggle.style.borderRadius = '28px'
      return
    }

    // Carousel helpers
    const syncDots = (el, activeIdx) => {
      el.querySelectorAll('[data-dot]').forEach((d, i) => {
        d.style.background = i === activeIdx ? '#3E2723' : '#D7CCC8'
      })
    }
    const getCarouselIdx = (track) => {
      const itemW = (track.firstElementChild?.offsetWidth || 0) + 12
      return Math.round(track.scrollLeft / itemW)
    }

    // Carousel prev/next
    if (e.target.closest('[data-carousel-prev]')) {
      const track = el.querySelector('[data-carousel-track]')
      if (track) {
        track.scrollBy({ left: -(track.firstElementChild?.offsetWidth + 12), behavior: 'smooth' })
        setTimeout(() => syncDots(el, getCarouselIdx(track)), 350)
      }
      return
    }
    if (e.target.closest('[data-carousel-next]')) {
      const track = el.querySelector('[data-carousel-track]')
      if (track) {
        track.scrollBy({ left: track.firstElementChild?.offsetWidth + 12, behavior: 'smooth' })
        setTimeout(() => syncDots(el, getCarouselIdx(track)), 350)
      }
      return
    }

    // Carousel dot
    const dot = e.target.closest('[data-dot]')
    if (dot) {
      const track = el.querySelector('[data-carousel-track]')
      if (track) {
        const idx = Number(dot.dataset.dot)
        const child = track.children[idx]
        if (child) track.scrollTo({ left: child.offsetLeft - track.offsetLeft, behavior: 'smooth' })
        syncDots(el, idx)
      }
      return
    }
  }

  // Slider onInput is handled via React onInput below — no useEffect needed

  return (
    <div id={id} className="scroll-mt-20 break-inside-avoid mb-4">
      <FadeIn>
        <Card>
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-border2">
            <span className="text-sm font-semibold">{comp.name}</span>
          </div>
          <div ref={ref} onClick={handleClick} onInput={(e) => {
            if (e.target.matches('[data-slider]')) {
              const label = ref.current?.querySelector('[data-slider-value]')
              if (label) label.textContent = e.target.value + '%'
            }
          }} className="flex items-center justify-center p-5" style={{ background: comp.bg || t.themeBg }}>
            <div dangerouslySetInnerHTML={{ __html: comp.html }} />
          </div>
        </Card>
      </FadeIn>
    </div>
  )
}

export default function V2() {
  const navigate = useNavigate()
  const [active, setActive] = useState(ALL_IDS[0])

  useEffect(() => {
    const handler = () => {
      for (let i = ALL_IDS.length - 1; i >= 0; i--) {
        const el = document.getElementById(ALL_IDS[i])
        if (el && el.getBoundingClientRect().top <= 140) { setActive(ALL_IDS[i]); break }
      }
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTo = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen">
      {/* Toolbar */}
      <header className="fixed top-0 left-0 right-0 z-50 h-14 bg-bg/90 backdrop-blur-xl border-b border-border2 flex items-center px-6 gap-4">
        <Link to="/" className="flex items-center gap-2 text-muted text-sm hover:text-text transition px-3 py-1.5 rounded-lg border border-border2 hover:border-dim">
          <i className="ph ph-arrow-left" /> Back
        </Link>
        <div className="w-px h-6 bg-border2" />
        <div className="text-sm"><strong className="text-text">{t.name}</strong> <span className="text-muted">/ {t.industry}</span></div>
        <div className="ml-auto text-xs px-3 py-1 rounded-md bg-accent/10 text-accent font-medium">
          {t.components.length} components &middot; {t.pages.length} pages
        </div>
      </header>

      {/* Sidebar */}
      <nav className="fixed top-14 left-0 bottom-0 w-52 bg-surface border-r border-border2 overflow-y-auto py-5 z-40">
        {NAV.map(g => (
          <div key={g.group} className="mb-6">
            <div className="px-5 pb-2 text-[10px] uppercase tracking-[1.2px] text-dim font-semibold">{g.group}</div>
            {g.items.map(item => (
              <button key={item.id} onClick={() => scrollTo(item.id)}
                className={`w-full text-left flex items-center gap-2.5 px-5 py-2 text-[13px] transition border-l-2
                  ${active === item.id ? 'text-text bg-white/5 border-accent' : 'text-muted border-transparent hover:text-text hover:bg-white/[0.02]'}`}>
                <i className={`ph ${item.icon} text-sm opacity-60`} />
                {item.label}
              </button>
            ))}
          </div>
        ))}
      </nav>

      {/* Main */}
      <main className="ml-52 pt-14">
        {/* Hero */}
        <div className="px-8 pt-16 pb-8">
          <FadeIn>
            <div className="text-[11px] uppercase tracking-[2px] text-accent font-semibold mb-3">Design Language</div>
            <h1 className="text-5xl font-extrabold tracking-tight mb-4">{t.name}</h1>
            <p className="text-lg text-muted max-w-xl">{t.desc}</p>
          </FadeIn>
        </div>

        {/* Waterfall content */}
        <div className="px-8 pb-20" style={{ columns: '2 320px', columnGap: 16 }}>

          {/* Colors */}
          <div id="sec-colors" className="scroll-mt-20 break-inside-avoid mb-4">
            <FadeIn>
              <Card>
                <div className="p-5 pb-3">
                  <div className="text-[10px] uppercase tracking-[1.5px] text-dim font-semibold mb-1">Tokens</div>
                  <div className="text-lg font-bold">Colors</div>
                </div>
                <div className="grid grid-cols-3 gap-px bg-border">
                  {t.colors.map(c => (
                    <div key={c.hex} className="bg-surface p-3 text-center">
                      <div className="w-12 h-12 rounded-lg mx-auto mb-2 shadow-inner" style={{ background: c.hex }} />
                      <div className="text-xs font-semibold">{c.name}</div>
                      <div className="text-[10px] text-muted font-mono">{c.hex}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </FadeIn>
          </div>

          {/* Typography */}
          <div id="sec-type" className="scroll-mt-20 break-inside-avoid mb-4">
            <FadeIn delay={60}>
              <Card>
                <div className="p-5 pb-3">
                  <div className="text-[10px] uppercase tracking-[1.5px] text-dim font-semibold mb-1">Tokens</div>
                  <div className="text-lg font-bold">Typography</div>
                </div>
                <div className="px-5 pb-5">
                  {t.fonts.map((f, i) => (
                    <div key={f.label} className={`py-4 ${i < t.fonts.length - 1 ? 'border-b border-border' : ''}`}>
                      <div className="text-[11px] text-muted font-mono mb-2">{f.label} — {f.detail}</div>
                      <div style={f.style}>{f.sample}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </FadeIn>
          </div>

          {/* Spacing */}
          <div id="sec-spacing" className="scroll-mt-20 break-inside-avoid mb-4">
            <FadeIn delay={120}>
              <Card>
                <div className="p-5 pb-3">
                  <div className="text-[10px] uppercase tracking-[1.5px] text-dim font-semibold mb-1">Tokens</div>
                  <div className="text-lg font-bold">Spacing & Effects</div>
                </div>
                <div className="px-5 pb-5">
                  {t.tokens.map(tk => (
                    <div key={tk.key} className="flex justify-between text-sm py-2 border-b border-border last:border-0">
                      <span className="text-muted">{tk.key}</span>
                      <span className="font-mono font-semibold text-xs">{tk.value}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </FadeIn>
          </div>

          {/* Components — each auto-sizes */}
          {t.components.map((comp, i) => (
            <CompFrame key={i} comp={comp} id={`sec-comp-${i}`} />
          ))}

          {/* Pages */}
          <div id="sec-pages" className="scroll-mt-20 break-inside-avoid mb-4" style={{ columnSpan: 'all' }}>
            <FadeIn>
              <div className="mb-4">
                <div className="text-[10px] uppercase tracking-[1.5px] text-dim font-semibold mb-1">Pages</div>
                <div className="text-lg font-bold">Example Pages</div>
              </div>
            </FadeIn>
          </div>

          {t.pages.map((p, i) => (
            <div key={p.name} className="break-inside-avoid mb-4">
              <FadeIn delay={i * 60}>
                <Card className="hover:-translate-y-1 cursor-pointer" onClick={() => navigate(`/pages?p=${i}`)}>
                  <div className="flex items-center gap-2 px-3 py-2 bg-surface border-b border-border2">
                    <span className="flex gap-1"><span className="w-2 h-2 rounded-full bg-[#ff5f57]" /><span className="w-2 h-2 rounded-full bg-[#ffbd2e]" /><span className="w-2 h-2 rounded-full bg-[#28c840]" /></span>
                    <span className="text-[11px] text-muted ml-1">{p.name}</span>
                    <i className="ph ph-arrow-square-out text-xs text-dim ml-auto" />
                  </div>
                  <div className="h-72 overflow-hidden bg-white">
                    <iframe src={p.file} loading="lazy" className="w-[200%] h-[200%] origin-top-left scale-50 border-none pointer-events-none" />
                  </div>
                </Card>
              </FadeIn>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
