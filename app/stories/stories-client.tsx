"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/i18n"

export function StoriesClientPage() {
  const { language, setLanguage } = useLanguage()
  const t = translations[language].stories

  const testimonials = [
    {
      name: "Sarah M.",
      location: "Seattle, WA",
      pet: "Luna",
      species: "Golden Retriever",
      image: "woman-with-golden-retriever",
      story:
        "I lost Luna 8 months ago and the grief was unbearable. PawsBack gave me a way to feel her presence again. I can pet her head, hear her bark, and it's like she never left. This has been incredibly healing.",
    },
    {
      name: "Michael Chen",
      location: "Toronto, Canada",
      pet: "Whiskers",
      species: "Tabby Cat",
      image: "man-with-tabby-cat",
      story:
        "My cat Whiskers was my companion for 15 years. When he passed, I didn't know how to cope. PawsBack lets me hear his purr and see his little head tilt. It's given me so much comfort during the hardest time.",
    },
    {
      name: "Emily Rodriguez",
      location: "Austin, TX",
      pet: "Max",
      species: "Beagle",
      image: "woman-with-beagle",
      story:
        "Max was my best friend through college and beyond. Losing him felt like losing a part of myself. With PawsBack, I can still tell him about my day and he 'responds' in his playful way. It's magical.",
    },
    {
      name: "James Wilson",
      location: "London, UK",
      pet: "Bella",
      species: "French Bulldog",
      image: "man-with-french-bulldog",
      story:
        "Bella passed away suddenly and I wasn't ready to say goodbye. PawsBack has been a bridge between grief and acceptance. I can interact with her daily, and it helps me process the loss at my own pace.",
    },
    {
      name: "Maria Garcia",
      location: "Barcelona, Spain",
      pet: "Shadow",
      species: "German Shepherd",
      image: "woman-with-german-shepherd",
      story:
        "Shadow was my protector for 12 years. The house felt empty without him. Now I can see him wag his tail again and hear his deep bark. PawsBack brought light back into my life.",
    },
    {
      name: "David Kim",
      location: "Seoul, South Korea",
      pet: "Coco",
      species: "Pomeranian",
      image: "man-with-pomeranian",
      story:
        "Coco was the smallest dog with the biggest personality. Losing her left a huge void. Thanks to PawsBack, I can still experience her playful energy and hear her excited yips. It's healing beyond words.",
    },
  ]

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

        {/* Stories Grid */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              {testimonials.map((story, index) => (
                <div key={index} className="group">
                  <div className="bg-white border-2 border-zinc-200 rounded-3xl p-10 hover:border-zinc-300 hover:shadow-2xl hover:shadow-zinc-300/20 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                    <div className="flex items-center gap-6 mb-8">
                      <div className="w-20 h-20 bg-zinc-100 rounded-2xl overflow-hidden flex-shrink-0">
                        <img
                          src={`/ceholder-svg-height-80.jpg?height=80&width=80`}
                          alt={story.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-zinc-900">{story.name}</h3>
                        <p className="text-zinc-600">{story.location}</p>
                        <p className="text-sm text-zinc-500 mt-1">
                          {story.pet} • {story.species}
                        </p>
                      </div>
                    </div>

                    <blockquote className="text-lg text-zinc-700 leading-relaxed italic flex-grow">
                      "{story.story}"
                    </blockquote>

                    <div className="mt-8 pt-6 border-t border-zinc-200">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-zinc-900" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-32 bg-zinc-50">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="text-6xl font-bold text-zinc-900 mb-4">{t.stat1}</div>
                <p className="text-xl text-zinc-600">{t.stat1Label}</p>
              </div>
              <div>
                <div className="text-6xl font-bold text-zinc-900 mb-4">{t.stat2}</div>
                <p className="text-xl text-zinc-600">{t.stat2Label}</p>
              </div>
              <div>
                <div className="text-6xl font-bold text-zinc-900 mb-4">{t.stat3}</div>
                <p className="text-xl text-zinc-600">{t.stat3Label}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 text-balance">{t.ctaTitle}</h2>
            <p className="text-xl text-zinc-600 mb-10">{t.ctaSubtitle}</p>
            <a href="/dashboard" className="inline-block">
              <button className="h-14 px-10 text-base font-semibold bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 shadow-xl transition-all">
                {t.ctaCta}
              </button>
            </a>
          </div>
        </section>
      </main>

      <Footer language={language} />
    </>
  )
}
