import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import V1 from './pages/V1'
import V2 from './pages/V2'
import V3 from './pages/V3'
import Pages from './pages/Pages'

const variants = [
  { path: '/v1', label: 'V1', sub: 'Scroll', desc: 'Sidebar + vertical sections' },
  { path: '/v2', label: 'V2', sub: 'Bento', desc: 'Mixed-size grid blocks' },
  { path: '/v3', label: 'V3', sub: 'Cinematic', desc: 'Full-bleed hero, editorial' },
]

function Picker() {
  const [active, setActive] = useState(0)
  return (
    <div className="h-screen flex">
      {/* Left panel */}
      <div className="w-64 shrink-0 bg-surface border-r border-border2 flex flex-col">
        <div className="p-5 border-b border-border2">
          <h1 className="text-lg font-bold tracking-tight">Syllo UI</h1>
          <p className="text-xs text-muted mt-1">Pick a gallery layout</p>
        </div>
        <nav className="flex-1 py-3">
          {variants.map((v, i) => (
            <button key={v.path} onClick={() => setActive(i)}
              className={`w-full text-left px-5 py-3.5 transition-all border-l-2 ${
                active === i
                  ? 'bg-white/5 border-accent text-text'
                  : 'border-transparent text-muted hover:text-text hover:bg-white/[0.02]'
              }`}>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold">{v.label}</span>
                <span className={`text-[11px] px-2 py-0.5 rounded-md font-medium ${
                  active === i ? 'bg-accent/10 text-accent' : 'bg-white/5 text-dim'
                }`}>{v.sub}</span>
              </div>
              <div className="text-xs text-muted mt-0.5">{v.desc}</div>
            </button>
          ))}
        </nav>
        <div className="p-5 border-t border-border2">
          <a href={variants[active].path} target="_blank" rel="noopener"
            className="block w-full text-center text-sm font-semibold py-2.5 rounded-lg bg-accent text-white hover:bg-accent2 transition">
            Open Full Page
          </a>
        </div>
      </div>

      {/* Right preview */}
      <div className="flex-1 bg-bg relative">
        {variants.map((v, i) => (
          <iframe
            key={v.path}
            src={v.path}
            className="absolute inset-0 w-full h-full border-none"
            style={{ display: active === i ? 'block' : 'none' }}
          />
        ))}
      </div>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Picker />} />
        <Route path="/v1" element={<V1 />} />
        <Route path="/v2" element={<V2 />} />
        <Route path="/v3" element={<V3 />} />
        <Route path="/pages" element={<Pages />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
