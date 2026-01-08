"use client"

import Link from "next/link"

import { useState } from "react"

interface FAQItemProps {
  question: string
  answer: string
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-zinc-200 last:border-b-0">
      <button
        className="w-full py-6 flex items-center justify-between text-left group hover:bg-zinc-50/50 px-6 -mx-6 rounded-lg transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-base font-semibold text-zinc-900 pr-8">{question}</span>
        <svg
          className={`w-5 h-5 text-zinc-500 transition-transform duration-200 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-6 px-6 -mx-6 text-base text-zinc-600 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-200">
          {answer}
        </div>
      )}
    </div>
  )
}

export function FAQSection() {
  const faqs = [
    {
      question: "How does PawsBack help me heal from pet loss?",
      answer:
        "PawsBack recreates the interactive experiences you had with your pet, allowing you to continue feeling their companionship. Pet their head, feed them, and have conversations—these familiar daily interactions help you gradually accept the loss while maintaining an emotional connection.",
    },
    {
      question: "What interactions can I have with my virtual pet?",
      answer:
        "You can pet their head and belly for different reactions, feed and water them with animated responses, and have conversations where they respond based on their personality (warm, playful, or calm). Premium members can also create custom memories like uploading photos of favorite treats.",
    },
    {
      question: "What is AI voice cloning?",
      answer:
        "This is a Premium feature that analyzes videos of your pet to clone their unique voice characteristics. After processing, your virtual pet will respond using this cloned voice during interactions, creating a more authentic and emotionally resonant experience.",
    },
    {
      question: "What materials do I need to create a virtual pet?",
      answer:
        "Basic plan requires only photos, your pet's name, and personality selection to start interacting immediately. Premium plan adds voice cloning, which needs at least 30 seconds of video with clear pet sounds for optimal results.",
    },
    {
      question: "Is my pet's data secure?",
      answer:
        "Absolutely. All uploaded photos, videos, and voice data are encrypted and stored securely, used solely to create your exclusive virtual pet. We never share your data with third parties. You can delete all data anytime from account settings.",
    },
    {
      question: "Does the virtual pet change based on time of day?",
      answer:
        "Yes! Your virtual pet recognizes real-world time and adjusts conversations accordingly. Late night visits might trigger comforting or sleepy messages, while mornings bring more energetic responses. This creates a more natural companionship experience.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Of course. Cancel anytime from account settings with no cancellation fees. You'll continue enjoying member features until the current billing period ends. Your virtual pet and all data remain saved even after cancellation.",
    },
  ]

  return (
    <section id="faq" className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-sm font-medium text-zinc-500 tracking-wider uppercase mb-3">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">Questions & Answers</h2>
          <p className="text-lg text-zinc-600">Everything you need to know about PawsBack</p>
        </div>

        <div className="bg-white rounded-3xl border border-zinc-200 p-8 shadow-sm">
          <div className="divide-y divide-zinc-200">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-zinc-600 mb-4">Still have questions?</p>
          <Link
            href="#"
            className="text-zinc-900 font-medium hover:text-zinc-700 transition-colors inline-flex items-center gap-2"
          >
            Contact our support team
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
