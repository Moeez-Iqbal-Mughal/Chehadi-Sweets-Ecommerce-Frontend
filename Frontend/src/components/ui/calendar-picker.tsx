import { useState, useRef, useEffect } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, X } from "lucide-react"

interface CalendarPickerProps {
  label?: string
  value: string
  onChange: (value: string) => void
  required?: boolean
  minDate?: Date
  openDirection?: "up" | "down"
}

export function CalendarPicker({
  label,
  value,
  onChange,
  required,
  minDate = new Date(),
}: CalendarPickerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Parse current value date or default to current month
  const selectedDate = value ? new Date(value + "T00:00:00") : null
  const [viewDate, setViewDate] = useState(() => selectedDate || new Date())

  // Keep viewDate in sync when value changes
  useEffect(() => {
    if (value) {
      setViewDate(new Date(value + "T00:00:00"))
    }
  }, [value])

  const year = viewDate.getFullYear()
  const month = viewDate.getMonth()

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]

  // Calculate calendar days
  const firstDayOfMonth = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const daysInPrevMonth = new Date(year, month, 0).getDate()

  const handlePrevMonth = (e: React.MouseEvent) => {
    e.stopPropagation()
    setViewDate(new Date(year, month - 1, 1))
  }

  const handleNextMonth = (e: React.MouseEvent) => {
    e.stopPropagation()
    setViewDate(new Date(year, month + 1, 1))
  }

  const formatDateToString = (d: Date) => {
    const y = d.getFullYear()
    const m = String(d.getMonth() + 1).padStart(2, "0")
    const day = String(d.getDate()).padStart(2, "0")
    return `${y}-${m}-${day}`
  }

  const formatDisplayDate = (dateStr: string) => {
    if (!dateStr) return ""
    const d = new Date(dateStr + "T00:00:00")
    return d.toLocaleDateString("en-AU", {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
    })
  }

  const handleSelectDay = (day: number) => {
    const chosen = new Date(year, month, day)
    const formatted = formatDateToString(chosen)
    onChange(formatted)
    setIsOpen(false)
  }

  const handleSelectPreset = (daysFromToday: number) => {
    const d = new Date()
    d.setDate(d.getDate() + daysFromToday)
    onChange(formatDateToString(d))
    setViewDate(d)
    setIsOpen(false)
  }

  // Today comparison
  const today = new Date()
  const todayStr = formatDateToString(today)

  // Disable past dates check
  const isDateDisabled = (day: number) => {
    const target = new Date(year, month, day, 23, 59, 59)
    const min = new Date(minDate)
    min.setHours(0, 0, 0, 0)
    return target < min
  }

  return (
    <div className="space-y-1.5 w-full relative" ref={containerRef}>
      {label && (
        <label className="text-xs font-bold text-neutral-700 flex items-center gap-1.5">
          <CalendarIcon className="w-3.5 h-3.5 text-[#b5874a]" />
          {label} {required && <span className="text-[#b5874a]">*</span>}
        </label>
      )}

      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full p-3.5 text-xs font-medium rounded-2xl border text-left flex items-center justify-between transition-all shadow-xs cursor-pointer ${
          isOpen
            ? "border-[#b5874a] ring-2 ring-[#b5874a]/20 bg-white"
            : "border-neutral-200 bg-[#faf8f5] hover:border-[#b5874a]/50 text-[#2b160f]"
        }`}
      >
        <div className="flex items-center gap-2.5 truncate">
          <CalendarIcon className="w-4 h-4 text-[#b5874a] shrink-0" />
          <span className={value ? "text-[#2b160f] font-semibold" : "text-neutral-400 font-normal"}>
            {value ? formatDisplayDate(value) : "Select event date (e.g. Sat, 26 Sep 2026)"}
          </span>
        </div>

        {value && (
          <span className="text-[11px] font-bold text-[#b5874a] bg-[#b5874a]/10 px-2 py-0.5 rounded-full shrink-0">
            Selected
          </span>
        )}
      </button>

      {/* Hidden native input */}
      <input
        type="text"
        required={required}
        value={value}
        onChange={() => {}}
        className="opacity-0 absolute pointer-events-none h-0 w-0"
        tabIndex={-1}
      />

      {/* Portal-rendered Calendar Modal Overlay */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <div
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs cursor-pointer"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.92, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: 10 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  onClick={(e) => e.stopPropagation()}
                  className="w-full max-w-xs sm:max-w-sm bg-white rounded-3xl p-6 shadow-2xl border border-[#b5874a]/30 space-y-4 cursor-default relative overflow-hidden"
                >
                  {/* Header: Month & Year Navigator */}
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                    <button
                      type="button"
                      onClick={handlePrevMonth}
                      className="w-8 h-8 rounded-full bg-[#faf8f5] hover:bg-[#b5874a]/15 text-neutral-700 hover:text-[#b5874a] flex items-center justify-center transition-colors cursor-pointer"
                      aria-label="Previous Month"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>

                    <div className="text-base font-bold font-serif text-[#2b160f]">
                      {monthNames[month]} {year}
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={handleNextMonth}
                        className="w-8 h-8 rounded-full bg-[#faf8f5] hover:bg-[#b5874a]/15 text-neutral-700 hover:text-[#b5874a] flex items-center justify-center transition-colors cursor-pointer"
                        aria-label="Next Month"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-500 hover:text-black flex items-center justify-center transition-colors cursor-pointer ml-1"
                        aria-label="Close Calendar"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Days of Week Header */}
                  <div className="grid grid-cols-7 gap-1 text-center">
                    {daysOfWeek.map((day) => (
                      <div key={day} className="text-xs font-bold text-neutral-400 py-1 uppercase">
                        {day}
                      </div>
                    ))}
                  </div>

                  {/* Dates Grid */}
                  <div className="grid grid-cols-7 gap-1 text-center">
                    {/* Previous month padding days */}
                    {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                      <div
                        key={`prev-${i}`}
                        className="h-8 flex items-center justify-center text-xs text-neutral-300 pointer-events-none select-none"
                      >
                        {daysInPrevMonth - firstDayOfMonth + i + 1}
                      </div>
                    ))}

                    {/* Current month days */}
                    {Array.from({ length: daysInMonth }).map((_, i) => {
                      const dayNum = i + 1
                      const curDateStr = formatDateToString(new Date(year, month, dayNum))
                      const isSelected = value === curDateStr
                      const isToday = todayStr === curDateStr
                      const disabled = isDateDisabled(dayNum)

                      return (
                        <button
                          key={`day-${dayNum}`}
                          type="button"
                          disabled={disabled}
                          onClick={() => handleSelectDay(dayNum)}
                          className={`h-8 w-8 mx-auto rounded-full text-xs font-semibold flex items-center justify-center transition-all cursor-pointer ${
                            disabled
                              ? "text-neutral-300 cursor-not-allowed opacity-40"
                              : isSelected
                              ? "bg-[#b5874a] text-white shadow-md shadow-[#b5874a]/40 scale-105 font-bold"
                              : isToday
                              ? "border border-[#b5874a] text-[#b5874a] font-bold hover:bg-[#faf8f5]"
                              : "text-[#2b160f] hover:bg-[#faf8f5] hover:text-[#b5874a]"
                          }`}
                        >
                          {dayNum}
                        </button>
                      )
                    })}
                  </div>

                  {/* Quick Preset Buttons */}
                  <div className="pt-3 border-t border-neutral-100 flex items-center justify-between gap-2 text-xs">
                    <button
                      type="button"
                      onClick={() => handleSelectPreset(0)}
                      className="px-3 py-1.5 rounded-xl bg-[#faf8f5] hover:bg-[#b5874a]/15 text-[#2b160f] font-semibold transition-colors cursor-pointer"
                    >
                      Today
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSelectPreset(1)}
                      className="px-3 py-1.5 rounded-xl bg-[#faf8f5] hover:bg-[#b5874a]/15 text-[#2b160f] font-semibold transition-colors cursor-pointer"
                    >
                      Tomorrow
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        onChange("")
                        setIsOpen(false)
                      }}
                      className="px-3 py-1.5 rounded-xl text-neutral-400 hover:text-red-500 font-medium transition-colors ml-auto cursor-pointer"
                    >
                      Clear
                    </button>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </div>
  )
}
