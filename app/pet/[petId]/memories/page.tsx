import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import MemoriesView from "@/components/memories-view"

export default async function MemoriesPage({ params }: { params: Promise<{ petId: string }> }) {
  const { petId } = await params
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    redirect("/auth/login")
  }

  const { data: pet, error } = await supabase.from("pets").select("*").eq("id", petId).eq("user_id", user.id).single()

  if (error || !pet) {
    redirect("/dashboard")
  }

  // Get memories
  const { data: memories } = await supabase
    .from("memories")
    .select("*")
    .eq("pet_id", petId)
    .order("created_at", { ascending: false })

  return <MemoriesView pet={pet} initialMemories={memories || []} />
}
