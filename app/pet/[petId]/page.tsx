import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import PetInteractionView from "@/components/pet-interaction-view"

export default async function PetPage({ params }: { params: Promise<{ petId: string }> }) {
  const { petId } = await params
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    redirect("/auth/login")
  }

  // Get pet data
  const { data: pet, error } = await supabase.from("pets").select("*").eq("id", petId).eq("user_id", user.id).single()

  if (error || !pet) {
    redirect("/dashboard")
  }

  // Get subscription data
  const { data: subscription } = await supabase.from("subscriptions").select("*").eq("user_id", user.id).single()

  return <PetInteractionView pet={pet} subscription={subscription} />
}
