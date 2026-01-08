"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface SummoningOverlayProps {
  onComplete: () => void
}

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
}

export function SummoningOverlay({ onComplete }: SummoningOverlayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isPressed, setIsPressed] = useState(false)
  const [progress, setProgress] = useState(0)
  const particlesRef = useRef<Particle[]>([])
  const animationFrameRef = useRef<number>()
  const pressStartRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const updateSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    updateSize()
    window.addEventListener("resize", updateSize)

    // Initialize particles
    const particleCount = 100
    particlesRef.current = Array.from({ length: particleCount }, () => {
      const angle = Math.random() * Math.PI * 2
      const distance = 200 + Math.random() * 300
      return {
        x: canvas.width / 2 + Math.cos(angle) * distance,
        y: canvas.height / 2 + Math.sin(angle) * distance,
        vx: 0,
        vy: 0,
        radius: 2 + Math.random() * 3,
        opacity: 0.3 + Math.random() * 0.7,
      }
    })

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      particlesRef.current.forEach((particle) => {
        if (isPressed) {
          // Move towards center
          const dx = centerX - particle.x
          const dy = centerY - particle.y
          particle.vx = dx * 0.02
          particle.vy = dy * 0.02
        } else {
          // Slow down
          particle.vx *= 0.95
          particle.vy *= 0.95
        }

        particle.x += particle.vx
        particle.y += particle.vy

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(113, 113, 122, ${particle.opacity})`
        ctx.fill()

        // Draw connection to center
        if (isPressed) {
          const distance = Math.sqrt(Math.pow(centerX - particle.x, 2) + Math.pow(centerY - particle.y, 2))
          if (distance < 200) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(centerX, centerY)
            ctx.strokeStyle = `rgba(113, 113, 122, ${(1 - distance / 200) * 0.2})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      })

      // Draw center glow
      if (isPressed) {
        const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 100 * progress)
        gradient.addColorStop(0, `rgba(113, 113, 122, ${0.3 * progress})`)
        gradient.addColorStop(1, "rgba(113, 113, 122, 0)")
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", updateSize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [isPressed, progress])

  useEffect(() => {
    if (!isPressed) {
      pressStartRef.current = 0
      setProgress(0)
      return
    }

    pressStartRef.current = Date.now()
    const interval = setInterval(() => {
      const elapsed = Date.now() - pressStartRef.current
      const newProgress = Math.min(elapsed / 3000, 1) // 3 seconds to complete

      setProgress(newProgress)

      if (newProgress >= 1) {
        clearInterval(interval)
        setTimeout(() => {
          onComplete()
        }, 500)
      }
    }, 16)

    return () => clearInterval(interval)
  }, [isPressed, onComplete])

  const handleInteractionStart = () => {
    setIsPressed(true)
  }

  const handleInteractionEnd = () => {
    setIsPressed(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0.9 }}
      animate={{ opacity: progress >= 1 ? 0 : 0.9 - progress * 0.9 }}
      className="fixed inset-0 z-50 bg-white flex items-center justify-center cursor-pointer select-none"
      onMouseDown={handleInteractionStart}
      onMouseUp={handleInteractionEnd}
      onMouseLeave={handleInteractionEnd}
      onTouchStart={handleInteractionStart}
      onTouchEnd={handleInteractionEnd}
    >
      <canvas ref={canvasRef} className="absolute inset-0" />

      <div className="relative z-10 text-center">
        <motion.div
          animate={{
            scale: isPressed ? [1, 1.1, 1] : 1,
          }}
          transition={{
            duration: 1,
            repeat: isPressed ? Number.POSITIVE_INFINITY : 0,
          }}
          className="mb-8"
        >
          <div className="w-24 h-24 mx-auto rounded-full bg-zinc-400/20 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-zinc-400/40" />
          </div>
        </motion.div>

        <p className="text-zinc-600 text-lg mb-2">长按屏幕</p>
        <p className="text-zinc-400 text-sm">召唤你的宠物伙伴</p>

        {isPressed && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6">
            <div className="w-48 h-1 bg-zinc-200 rounded-full mx-auto overflow-hidden">
              <motion.div
                className="h-full bg-zinc-600"
                initial={{ width: "0%" }}
                animate={{ width: `${progress * 100}%` }}
              />
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
