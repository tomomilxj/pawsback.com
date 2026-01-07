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

export default function Home() {
  const [showSummoning, setShowSummoning] = useState(false)
  const [showPaywall, setShowPaywall] = useState(false)
  const [isPremium, setIsPremium] = useState(false)
  const [customVoicePath, setCustomVoicePath] = useState<string>()

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
      <Navigation />

      <main className="min-h-screen bg-white">
        {showSummoning ? (
          <SummoningOverlay onComplete={handleSummoningComplete} />
        ) : (
          <>
            <section className="pt-24 pb-12">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-8">
                  <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 mb-6 tracking-tight">
                    让宠物的声音
                    <br />
                    永远陪伴你
                  </h1>
                  <p className="text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
                    通过AI声音克隆技术，重现你宠物独特的声音，随时随地感受它的温暖陪伴
                  </p>
                </div>

                <HeroPet />
              </div>
            </section>

            <section id="features" className="py-24 bg-zinc-50">
              <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-zinc-900 text-center mb-16">核心功能</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white p-8 rounded-2xl border border-zinc-200">
                    <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-zinc-900 mb-2">声音克隆</h3>
                    <p className="text-zinc-600 leading-relaxed">
                      上传宠物的视频，AI将精准克隆它的声音特征，创造独一无二的声音模型
                    </p>
                  </div>

                  <div className="bg-white p-8 rounded-2xl border border-zinc-200">
                    <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-zinc-900 mb-2">互动体验</h3>
                    <p className="text-zinc-600 leading-relaxed">
                      抚摸头部或腹部，宠物会用克隆的声音回应，带来真实的陪伴感
                    </p>
                  </div>

                  <div className="bg-white p-8 rounded-2xl border border-zinc-200">
                    <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-zinc-900 mb-2">隐私保护</h3>
                    <p className="text-zinc-600 leading-relaxed">
                      所有数据加密存储，仅用于生成您的专属声音模型，随时可删除
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="pricing" className="py-24">
              <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-zinc-900 text-center mb-16">选择你的方案</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-8 rounded-2xl border-2 border-zinc-200">
                    <h3 className="text-2xl font-bold text-zinc-900 mb-2">免费版</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-zinc-900">¥0</span>
                      <span className="text-zinc-500">/月</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-zinc-400 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-zinc-600">基础互动体验</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-zinc-400 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-zinc-600">通用宠物声音</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-zinc-400 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-zinc-600">2种互动动作</span>
                      </li>
                    </ul>
                    <Button variant="outline" className="w-full bg-transparent" size="lg">
                      开始使用
                    </Button>
                  </div>

                  <div className="bg-zinc-900 p-8 rounded-2xl text-white relative overflow-hidden">
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                      推荐
                    </div>
                    <h3 className="text-2xl font-bold mb-2">会员版</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">¥29</span>
                      <span className="text-white/60">/月</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-white mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>AI声音克隆</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-white mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>专属宠物声音</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-white mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>无限互动次数</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-white mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>优先技术支持</span>
                      </li>
                    </ul>
                    <Button
                      className="w-full bg-white text-zinc-900 hover:bg-white/90"
                      size="lg"
                      onClick={handleUpgradeClick}
                    >
                      立即升级
                    </Button>
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

      <Footer />
    </>
  )
}
