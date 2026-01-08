"use client"

import type React from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/i18n"

export default function ContactPage() {
  const { language, setLanguage } = useLanguage()
  const t = translations[language].contact

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })

    setTimeout(() => setSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

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

        {/* Contact Form & Info */}
        <section className="py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-5 gap-16">
              {/* Contact Info */}
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold text-zinc-900 mb-8">{t.infoTitle}</h2>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-zinc-900 mb-1">{t.emailTitle}</p>
                      <a
                        href="mailto:liuxijing1207@163.com"
                        className="text-zinc-600 hover:text-zinc-900 transition-colors"
                      >
                        liuxijing1207@163.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-zinc-900 mb-1">{t.socialTitle}</p>
                      <p className="text-zinc-600">@pawsback</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-8 bg-zinc-50 rounded-2xl border-2 border-zinc-200">
                  <h3 className="font-semibold text-zinc-900 mb-4">Response Time</h3>
                  <p className="text-zinc-600 leading-relaxed">{t.responseTime}</p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="md:col-span-3">
                <div className="bg-white border-2 border-zinc-200 rounded-3xl p-10 shadow-xl">
                  <h2 className="text-3xl font-bold text-zinc-900 mb-8">{t.formTitle}</h2>

                  {submitted && (
                    <div className="mb-6 p-4 bg-emerald-50 border-2 border-emerald-200 rounded-xl text-emerald-800">
                      {t.submitSuccess}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-zinc-700 mb-2 block">
                          {t.nameLabel}
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={t.namePlaceholder}
                          required
                          className="border-zinc-200 h-12"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-zinc-700 mb-2 block">
                          {t.emailLabel}
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={t.emailPlaceholder}
                          required
                          className="border-zinc-200 h-12"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-zinc-700 mb-2 block">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        required
                        className="border-zinc-200 h-12"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-zinc-700 mb-2 block">
                        {t.messageLabel}
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t.messagePlaceholder}
                        required
                        rows={6}
                        className="border-zinc-200 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-14 text-base font-semibold bg-zinc-900 hover:bg-zinc-800"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : t.submitButton}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer language={language} />
    </>
  )
}
