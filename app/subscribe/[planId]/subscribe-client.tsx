"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Checkout from "@/components/checkout"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/i18n"

interface Product {
  id: string
  name: string
  description: string
  priceInCents: number
}

export function SubscribeClient({ product, planId }: { product: Product; planId: string }) {
  const { language } = useLanguage()
  const t = translations[language].pricing

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-12">
        <Link href="/#pricing" className="inline-flex items-center gap-2 text-zinc-700 hover:text-zinc-900 mb-8">
          <ArrowLeft className="w-5 h-5" />
          {t.backToPricing || "Back to Pricing"}
        </Link>

        <div className="max-w-2xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-semibold text-zinc-900 mb-2">{product.name}</h1>
            <p className="text-zinc-600">{product.description}</p>
            <div className="mt-4">
              <span className="text-4xl font-bold text-zinc-900">${(product.priceInCents / 100).toFixed(2)}</span>
              <span className="text-zinc-600">{t.perMonth}</span>
            </div>
          </div>

          <Checkout productId={planId} />
        </div>
      </div>
    </div>
  )
}
