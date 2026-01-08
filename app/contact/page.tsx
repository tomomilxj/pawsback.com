"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
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
      <Navigation language="en" onLanguageChange={() => {}} />

      <main className="min-h-screen bg-white pt-32">
        {/* Hero */}
        <section className="py-24 bg-gradient-to-b from-zinc-50 to-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-zinc-900 mb-8 text-balance">
              Get In
              <br />
              <span className="bg-gradient-to-r from-zinc-600 to-zinc-800 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 leading-relaxed">
              Have questions? We're here to help you bring your pet back
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-5 gap-16">
              {/* Contact Info */}
              <div className="md:col-span-2">
                <h2 className="text-3xl font-bold text-zinc-900 mb-8">Contact Information</h2>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-zinc-900 mb-1">Email</p>
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
                      <p className="font-semibold text-zinc-900 mb-1">Phone</p>
                      <p className="text-zinc-600">Available Mon-Fri, 9AM-6PM PST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-zinc-900 mb-1">Location</p>
                      <p className="text-zinc-600">
                        San Francisco, CA
                        <br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-8 bg-zinc-50 rounded-2xl border-2 border-zinc-200">
                  <h3 className="font-semibold text-zinc-900 mb-4">Response Time</h3>
                  <p className="text-zinc-600 leading-relaxed">
                    We typically respond within 24 hours. For urgent inquiries, please email us directly.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="md:col-span-3">
                <div className="bg-white border-2 border-zinc-200 rounded-3xl p-10 shadow-xl">
                  <h2 className="text-3xl font-bold text-zinc-900 mb-8">Send Us a Message</h2>

                  {submitted && (
                    <div className="mb-6 p-4 bg-emerald-50 border-2 border-emerald-200 rounded-xl text-emerald-800">
                      Thank you for your message! We'll get back to you soon.
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-zinc-700 mb-2 block">
                          Your Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="border-zinc-200 h-12"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-zinc-700 mb-2 block">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
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
                        placeholder="How can we help?"
                        required
                        className="border-zinc-200 h-12"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-zinc-700 mb-2 block">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your inquiry..."
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
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer language="en" />
    </>
  )
}
