"use client"

import { useEffect, useRef, useCallback } from "react"

interface AudioConfig {
  petId: string
  isPremium: boolean
  customVoicePath?: string
  defaultVoicePath?: string
}

interface VoiceUrls {
  excited: string
  playful: string
  content: string
}

export function useAudio({ petId, isPremium, customVoicePath, defaultVoicePath }: AudioConfig) {
  const audioCache = useRef<Map<string, HTMLAudioElement>>(new Map())
  const currentAudio = useRef<HTMLAudioElement | null>(null)

  // Generate voice URLs based on premium status
  const getVoiceUrls = useCallback((): VoiceUrls => {
    if (isPremium && customVoicePath) {
      return {
        excited: `${customVoicePath}/excited.mp3`,
        playful: `${customVoicePath}/playful.mp3`,
        content: `${customVoicePath}/content.mp3`,
      }
    }

    // Default voices
    const basePath = defaultVoicePath || "/audio/default"
    return {
      excited: `${basePath}/excited.mp3`,
      playful: `${basePath}/playful.mp3`,
      content: `${basePath}/content.mp3`,
    }
  }, [isPremium, customVoicePath, defaultVoicePath])

  // Preload audio files
  useEffect(() => {
    const urls = getVoiceUrls()

    Object.entries(urls).forEach(([emotion, url]) => {
      if (!audioCache.current.has(url)) {
        const audio = new Audio(url)
        audio.preload = "auto"
        audio.load()
        audioCache.current.set(url, audio)

        audio.addEventListener("error", () => {
          // Silently handle missing audio files on homepage demo
        })
      }
    })

    return () => {
      // Cleanup: pause and clear current audio
      if (currentAudio.current) {
        currentAudio.current.pause()
        currentAudio.current.currentTime = 0
      }
    }
  }, [getVoiceUrls])

  // Play audio by action type
  const playAudio = useCallback(
    async (action: "head_pet" | "belly_rub") => {
      // Stop current audio if playing
      if (currentAudio.current) {
        currentAudio.current.pause()
        currentAudio.current.currentTime = 0
      }

      const urls = getVoiceUrls()

      // Map actions to emotions
      let emotion: keyof VoiceUrls
      if (action === "head_pet") {
        emotion = Math.random() > 0.5 ? "playful" : "excited"
      } else {
        emotion = "content"
      }

      const url = urls[emotion]
      let audio = audioCache.current.get(url)

      if (!audio) {
        audio = new Audio(url)
        audio.preload = "auto"
        audioCache.current.set(url, audio)
      }

      currentAudio.current = audio

      try {
        audio.currentTime = 0
        await audio.play()
      } catch (error) {
        // Silently handle audio playback issues
      }
    },
    [getVoiceUrls],
  )

  // Stop current audio
  const stopAudio = useCallback(() => {
    if (currentAudio.current) {
      currentAudio.current.pause()
      currentAudio.current.currentTime = 0
    }
  }, [])

  return {
    playAudio,
    stopAudio,
  }
}
