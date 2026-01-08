"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/i18n"

export function AboutClientPage() {
  const { language, setLanguage } = useLanguage()
  const t = translations[language].about

  return (
    <>
      <Navigation language={language} onLanguageChange={setLanguage} />

      <main className="min-h-screen bg-white pt-32">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-zinc-50 to-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-zinc-900 mb-8 text-balance">
              {t.title1}
              <br />
              <span className="bg-gradient-to-r from-zinc-600 to-zinc-800 bg-clip-text text-transparent">
                {t.title2}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 leading-relaxed max-w-3xl mx-auto">{t.subtitle}</p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-32">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 text-balance">{t.storyTitle}</h2>
                <div className="space-y-6 text-lg text-zinc-600 leading-relaxed">
                  <p>{t.storyP1}</p>
                  <p>{t.storyP2}</p>
                  <p>{t.storyP3}</p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/5] bg-gradient-to-br from-zinc-100 to-zinc-50 rounded-3xl shadow-2xl shadow-zinc-900/10 overflow-hidden">
                  <img src="/golden-retriever-portrait.png" alt="Max" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl border-2 border-zinc-100">
                  <p className="text-2xl font-bold text-zinc-900">{t.maxName}</p>
                  <p className="text-zinc-600">{t.maxDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-32 bg-zinc-50">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-20">
              <p className="text-sm font-semibold text-zinc-500 tracking-wider uppercase mb-4">{t.missionLabel}</p>
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 text-balance">{t.missionTitle}</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-10 rounded-3xl border-2 border-zinc-200 shadow-lg">
                <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-4">{t.mission1Title}</h3>
                <p className="text-zinc-600 leading-relaxed">{t.mission1Desc}</p>
              </div>

              <div className="bg-white p-10 rounded-3xl border-2 border-zinc-200 shadow-lg">
                <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-4">{t.mission2Title}</h3>
                <p className="text-zinc-600 leading-relaxed">{t.mission2Desc}</p>
              </div>

              <div className="bg-white p-10 rounded-3xl border-2 border-zinc-200 shadow-lg">
                <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-4">{t.mission3Title}</h3>
                <p className="text-zinc-600 leading-relaxed">{t.mission3Desc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20">
              <p className="text-sm font-semibold text-zinc-500 tracking-wider uppercase mb-4">{t.teamLabel}</p>
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 text-balance">{t.teamTitle}</h2>
              <p className="text-xl text-zinc-600 mt-6 max-w-2xl mx-auto">{t.teamSubtitle}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="group">
                <div className="aspect-square bg-zinc-100 rounded-3xl overflow-hidden mb-6 shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                  <img
                    src="/professional-woman-golden-retriever.png"
                    alt="Sarah Chen"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900">Sarah Chen</h3>
                <p className="text-zinc-600 mt-2">Founder & CEO</p>
              </div>

              <div className="group">
                <div className="aspect-square bg-zinc-100 rounded-3xl overflow-hidden mb-6 shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                  <img
                    src="/tech-engineer-with-cat.jpg"
                    alt="Michael Torres"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900">Michael Torres</h3>
                <p className="text-zinc-600 mt-2">Chief Technology Officer</p>
              </div>

              <div className="group">
                <div className="aspect-square bg-zinc-100 rounded-3xl overflow-hidden mb-6 shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                  <img
                    src="/psychologist-with-dog.jpg"
                    alt="Dr. Emily Parker"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900">Dr. Emily Parker</h3>
                <p className="text-zinc-600 mt-2">Pet Loss Specialist</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer language={language} />
    </>
  )
}
