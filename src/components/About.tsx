const PHOTO_URL = '/avatar.png'

const SKILLS = {
  networking: ['MikroTik', 'Cisco Packet Tracer', 'Fiber Optic / FTTH', 'Ubuntu Server'],
  webdev: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Node.js', 'Git & GitHub'],
}

export default function About() {
  return (
    <section id="about" className="py-16 md:py-32">
      <div className="container-pad">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── LEFT: Text ── */}
          <div className="flex flex-col gap-8 order-2 lg:order-1">
            <div>
              <h2 className="font-display text-headline-lg text-primary mb-5">
                Tentang Saya
              </h2>

              <div className="flex flex-col gap-4">
                <p className="text-body-md text-ink-muted leading-relaxed">
                  Lulusan Teknik Komputer dan Jaringan dengan pengalaman praktik kerja
                  industri di bidang fiber optik. Terbiasa bekerja
                  dengan perangkat fiber optik dan, MikroTik untuk
                  membangun dan memelihara infrastruktur jaringan yang handal.
                </p>
                <p className="text-body-md text-ink-muted leading-relaxed">
                  Selain jaringan, juga memiliki ketertarikan pada web development dan
                  server administration. Percaya bahwa teknologi yang baik tidak hanya
                  bekerja dengan baik, tetapi juga mudah dikelola dan dipahami.
                </p>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-sm font-semibold text-ink tracking-widest uppercase mb-4">
                Pengalaman
              </h3>
              <div className="relative pl-4 border-l-2 border-primary/20">
                <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-primary" />
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="font-semibold text-ink text-sm">Teknisi Fiber Optic</span>
                    <span className="text-xs text-ink-subtle bg-surface-low px-2 py-0.5 rounded-full">Magang</span>
                  </div>
                  <span className="text-sm text-primary font-medium">PT. Garuda Media Telematika (PoP 21 Bojonegoro)</span>
                  <p className="text-sm text-ink-muted mt-1 leading-relaxed">
                    Instalasi dan terminasi kabel fiber optic, troubleshooting jaringan, pemasangan kabel 12 core, 
                    serta pemeliharaan infrastruktur telekomunikasi.
                  </p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-sm font-semibold text-ink tracking-widest uppercase mb-4">
                Keahlian
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">Networking</span>
                  <div className="flex flex-wrap gap-2">
                    {SKILLS.networking.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2.5 py-1 rounded-md bg-primary/8 text-primary font-medium border border-primary/15"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">Web Development</span>
                  <div className="flex flex-wrap gap-2">
                    {SKILLS.webdev.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2.5 py-1 rounded-md bg-primary/8 text-primary font-medium border border-primary/15"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm
                  hover:gap-3 transition-all duration-200 group"
              >
                Unduh Resume
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M3 8H13M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* ── RIGHT: Photo ── */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-xs sm:max-w-sm">
              <img
                src={PHOTO_URL}
                alt="Foto profil Muhammad Afan Mucharrom"
                className="w-full rounded-xl object-cover aspect-[4/5]"
                loading="lazy"
                style={{
                  boxShadow: '0px 24px 48px rgba(0, 0, 0, 0.10)',
                  filter: 'contrast(1.03)',
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}