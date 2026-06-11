import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString()

interface PDFViewerProps {
  url: string
}

export default function PDFViewer({ url }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number>(0)
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <div className="flex flex-col items-center gap-4">
      <Document
        file={url}
        onLoadSuccess={({ numPages }) => { setNumPages(numPages); setCurrentPage(1) }}
        loading={<div className="flex items-center justify-center h-64 text-ink-subtle text-sm">Memuat sertifikat...</div>}
        error={<div className="flex items-center justify-center h-64 text-ink-subtle text-sm">Gagal memuat PDF.</div>}
        noData={<div className="flex items-center justify-center h-64 text-ink-subtle text-sm">File PDF tidak ditemukan.</div>}
      >
        <Page
          pageNumber={currentPage}
          width={Math.min(560, window.innerWidth - 80)}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          className="rounded-lg overflow-hidden shadow-card"
        />
      </Document>

      {numPages > 1 && (
        <div className="flex items-center gap-3">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-3 py-1.5 text-sm rounded-lg border border-border-light hover:bg-surface-low disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            ← Sebelumnya
          </button>
          <span className="text-sm text-ink-subtle">{currentPage} / {numPages}</span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(numPages, p + 1))}
            disabled={currentPage === numPages}
            className="px-3 py-1.5 text-sm rounded-lg border border-border-light hover:bg-surface-low disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            Selanjutnya →
          </button>
        </div>
      )}
    </div>
  )
}
