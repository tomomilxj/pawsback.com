"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Plus, Trash2, Upload } from "lucide-react"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"

interface Memory {
  id: string
  memory_type: string
  title: string
  description: string | null
  image_url: string | null
  created_at: string
}

interface Pet {
  id: string
  name: string
}

export default function MemoriesView({ pet, initialMemories }: { pet: Pet; initialMemories: Memory[] }) {
  const [memories, setMemories] = useState<Memory[]>(initialMemories)
  const [showAddForm, setShowAddForm] = useState(false)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [memoryType, setMemoryType] = useState<"favorite_food" | "special_moment" | "custom">("special_moment")
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0])
    }
  }

  const handleAddMemory = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const supabase = createClient()
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (!user) throw new Error("请先登录")

      // Upload image if provided
      let imageUrl = null
      if (imageFile) {
        const fileExt = imageFile.name.split(".").pop()
        const fileName = `${user.id}/${pet.id}/${Date.now()}.${fileExt}`
        const { error: uploadError } = await supabase.storage.from("memory-images").upload(fileName, imageFile)

        if (uploadError) throw uploadError

        const {
          data: { publicUrl },
        } = supabase.storage.from("memory-images").getPublicUrl(fileName)
        imageUrl = publicUrl
      }

      // Create memory
      const { data: newMemory, error } = await supabase
        .from("memories")
        .insert({
          pet_id: pet.id,
          memory_type: memoryType,
          title,
          description,
          image_url: imageUrl,
        })
        .select()
        .single()

      if (error) throw error

      setMemories([newMemory, ...memories])
      setShowAddForm(false)
      setTitle("")
      setDescription("")
      setImageFile(null)
      router.refresh()
    } catch (error) {
      console.error("Failed to add memory:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDeleteMemory = async (memoryId: string) => {
    if (!confirm("确定要删除这个记忆吗？")) return

    try {
      const supabase = createClient()
      const { error } = await supabase.from("memories").delete().eq("id", memoryId)

      if (error) throw error

      setMemories(memories.filter((m) => m.id !== memoryId))
      router.refresh()
    } catch (error) {
      console.error("Failed to delete memory:", error)
    }
  }

  const getMemoryTypeLabel = (type: string) => {
    switch (type) {
      case "favorite_food":
        return "最爱的食物"
      case "special_moment":
        return "特殊时刻"
      default:
        return "自定义记忆"
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link
              href={`/pet/${pet.id}`}
              className="inline-flex items-center gap-2 text-zinc-700 hover:text-zinc-900 mb-4"
            >
              <ArrowLeft className="w-5 h-5" />
              返回
            </Link>
            <h1 className="text-3xl font-semibold text-zinc-900">与 {pet.name} 的记忆</h1>
            <p className="text-zinc-600 mt-2">记录那些珍贵的时刻</p>
          </div>
          <Button onClick={() => setShowAddForm(!showAddForm)} className="bg-zinc-900 hover:bg-zinc-800">
            <Plus className="w-4 h-4 mr-2" />
            添加记忆
          </Button>
        </div>

        {showAddForm && (
          <Card className="border-zinc-200 mb-8">
            <CardHeader>
              <CardTitle>添加新记忆</CardTitle>
              <CardDescription>为 {pet.name} 添加一个特殊的记忆</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAddMemory} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="memory-type">记忆类型</Label>
                  <select
                    id="memory-type"
                    value={memoryType}
                    onChange={(e) => setMemoryType(e.target.value as any)}
                    className="w-full border border-zinc-200 rounded-lg px-3 py-2 bg-white"
                  >
                    <option value="special_moment">特殊时刻</option>
                    <option value="favorite_food">最爱的食物</option>
                    <option value="custom">自定义记忆</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="title">标题</Label>
                  <Input
                    id="title"
                    type="text"
                    placeholder="例如：第一次去海边"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="border-zinc-200"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">描述</Label>
                  <Textarea
                    id="description"
                    placeholder="描述这个特殊的记忆..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                    className="border-zinc-200"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="memory-image">照片（可选）</Label>
                  <div className="border-2 border-dashed border-zinc-200 rounded-lg p-8 text-center hover:border-zinc-400 transition-colors">
                    <input
                      id="memory-image"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                    <label htmlFor="memory-image" className="cursor-pointer">
                      <Upload className="w-8 h-8 mx-auto mb-2 text-zinc-400" />
                      <p className="text-sm text-zinc-600">{imageFile ? imageFile.name : "点击上传照片"}</p>
                    </label>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button type="submit" className="bg-zinc-900 hover:bg-zinc-800" disabled={isLoading}>
                    {isLoading ? "添加中..." : "添加记忆"}
                  </Button>
                  <Button type="button" variant="outline" onClick={() => setShowAddForm(false)}>
                    取消
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {memories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {memories.map((memory) => (
              <Card key={memory.id} className="border-zinc-200 overflow-hidden">
                {memory.image_url && (
                  <div className="aspect-video bg-zinc-100 overflow-hidden">
                    <img
                      src={memory.image_url || "/placeholder.svg"}
                      alt={memory.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="text-xs text-zinc-500 mb-1">{getMemoryTypeLabel(memory.memory_type)}</div>
                      <CardTitle className="text-lg">{memory.title}</CardTitle>
                      {memory.description && (
                        <CardDescription className="mt-2 line-clamp-3">{memory.description}</CardDescription>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteMemory(memory.id)}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="border-zinc-200">
            <CardContent className="flex flex-col items-center justify-center py-16">
              <div className="text-6xl mb-4">📸</div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-2">还没有记忆</h3>
              <p className="text-zinc-600 mb-6">开始记录与 {pet.name} 的珍贵时刻</p>
              <Button onClick={() => setShowAddForm(true)} className="bg-zinc-900 hover:bg-zinc-800">
                <Plus className="w-4 h-4 mr-2" />
                添加第一个记忆
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
