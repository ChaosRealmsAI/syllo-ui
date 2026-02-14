import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { theme as t } from '../data/warmCoffee'

/* V1 — Vertical Scroll with Sidebar Navigation
   Linear-style: clean sections, sticky sidebar, scroll-spy */

const NAV = [
  { group: 'Tokens', items: [{ id: 'colors', label: 'Colors', icon: 'ph-palette' }, { id: 'type', label: 'Typography', icon: 'ph-text-aa' }, { id: 'tokens', label: 'Spacing', icon: 'ph-ruler' }] },
  { group: 'Components', items: t.components.map((c, i) => ({ id: `comp-${i}`, label: c.name, icon: 'ph-cube' })) },
  { group: 'Pages', items: [{ id: 'pages', label: 'All Pages', icon: 'ph-browser' }] },
]

function Section({ id, label, sub, children }) {
  const ref = useRef()
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect() } }, { threshold: 0.08 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <section ref={ref} id={id}
      className={`py-16 px-12 border-b border-border transition-all duration-500 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
      {sub && <div className="text-[11px] uppercase tracking-[1.5px] text-dim font-semibold mb-1">{sub}</div>}
      <h2 className="text-2xl font-bold tracking-tight mb-10">{label}</h2>
      {children}
    </section>
  )
}

export default function V1() {
  const [active, setActive] = useState('colors')

  useEffect(() => {
    const handler = () => {
      const ids = NAV.flatMap(g => g.items.map(i => i.id))
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i])
        if (el && el.getBoundingClientRect().top <= 140) { setActive(ids[i]); break }
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
      <nav className="fixed top-14 left-0 bottom-0 w-56 bg-surface border-r border-border2 overflow-y-auto py-5">
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
      <main className="ml-56 pt-14">
        <Section id="colors" label="Color Palette" sub="Tokens">
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {t.colors.map(c => (
              <div key={c.hex} className="rounded-xl overflow-hidden border border-border2 hover:border-dim transition hover:-translate-y-0.5">
                <div className="h-20" style={{ background: c.hex }} />
                <div className="p-3 bg-surface">
                  <div className="text-sm font-semibold">{c.name}</div>
                  <div className="text-xs text-muted font-mono mt-0.5">{c.hex}</div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="type" label="Typography Scale" sub="Tokens">
          <div className="divide-y divide-border">
            {t.fonts.map(f => (
              <div key={f.label} className="grid grid-cols-[140px_1fr] gap-8 py-6 items-baseline">
                <div className="text-right">
                  <div className="text-xs font-semibold text-text">{f.label}</div>
                  <div className="text-[11px] text-muted font-mono mt-0.5">{f.detail}</div>
                </div>
                <div style={f.style}>{f.sample}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="tokens" label="Spacing & Effects" sub="Tokens">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {t.tokens.map(tk => (
              <div key={tk.key} className="p-4 rounded-xl border border-border2 bg-surface hover:border-dim transition">
                <div className="text-xs text-muted mb-1">{tk.key}</div>
                <div className="text-sm font-semibold font-mono">{tk.value}</div>
              </div>
            ))}
          </div>
        </Section>

        {t.components.map((comp, i) => (
          <Section key={i} id={`comp-${i}`} label={comp.name} sub={i === 0 ? 'Components' : undefined}>
            <div className="rounded-xl border border-border2 overflow-hidden hover:border-dim transition">
              <div className="flex items-center justify-between px-4 py-3 border-b border-border2 bg-surface">
                <span className="text-sm font-semibold">{comp.name}</span>
                <span className="text-[11px] text-dim font-mono">{comp.width} &times; {comp.height}</span>
              </div>
              <div className="flex items-center justify-center p-6" style={{ background: comp.bg || t.themeBg, minHeight: 160 }}>
                <div dangerouslySetInnerHTML={{ __html: comp.html }} />
              </div>
            </div>
          </Section>
        ))}

        <Section id="pages" label="Example Pages" sub="Pages">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {t.pages.map(p => (
              <div key={p.name} className="rounded-xl border border-border2 overflow-hidden hover:border-dim hover:-translate-y-1 transition-all">
                <div className="flex items-center gap-2 px-4 py-2.5 bg-surface border-b border-border2">
                  <span className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                    <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2 h-2 rounded-full bg-[#28c840]" />
                  </span>
                  <span className="text-xs text-muted ml-2">{p.name}</span>
                </div>
                <div className="h-[400px] overflow-hidden bg-white">
                  <iframe src={p.file} loading="lazy" className="w-[200%] h-[200%] origin-top-left scale-50 border-none pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </Section>
      </main>
    </div>
  )
}
