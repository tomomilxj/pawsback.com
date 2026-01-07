"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Upload, CheckCircle2, Sparkles } from "lucide-react"

interface PaywallModalProps {
  isOpen: boolean
  onClose: () => void
  onSubscribe: (file: File) => Promise<void>
}

export function PaywallModal({ isOpen, onClose, onSubscribe }: PaywallModalProps) {
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
    try {
      await onSubscribe(uploadedFile)
    } finally {
      setIsProcessing(false)
    }
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
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 pointer-events-none"
          >
            <div className="glass-effect border border-zinc-200/40 rounded-3xl max-w-lg w-full p-8 pointer-events-auto relative max-h-[90vh] overflow-y-auto">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-zinc-400 hover:text-zinc-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.1, type: "spring", damping: 15 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-zinc-100 rounded-2xl mb-4"
                >
                  <Sparkles className="w-8 h-8 text-zinc-600" />
                </motion.div>
                <h2 className="text-2xl font-light text-zinc-800 mb-2 text-balance">克隆专属声音</h2>
                <p className="text-zinc-500 text-sm leading-relaxed text-pretty">
                  上传包含宠物叫声的视频，AI 将提取并重现它独特的声音特征
                </p>
              </div>

              {/* Waveform comparison */}
              <div className="mb-8 grid grid-cols-2 gap-4">
                {/* Default voice */}
                <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
                  <p className="text-xs text-zinc-400 mb-3 text-center font-medium">普通版本</p>
                  <div className="flex items-center justify-center gap-1 h-16">
                    {[8, 12, 8, 10, 8, 12, 8, 10, 8, 12, 8, 10].map((height, i) => (
                      <div key={i} className="w-1 bg-zinc-300 rounded-full" style={{ height: `${height}px` }} />
                    ))}
                  </div>
                  <p className="text-xs text-zinc-400 mt-3 text-center">通用音效</p>
                </div>

                {/* Premium voice */}
                <div className="p-4 bg-white rounded-2xl border-2 border-zinc-300 shadow-sm">
                  <p className="text-xs text-zinc-700 mb-3 text-center font-medium">会员专属</p>
                  <div className="flex items-center justify-center gap-1 h-16">
                    {[12, 20, 28, 16, 32, 24, 36, 20, 28, 16, 24, 12].map((height, i) => (
                      <motion.div
                        key={i}
                        className="w-1 bg-zinc-600 rounded-full"
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
                  <p className="text-xs text-zinc-700 mt-3 text-center font-medium">它的专属回响</p>
                </div>
              </div>

              {/* Features list */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 text-zinc-600" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-700 font-medium">AI 声音克隆</p>
                    <p className="text-xs text-zinc-500 leading-relaxed">从视频中提取并重现宠物的声音特征</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 text-zinc-600" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-700 font-medium">三种情绪音效</p>
                    <p className="text-xs text-zinc-500 leading-relaxed">兴奋、撒娇、满足 - 完整的情感表达</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 text-zinc-600" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-700 font-medium">永久云端保存</p>
                    <p className="text-xs text-zinc-500 leading-relaxed">随时随地都能听到它的声音</p>
                  </div>
                </div>
              </div>

              {/* Upload section */}
              <div className="mb-6">
                <label className="block text-sm text-zinc-600 mb-3 text-center">
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
                    className="flex flex-col items-center justify-center p-8 bg-zinc-50 border-2 border-dashed border-zinc-200 rounded-2xl cursor-pointer hover:bg-zinc-100 transition-colors"
                  >
                    {uploadedFile ? (
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-center">
                        <CheckCircle2 className="w-12 h-12 text-zinc-600 mb-3 mx-auto" />
                        <p className="text-sm text-zinc-700 font-medium">{uploadedFile.name}</p>
                        <p className="text-xs text-zinc-500 mt-1">{(uploadedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                      </motion.div>
                    ) : (
                      <>
                        <Upload className="w-12 h-12 text-zinc-400 mb-3" />
                        <p className="text-sm text-zinc-700">点击上传视频</p>
                        <p className="text-xs text-zinc-500 mt-1">支持 MP4, MOV, AVI 等格式</p>
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
                className="w-full py-4 bg-zinc-800 text-white rounded-2xl font-light hover:bg-zinc-700 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? "正在处理..." : "升级至 Premium"}
              </motion.button>

              <p className="text-xs text-zinc-400 text-center mt-4">7 天免费试用，随时可取消</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
