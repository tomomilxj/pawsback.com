"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Sparkles, Volume2, Star, Upload, CheckCircle2 } from "lucide-react"

interface SubscriptionModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SubscriptionModal({ isOpen, onClose }: SubscriptionModalProps) {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && (file.type.startsWith("video/") || file.type.startsWith("audio/"))) {
      setUploadedFile(file)
    }
  }

  const handleSubscribe = async () => {
    if (!uploadedFile) return

    setIsProcessing(true)
    // 模拟处理
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsProcessing(false)

    // 这里应该调用后端 API
    console.log("[v0] Subscribing with file:", uploadedFile.name)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 pointer-events-none"
          >
            <div className="bg-card/80 backdrop-blur-2xl border border-border/40 rounded-3xl shadow-2xl max-w-md w-full p-8 pointer-events-auto relative max-h-[90vh] overflow-y-auto">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", damping: 15 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-foreground/5 rounded-2xl mb-4"
                >
                  <Sparkles className="w-8 h-8 text-foreground" />
                </motion.div>
                <h2 className="text-3xl font-light text-foreground mb-2 text-balance">Eternal Link Voice</h2>
                <p className="text-muted-foreground font-light text-pretty">每一声呼唤，都是它独有的指纹</p>
                <p className="text-sm text-muted-foreground/80 mt-2 text-pretty">
                  不要让记忆随风飘散，把它的声音带回来
                </p>
              </div>

              {/* Waveform comparison */}
              <div className="mb-8 grid grid-cols-2 gap-4">
                <div className="p-4 bg-foreground/5 rounded-2xl">
                  <p className="text-xs text-muted-foreground mb-3 text-center">普通版</p>
                  <div className="flex items-center justify-center gap-1 h-16">
                    {[...Array(12)].map((_, i) => (
                      <div key={i} className="w-1 bg-foreground/20 rounded-full" style={{ height: "8px" }} />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 text-center">通用叫声</p>
                </div>

                <div className="p-4 bg-foreground/10 rounded-2xl border border-foreground/20">
                  <p className="text-xs text-foreground mb-3 text-center font-medium">会员版</p>
                  <div className="flex items-center justify-center gap-1 h-16">
                    {[12, 20, 28, 16, 32, 24, 36, 20, 28, 16, 24, 12].map((height, i) => (
                      <motion.div
                        key={i}
                        className="w-1 bg-foreground rounded-full"
                        initial={{ height: 8 }}
                        animate={{ height: [8, height, 8] }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.1,
                        }}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-foreground mt-2 text-center font-medium">它的专属回响</p>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                <Feature icon={Volume2} title="AI 声音克隆" description="从视频中提取并重现宠物独特的声音特征" />
                <Feature icon={Star} title="三种情绪音效" description="兴奋、撒娇、满足 - 完整的情感表达" />
                <Feature icon={Sparkles} title="永久保存" description="云端存储，随时随地都能听到它的声音" />
              </div>

              {/* Video upload section */}
              <div className="mb-6">
                <label className="block text-sm text-muted-foreground mb-3 text-center">
                  上传包含宠物叫声的视频（至少 3 秒）
                </label>
                <div className="relative">
                  <input
                    type="file"
                    accept="video/*,audio/*"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="voice-upload"
                  />
                  <label
                    htmlFor="voice-upload"
                    className="flex flex-col items-center justify-center p-8 bg-foreground/5 border-2 border-dashed border-border/40 rounded-2xl cursor-pointer hover:bg-foreground/10 transition-all duration-300"
                  >
                    {uploadedFile ? (
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-center">
                        <CheckCircle2 className="w-12 h-12 text-foreground mb-3 mx-auto" />
                        <p className="text-sm text-foreground font-medium">{uploadedFile.name}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </motion.div>
                    ) : (
                      <>
                        <Upload className="w-12 h-12 text-muted-foreground mb-3" />
                        <p className="text-sm text-foreground">点击上传视频</p>
                        <p className="text-xs text-muted-foreground mt-1">支持 MP4, MOV, AVI 等格式</p>
                      </>
                    )}
                  </label>
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: uploadedFile ? 1.02 : 1 }}
                whileTap={{ scale: uploadedFile ? 0.98 : 1 }}
                onClick={handleSubscribe}
                disabled={!uploadedFile || isProcessing}
                className="w-full py-4 bg-foreground text-background rounded-2xl font-light hover:bg-foreground/90 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? "正在处理..." : "升级至 Premium"}
              </motion.button>

              <p className="text-xs text-muted-foreground text-center mt-4">7 天免费试用，随时可取消</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

function Feature({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-10 h-10 bg-foreground/5 rounded-xl flex items-center justify-center">
        <Icon className="w-5 h-5 text-foreground/60" />
      </div>
      <div>
        <h3 className="text-sm font-medium text-foreground mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground font-light">{description}</p>
      </div>
    </div>
  )
}
