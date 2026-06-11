'use client'

// Replace image paths with your own project screenshots
const COL_IMAGES = {
  1: ['/tech_network.png', '/tech_code.png',   '/tech_server.png', '/tech_network.png'],
  2: ['/tech_server.png',  '/tech_code.png',   '/tech_network.png', '/tech_server.png'],
  3: ['/tech_code.png',    '/tech_network.png', '/tech_server.png', '/tech_code.png'],
}

interface ScrollColProps {
  images: string[]
  direction: 'up' | 'down'
  duration: number
}

function ScrollCol({ images, direction, duration }: ScrollColProps) {
  const doubled = [...images, ...images]

  return (
    <div className="overflow-hidden w-full h-full">
      <div
        className="flex flex-col gap-2"
        style={{
          animation: `${direction === 'up' ? 'scrollUp' : 'scrollDown'} ${duration}s linear infinite`,
        }}
      >
        {doubled.map((src, i) => (
          <div
            key={i}
            className="aspect-square w-full flex-shrink-0 overflow-hidden bg-slate-900"
          >
            <img
              src={src}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover"
              style={{ filter: 'grayscale(15%) brightness(0.96)' }}
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16">
      <div className="container-pad w-full py-12 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* â”€â”€ LEFT: Text content â”€â”€ */}
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

          {/* â”€â”€ RIGHT: Animated scroll grid â”€â”€ */}
          <div className="hidden md:flex gap-2 w-full max-w-md mx-auto lg:max-w-none h-[420px] relative" role="region" aria-label="Galeri teknologi animasi">
            {/* fade top & bottom â€” sesuaikan warna dengan background section */}
            <div className="absolute inset-x-0 top-0 h-16 z-10 pointer-events-none" style={{ background: 'linear-gradient(to bottom, #F9F9F9 0%, transparent 100%)' }} />
            <div className="absolute inset-x-0 bottom-0 h-16 z-10 pointer-events-none" style={{ background: 'linear-gradient(to top, #F9F9F9 0%, transparent 100%)' }} />

            <ScrollCol images={COL_IMAGES[1]} direction="up"   duration={18}  />
            <ScrollCol images={COL_IMAGES[2]} direction="down" duration={24} />
            <ScrollCol images={COL_IMAGES[3]} direction="up"   duration={20}  />
          </div>

        </div>
      </div>
    </section>
  )
}



