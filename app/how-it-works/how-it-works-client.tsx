"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/i18n"

export function HowItWorksClientPage() {
  const { language, setLanguage } = useLanguage()
  const t = translations[language].howItWorks

  return (
    <>
      <Navigation language={language} onLanguageChange={setLanguage} />

      <main className="min-h-screen bg-white pt-32">
        {/* Hero */}
        <section className="py-24 bg-gradient-to-b from-zinc-50 to-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-zinc-900 mb-8 text-balance">
              {t.title1}
              <br />
              <span className="bg-gradient-to-r from-zinc-600 to-zinc-800 bg-clip-text text-transparent">
                {t.title2}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 leading-relaxed">{t.subtitle}</p>
          </div>
        </section>

        {/* Steps */}
        <section className="py-32">
          <div className="max-w-5xl mx-auto px-6">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
              <div className="order-2 md:order-1">
                <div className="inline-block bg-zinc-900 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
                  {t.step1}
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 text-balance">{t.step1Title}</h2>
                <p className="text-xl text-zinc-600 leading-relaxed mb-8">{t.step1Desc}</p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-zinc-700">
                    <div className="w-6 h-6 bg-zinc-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    {t.step1Item1}
                  </li>
                  <li className="flex items-center gap-3 text-zinc-700">
                    <div className="w-6 h-6 bg-zinc-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    {t.step1Item2}
                  </li>
                  <li className="flex items-center gap-3 text-zinc-700">
                    <div className="w-6 h-6 bg-zinc-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    {t.step1Item3}
                  </li>
                  <li className="flex items-center gap-3 text-zinc-700">
                    <div className="w-6 h-6 bg-zinc-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    {t.step1Item4}
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <div className="aspect-square rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-br from-zinc-100 to-zinc-50">
                  <img
                    src="/uploading-pet-photos-interface.jpg"
                    alt="Upload photos"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
              <div>
                <div className="inline-block bg-zinc-900 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
                  {t.step2}
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 text-balance">{t.step2Title}</h2>
                <p className="text-xl text-zinc-600 leading-relaxed mb-8">{t.step2Desc}</p>
                <div className="bg-zinc-50 border-2 border-zinc-200 rounded-2xl p-6">
                  <h3 className="font-bold text-zinc-900 mb-4">{t.step2BoxTitle}</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-zinc-700">
                      <span className="text-zinc-900 font-bold">•</span>
                      {t.step2Item1}
                    </li>
                    <li className="flex items-start gap-3 text-zinc-700">
                      <span className="text-zinc-900 font-bold">•</span>
                      {t.step2Item2}
                    </li>
                    <li className="flex items-start gap-3 text-zinc-700">
                      <span className="text-zinc-900 font-bold">•</span>
                      {t.step2Item3}
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="aspect-square rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-br from-zinc-100 to-zinc-50">
                  <img src="/ai-processing-pet-model.jpg" alt="AI Processing" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
              <div className="order-2 md:order-1">
                <div className="inline-block bg-zinc-900 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
                  {t.step3}
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 text-balance">{t.step3Title}</h2>
                <p className="text-xl text-zinc-600 leading-relaxed mb-8">{t.step3Desc}</p>
                <blockquote className="border-l-4 border-zinc-900 pl-6 py-4 italic text-lg text-zinc-700">
                  "{t.step3Quote}"
                  <cite className="block mt-2 not-italic text-sm text-zinc-500">{t.step3QuoteAuthor}</cite>
                </blockquote>
              </div>
              <div className="order-1 md:order-2">
                <div className="aspect-square rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-br from-purple-100 to-blue-100">
                  <img
                    src="/magical-summoning-ritual-particles.jpg"
                    alt="Summoning"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
              <div>
                <div className="inline-block bg-zinc-900 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
                  {t.step4}
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 text-balance">{t.step4Title}</h2>
                <p className="text-xl text-zinc-600 leading-relaxed mb-8">{t.step4Desc}</p>
                <Link href="/dashboard">
                  <Button size="lg" className="h-14 px-10 text-base font-semibold shadow-xl">
                    {t.step4Cta}
                  </Button>
                </Link>
              </div>
              <div>
                <div className="aspect-square rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-br from-zinc-100 to-zinc-50">
                  <img
                    src="/person-petting-virtual-dog.jpg"
                    alt="Interact with pet"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-zinc-900 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{t.ctaTitle}</h2>
            <p className="text-xl text-zinc-300 mb-10 leading-relaxed">{t.ctaSubtitle}</p>
            <Link href="/dashboard">
              <Button
                size="lg"
                variant="secondary"
                className="h-14 px-10 text-base font-semibold bg-white text-zinc-900 hover:bg-zinc-100"
              >
                {t.ctaCta}
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer language={language} />
    </>
  )
}
