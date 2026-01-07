"use client"

import { useState } from "react"
import { SubscriptionModal } from "@/components/subscription-modal"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-4xl font-light text-foreground">Eternal Link Voice</h1>
        <p className="text-muted-foreground max-w-md mx-auto text-pretty">
          让宠物的声音永远留存，用 AI 技术克隆它独特的叫声
        </p>
        <Button onClick={() => setIsModalOpen(true)} size="lg" className="text-lg px-8">
          开始体验
        </Button>
      </div>

      <SubscriptionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  )
}
