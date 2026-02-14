import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { theme as t } from '../data/warmCoffee'

export default function Pages() {
  const [searchParams] = useSearchParams()
  const initial = parseInt(searchParams.get('p') || '0', 10)
  const [active, setActive] = useState(Math.min(initial, t.pages.length - 1))
  const p = t.pages[active]

  return (
    <div className="h-screen flex">
      {/* Left panel */}
      <div className="w-64 shrink-0 bg-surface border-r border-border2 flex flex-col">
        <div className="p-5 border-b border-border2">
          <Link to="/v2" className="flex items-center gap-2 text-muted text-xs hover:text-text transition mb-3">
            <i className="ph ph-arrow-left" /> Back to Overview
          </Link>
          <h1 className="text-base font-bold tracking-tight" style={{ fontFamily: 'Pacifico, cursive', color: '#F5E6CA' }}>{t.name}</h1>
          <p className="text-xs text-muted mt-1">Example Pages</p>
        </div>

        <nav className="flex-1 py-2">
          {t.pages.map((pg, i) => (
            <button key={pg.name} onClick={() => setActive(i)}
              className={`w-full text-left px-5 py-3 transition-all border-l-2 ${
                active === i
                  ? 'bg-white/5 border-accent text-text'
                  : 'border-transparent text-muted hover:text-text hover:bg-white/[0.02]'
              }`}>
              <div className="flex items-center gap-2.5">
                <i className="ph ph-browser text-sm opacity-50" />
                <span className="text-sm font-medium">{pg.name}</span>
              </div>
            </button>
          ))}
        </nav>

        <div className="p-5 border-t border-border2">
          <a href={p.file} target="_blank" rel="noopener"
            className="block w-full text-center text-sm font-semibold py-2.5 rounded-lg bg-accent text-white hover:bg-accent2 transition">
            Open in New Tab
          </a>
        </div>
      </div>

      {/* Right preview */}
      <div className="flex-1 relative">
        {t.pages.map((pg, i) => (
          <iframe
            key={pg.name}
            src={pg.file}
            className="absolute inset-0 w-full h-full border-none"
            style={{ display: active === i ? 'block' : 'none' }}
          />
        ))}
      </div>
    </div>
  )
}
