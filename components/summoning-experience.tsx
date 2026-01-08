"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"

interface Pet {
  id: string
  name: string
  personality: string
  species: string
  status: string
}

export default function SummoningExperience({ pet }: { pet: Pet }) {
  const [isPressed, setIsPressed] = useState(false)
  const [progress, setProgress] = useState(0)
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([])
  const router = useRouter()

  useEffect(() => {
    // Generate particles
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }))
    setParticles(newParticles)
  }, [])

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isPressed && progress < 100) {
      interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + 2
          if (newProgress >= 100) {
            handleSummoningComplete()
            return 100
          }
          return newProgress
        })
      }, 50)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isPressed, progress])

  const handleSummoningComplete = async () => {
    // Update pet status to ready
    const supabase = createClient()
    await supabase.from("pets").update({ status: "ready" }).eq("id", pet.id)

    // Redirect to pet page after a short delay
    setTimeout(() => {
      router.push(`/pet/${pet.id}`)
    }, 1000)
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 flex items-center justify-center overflow-hidden">
      {/* Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animation: isPressed
              ? `converge ${2 - progress / 50}s ease-in-out forwards`
              : "float 4s ease-in-out infinite",
            animationDelay: `${particle.id * 0.02}s`,
            opacity: progress > 0 ? Math.max(0.3, 1 - progress / 100) : 0.6,
          }}
        />
      ))}

      {/* Center content */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-semibold text-white mb-4">召唤 {pet.name}</h1>
        <p className="text-zinc-400 mb-12">长按下方圆圈，用你的心引导星光汇聚</p>

        {/* Summon circle */}
        <div className="relative flex items-center justify-center">
          <div
            className={`w-32 h-32 rounded-full border-4 border-white/30 flex items-center justify-center cursor-pointer transition-all duration-300 ${
              isPressed ? "scale-110 border-white/60" : "scale-100"
            }`}
            onMouseDown={() => setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}
            onMouseLeave={() => setIsPressed(false)}
            onTouchStart={() => setIsPressed(true)}
            onTouchEnd={() => setIsPressed(false)}
          >
            <div
              className="w-28 h-28 rounded-full bg-white/10 flex items-center justify-center"
              style={{
                background: `conic-gradient(white ${progress}%, transparent ${progress}%)`,
              }}
            >
              <div className="w-24 h-24 rounded-full bg-zinc-900 flex items-center justify-center">
                <span className="text-white text-2xl font-semibold">{Math.round(progress)}%</span>
              </div>
            </div>
          </div>

          {/* Glow effect */}
          {isPressed && (
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)",
                animation: "pulse 1s ease-in-out infinite",
              }}
            />
          )}
        </div>

        {progress === 100 && <p className="text-white mt-8 animate-fade-in">召唤完成！正在进入...</p>}
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        @keyframes converge {
          to {
            left: 50%;
            top: 50%;
            opacity: 0;
          }
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-in;
        }
      `}</style>
    </div>
  )
}
