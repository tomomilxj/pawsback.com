"use client"

import { useState, useRef, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import PetModel from "./pet-model"
import DialogueBubble from "./dialogue-bubble"
import ActionButtons from "./action-buttons"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import { ArrowLeft, Heart } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"

interface Pet {
  id: string
  name: string
  personality: "warm" | "playful" | "calm"
  species: "dog" | "cat"
  image_url: string | null
  status: string
}

interface Subscription {
  plan_type: "free" | "basic" | "premium"
  status: string
}

export default function PetInteractionView({ pet, subscription }: { pet: Pet; subscription: Subscription | null }) {
  const [activeZone, setActiveZone] = useState<"head" | "belly" | null>(null)
  const [dialogue, setDialogue] = useState<string>("")
  const [showDialogue, setShowDialogue] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const router = useRouter()

  useEffect(() => {
    // Update time every minute
    const interval = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Show greeting on mount
    const hour = currentTime.getHours()
    let greeting = ""

    if (hour >= 0 && hour < 6) {
      greeting = getDialogueByPersonality("late_night")
    } else if (hour >= 6 && hour < 12) {
      greeting = getDialogueByPersonality("morning")
    } else if (hour >= 12 && hour < 18) {
      greeting = getDialogueByPersonality("afternoon")
    } else {
      greeting = getDialogueByPersonality("evening")
    }

    setDialogue(greeting)
    setShowDialogue(true)

    const timer = setTimeout(() => setShowDialogue(false), 4000)
    return () => clearTimeout(timer)
  }, [])

  const getDialogueByPersonality = (type: string): string => {
    const dialogues = {
      warm: {
        morning: "早安，主人！今天也要元气满满哦！",
        afternoon: "主人回来啦，我好想你！",
        evening: "晚上好，主人。今天过得怎么样？",
        late_night: "主人还没睡吗？我会一直陪着你的...",
        pet_head: "嗯...好舒服啊，最喜欢主人摸我了！",
        pet_belly: "哈哈，好痒！主人轻一点嘛~",
        feed: "谢谢主人！这是我最喜欢的！",
      },
      playful: {
        morning: "主人主人！快起来陪我玩！",
        afternoon: "主人！！我等你好久啦！",
        evening: "耶！终于可以一起玩了！",
        late_night: "主人还不睡吗？那我们继续玩！",
        pet_head: "哇！再来一次！再来一次！",
        pet_belly: "哈哈哈！好痒好痒！",
        feed: "哇！是我最爱的！谢谢主人！",
      },
      calm: {
        morning: "早安，主人。新的一天开始了。",
        afternoon: "主人回来了...我一直在这里等你。",
        evening: "晚安，主人。今天辛苦了。",
        late_night: "夜深了，主人。我会守护着你的梦。",
        pet_head: "嗯...真好。主人的手很温暖...",
        pet_belly: "呼...感觉很放松呢...",
        feed: "谢谢你，主人。我会好好吃的。",
      },
    }

    return dialogues[pet.personality]?.[type] || "..."
  }

  const handleHeadTouch = async () => {
    setActiveZone("head")
    const dialogueText = getDialogueByPersonality("pet_head")
    setDialogue(dialogueText)
    setShowDialogue(true)

    // Play voice based on subscription
    if (subscription?.plan_type !== "free") {
      // Play cloned voice
      playVoice("happy")
    }

    // Record interaction
    await recordInteraction("pet_head", dialogueText)

    setTimeout(() => {
      setActiveZone(null)
      setShowDialogue(false)
    }, 3000)
  }

  const handleBellyTouch = async () => {
    setActiveZone("belly")
    const dialogueText = getDialogueByPersonality("pet_belly")
    setDialogue(dialogueText)
    setShowDialogue(true)

    // Play voice based on subscription
    if (subscription?.plan_type !== "free") {
      playVoice("excited")
    }

    // Record interaction
    await recordInteraction("pet_belly", dialogueText)

    setTimeout(() => {
      setActiveZone(null)
      setShowDialogue(false)
    }, 3000)
  }

  const handleFeed = async () => {
    const dialogueText = getDialogueByPersonality("feed")
    setDialogue(dialogueText)
    setShowDialogue(true)

    // Play voice
    if (subscription?.plan_type !== "free") {
      playVoice("satisfied")
    }

    // Record interaction
    await recordInteraction("feed", dialogueText)

    setTimeout(() => setShowDialogue(false), 3000)
  }

  const handleTalk = () => {
    // Open dialogue modal or start conversation
    router.push(`/pet/${pet.id}/talk`)
  }

  const playVoice = (emotion: "happy" | "excited" | "satisfied") => {
    // In production, this would play the cloned voice
    // For now, we'll use placeholder logic
    if (audioRef.current) {
      audioRef.current.src = `/audio/${pet.id}/${emotion}.mp3`
      audioRef.current.play().catch(() => {
        // Audio play failed, ignore
      })
    }
  }

  const recordInteraction = async (type: string, responseText: string) => {
    const supabase = createClient()
    await supabase.from("interactions").insert({
      pet_id: pet.id,
      user_id: (await supabase.auth.getUser()).data.user?.id,
      interaction_type: type,
      response_text: responseText,
    })
  }

  return (
    <div className="relative h-screen w-full bg-white overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 p-6 flex items-center justify-between bg-gradient-to-b from-white to-transparent">
        <Link href="/dashboard" className="flex items-center gap-2 text-zinc-700 hover:text-zinc-900">
          <ArrowLeft className="w-5 h-5" />
          <span>返回</span>
        </Link>
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-zinc-900">{pet.name}</h1>
          <p className="text-sm text-zinc-600">
            {pet.personality === "warm" && "温暖"}
            {pet.personality === "playful" && "调皮"}
            {pet.personality === "calm" && "沉稳"}
          </p>
        </div>
        <Link href={`/pet/${pet.id}/memories`}>
          <Button variant="ghost" size="sm" className="text-zinc-700 hover:text-zinc-900">
            <Heart className="w-5 h-5 mr-2" />
            记忆
          </Button>
        </Link>
      </div>

      {/* 3D Pet Model */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          <PetModel
            species={pet.species}
            activeZone={activeZone}
            onHeadClick={handleHeadTouch}
            onBellyClick={handleBellyTouch}
          />
          <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI / 2} />
          <Environment preset="sunset" />
        </Canvas>
      </div>

      {/* Dialogue Bubble */}
      {showDialogue && <DialogueBubble text={dialogue} personality={pet.personality} />}

      {/* Action Buttons */}
      <ActionButtons onFeed={handleFeed} onTalk={handleTalk} subscription={subscription} />

      {/* Hidden audio element */}
      <audio ref={audioRef} />
    </div>
  )
}
