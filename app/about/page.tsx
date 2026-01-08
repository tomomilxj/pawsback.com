import type { Metadata } from "next"
import { AboutClientPage } from "./about-client"

export const metadata: Metadata = {
  title: "About Us - PawsBack",
  description: "Learn about our mission to help pet owners heal through companionship and connection.",
}

export default function AboutPage() {
  return <AboutClientPage />
}
