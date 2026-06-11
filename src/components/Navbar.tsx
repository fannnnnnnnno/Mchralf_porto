import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Beranda', href: '#hero' },
  { label: 'Tentang', href: '#about' },
  { label: 'Karya', href: '#projects' },
  { label: 'Sertifikat', href: '#certifications' },
] as const

export default function Navbar() {
  const [active, setActive] = useState<string>('hero')
  const [scrolled, setScrolled] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    const sections = ['hero', 'about', 'projects', 'certifications']

    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id)
          break
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu when screen resizes to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? 'bg-white/95 backdrop-blur-md shadow-nav'
          : 'bg-transparent'
      }`}
    >
      <div className="container-pad h-16 flex items-center justify-between">
        {/* Logo mark — plus/cross */}
        <a href="#hero" aria-label="Kembali ke atas" className="text-ink hover:text-primary transition-colors duration-200">
          <p className="text-sm font-bold tracking-wide">Mchralf</p>
        </a>

        {/* Desktop Navigation links */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {NAV_LINKS.map(({ label, href }) => {
            const sectionId = href.slice(1)
            const isActive = active === sectionId
            return (
              <li key={href}>
                <a
                  href={href}
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-200 pb-0.5 ${
                    isActive
                      ? 'text-primary'
                      : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  {label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center p-2 rounded text-ink hover:text-primary transition-colors focus:outline-none"
          aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={isOpen}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer/Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-b border-border-light bg-white ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col list-none m-0 px-8 py-4 gap-4">
          {NAV_LINKS.map(({ label, href }) => {
            const sectionId = href.slice(1)
            const isActive = active === sectionId
            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-sm font-medium py-2 transition-colors duration-200 ${
                    isActive ? 'text-primary font-semibold' : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  {label}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
