const PHOTO_URL = '/avatar.png'

export default function About() {
  return (
    <section id="about" className="py-16 md:py-32">
      <div className="container-pad">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT: Text ── */}
          <div className="flex flex-col gap-5">
            <h2 className="font-display text-headline-lg text-primary">
              Tentang Saya
            </h2>

            <p className="text-body-md text-ink-muted leading-relaxed">
              Saya adalah lulusan baru jurusan Teknik Komputer dan Jaringan dengan
              pengalaman praktik kerja industri di bidang IT support dan administrasi
              jaringan. Saya terbiasa bekerja dengan perangkat Cisco, MikroTik, dan
              berbagai distribusi Linux untuk membangun dan memelihara infrastruktur
              jaringan yang handal.
            </p>

            <p className="text-body-md text-ink-muted leading-relaxed">
              Selain jaringan, saya juga memiliki ketertarikan pada server
              administration dan otomasi menggunakan skrip Python dan Bash.
              Saya percaya bahwa teknologi yang baik harus tidak hanya bekerja
              dengan baik, tetapi juga mudah dikelola dan dipahami.
            </p>

            <div className="pt-2">
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
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              <img
                src={PHOTO_URL}
                alt="Foto profil"
                className="w-full rounded-xl object-cover aspect-[4/5]"
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
