import React, { useEffect, useState } from 'react'
import { X } from 'lucide-react'

const CalcomSchedule = ({ onClose }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/25 backdrop-blur-md px-4 py-8 animate-in fade-in duration-300"
      aria-hidden={false}
    >
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-3xl border border-white/25 shadow-2xl shadow-slate-950/30 animate-in zoom-in-95 duration-300">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-6 top-5 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-300 transition hover:scale-110 cursor-pointer"
          aria-label="Close schedule modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative p-4 md:p-6 rounded-3xl h-full overflow-y-auto">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center rounded-3xl z-20">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin" />
                <p className="text-sm text-slate-600">Loading scheduling....</p>
              </div>
            </div>
          )}
          <iframe
            src="https://cal.com/rolando-jr-hernandez-pwyroz/30min?embed=true"
            title="Cal.com Scheduling"
            style={{
              width: '100%',
              height: '600px',
              border: 'none',
              opacity: isLoading ? 0.5 : 1,
              transition: 'opacity 0.3s ease-in-out',
            }}
            allowFullScreen
            frameBorder="0"
            onLoad={() => setIsLoading(false)}
          />
        </div>
      </div>
    </div>
  )
}

export default CalcomSchedule
