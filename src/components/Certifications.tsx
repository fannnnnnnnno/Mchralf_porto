'use client'

import { useState } from 'react'

// ── Certifications ────────────────────────────────────────────────────────────

interface Cert {
  name: string
  institution: string
  year: string
  certificateUrl: string // URL gambar atau PDF sertifikat
}

const CERTS: Cert[] = [
  {
    name: 'Fundamental of Associate Network administrator',
    institution: 'Digital Talent Academy',
    year: 'Tahun 2026',
    certificateUrl: 'https://via.pappppppplaceholder.com/600x400/6366f1/ffffff?text=Fundamental+Certificate', // Ganti dengan path lokal atau URL gambar/PDF
  },
  {
    name: 'Intermediate of Associate Network administrator',
    institution: 'Digital Talent Academy',
    year: 'Tahun 2026',
    certificateUrl: 'https://via.placeholder.com/600x400/6366f1/ffffff?text=Intermediate+Certificate', // Ganti dengan path lokal atau URL gambar/PDF
  },
  // ✅ Tambah sertifikat baru di sini:
  // {
  //   name: 'Nama Sertifikasi',
  //   institution: 'Nama Institusi',
  //   year: 'Tahun',
  //   certificateUrl: '/certificates/nama-file.jpg', // atau .pdf
  // },
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

// Modal untuk menampilkan sertifikasi
interface CertificationModalProps {
  isOpen: boolean
  cert: Cert | null
  onClose: () => void
}

function CertificationModal({ isOpen, cert, onClose }: CertificationModalProps) {
  if (!isOpen || !cert) return null

  const isPDF = cert.certificateUrl.toLowerCase().endsWith('.pdf')

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      {/* Modal container */}
      <div className="relative bg-surface-white rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-auto">
        {/* Header */}
        <div className="sticky top-0 bg-surface-white border-b border-border-light p-6 flex items-center justify-between">
          <h3 className="font-display font-semibold text-ink text-lg">
            {cert.name}
          </h3>
          <button
            onClick={onClose}
            className="text-ink-subtle hover:text-ink transition-colors"
            aria-label="Close"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 flex items-center justify-center">
          {isPDF ? (
            <iframe
              src={cert.certificateUrl}
              title={cert.name}
              className="w-full h-[500px] rounded-lg border border-border-light"
            />
          ) : (
            <img
              src={cert.certificateUrl}
              alt={cert.name}
              className="max-w-full h-auto rounded-lg"
            />
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-border-light p-6 flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-sm text-ink-subtle">{cert.institution}</p>
            <p className="text-sm font-semibold text-primary">{cert.year}</p>
          </div>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Cert | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleViewCertificate = (cert: Cert) => {
    setSelectedCert(cert)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedCert(null)
  }

  return (
    <section id="certifications" className="py-16 md:py-32">
      <div className="container-pad">

        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="section-title">Sertifikat</h2>
          <div className="section-accent" />
        </div>

        {/* Responsive grid - 3 kolom pada tablet/desktop, centered jika < 3 */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full md:w-fit justify-center md:justify-start">
            {CERTS.map((cert) => (
              <div
                key={cert.name}
                className="group relative flex flex-col items-center text-center gap-4 p-8
                  bg-surface-white rounded-lg border border-border-light
                  shadow-card hover:shadow-card-hover hover:-translate-y-0.5
                  transition-all duration-300 cursor-pointer
                  w-full md:w-80"
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

                {/* Hover button overlay */}
                <button
                  onClick={() => handleViewCertificate(cert)}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100
                    transition-opacity duration-300 bg-black bg-opacity-0 group-hover:bg-opacity-30
                    rounded-lg backdrop-blur-sm"
                >
                  <div className="px-6 py-2 bg-primary text-white font-semibold rounded-lg
                    hover:bg-primary-dark transition-colors">
                    Lihat Sertifikasi
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Certification Modal */}
        <CertificationModal
          isOpen={isModalOpen}
          cert={selectedCert}
          onClose={handleCloseModal}
        />

      </div>
    </section>
  )
}
