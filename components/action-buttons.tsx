"use client"

import { Button } from "@/components/ui/button"
import { Utensils, MessageCircle } from "lucide-react"

interface ActionButtonsProps {
  onFeed: () => void
  onTalk: () => void
  subscription: { plan_type: string } | null
}

export default function ActionButtons({ onFeed, onTalk, subscription }: ActionButtonsProps) {
  const isPremium = subscription?.plan_type === "premium" || subscription?.plan_type === "basic"

  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-4">
      <Button
        onClick={onFeed}
        className="bg-white hover:bg-zinc-50 text-zinc-900 border border-zinc-200 shadow-lg rounded-full px-6"
      >
        <Utensils className="w-5 h-5 mr-2" />
        喂食
      </Button>
      <Button
        onClick={onTalk}
        className="bg-zinc-900 hover:bg-zinc-800 text-white shadow-lg rounded-full px-6"
        disabled={!isPremium}
      >
        <MessageCircle className="w-5 h-5 mr-2" />
        对话
        {!isPremium && <span className="ml-2 text-xs opacity-70">(需订阅)</span>}
      </Button>
    </div>
  )
}
