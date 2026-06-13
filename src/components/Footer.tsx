// ── Footer ──────────────────────────────────────────────────────────────
// Ganti semua href dengan URL/kontak asli kamu.

// ⬇ Ganti nomor WA kamu di sini (format: 628xxx tanpa + atau spasi)
const WA_NUMBER = '62881027133772'
const WA_MESSAGE = encodeURIComponent('Halo,saya tertarik untuk berdiskusi lebih lanjut.')

const SOCIAL_LINKS = [
  { label: 'LinkedIn',  href: 'https://linkedin.com/in/username' },
  { label: 'GitHub',    href: 'https://github.com/fannnnnnnnno' },
  { label: 'WhatsApp',  href: `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}` },
  { label: 'Email',     href: 'mailto:kamu@email.com' },
] as const

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border-light bg-surface-mid">
      <div className="container-pad py-6 flex flex-col md:flex-row gap-6 md:gap-0 items-center justify-between text-center md:text-left">

        {/* Logo mark */}
        <span className="text-ink-subtle" aria-hidden="true">
           <a href="#hero" aria-label="Kembali ke atas" className="text-ink hover:text-primary transition-colors duration-200">
          <p className="text-sm font-bold tracking-wide">Mchralf</p>
        </a>
        </span>

        {/* Social links */}
        <nav aria-label="Tautan sosial">
          <ul className="flex flex-wrap items-center justify-center gap-6 list-none m-0 p-0">
            {SOCIAL_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-muted hover:text-ink transition-colors duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Copyright */}
        <p className="text-xs text-ink-subtle">
          © {year} Mchralf. Hak cipta dilindungi undang-undang.
        </p>

      </div>
    </footer>
  )
}