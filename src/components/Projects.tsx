import { useState } from 'react'

type Category = 'Semua' | 'Web Development' | 'Jaringan & IT'

interface Project {
  title: string
  description: string
  category: Exclude<Category, 'Semua'>
  tech: string[]
  image: string
  link?: string
  github?: string
}

const PROJECTS: Project[] = [
  {
    title: 'Web Komunitas - TCB Bojonegoro',
    description:
      'Website untuk komunitas game fighting, dilengkapi halaman anggota, agenda event, dan leaderboard.',
    category: 'Web Development',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    image: '/tcb.png',
    link: 'https://www.tcbbojonegoro.my.id',
  },
  {
    title: 'CodeQuest RPG',
    description:
      'Platform belajar coding dengan elemen RPG — quest, XP, dan level sistem untuk membuat belajar lebih menyenangkan.',
    category: 'Web Development',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    image: '/codequest.png',
    link: 'https://codequest-rpg-106963660407.asia-southeast1.run.app',
  },
  {
    title: 'Homelab Server',
    description:
      'Setup server lokal menggunakan Proxmox VE untuk virtualisasi, menjalankan beberapa VM sekaligus termasuk Ubuntu Server dan pfSense.',
    category: 'Jaringan & IT',
    tech: ['Proxmox VE', 'Ubuntu Server', 'pfSense', 'Linux'],
    image: '/homelab.png',
  },
]

const CATEGORIES: Category[] = ['Semua', 'Web Development', 'Jaringan & IT']

function ExternalLinkIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
      <path d="M3 13L13 3M13 3H7M13 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>('Semua')

  const filtered = PROJECTS.filter(
    (p) => activeCategory === 'Semua' || p.category === activeCategory
  )

  return (
    <section id="projects" className="py-16 md:py-32 bg-surface-low">
      <div className="container-pad">

        {/* Section heading */}
        <div className="text-center mb-10">
          <h2 className="section-title">Karya Pilihan</h2>
          <div className="section-accent" />
        </div>

        {/* Filter tabs */}
        <div className="flex justify-center mb-10 px-1">
          <div className="flex items-center gap-1 p-1 rounded-lg bg-surface-white border border-border-light overflow-x-auto max-w-full scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-200 flex-shrink-0 ${
                  activeCategory === cat
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-ink-muted hover:text-ink'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 auto-rows-fr">
          {filtered.map((project) => (
            <article key={project.title} className="project-card group flex flex-col">

              {/* Image area */}
              <div className="relative overflow-hidden aspect-[16/10] flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ filter: 'grayscale(10%) brightness(0.97)' }}
                />

                {/* Category chip */}
                <div className="absolute bottom-3 left-3">
                  <span className="chip">{project.category}</span>
                </div>

                {/* Action icons top right */}
                <div className="absolute top-3 right-3 flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-ink
                        opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white"
                      aria-label={`GitHub ${project.title}`}
                    >
                      <GitHubIcon />
                    </a>
                  )}
                  {project.link && project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-ink
                        opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white"
                      aria-label={`Buka ${project.title}`}
                    >
                      <ExternalLinkIcon />
                    </a>
                  )}
                </div>
              </div>

              {/* Card body */}
              <div className="p-6 flex flex-col gap-3 flex-1">
                <h3 className="font-display text-headline-lg text-ink">
                  {project.title}
                </h3>
                <p className="text-body-md text-ink-muted leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 rounded bg-surface-low text-ink-subtle border border-border-light font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  )
}