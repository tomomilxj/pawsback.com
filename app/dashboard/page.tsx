import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus } from "lucide-react"

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

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-semibold text-zinc-900">我的宠物</h1>
            <p className="text-zinc-600 mt-2">管理你的虚拟宠物伙伴</p>
          </div>
          <Link href="/create-pet">
            <Button className="bg-zinc-900 hover:bg-zinc-800">
              <Plus className="w-4 h-4 mr-2" />
              创建宠物
            </Button>
          </Link>
        </div>

        {pets && pets.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pets.map((pet) => (
              <Link key={pet.id} href={`/pet/${pet.id}`}>
                <Card className="border-zinc-200 hover:border-zinc-400 transition-colors cursor-pointer">
                  <CardHeader>
                    <div className="aspect-square bg-zinc-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                      {pet.image_url ? (
                        <img
                          src={pet.image_url || "/placeholder.svg"}
                          alt={pet.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-4xl">🐾</div>
                      )}
                    </div>
                    <CardTitle className="text-xl">{pet.name}</CardTitle>
                    <CardDescription>
                      {pet.personality === "warm" && "温暖"}
                      {pet.personality === "playful" && "调皮"}
                      {pet.personality === "calm" && "沉稳"} · {pet.species === "dog" ? "狗狗" : "猫咪"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-zinc-500">
                        {pet.status === "processing" && "生成中..."}
                        {pet.status === "ready" && "已就绪"}
                        {pet.status === "error" && "生成失败"}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <Card className="border-zinc-200">
            <CardContent className="flex flex-col items-center justify-center py-16">
              <div className="text-6xl mb-4">🐾</div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-2">还没有宠物</h3>
              <p className="text-zinc-600 mb-6">创建你的第一只虚拟宠物，开始疗愈之旅</p>
              <Link href="/create-pet">
                <Button className="bg-zinc-900 hover:bg-zinc-800">
                  <Plus className="w-4 h-4 mr-2" />
                  创建宠物
                </Button>
              </Link>
            </CardContent>
          </Card>
        )}

        {subscription && subscription.plan_type === "free" && (
          <Card className="border-zinc-200 mt-8 bg-zinc-50">
            <CardContent className="flex items-center justify-between py-6">
              <div>
                <h3 className="text-lg font-semibold text-zinc-900">升级至高级版</h3>
                <p className="text-zinc-600 text-sm">解锁更多宠物和高级功能</p>
              </div>
              <Link href="/#pricing">
                <Button variant="outline">查看方案</Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
