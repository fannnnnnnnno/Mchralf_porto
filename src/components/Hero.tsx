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

          {/* ── LEFT: Text content ── */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 w-fit">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-xs font-semibold text-primary tracking-widest uppercase">
                Open to Work
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-display-lg text-ink leading-[1.1] tracking-tight">
              Halo, Saya{' '}
              <span className="text-primary">Muhammad Afan Mucharrom</span>
            </h1>

            <p className="text-body-md sm:text-body-lg text-ink-muted leading-relaxed max-w-md">
              Fresh Graduate TKJ dengan pengalaman magang sebagai{' '}
              <span className="text-ink font-medium">Teknisi Fiber Optic</span>{' '}
              di PT. Garuda Media Telematika. Siap membantu di bidang{' '}
              <span className="text-ink font-medium">Network Administration</span>{' '}
              dan{' '}
              <span className="text-ink font-medium">Web Development</span>.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
              <a href="#projects" className="btn-primary text-center">
                Lihat Karya Saya
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-primary
                  text-primary text-sm font-semibold hover:bg-primary/5 transition-colors duration-200"
              >
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2v8M5 7l3 3 3-3M3 13h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Unduh CV
              </a>
            </div>
          </div>

          {/* ── RIGHT: Animated scroll grid ── */}
          <div className="hidden md:flex gap-2 w-full max-w-md mx-auto lg:max-w-none h-[420px] relative" role="region" aria-label="Galeri teknologi animasi">
            {/* fade top & bottom */}
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