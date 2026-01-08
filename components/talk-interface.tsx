"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Send } from "lucide-react"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"

interface Pet {
  id: string
  name: string
  personality: "warm" | "playful" | "calm"
}

interface Message {
  id: string
  role: "user" | "pet"
  content: string
  timestamp: Date
}

export default function TalkInterface({ pet }: { pet: Pet }) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Initial greeting
    const hour = new Date().getHours()
    let greeting = ""

    if (hour >= 0 && hour < 6) {
      greeting = getResponse("你还没睡吗，主人？")
    } else if (hour >= 6 && hour < 12) {
      greeting = getResponse("早上好，主人！")
    } else if (hour >= 12 && hour < 18) {
      greeting = getResponse("下午好，主人！")
    } else {
      greeting = getResponse("晚上好，主人！")
    }

    setMessages([
      {
        id: "1",
        role: "pet",
        content: greeting,
        timestamp: new Date(),
      },
    ])
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const getResponse = (userMessage: string): string => {
    const responses = {
      warm: {
        default: "我一直都在这里陪着你。无论发生什么，我都不会离开。",
        love: "我也很爱你，主人。你是我最重要的人。",
        miss: "我也好想你...虽然我们不能像以前那样在一起，但我的心永远和你在一起。",
        happy: "看到你开心，我也很开心。这就是我最大的幸福。",
        sad: "别难过，主人。我会一直陪伴你，守护你的笑容。",
      },
      playful: {
        default: "哇！主人想和我聊天！我超开心的！",
        love: "我也爱你！爱你爱你超级爱你！",
        miss: "我也超想你的！！每天都在想！",
        happy: "耶！一起开心！一起玩！",
        sad: "主人不要难过嘛！我陪你玩，保证你会开心的！",
      },
      calm: {
        default: "主人，我在这里静静地陪着你。",
        love: "我也爱你，主人。这份感情会永远存在。",
        miss: "我明白...我也在想念那些时光。但我们的羁绊不会消失。",
        happy: "能看到你的笑容，是我最欣慰的事。",
        sad: "主人...难过的时候，请记得我永远在这里。你并不孤单。",
      },
    }

    const lowerMessage = userMessage.toLowerCase()
    if (lowerMessage.includes("爱你") || lowerMessage.includes("喜欢")) {
      return responses[pet.personality].love
    }
    if (lowerMessage.includes("想") || lowerMessage.includes("念")) {
      return responses[pet.personality].miss
    }
    if (lowerMessage.includes("开心") || lowerMessage.includes("高兴")) {
      return responses[pet.personality].happy
    }
    if (lowerMessage.includes("难过") || lowerMessage.includes("伤心")) {
      return responses[pet.personality].sad
    }

    return responses[pet.personality].default
  }

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response delay
    setTimeout(
      async () => {
        const petResponse = getResponse(input)
        const petMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: "pet",
          content: petResponse,
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, petMessage])
        setIsLoading(false)

        // Play voice
        if (audioRef.current) {
          audioRef.current.src = `/audio/${pet.id}/talk.mp3`
          audioRef.current.play().catch(() => {})
        }

        // Record interaction
        const supabase = createClient()
        await supabase.from("interactions").insert({
          pet_id: pet.id,
          user_id: (await supabase.auth.getUser()).data.user?.id,
          interaction_type: "talk",
          response_text: petResponse,
        })
      },
      1000 + Math.random() * 1000,
    )
  }

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-zinc-200">
        <Link href={`/pet/${pet.id}`} className="flex items-center gap-2 text-zinc-700 hover:text-zinc-900">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-xl font-semibold text-zinc-900">与 {pet.name} 对话</h1>
        <div className="w-10" />
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                message.role === "user" ? "bg-zinc-900 text-white" : "bg-zinc-100 text-zinc-900"
              }`}
            >
              <p className="text-sm">{message.content}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-zinc-100 rounded-2xl px-4 py-3">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: "0s" }} />
                <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t border-zinc-200 p-4">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="输入消息..."
            className="flex-1 border-zinc-200"
            disabled={isLoading}
          />
          <Button onClick={handleSend} disabled={isLoading || !input.trim()} className="bg-zinc-900 hover:bg-zinc-800">
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <audio ref={audioRef} />
    </div>
  )
}
