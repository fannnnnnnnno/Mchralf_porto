// Grid cells config: each cell has a unique visual character
// Replace the `img` values with your own project screenshots
type GridCell = {
  image: string
  overlay?: boolean
  label?: string
  brightness: number
}

const GRID_CELLS: GridCell[] = [
  { image: '/tech_network.png', brightness: 0.75 },
  { image: '/tech_code.png',    brightness: 0.65 },
  { image: '/tech_server.png',  brightness: 0.80 },
  { image: '/tech_code.png',    brightness: 0.85 },
  { image: '/tech_network.png', brightness: 1.00, overlay: true, label: 'PROYEK' },
  { image: '/tech_server.png',  brightness: 0.82 },
  { image: '/tech_network.png', brightness: 0.70 },
  { image: '/tech_server.png',  brightness: 0.68 },
  { image: '/tech_code.png',    brightness: 0.78 },
]

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16">
      <div className="container-pad w-full py-12 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT: Text content ── */}
          <div className="flex flex-col gap-6">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-display-lg text-ink leading-[1.1] tracking-tight">
              Halo, Saya{' '}
              <span className="text-primary">Muhammad Afan Mucharrom</span>
            </h1>

            <p className="text-body-md sm:text-body-lg text-ink-muted leading-relaxed max-w-md">
              Fresh Graduate Teknik Komputer &amp; Jaringan yang bersemangat
              membangun infrastruktur jaringan handal dan solusi IT yang efisien.
            </p>

            <div className="pt-2">
              <a href="#projects" className="btn-primary">
                Lihat Karya Saya
              </a>
            </div>
          </div>

          {/* ── RIGHT: 3×3 Image grid ── */}
          <div className="hidden md:grid grid-cols-3 gap-2 w-full max-w-md mx-auto lg:max-w-none">
            {GRID_CELLS.map((cell, i) => (
              <div
                key={i}
                className="aspect-square rounded-sm overflow-hidden relative"
                style={{ opacity: cell.brightness }}
              >
                <img
                  src={cell.image}
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(15%) brightness(0.96)' }}
                />
                {/* Dark overlay + label for featured cell */}
                {cell.overlay && (
                  <div className="absolute inset-0 bg-ink/60 flex items-center justify-center">
                    <span className="text-white text-xs font-semibold tracking-[0.2em] uppercase">
                      {cell.label}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
