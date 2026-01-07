import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { petId, action, isPremium } = body

    console.log("[v0] Voice request received:", { petId, action, isPremium })

    // Simulate voice path selection
    const voicePath = isPremium ? `/audio/custom/${petId}` : "/audio/default"

    // Map action to emotion
    let emotion = "playful"
    if (action === "belly_rub") {
      emotion = "content"
    } else if (action === "head_pet") {
      emotion = Math.random() > 0.5 ? "playful" : "excited"
    }

    return NextResponse.json({
      success: true,
      voiceUrl: `${voicePath}/${emotion}.mp3`,
      emotion,
    })
  } catch (error) {
    console.error("[v0] Error in get-voice API:", error)
    return NextResponse.json({ success: false, error: "Failed to get voice" }, { status: 500 })
  }
}
