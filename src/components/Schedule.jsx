import React, { useEffect } from 'react'
import { CalendarDays, Clock3, Mail, Phone, X } from 'lucide-react'

const Schedule = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/25 backdrop-blur-md px-4 py-8"
      aria-hidden={false}
    >
      <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/25 bg-white/15 shadow-2xl shadow-slate-950/30 backdrop-blur-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/80 pointer-events-none" />

        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/15 text-white transition hover:bg-white/25 hover:scale-105"
          aria-label="Close schedule modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative grid gap-0 md:grid-cols-[1.05fr_0.95fr]">
          <div className="p-6 md:p-8 text-white">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/90">
              <CalendarDays className="h-4 w-4" />
              Schedule a Call
            </div>

            <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl">
              Let's set up a meeting that works for both of us.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-white/75">
              Share your preferred time and a short note about what you want to discuss.
              I&apos;ll get back to you as soon as possible.
            </p>

            <div className="mt-8 space-y-4 text-sm text-white/85">
              <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/20 px-4 py-3">
                <Clock3 className="h-5 w-5 text-white/90" />
                <span>Best for quick project discussions, interviews, and collaborations.</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3">
                <Mail className="h-5 w-5 text-white/90" />
                <span>Share your email so I can confirm the schedule.</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3">
                <Phone className="h-5 w-5 text-white/90" />
                <span>Optional phone number for faster coordination.</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-950/30 p-6 md:p-8">
            <form
              className="space-y-4"
              onSubmit={(event) => {
                event.preventDefault()
              }}
            >
              <div>
                <label className="mb-2 block text-sm font-medium text-white/85">Full Name</label>
                <input
                  type="text"
                  placeholder="Juan Dela Cruz"
                  className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 outline-none transition focus:border-white/35 focus:bg-white/15"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white/85">Email Address</label>
                <input
                  type="email"
                  placeholder="juan@example.com"
                  className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 outline-none transition focus:border-white/35 focus:bg-white/15"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/85">Preferred Date</label>
                  <input
                    type="date"
                    className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none transition focus:border-white/35 focus:bg-white/15"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/85">Preferred Time</label>
                  <input
                    type="time"
                    className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white outline-none transition focus:border-white/35 focus:bg-white/15"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white/85">Message</label>
                <textarea
                  rows="4"
                  placeholder="Tell me about your project, goals, or the topic you'd like to discuss."
                  className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 outline-none transition focus:border-white/35 focus:bg-white/15"
                />
              </div>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  Send Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Schedule
