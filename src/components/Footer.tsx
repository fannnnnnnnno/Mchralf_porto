// ── Footer ────────────────────────────────────────────────────────────────────
// Update SOCIAL_LINKS with your real profile URLs.

const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/username' },
  { label: 'GitHub', href: 'https://github.com/username' },
  { label: 'Twitter', href: 'https://twitter.com/username' },
  { label: 'Email', href: 'mailto:kamu@email.com' },
] as const

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border-light bg-surface-mid">
      <div className="container-pad py-6 flex flex-col md:flex-row gap-6 md:gap-0 items-center justify-between text-center md:text-left">

        {/* Logo mark */}
        <span className="text-ink-subtle" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 1.5V14.5M1.5 8H14.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
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
