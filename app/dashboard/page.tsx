import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { DashboardClient } from "./dashboard-client"

export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()
  if (error || !user) {
    redirect("/auth/login")
  }

  // Get user's pets
  const { data: pets } = await supabase
    .from("pets")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })

  // Get user's subscription
  const { data: subscription } = await supabase.from("subscriptions").select("*").eq("user_id", user.id).single()

  return <DashboardClient pets={pets || []} subscription={subscription} />
}
