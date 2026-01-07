"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold text-zinc-900">
          PawsBack
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
            功能
          </Link>
          <Link href="#pricing" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
            定价
          </Link>
          <Link href="#faq" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">
            常见问题
          </Link>
          <Button size="sm" className="bg-zinc-900 hover:bg-zinc-800">
            开始使用
          </Button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden p-2 text-zinc-600" aria-label="Menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </nav>
  )
}
