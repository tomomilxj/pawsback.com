"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Upload } from "lucide-react"

export default function CreatePetPage() {
  const [name, setName] = useState("")
  const [personality, setPersonality] = useState<"warm" | "playful" | "calm">("warm")
  const [species, setSpecies] = useState<"dog" | "cat">("dog")
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [videoFile, setVideoFile] = useState<File | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0])
    }
  }

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setVideoFile(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const supabase = createClient()

      // Get current user
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (!user) throw new Error("请先登录")

      // Upload image if provided
      let imageUrl = null
      if (imageFile) {
        const fileExt = imageFile.name.split(".").pop()
        const fileName = `${user.id}/${Date.now()}.${fileExt}`
        const { error: uploadError } = await supabase.storage.from("pet-images").upload(fileName, imageFile)

        if (uploadError) throw uploadError

        const {
          data: { publicUrl },
        } = supabase.storage.from("pet-images").getPublicUrl(fileName)
        imageUrl = publicUrl
      }

      // Create pet record
      const { data: pet, error: insertError } = await supabase
        .from("pets")
        .insert({
          user_id: user.id,
          name,
          personality,
          species,
          image_url: imageUrl,
          status: "processing",
        })
        .select()
        .single()

      if (insertError) throw insertError

      // Redirect to summoning page
      router.push(`/summon/${pet.id}`)
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "创建失败")
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <Card className="w-full max-w-2xl border-zinc-200">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-zinc-900">创建虚拟宠物</CardTitle>
          <CardDescription className="text-zinc-600">上传照片和信息，让AI重塑你的伙伴</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-zinc-700">
                宠物名字
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="输入宠物的名字"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="border-zinc-200"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-zinc-700">物种</Label>
              <RadioGroup value={species} onValueChange={(value) => setSpecies(value as "dog" | "cat")}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="dog" id="dog" />
                  <Label htmlFor="dog" className="font-normal cursor-pointer">
                    狗狗
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="cat" id="cat" />
                  <Label htmlFor="cat" className="font-normal cursor-pointer">
                    猫咪
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label className="text-zinc-700">性格</Label>
              <RadioGroup
                value={personality}
                onValueChange={(value) => setPersonality(value as "warm" | "playful" | "calm")}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="warm" id="warm" />
                  <Label htmlFor="warm" className="font-normal cursor-pointer">
                    温暖
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="playful" id="playful" />
                  <Label htmlFor="playful" className="font-normal cursor-pointer">
                    调皮
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="calm" id="calm" />
                  <Label htmlFor="calm" className="font-normal cursor-pointer">
                    沉稳
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="image" className="text-zinc-700">
                上传照片
              </Label>
              <div className="border-2 border-dashed border-zinc-200 rounded-lg p-8 text-center hover:border-zinc-400 transition-colors">
                <input id="image" type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                <label htmlFor="image" className="cursor-pointer">
                  <Upload className="w-8 h-8 mx-auto mb-2 text-zinc-400" />
                  <p className="text-sm text-zinc-600">{imageFile ? imageFile.name : "点击上传宠物照片"}</p>
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="video" className="text-zinc-700">
                上传视频（可选，用于声音克隆）
              </Label>
              <div className="border-2 border-dashed border-zinc-200 rounded-lg p-8 text-center hover:border-zinc-400 transition-colors">
                <input id="video" type="file" accept="video/*" onChange={handleVideoChange} className="hidden" />
                <label htmlFor="video" className="cursor-pointer">
                  <Upload className="w-8 h-8 mx-auto mb-2 text-zinc-400" />
                  <p className="text-sm text-zinc-600">{videoFile ? videoFile.name : "点击上传包含宠物叫声的视频"}</p>
                </label>
              </div>
            </div>

            {error && <p className="text-sm text-red-600">{error}</p>}

            <Button type="submit" className="w-full bg-zinc-900 hover:bg-zinc-800" disabled={isLoading}>
              {isLoading ? "创建中..." : "开始创建"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
