"use client"
import { ChevronDown } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import type { Language } from "@/lib/i18n"

interface LanguageSwitcherProps {
  currentLanguage: Language
  onLanguageChange: (lang: Language) => void
}

const languages = {
  en: { name: "English", flag: "🇺🇸" },
  zh: { name: "中文", flag: "🇨🇳" },
  ja: { name: "日本語", flag: "🇯🇵" },
  ko: { name: "한국어", flag: "🇰🇷" },
  fr: { name: "Français", flag: "🇫🇷" },
  de: { name: "Deutsch", flag: "🇩🇪" },
  es: { name: "Español", flag: "🇪🇸" },
}

export function LanguageSwitcher({ currentLanguage, onLanguageChange }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-white/80 backdrop-blur-md border border-zinc-200 rounded-full px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-white transition-all shadow-sm"
      >
        <span className="text-base">{languages[currentLanguage].flag}</span>
        <span className="hidden sm:inline">{languages[currentLanguage].name}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white/95 backdrop-blur-xl border border-zinc-200 rounded-2xl shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          {(Object.entries(languages) as [Language, { name: string; flag: string }][]).map(([lang, { name, flag }]) => (
            <button
              key={lang}
              onClick={() => {
                onLanguageChange(lang)
                setIsOpen(false)
              }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                currentLanguage === lang
                  ? "bg-zinc-100 text-zinc-900 font-semibold"
                  : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
              }`}
            >
              <span className="text-lg">{flag}</span>
              <span>{name}</span>
              {currentLanguage === lang && <span className="ml-auto text-zinc-900">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
