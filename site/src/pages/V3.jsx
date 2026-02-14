import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { theme as t } from '../data/warmCoffee'

/* V3 — Cinematic / Editorial
   Magazine-style: full-bleed hero with theme colors, large section dividers,
   horizontal scrolling component showcase, immersive page previews */

function Reveal({ children, className = '' }) {
  const ref = useRef()
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect() } }, { threshold: 0.05 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}>
      {children}
    </div>
  )
}

export default function V3() {
  return (
    <div className="min-h-screen">
      {/* Fixed back button */}
      <Link to="/" className="fixed top-5 left-5 z-50 flex items-center gap-2 text-sm text-white/70 hover:text-white transition bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
        <i className="ph ph-arrow-left" /> Back
      </Link>

      {/* Hero — full bleed with theme colors */}
      <section className="relative h-[70vh] flex items-end overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${t.colors[0].hex}, ${t.colors[1].hex} 40%, ${t.colors[4].hex})` }}>
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-5xl mx-auto px-10 pb-16 w-full">
          <div className="text-white/60 text-xs uppercase tracking-[3px] font-semibold mb-3">{t.industry}</div>
          <h1 style={{ fontFamily: 'Pacifico, cursive' }} className="text-7xl text-white mb-4 drop-shadow-lg">{t.name}</h1>
          <p className="text-xl text-white/80 max-w-lg font-light">{t.desc}</p>
          <div className="flex gap-3 mt-6">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/10">
              {t.components.length} components
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/10">
              {t.pages.length} pages
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/10">
              {t.colors.length} colors
            </span>
          </div>
        </div>
      </section>

      {/* Color Palette — horizontal strip */}
      <Reveal>
        <section className="max-w-5xl mx-auto px-10 py-20">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="text-[11px] uppercase tracking-[2px] text-dim font-semibold mb-1">01 / Tokens</div>
              <h2 className="text-3xl font-bold tracking-tight">Color Palette</h2>
            </div>
          </div>
          <div className="flex gap-4">
            {t.colors.map(c => (
              <div key={c.hex} className="flex-1 group">
                <div className="h-32 rounded-xl mb-3 transition-transform group-hover:scale-105 group-hover:shadow-lg" style={{ background: c.hex }} />
                <div className="text-sm font-semibold">{c.name}</div>
                <div className="text-xs text-muted font-mono">{c.hex}</div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-10"><div className="border-t border-border" /></div>

      {/* Typography — large preview */}
      <Reveal>
        <section className="max-w-5xl mx-auto px-10 py-20">
          <div className="mb-8">
            <div className="text-[11px] uppercase tracking-[2px] text-dim font-semibold mb-1">02 / Tokens</div>
            <h2 className="text-3xl font-bold tracking-tight">Typography Scale</h2>
          </div>
          <div className="space-y-0">
            {t.fonts.map((f, i) => (
              <div key={f.label} className="grid grid-cols-[120px_1fr] gap-10 py-8 border-b border-border items-baseline">
                <div className="text-right">
                  <div className="text-sm font-semibold">{f.label}</div>
                  <div className="text-[11px] text-muted font-mono">{f.detail}</div>
                </div>
                <div style={f.style}>{f.sample}</div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <div className="max-w-5xl mx-auto px-10"><div className="border-t border-border" /></div>

      {/* Design Tokens */}
      <Reveal>
        <section className="max-w-5xl mx-auto px-10 py-20">
          <div className="mb-8">
            <div className="text-[11px] uppercase tracking-[2px] text-dim font-semibold mb-1">03 / Tokens</div>
            <h2 className="text-3xl font-bold tracking-tight">Spacing & Effects</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {t.tokens.map(tk => (
              <div key={tk.key} className="p-4 rounded-xl border border-border2 bg-surface hover:border-dim transition">
                <div className="text-xs text-muted mb-1">{tk.key}</div>
                <div className="text-sm font-semibold font-mono">{tk.value}</div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Components — horizontal scroll */}
      <section className="py-20 bg-surface2 border-y border-border">
        <div className="max-w-5xl mx-auto px-10 mb-8">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[2px] text-dim font-semibold mb-1">04 / Components</div>
            <h2 className="text-3xl font-bold tracking-tight">Live Components</h2>
          </Reveal>
        </div>
        <div className="overflow-x-auto">
          <div className="flex gap-5 px-10 pb-4" style={{ minWidth: 'max-content' }}>
            {t.components.map((comp, i) => (
              <Reveal key={i}>
                <div className="w-[420px] shrink-0 rounded-2xl border border-border2 bg-bg overflow-hidden hover:border-dim transition-all hover:-translate-y-1">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-border2">
                    <span className="text-sm font-semibold">{comp.name}</span>
                    <span className="text-[10px] text-dim font-mono">{comp.width}&times;{comp.height}</span>
                  </div>
                  <div className="flex items-center justify-center p-6" style={{ background: comp.bg || t.themeBg, minHeight: 180 }}>
                    <div dangerouslySetInnerHTML={{ __html: comp.html }} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pages — large immersive previews */}
      <Reveal>
        <section className="max-w-5xl mx-auto px-10 py-20">
          <div className="mb-8">
            <div className="text-[11px] uppercase tracking-[2px] text-dim font-semibold mb-1">05 / Pages</div>
            <h2 className="text-3xl font-bold tracking-tight">Example Pages</h2>
          </div>
          <div className="space-y-6">
            {t.pages.map((p, i) => (
              <Reveal key={p.name}>
                <div className="rounded-2xl border border-border2 overflow-hidden hover:border-dim transition-all group">
                  <div className="flex items-center gap-3 px-5 py-3 bg-surface border-b border-border2">
                    <span className="flex gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" /><span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" /><span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" /></span>
                    <span className="text-sm text-muted">{p.name}</span>
                  </div>
                  <div className="h-[480px] overflow-hidden bg-white">
                    <iframe src={p.file} loading="lazy" className="w-[200%] h-[200%] origin-top-left scale-50 border-none pointer-events-none" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Footer */}
      <footer className="border-t border-border py-12 text-center text-sm text-dim">
        Syllo UI — AI-native design language library
      </footer>
    </div>
  )
}
