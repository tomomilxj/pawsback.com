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
import type { Language } from "@/types/language"

export default function Home() {
  const [showSummoning, setShowSummoning] = useState(false)
  const [showPaywall, setShowPaywall] = useState(false)
  const [isPremium, setIsPremium] = useState(false)
  const [customVoicePath, setCustomVoicePath] = useState<string>()
  const [language, setLanguage] = useState<Language>("en")

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

  return (
    <>
      <Navigation language={language} onLanguageChange={setLanguage} />

      <main className="min-h-screen bg-white">
        {showSummoning ? (
          <SummoningOverlay onComplete={handleSummoningComplete} />
        ) : (
          <>
            <section className="pt-32 pb-24 relative overflow-hidden">
              {/* Background layers for depth */}
              <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 via-white to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(250,250,250,0.6),transparent_50%)]" />
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-zinc-100 rounded-full blur-3xl opacity-30" />
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-zinc-50 rounded-full blur-3xl opacity-40" />

              <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 bg-zinc-900 text-white px-5 py-2 rounded-full text-sm font-medium mb-8 shadow-lg shadow-zinc-900/20">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    Bringing Your Paws Back
                  </div>
                  <h1 className="text-6xl md:text-8xl font-bold text-zinc-900 mb-8 tracking-tight leading-[0.95] text-balance">
                    Your Pet
                    <br />
                    <span className="bg-gradient-to-r from-zinc-600 via-zinc-700 to-zinc-600 bg-clip-text text-transparent">
                      Returns to You
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-zinc-600 max-w-3xl mx-auto leading-relaxed font-light">
                    Not just memories. Not just photos. A living connection.
                    <br className="hidden md:block" />
                    Touch them. Hear them. Feel their warmth again.
                  </p>
                  <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/dashboard">
                      <Button
                        size="lg"
                        className="h-14 px-10 text-base font-semibold shadow-xl shadow-zinc-900/10 hover:shadow-2xl hover:shadow-zinc-900/20 transition-all"
                      >
                        Get Started
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      size="lg"
                      className="h-14 px-10 text-base font-semibold border-2 bg-transparent"
                      onClick={() => {
                        document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
                      }}
                    >
                      See How It Works
                    </Button>
                  </div>
                </div>

                <div className="mt-24">
                  <HeroPet />
                </div>
              </div>
            </section>

            <section id="features" className="py-32 bg-gradient-to-b from-white via-zinc-50/50 to-white relative">
              {/* Subtle background pattern */}
              <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                  backgroundImage: "radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)",
                  backgroundSize: "40px 40px",
                }}
              />

              <div className="max-w-7xl mx-auto px-6 relative">
                <div className="text-center mb-24">
                  <p className="text-sm font-semibold text-zinc-500 tracking-wider uppercase mb-4 letterspacing-wide">
                    The PawsBack Experience
                  </p>
                  <h2 className="text-5xl md:text-6xl font-bold text-zinc-900 mb-6 text-balance">More Than a Memory</h2>
                  <p className="text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
                    Every moment is designed to heal, comfort, and reconnect you
                    <br className="hidden md:block" />
                    with the companion who meant everything
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                  {/* Feature cards with enhanced depth */}
                  <div className="group relative">
                    {/* Card glow effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-zinc-200 to-zinc-100 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur" />
                    <div className="relative bg-white p-12 rounded-3xl border-2 border-zinc-200 hover:border-zinc-300 transition-all duration-300 shadow-lg shadow-zinc-200/30 hover:shadow-2xl hover:shadow-zinc-300/40 hover:-translate-y-1">
                      <div className="w-16 h-16 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-zinc-900/20">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-zinc-900 mb-4 text-balance">Touch Their Fur Again</h3>
                      <p className="text-zinc-600 leading-relaxed text-base">
                        Feel the warmth of their response as you pet their head. Watch them lean into your touch, just
                        like they always did.
                      </p>
                    </div>
                  </div>

                  <div className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-zinc-200 to-zinc-100 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur" />
                    <div className="relative bg-white p-12 rounded-3xl border-2 border-zinc-200 hover:border-zinc-300 transition-all duration-300 shadow-lg shadow-zinc-200/30 hover:shadow-2xl hover:shadow-zinc-300/40 hover:-translate-y-1">
                      <div className="w-16 h-16 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-zinc-900/20">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-zinc-900 mb-4 text-balance">Hear Their Voice</h3>
                      <p className="text-zinc-600 leading-relaxed text-base">
                        They respond to you in their own unique way. Playful barks, gentle meows, or comforting
                        purrs—captured from your memories.
                      </p>
                    </div>
                  </div>

                  <div className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-zinc-200 to-zinc-100 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur" />
                    <div className="relative bg-white p-12 rounded-3xl border-2 border-zinc-200 hover:border-zinc-300 transition-all duration-300 shadow-lg shadow-zinc-200/30 hover:shadow-2xl hover:shadow-zinc-300/40 hover:-translate-y-1">
                      <div className="w-16 h-16 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-zinc-900/20">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-zinc-900 mb-4 text-balance">
                        Always There When You Need Them
                      </h3>
                      <p className="text-zinc-600 leading-relaxed text-base">
                        3 AM or midday. Wherever you are. Open PawsBack and they're waiting—ready to comfort you like
                        only they could.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Secondary features in elevated container */}
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  <div className="bg-gradient-to-br from-white to-zinc-50 p-8 rounded-2xl border border-zinc-200 shadow-md shadow-zinc-200/30">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-zinc-900/20">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-zinc-900 mb-2">Recreate Special Moments</h4>
                        <p className="text-zinc-600 text-sm leading-relaxed">
                          Upload their favorite treat, toy, or blanket. Watch them light up just like they used to.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-white to-zinc-50 p-8 rounded-2xl border border-zinc-200 shadow-md shadow-zinc-200/30">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-zinc-900/20">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-zinc-900 mb-2">Their Unique Personality</h4>
                        <p className="text-zinc-600 text-sm leading-relaxed">
                          Playful, calm, or mischievous—PawsBack captures who they were, not just what they looked like.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="pricing" className="py-32 bg-white relative overflow-hidden">
              {/* Background elements */}
              <div className="absolute top-1/4 left-0 w-96 h-96 bg-zinc-50 rounded-full blur-3xl opacity-40" />
              <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-zinc-100 rounded-full blur-3xl opacity-30" />

              <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                  <p className="text-sm font-semibold text-zinc-500 tracking-wider uppercase mb-4">Pricing</p>
                  <h2 className="text-5xl md:text-6xl font-bold text-zinc-900 mb-6 text-balance">
                    Choose Your Journey
                  </h2>
                  <p className="text-xl text-zinc-600 leading-relaxed">
                    Start reconnecting today, or unlock the complete PawsBack experience
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  {/* Basic Plan */}
                  <div className="bg-white p-12 rounded-3xl border-2 border-zinc-200 hover:border-zinc-300 transition-all duration-300 shadow-xl shadow-zinc-200/40 hover:shadow-2xl hover:shadow-zinc-300/50 hover:-translate-y-1">
                    <div className="mb-10">
                      <h3 className="text-2xl font-bold text-zinc-900 mb-3">Basic</h3>
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-6xl font-bold text-zinc-900">$9.99</span>
                        <span className="text-zinc-500 text-lg font-medium">/month</span>
                      </div>
                      <p className="text-zinc-600 text-base">Begin your healing journey</p>
                    </div>
                    <ul className="space-y-5 mb-12">
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
                        <span className="text-zinc-700 text-base">Bring back 1 beloved pet</span>
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
                        <span className="text-zinc-700 text-base">Pet, feed, and play together</span>
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
                        <span className="text-zinc-700 text-base">Daily conversations (15 messages)</span>
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
                        <span className="text-zinc-700 text-base">Natural pet sounds</span>
                      </li>
                    </ul>
                    <Link href="/subscribe/basic">
                      <Button
                        variant="outline"
                        className="w-full h-14 text-base font-semibold border-2 hover:bg-zinc-50 bg-transparent"
                        size="lg"
                      >
                        Start with Basic
                      </Button>
                    </Link>
                  </div>

                  {/* Premium Plan - Enhanced with gradient and glow */}
                  <div className="relative">
                    {/* Outer glow */}
                    <div className="absolute -inset-1 bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-900 rounded-3xl opacity-75 blur-xl" />

                    <div className="relative bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 p-12 rounded-3xl text-white overflow-hidden shadow-2xl shadow-zinc-900/40">
                      {/* Inner gradient overlays */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.15),transparent_60%)]" />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(255,255,255,0.1),transparent_60%)]" />

                      <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full text-xs font-bold tracking-wide shadow-lg">
                        MOST HEALING
                      </div>

                      <div className="relative z-10">
                        <div className="mb-10">
                          <h3 className="text-2xl font-bold mb-3">Premium</h3>
                          <div className="flex items-baseline gap-2 mb-4">
                            <span className="text-6xl font-bold">$19.99</span>
                            <span className="text-white/70 text-lg font-medium">/month</span>
                          </div>
                          <p className="text-white/80 text-base">The complete PawsBack experience</p>
                        </div>

                        <ul className="space-y-5 mb-12">
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
                            <span className="text-base">Reunite with up to 3 pets</span>
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
                            <span className="text-base">Unlimited interactions & conversations</span>
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
                            <span className="text-base">Preserve unlimited special memories</span>
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
                            <span className="text-base">Full personality customization</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <svg
                              className="w-6 h-6 text-emerald-400 mt-0.5 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-base font-semibold">AI voice cloning—hear their actual voice</span>
                          </li>
                        </ul>

                        <Link href="/subscribe/premium">
                          <Button
                            className="w-full h-14 bg-white text-zinc-900 hover:bg-white/95 text-base font-bold shadow-xl hover:shadow-2xl transition-all"
                            size="lg"
                          >
                            Bring Them Back Fully
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust indicator */}
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

            {/* Interaction zone - only show after scrolling */}
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
