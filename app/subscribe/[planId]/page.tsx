import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { PRODUCTS } from "@/lib/products"
import { SubscribeClient } from "./subscribe-client"

export default async function SubscribePage({ params }: { params: { planId: string } }) {
  const { planId } = params
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    redirect("/auth/login")
  }

  const product = PRODUCTS.find((p) => p.id === planId)
  if (!product) {
    redirect("/")
  }

  return <SubscribeClient product={product} planId={planId} />
}
