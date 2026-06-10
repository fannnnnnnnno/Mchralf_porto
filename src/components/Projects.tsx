// ── Projects ──────────────────────────────────────────────────────────────────
// Replace `imageSeed` with actual project screenshots (local assets or URLs).
// Replace all content with your real project data.

interface Project {
  title: string
  description: string
  category: string
  image: string
  link?: string
}

const PROJECTS: Project[] = [
  {
    title: 'Web Komunitas Game - TCB Bojonegoro',
    description:
      'web untuk komunitas tekken/game fighting yag daya buat dengan react js, typescript, tailwind css, dan vercel untuk hostingnya',
    category: 'web development',
    image: '/tcb.png',
    link: 'https://web-tcb.vercel.app/',
  },
  {
    title: 'Homelab Server',
    description:
      'Setup server lokal menggunakan Proxmox VE untuk virtualisasi, menjalankan beberapa VM sekaligus termasuk Ubuntu Server dan pfSense.',
    category: 'Server & Virtualisasi',
    image: '/homelab.png',
    link: '#',
  },
]

// External-link icon (top-right of card image)
function ExternalLinkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M3 13L13 3M13 3H7M13 3V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-32 bg-surface-low">
      <div className="container-pad">

        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="section-title">Karya Pilihan</h2>
          <div className="section-accent" />
        </div>

        {/* 2×2 Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {PROJECTS.map((project) => (
            <article key={project.title} className="project-card group">

              {/* Image area */}
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ filter: 'grayscale(10%) brightness(0.97)' }}
                />

                {/* Category chip — bottom left of image */}
                <div className="absolute bottom-3 left-3">
                  <span className="chip">{project.category}</span>
                </div>

                {/* Link icon — top right */}
                {project.link && (
                  <a
                    href={project.link}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90
                      flex items-center justify-center text-ink
                      opacity-0 group-hover:opacity-100 transition-opacity duration-200
                      hover:bg-white"
                    aria-label={`Buka ${project.title}`}
                  >
                    <ExternalLinkIcon />
                  </a>
                )}
              </div>

              {/* Card body */}
              <div className="p-6">
                <h3 className="font-display text-headline-lg text-ink mb-2">
                  {project.title}
                </h3>
                <p className="text-body-md text-ink-muted leading-relaxed">
                  {project.description}
                </p>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
