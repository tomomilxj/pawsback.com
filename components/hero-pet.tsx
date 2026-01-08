"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const pets = [
  {
    id: 1,
    image: "/smiling-golden-retriever.jpg",
    alt: "Smiling Golden Retriever",
    caption: "Your companion is waiting to come back",
  },
  {
    id: 2,
    image: "/happy-cat-portrait.jpg",
    alt: "Happy Cat Portrait",
    caption: "Every purr, every moment, forever",
  },
  {
    id: 3,
    image: "/playful-dog.jpg",
    alt: "Playful Dog",
    caption: "Ready to play again, just like before",
  },
  {
    id: 4,
    image: "/affectionate-cat.jpg",
    alt: "Affectionate Cat",
    caption: "Their warmth never truly left",
  },
  {
    id: 5,
    image: "/cute-beagle-puppy-smiling.jpg",
    alt: "Cute Beagle Puppy",
    caption: "That playful spirit, always alive",
  },
  {
    id: 6,
    image: "/fluffy-persian-cat-relaxing.jpg",
    alt: "Fluffy Persian Cat",
    caption: "Peaceful moments together again",
  },
  {
    id: 7,
    image: "/happy-labrador-running.jpg",
    alt: "Happy Labrador",
    caption: "Joy and energy, just like you remember",
  },
  {
    id: 8,
    image: "/cute-kitten-playing.jpg",
    alt: "Cute Kitten Playing",
    caption: "Mischief and love, in perfect harmony",
  },
]

export function HeroPet() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % pets.length)
        setIsAnimating(false)
      }, 600)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const currentPet = pets[currentIndex]

  return (
    <div className="w-full h-[600px] relative overflow-hidden">
      {/* Premium background with depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 via-white to-amber-50/30 rounded-3xl" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-200/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-orange-200/20 rounded-full blur-[120px] animate-pulse delay-1000" />

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-zinc-900/5 rounded-3xl" />

      {/* Main image container with 3D-like layering */}
      <div className="absolute inset-0 flex items-center justify-center p-12">
        <div className="relative w-full max-w-2xl aspect-[4/3]">
          {/* Multiple shadow layers for depth */}
          <div className="absolute inset-0 bg-zinc-900/5 rounded-3xl blur-3xl translate-y-8 scale-95" />
          <div className="absolute inset-0 bg-zinc-900/10 rounded-3xl blur-2xl translate-y-4 scale-98" />

          {/* Image frame with stacked borders */}
          <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-white shadow-2xl shadow-zinc-900/20">
            {/* Inner border for luxury feel */}
            <div className="absolute inset-2 border-2 border-white/60 rounded-2xl pointer-events-none z-10" />

            {/* Image with fade transition */}
            <div
              className={`relative w-full h-full transition-all duration-600 ${
                isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            >
              <Image
                src={currentPet.image || "/placeholder.svg"}
                alt={currentPet.alt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 896px"
              />

              {/* Subtle gradient overlay for sophistication */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/30 via-transparent to-transparent" />
            </div>

            {/* Shimmer effect on transition */}
            {isAnimating && (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
            )}
          </div>

          {/* Floating accent elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-200/40 to-orange-200/40 rounded-full blur-2xl" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-zinc-200/40 to-zinc-100/40 rounded-full blur-2xl" />
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {pets.map((pet, index) => (
          <button
            key={pet.id}
            onClick={() => {
              setIsAnimating(true)
              setTimeout(() => {
                setCurrentIndex(index)
                setIsAnimating(false)
              }, 300)
            }}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex ? "w-12 h-3 bg-zinc-900" : "w-3 h-3 bg-zinc-400 hover:bg-zinc-600"
            }`}
            aria-label={`View ${pet.alt}`}
          />
        ))}
      </div>

      {/* Premium caption with fade transition */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 max-w-xl px-4">
        <div
          className={`bg-white/95 backdrop-blur-2xl px-10 py-5 rounded-full border border-zinc-200/60 shadow-2xl shadow-zinc-900/10 transition-all duration-600 ${
            isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
        >
          <p className="text-sm font-medium text-zinc-700 text-center tracking-wide leading-relaxed">
            {currentPet.caption}
          </p>
        </div>
      </div>
    </div>
  )
}
