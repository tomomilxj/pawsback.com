import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import TalkInterface from "@/components/talk-interface"

export default async function TalkPage({ params }: { params: Promise<{ petId: string }> }) {
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

  return <TalkInterface pet={pet} />
}
