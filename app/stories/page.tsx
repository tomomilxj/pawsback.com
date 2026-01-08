import type { Metadata } from "next"
import { StoriesClientPage } from "./stories-client"

export const metadata: Metadata = {
  title: "User Stories - PawsBack",
  description: "Read heartwarming stories from pet owners who've found healing through PawsBack.",
}

export default function StoriesPage() {
  return <StoriesClientPage />
}
