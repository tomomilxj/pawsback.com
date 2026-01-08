"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface ActionZoneProps {
  onInteraction: (action: "head_pet" | "belly_rub") => void
  isPremium: boolean
}

export function ActionZone({ onInteraction, isPremium }: ActionZoneProps) {
  const [activeZone, setActiveZone] = useState<string | null>(null)

  const handleZoneClick = (zone: "head_pet" | "belly_rub") => {
    setActiveZone(zone)
    onInteraction(zone)

    setTimeout(() => {
      setActiveZone(null)
    }, 1000)
  }

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gradient-to-b from-zinc-50 to-white">
      {/* Pet illustration placeholder - replaced with 3D model later */}
      <div className="relative">
        <svg width="300" height="400" viewBox="0 0 300 400" className="drop-shadow-lg">
          {/* Simple pet silhouette */}
          <defs>
            <filter id="blur">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
            </filter>
          </defs>

          {/* Body */}
          <ellipse cx="150" cy="250" rx="80" ry="100" fill="#e4e4e7" />

          {/* Head */}
          <circle cx="150" cy="120" r="70" fill="#e4e4e7" />

          {/* Ears */}
          <ellipse cx="110" cy="70" rx="25" ry="40" fill="#d4d4d8" transform="rotate(-20 110 70)" />
          <ellipse cx="190" cy="70" rx="25" ry="40" fill="#d4d4d8" transform="rotate(20 190 70)" />

          {/* Eyes */}
          <circle cx="130" cy="110" r="8" fill="#71717a" />
          <circle cx="170" cy="110" r="8" fill="#71717a" />
          <circle cx="132" cy="108" r="3" fill="white" />
          <circle cx="172" cy="108" r="3" fill="white" />

          {/* Nose */}
          <path d="M 150 130 L 145 140 L 155 140 Z" fill="#71717a" />

          {/* Legs */}
          <rect x="110" y="320" width="30" height="60" rx="15" fill="#d4d4d8" />
          <rect x="160" y="320" width="30" height="60" rx="15" fill="#d4d4d8" />
        </svg>

        {/* Interactive zones overlay */}
        <svg className="absolute inset-0 pointer-events-none" width="300" height="400" viewBox="0 0 300 400">
          {/* Head zone indicator */}
          {activeZone === "head_pet" && (
            <motion.circle
              cx="150"
              cy="120"
              r="80"
              fill="rgba(113, 113, 122, 0.1)"
              stroke="#71717a"
              strokeWidth="2"
              strokeDasharray="5,5"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
            />
          )}

          {/* Belly zone indicator */}
          {activeZone === "belly_rub" && (
            <motion.ellipse
              cx="150"
              cy="250"
              rx="90"
              ry="110"
              fill="rgba(113, 113, 122, 0.1)"
              stroke="#71717a"
              strokeWidth="2"
              strokeDasharray="5,5"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
            />
          )}
        </svg>

        {/* Clickable zones - invisible but interactive */}
        <div className="absolute inset-0">
          {/* Head zone */}
          <button
            onClick={() => handleZoneClick("head_pet")}
            className="absolute top-[50px] left-[80px] w-[140px] h-[140px] rounded-full hover:bg-zinc-200/20 transition-colors cursor-pointer"
            aria-label="Pet head"
          />

          {/* Belly zone */}
          <button
            onClick={() => handleZoneClick("belly_rub")}
            className="absolute top-[180px] left-[70px] w-[160px] h-[180px] rounded-full hover:bg-zinc-200/20 transition-colors cursor-pointer"
            aria-label="Rub belly"
          />
        </div>
      </div>

      {/* Interaction feedback */}
      {activeZone && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute bottom-32 glass-effect px-6 py-3 rounded-full"
        >
          <p className="text-sm text-zinc-600">{activeZone === "head_pet" ? "摸摸头~" : "揉肚肚~"}</p>
        </motion.div>
      )}

      {/* Premium badge */}
      {isPremium && (
        <div className="absolute top-8 right-8 glass-effect px-4 py-2 rounded-full">
          <p className="text-xs text-zinc-600 font-medium">Premium Member</p>
        </div>
      )}
    </div>
  )
}
