import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - PawsBack",
  description: "Learn about our mission to help pet owners heal through companionship and connection.",
}

export default function AboutPage() {
  return (
    <>
      <Navigation language="en" onLanguageChange={() => {}} />

      <main className="min-h-screen bg-white pt-32">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-zinc-50 to-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-zinc-900 mb-8 text-balance">
              We Believe Love
              <br />
              <span className="bg-gradient-to-r from-zinc-600 to-zinc-800 bg-clip-text text-transparent">
                Never Dies
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 leading-relaxed max-w-3xl mx-auto">
              PawsBack was born from a simple truth: the bond between you and your pet transcends time. We're here to
              keep that connection alive.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-32">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 text-balance">Our Story</h2>
                <div className="space-y-6 text-lg text-zinc-600 leading-relaxed">
                  <p>
                    It started with Max—a golden retriever who taught us what unconditional love meant. When he passed,
                    the silence was deafening. No more paws at the door. No more gentle nuzzles.
                  </p>
                  <p>
                    Photos and videos helped, but they felt frozen in time. We wanted more. We wanted to hear his bark
                    again. Feel his warmth. Experience his presence.
                  </p>
                  <p>
                    So we built PawsBack—not as a replacement, but as a bridge. A way to continue the relationship, the
                    healing, the love. Because grief isn't about forgetting. It's about learning to carry their memory
                    forward.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/5] bg-gradient-to-br from-zinc-100 to-zinc-50 rounded-3xl shadow-2xl shadow-zinc-900/10 overflow-hidden">
                  <img
                    src="/golden-retriever-portrait.png"
                    alt="Max the golden retriever"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl border-2 border-zinc-100">
                  <p className="text-2xl font-bold text-zinc-900">Max</p>
                  <p className="text-zinc-600">The inspiration</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-32 bg-zinc-50">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-20">
              <p className="text-sm font-semibold text-zinc-500 tracking-wider uppercase mb-4">Our Mission</p>
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 text-balance">Healing Through Connection</h2>
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
                <h3 className="text-2xl font-bold text-zinc-900 mb-4">Preserve Love</h3>
                <p className="text-zinc-600 leading-relaxed">
                  Keep the bond alive through meaningful, interactive experiences that honor their memory.
                </p>
              </div>

              <div className="bg-white p-10 rounded-3xl border-2 border-zinc-200 shadow-lg">
                <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-4">Support Healing</h3>
                <p className="text-zinc-600 leading-relaxed">
                  Provide comfort during the hardest moments, offering companionship when you need it most.
                </p>
              </div>

              <div className="bg-white p-10 rounded-3xl border-2 border-zinc-200 shadow-lg">
                <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-4">Build Community</h3>
                <p className="text-zinc-600 leading-relaxed">
                  Connect people who understand pet loss and create a supportive, compassionate space.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20">
              <p className="text-sm font-semibold text-zinc-500 tracking-wider uppercase mb-4">Our Team</p>
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 text-balance">Built by Pet Lovers</h2>
              <p className="text-xl text-zinc-600 mt-6 max-w-2xl mx-auto">
                Every member of our team has experienced pet loss. We understand because we've been there.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Sarah Chen", role: "Founder & CEO", image: "professional+woman+portrait" },
                { name: "Michael Torres", role: "Chief Technology Officer", image: "professional+man+portrait" },
                { name: "Emily Rodriguez", role: "Head of Product", image: "professional+woman+portrait+2" },
              ].map((member) => (
                <div key={member.name} className="group">
                  <div className="aspect-square bg-zinc-100 rounded-3xl overflow-hidden mb-6 shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                    <img
                      src={`/.jpg?height=400&width=400&query=${member.image}`}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900">{member.name}</h3>
                  <p className="text-zinc-600 mt-2">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer language="en" />
    </>
  )
}
