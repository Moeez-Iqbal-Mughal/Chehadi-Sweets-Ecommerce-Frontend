import { useState, useRef, useEffect } from "react"
import { ChevronDown, Check } from "lucide-react"

interface Option {
  value: string
  label: string
}

interface CustomSelectProps {
  label?: string
  options: Option[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
  icon?: React.ReactNode
  openDirection?: "up" | "down"
}

export function CustomSelect({
  label,
  options,
  value,
  onChange,
  placeholder = "Select an option",
  icon,
  openDirection = "down",
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const selectedOption = options.find((o) => o.value === value)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="space-y-1.5 w-full" ref={ref}>
      {label && (
        <label className="text-xs font-bold text-neutral-700 flex items-center gap-1.5">
          {icon}
          {label}
        </label>
      )}

      <div className="relative w-full">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full flex items-center justify-between p-3.5 text-xs font-medium rounded-2xl border transition-all text-left bg-[#faf8f5] focus:outline-none ${
            isOpen
              ? "border-[#b5874a] ring-2 ring-[#b5874a]/20 bg-white shadow-sm"
              : "border-neutral-200 hover:border-[#b5874a]/60 text-neutral-800"
          }`}
        >
          <span className={selectedOption ? "text-[#2b160f] font-semibold" : "text-neutral-400"}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <ChevronDown
            className={`w-4 h-4 text-[#b5874a] transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isOpen && (
          <div className={`absolute left-0 right-0 bg-white rounded-2xl shadow-xl border border-neutral-100 p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150 max-h-60 overflow-y-auto ${
            openDirection === "up" ? "bottom-full mb-1.5" : "top-full mt-1.5"
          }`}>
            {options.map((option) => {
              const isSelected = option.value === value
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    onChange(option.value)
                    setIsOpen(false)
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs transition-colors text-left ${
                    isSelected
                      ? "bg-[#2b160f] text-white font-bold"
                      : "text-neutral-700 hover:bg-[#faf8f5] hover:text-[#b5874a]"
                  }`}
                >
                  <span>{option.label}</span>
                  {isSelected && <Check className="w-4 h-4 text-[#dfb776]" />}
                </button>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
