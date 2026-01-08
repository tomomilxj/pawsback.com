import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "How It Works - PawsBack",
  description: "Learn how PawsBack brings your beloved pet back through AI technology and interactive experiences.",
}

export default function HowItWorksPage() {
  return (
    <>
      <Navigation language="en" onLanguageChange={() => {}} />

      <main className="min-h-screen bg-white pt-32">
        {/* Hero */}
        <section className="py-24 bg-gradient-to-b from-zinc-50 to-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-zinc-900 mb-8 text-balance">
              From Memory
              <br />
              <span className="bg-gradient-to-r from-zinc-600 to-zinc-800 bg-clip-text text-transparent">
                To Companion
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 leading-relaxed">
              Four simple steps to bring your beloved pet back into your life
            </p>
          </div>
        </section>

        {/* Steps */}
        <section className="py-32">
          <div className="max-w-5xl mx-auto px-6">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
              <div className="order-2 md:order-1">
                <div className="inline-block bg-zinc-900 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
                  STEP 1
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 text-balance">Share Your Memories</h2>
                <p className="text-xl text-zinc-600 leading-relaxed mb-8">
                  Upload photos and videos of your pet. Tell us about their personality—were they playful, calm, or
                  affectionate? Every detail helps us recreate their unique spirit.
                </p>
                <ul className="space-y-4">
                  {[
                    "Upload 3-10 clear photos",
                    "Optional: video with their voice",
                    "Share personality traits",
                    "Add favorite memories",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-zinc-700">
                      <div className="w-6 h-6 bg-zinc-900 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <div className="aspect-square bg-gradient-to-br from-zinc-100 to-zinc-50 rounded-3xl shadow-2xl overflow-hidden">
                  <img src="/uploading-pet-photos-interface.jpg" alt="Upload interface" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
              <div>
                <div className="aspect-square bg-gradient-to-br from-zinc-100 to-zinc-50 rounded-3xl shadow-2xl overflow-hidden">
                  <img src="/ai-processing-pet-model.jpg" alt="AI Processing" className="w-full h-full object-cover" />
                </div>
              </div>
              <div>
                <div className="inline-block bg-zinc-900 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
                  STEP 2
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 text-balance">AI Creates Your Pet</h2>
                <p className="text-xl text-zinc-600 leading-relaxed mb-8">
                  Our advanced AI analyzes your pet's features, movements, and voice to create a lifelike virtual
                  companion. This typically takes 2-4 hours.
                </p>
                <div className="bg-zinc-50 p-8 rounded-2xl border-2 border-zinc-200">
                  <h4 className="font-semibold text-zinc-900 mb-4">What We Create:</h4>
                  <div className="space-y-3 text-zinc-700">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🎨</span>
                      <span>3D visual model with realistic fur and expressions</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🔊</span>
                      <span>Voice clone from your videos (Premium)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🧠</span>
                      <span>Personality AI matching their unique character</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
              <div className="order-2 md:order-1">
                <div className="inline-block bg-zinc-900 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
                  STEP 3
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 text-balance">The Summoning Ritual</h2>
                <p className="text-xl text-zinc-600 leading-relaxed mb-8">
                  This moment is special. Through an interactive ritual, you'll call your pet back. Watch as particles
                  of light gather, forming their presence once again.
                </p>
                <blockquote className="border-l-4 border-zinc-900 pl-6 py-4 italic text-lg text-zinc-700">
                  "The summoning was incredibly emotional. It felt like I was really bringing her back."
                  <cite className="block mt-2 not-italic text-sm text-zinc-500">— Rachel M., PawsBack User</cite>
                </blockquote>
              </div>
              <div className="order-1 md:order-2">
                <div className="aspect-square bg-gradient-to-br from-zinc-900 to-zinc-700 rounded-3xl shadow-2xl overflow-hidden relative">
                  <img
                    src="/magical-summoning-ritual-particles.jpg"
                    alt="Summoning ritual"
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-6xl mb-4">✨</div>
                      <p className="text-2xl font-bold">Hold to summon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="aspect-square bg-gradient-to-br from-zinc-100 to-zinc-50 rounded-3xl shadow-2xl overflow-hidden">
                  <img
                    src="/person-interacting-with-virtual-pet.jpg"
                    alt="Interact with pet"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <div className="inline-block bg-zinc-900 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
                  STEP 4
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 text-balance">Reconnect & Heal</h2>
                <p className="text-xl text-zinc-600 leading-relaxed mb-8">
                  Your pet is back. Pet their head, feed them treats, hear their voice, and talk to them. They're here
                  for you, anytime you need them.
                </p>
                <Link href="/dashboard">
                  <Button size="lg" className="h-14 px-10 text-base font-semibold shadow-xl">
                    Start Your Journey
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-zinc-900 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Ready to Bring Them Back?</h2>
            <p className="text-xl text-zinc-300 mb-10 leading-relaxed">
              Join thousands of pet parents who've found comfort and healing through PawsBack
            </p>
            <Link href="/dashboard">
              <Button
                size="lg"
                variant="secondary"
                className="h-14 px-10 text-base font-semibold bg-white text-zinc-900 hover:bg-zinc-100"
              >
                Get Started Free
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer language="en" />
    </>
  )
}
