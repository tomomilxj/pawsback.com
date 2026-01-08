"use client"

import { useState } from "react"
import { SummoningOverlay } from "@/components/summoning-overlay"
import { ActionZone } from "@/components/action-zone"
import { PaywallModal } from "@/components/paywall-modal"
import { HeroPet } from "@/components/hero-pet"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FAQSection } from "@/components/faq-section"
import { useAudio } from "@/hooks/use-audio"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/i18n"

export default function Home() {
  const [showSummoning, setShowSummoning] = useState(false)
  const [showPaywall, setShowPaywall] = useState(false)
  const [isPremium, setIsPremium] = useState(false)
  const [customVoicePath, setCustomVoicePath] = useState<string>()
  const { language, setLanguage } = useLanguage()

  const { playAudio } = useAudio({
    petId: "demo-pet",
    isPremium,
    customVoicePath,
    defaultVoicePath: "/audio/default",
  })

  const handleSummoningComplete = () => {
    setShowSummoning(false)
  }

  const handleInteraction = async (action: "head_pet" | "belly_rub") => {
    await playAudio(action)
  }

  const handleSubscribe = async (file: File) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsPremium(true)
    setCustomVoicePath("/audio/custom/pet-demo")
    setShowPaywall(false)
  }

  const handleUpgradeClick = () => {
    if (!isPremium) {
      setShowPaywall(true)
    }
  }

  const t = translations[language]

  return (
    <>
      <Navigation language={language} onLanguageChange={setLanguage} />

      <main className="min-h-screen bg-white">
        {showSummoning ? (
          <SummoningOverlay onComplete={handleSummoningComplete} />
        ) : (
          <>
            <section className="pt-32 pb-20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-white via-zinc-50 to-white" />

              <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                  <h1 className="text-6xl md:text-8xl font-bold text-zinc-900 mb-6 tracking-tight leading-[1.1] text-balance">
                    {t.hero.title1}
                    <br />
                    <span className="bg-gradient-to-r from-zinc-800 via-zinc-900 to-black bg-clip-text text-transparent">
                      {t.hero.title2}
                    </span>
                  </h1>

                  <p className="text-xl md:text-2xl text-zinc-600 max-w-2xl mx-auto leading-relaxed mb-12 font-light">
                    {t.hero.subtitle1}
                    <br className="hidden md:block" />
                    {t.hero.subtitle2}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                    <Link href="/dashboard">
                      <Button
                        size="lg"
                        className="h-14 px-10 text-base font-semibold bg-black hover:bg-zinc-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        {t.hero.cta1}
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      size="lg"
                      className="h-14 px-10 text-base font-semibold border-2 border-zinc-300 text-zinc-700 hover:bg-zinc-50 hover:border-zinc-400 transition-all duration-300 bg-transparent"
                      onClick={() => {
                        document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
                      }}
                    >
                      {t.hero.cta2}
                    </Button>
                  </div>
                </div>

                <div className="mt-8">
                  <HeroPet />
                </div>
              </div>
            </section>

            <section id="features" className="py-32 bg-white relative">
              <div className="max-w-7xl mx-auto px-6 relative">
                <div className="text-center mb-24">
                  <p className="text-sm font-semibold text-zinc-500 tracking-wider uppercase mb-4">
                    {t.features.subtitle}
                  </p>
                  <h2 className="text-5xl md:text-6xl font-bold text-zinc-900 mb-6 text-balance">{t.features.title}</h2>
                  <p className="text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">{t.features.description}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                  <div className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-zinc-300/50 to-zinc-200/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur" />
                    <div className="relative bg-white p-12 rounded-3xl border-2 border-zinc-200 hover:border-zinc-300 transition-all duration-300 shadow-lg shadow-zinc-200/30 hover:shadow-2xl hover:shadow-zinc-300/50 hover:-translate-y-1">
                      <div className="w-16 h-16 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-zinc-900/20">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-zinc-900 mb-4 text-balance">{t.features.card1Title}</h3>
                      <p className="text-zinc-600 leading-relaxed text-base">{t.features.card1Desc}</p>
                    </div>
                  </div>

                  <div className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-zinc-300/50 to-zinc-200/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur" />
                    <div className="relative bg-white p-12 rounded-3xl border-2 border-zinc-200 hover:border-zinc-300 transition-all duration-300 shadow-lg shadow-zinc-200/30 hover:shadow-2xl hover:shadow-zinc-300/50 hover:-translate-y-1">
                      <div className="w-16 h-16 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-zinc-900/20">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-zinc-900 mb-4 text-balance">{t.features.card2Title}</h3>
                      <p className="text-zinc-600 leading-relaxed text-base">{t.features.card2Desc}</p>
                    </div>
                  </div>

                  <div className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-zinc-300/50 to-zinc-200/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur" />
                    <div className="relative bg-white p-12 rounded-3xl border-2 border-zinc-200 hover:border-zinc-300 transition-all duration-300 shadow-lg shadow-zinc-200/30 hover:shadow-2xl hover:shadow-zinc-300/50 hover:-translate-y-1">
                      <div className="w-16 h-16 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-zinc-900/20">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-zinc-900 mb-4 text-balance">{t.features.card3Title}</h3>
                      <p className="text-zinc-600 leading-relaxed text-base">{t.features.card3Desc}</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  <div className="bg-gradient-to-br from-white to-zinc-50 p-8 rounded-2xl border border-zinc-200 shadow-md shadow-zinc-200/30">
                    <div className="flex items-start gap-4">
                      <div>
                        <h4 className="text-lg font-semibold text-zinc-900 mb-2">{t.features.sub1Title}</h4>
                        <p className="text-zinc-600 text-sm leading-relaxed">{t.features.sub1Desc}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-white to-zinc-50 p-8 rounded-2xl border border-zinc-200 shadow-md shadow-zinc-200/30">
                    <div className="flex items-start gap-4">
                      <div>
                        <h4 className="text-lg font-semibold text-zinc-900 mb-2">{t.features.sub2Title}</h4>
                        <p className="text-zinc-600 text-sm leading-relaxed">{t.features.sub2Desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="pricing" className="py-32 bg-white relative overflow-hidden">
              <div className="absolute top-1/4 left-0 w-96 h-96 bg-zinc-100 rounded-full blur-3xl opacity-30" />
              <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-zinc-50 rounded-full blur-3xl opacity-40" />

              <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                  <p className="text-sm font-semibold text-zinc-500 tracking-wider uppercase mb-4">
                    {t.pricing.subtitle}
                  </p>
                  <h2 className="text-5xl md:text-6xl font-bold text-zinc-900 mb-6 text-balance">{t.pricing.title}</h2>
                  <p className="text-xl text-zinc-600 leading-relaxed">{t.pricing.description}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white p-10 rounded-2xl border border-zinc-200 hover:border-zinc-300 transition-all hover:shadow-lg">
                    <div className="mb-8">
                      <h3 className="text-xl font-bold mb-3 text-zinc-900">{t.pricing.basicTitle}</h3>
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-5xl font-bold text-zinc-900">{t.pricing.basicPrice}</span>
                        <span className="text-zinc-500 text-base font-medium">{t.pricing.perMonth}</span>
                      </div>
                      <p className="text-zinc-600 text-sm leading-relaxed">{t.pricing.basicDesc}</p>
                    </div>

                    <ul className="space-y-4 mb-10">
                      <li className="flex items-start gap-3">
                        <svg
                          className="w-6 h-6 text-zinc-900 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-zinc-700 text-base">{t.pricing.basicFeature1}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg
                          className="w-6 h-6 text-zinc-900 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-zinc-700 text-base">{t.pricing.basicFeature2}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg
                          className="w-6 h-6 text-zinc-900 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-zinc-700 text-base">{t.pricing.basicFeature3}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg
                          className="w-6 h-6 text-zinc-900 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-zinc-700 text-base">{t.pricing.basicFeature4}</span>
                      </li>
                    </ul>
                    <Link href="/subscribe/basic">
                      <Button
                        variant="outline"
                        className="w-full h-12 text-base font-semibold border-2 border-zinc-900 hover:bg-zinc-900 hover:text-white transition-all bg-transparent"
                        size="lg"
                      >
                        {t.pricing.ctaBasic}
                      </Button>
                    </Link>
                  </div>

                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity" />

                    <div className="relative bg-zinc-900 p-10 rounded-2xl text-white overflow-hidden shadow-xl border border-zinc-800">
                      <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/50 via-transparent to-zinc-900/50" />

                      <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-white/20">
                        {t.pricing.premiumBadge}
                      </div>

                      <div className="relative z-10">
                        <div className="mb-8">
                          <h3 className="text-xl font-bold mb-3">{t.pricing.premiumTitle}</h3>
                          <div className="flex items-baseline gap-2 mb-4">
                            <span className="text-5xl font-bold">{t.pricing.premiumPrice}</span>
                            <span className="text-white/60 text-base font-medium">{t.pricing.perMonth}</span>
                          </div>
                          <p className="text-white/70 text-sm leading-relaxed">{t.pricing.premiumDesc}</p>
                        </div>

                        <ul className="space-y-4 mb-10">
                          <li className="flex items-start gap-3">
                            <svg
                              className="w-6 h-6 text-white mt-0.5 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-base">{t.pricing.premiumFeature1}</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <svg
                              className="w-6 h-6 text-white mt-0.5 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-base">{t.pricing.premiumFeature2}</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <svg
                              className="w-6 h-6 text-white mt-0.5 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-base">{t.pricing.premiumFeature3}</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <svg
                              className="w-6 h-6 text-white mt-0.5 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-base">{t.pricing.premiumFeature4}</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <svg
                              className="w-6 h-6 text-white mt-0.5 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-base">{t.pricing.premiumFeature5}</span>
                          </li>
                        </ul>

                        <Link href="/subscribe/premium">
                          <Button
                            className="w-full h-12 text-base font-semibold bg-white text-zinc-900 hover:bg-zinc-100 transition-all"
                            size="lg"
                          >
                            {t.pricing.ctaPremium}
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-16 text-center">
                  <p className="text-sm text-zinc-500 mb-4">Trusted by thousands healing from pet loss</p>
                  <div className="flex items-center justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-zinc-900" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-3 text-sm font-semibold text-zinc-700">4.9/5 from 2,847 reviews</span>
                  </div>
                </div>
              </div>
            </section>

            <div className="hidden">
              <ActionZone onInteraction={handleInteraction} isPremium={isPremium} />
            </div>

            <FAQSection />

            <PaywallModal isOpen={showPaywall} onClose={() => setShowPaywall(false)} onSubscribe={handleSubscribe} />
          </>
        )}
      </main>

      <Footer language={language} />
    </>
  )
}
