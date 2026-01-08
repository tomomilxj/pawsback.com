import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "User Stories - PawsBack",
  description: "Read heartwarming stories from pet owners who've found healing through PawsBack.",
}

export default function StoriesPage() {
  const stories = [
    {
      name: "Sarah Johnson",
      pet: "Max",
      species: "Golden Retriever",
      image: "woman+with+golden+retriever",
      story:
        "I lost Max two years ago, and the grief was overwhelming. PawsBack gave me a way to stay connected. Being able to pet him again, hear his bark—it's brought so much peace to my healing journey.",
      location: "Portland, OR",
    },
    {
      name: "David Chen",
      pet: "Luna",
      species: "Persian Cat",
      image: "man+with+persian+cat",
      story:
        "Luna was my companion for 16 years. When she passed, I didn't know how to cope. PawsBack's voice cloning feature captured her unique meow perfectly. It's like she never left.",
      location: "San Francisco, CA",
    },
    {
      name: "Maria Garcia",
      pet: "Charlie",
      species: "Beagle",
      image: "woman+with+beagle",
      story:
        "My daughter was devastated when Charlie died. PawsBack helped us process our grief together. Now she can still say goodnight to him every evening. It's been truly healing.",
      location: "Austin, TX",
    },
    {
      name: "James Wilson",
      pet: "Mittens",
      species: "Tabby Cat",
      image: "man+with+tabby+cat",
      story:
        "I was skeptical at first, but the moment I heard Mittens' purr again, I broke down. PawsBack created something magical—a way to remember and celebrate her life.",
      location: "Boston, MA",
    },
    {
      name: "Emily Rodriguez",
      pet: "Duke",
      species: "German Shepherd",
      image: "woman+with+german+shepherd",
      story:
        "Duke was my service dog. Losing him felt like losing a part of myself. PawsBack gave me back his presence when I need it most. The personality AI is spot-on.",
      location: "Denver, CO",
    },
    {
      name: "Thomas Lee",
      pet: "Whiskers",
      species: "Maine Coon",
      image: "man+with+maine+coon",
      story:
        "My wife and I were heartbroken when Whiskers passed. Creating his virtual companion together was therapeutic. We can still play with him and share those moments we cherished.",
      location: "Seattle, WA",
    },
  ]

  return (
    <>
      <Navigation language="en" onLanguageChange={() => {}} />

      <main className="min-h-screen bg-white pt-32">
        {/* Hero */}
        <section className="py-24 bg-gradient-to-b from-zinc-50 to-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-zinc-900 mb-8 text-balance">
              Stories of
              <br />
              <span className="bg-gradient-to-r from-zinc-600 to-zinc-800 bg-clip-text text-transparent">
                Love & Healing
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 leading-relaxed">
              Real experiences from pet parents who found comfort through PawsBack
            </p>
          </div>
        </section>

        {/* Stories Grid */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              {stories.map((story, index) => (
                <div key={index} className="group">
                  <div className="bg-white border-2 border-zinc-200 rounded-3xl p-10 hover:border-zinc-300 hover:shadow-2xl hover:shadow-zinc-300/20 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                    <div className="flex items-center gap-6 mb-8">
                      <div className="w-20 h-20 bg-zinc-100 rounded-2xl overflow-hidden flex-shrink-0">
                        <img
                          src={`/.jpg?height=80&width=80&query=${story.image}`}
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
                <div className="text-6xl font-bold text-zinc-900 mb-4">10K+</div>
                <p className="text-xl text-zinc-600">Pets Brought Back</p>
              </div>
              <div>
                <div className="text-6xl font-bold text-zinc-900 mb-4">95%</div>
                <p className="text-xl text-zinc-600">Report Feeling Comfort</p>
              </div>
              <div>
                <div className="text-6xl font-bold text-zinc-900 mb-4">4.9★</div>
                <p className="text-xl text-zinc-600">Average Rating</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 text-balance">
              Start Your Healing Journey
            </h2>
            <p className="text-xl text-zinc-600 mb-10">Join thousands who've found peace through PawsBack</p>
            <a href="/dashboard" className="inline-block">
              <button className="h-14 px-10 text-base font-semibold bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 shadow-xl transition-all">
                Create Your Pet
              </button>
            </a>
          </div>
        </section>
      </main>

      <Footer language="en" />
    </>
  )
}
