import type { Metadata } from "next"
import { HowItWorksClientPage } from "./how-it-works-client"

export const metadata: Metadata = {
  title: "How It Works - PawsBack",
  description: "Learn how PawsBack brings your beloved pet back through AI technology and interactive experiences.",
}

export default function HowItWorksPage() {
  return <HowItWorksClientPage />
}
