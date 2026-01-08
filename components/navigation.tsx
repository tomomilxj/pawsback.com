"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { type Language, translations } from "@/lib/i18n"
import { useState } from "react"
import { Menu, X } from "lucide-react"

interface NavigationProps {
  language: Language
  onLanguageChange: (lang: Language) => void
}

export function Navigation({ language, onLanguageChange }: NavigationProps) {
  const t = translations[language].nav
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-zinc-900 tracking-tight">
          PawsBack
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href="/#features" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">
            Features
          </Link>
          <Link
            href="/how-it-works"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            How It Works
          </Link>
          <Link href="/#pricing" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">
            Pricing
          </Link>
          <Link href="/stories" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">
            Stories
          </Link>
          <Link href="/about" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">
            Contact
          </Link>
          <Link href="/#faq" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">
            FAQ
          </Link>

          <LanguageSwitcher currentLanguage={language} onLanguageChange={onLanguageChange} />

          <Link href="/dashboard">
            <Button size="sm" className="bg-zinc-900 hover:bg-zinc-800 h-10 px-6 font-medium">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 text-zinc-600 hover:text-zinc-900 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-zinc-200">
          <div className="px-6 py-6 space-y-4">
            <Link
              href="/#features"
              className="block text-base font-medium text-zinc-600 hover:text-zinc-900 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/how-it-works"
              className="block text-base font-medium text-zinc-600 hover:text-zinc-900 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/#pricing"
              className="block text-base font-medium text-zinc-600 hover:text-zinc-900 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/stories"
              className="block text-base font-medium text-zinc-600 hover:text-zinc-900 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Stories
            </Link>
            <Link
              href="/about"
              className="block text-base font-medium text-zinc-600 hover:text-zinc-900 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-base font-medium text-zinc-600 hover:text-zinc-900 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/#faq"
              className="block text-base font-medium text-zinc-600 hover:text-zinc-900 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <div className="pt-4 border-t border-zinc-200">
              <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-zinc-900 hover:bg-zinc-800">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
