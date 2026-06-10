// ── Certifications ────────────────────────────────────────────────────────────

interface Cert {
  name: string
  institution: string
  year: string
}

const CERTS: Cert[] = [
  {
    name: 'Fundamental of Associate Network administrator',
    institution: 'Digital Talent Academy',
    year: 'Tahun 2026',
  },
  {
    name: 'Intermediate of Associate Network administrator',
    institution: 'Digital Talent Academy',
    year: 'Tahun 2026',
  },
]

// Rosette / badge icon matching the design
function BadgeIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      className="text-primary"
    >
      <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="7" stroke="currentColor" strokeWidth="1.5" />
      {/* Top ribbon tabs */}
      <path
        d="M16 4V7M22 5.5L20.5 8M10 5.5L11.5 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 md:py-32">
      <div className="container-pad">

        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="section-title">Sertifikat</h2>
          <div className="section-accent" />
        </div>

        {/* Responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {CERTS.map((cert) => (
            <div
              key={cert.name}
              className="flex flex-col items-center text-center gap-4 p-8
                bg-surface-white rounded-lg border border-border-light
                shadow-card hover:shadow-card-hover hover:-translate-y-0.5
                transition-all duration-300"
            >
              <BadgeIcon />

              <div className="flex flex-col gap-1">
                <h3 className="font-display font-semibold text-base text-ink leading-snug">
                  {cert.name}
                </h3>
                <p className="text-sm text-ink-subtle">{cert.institution}</p>
              </div>

              <span className="text-sm font-semibold text-primary">
                {cert.year}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
