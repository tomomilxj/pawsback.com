import Link from "next/link"
import { type Language, translations } from "@/lib/i18n"

interface FooterProps {
  language: Language
}

export function Footer({ language }: FooterProps) {
  const t = translations[language].footer

  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-zinc-900">PawsBack</h3>
            <p className="text-sm text-zinc-600 leading-relaxed">{t.description}</p>
            <div className="pt-4 border-t border-zinc-200">
              <p className="text-xs font-semibold text-zinc-500 mb-2">{t.contactEmail}</p>
              <a
                href="mailto:liuxijing1207@163.com"
                className="text-sm text-zinc-900 hover:text-zinc-600 transition-colors font-medium"
              >
                liuxijing1207@163.com
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider">{t.product}</h4>
            <ul className="space-y-3 text-sm text-zinc-600">
              <li>
                <Link href="/#features" className="hover:text-zinc-900 transition-colors">
                  {t.features}
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-zinc-900 transition-colors">
                  {t.pricing}
                </Link>
              </li>
              <li>
                <Link href="/stories" className="hover:text-zinc-900 transition-colors">
                  {t.caseStudies}
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider">{t.support}</h4>
            <ul className="space-y-3 text-sm text-zinc-600">
              <li>
                <Link href="/#faq" className="hover:text-zinc-900 transition-colors">
                  {t.faq}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-zinc-900 transition-colors">
                  {t.contactUs}
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-zinc-900 transition-colors">
                  {t.helpCenter}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider">{t.legal}</h4>
            <ul className="space-y-3 text-sm text-zinc-600">
              <li>
                <Link href="#" className="hover:text-zinc-900 transition-colors">
                  {t.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-zinc-900 transition-colors">
                  {t.termsOfService}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-zinc-900 transition-colors">
                  {t.cookiePolicy}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-zinc-500">{t.copyright}</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-zinc-400 hover:text-zinc-700 transition-colors" aria-label="Twitter">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Link>
            <Link href="#" className="text-zinc-400 hover:text-zinc-700 transition-colors" aria-label="GitHub">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
