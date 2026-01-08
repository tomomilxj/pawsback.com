"use client"

import type React from "react"

import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/i18n"

export default function SignUpPage() {
  const { language } = useLanguage()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")
  const [displayName, setDisplayName] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const t = translations[language].auth

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    const supabase = createClient()
    setIsLoading(true)
    setError(null)

    if (password !== repeatPassword) {
      setError(t.passwordMismatch)
      setIsLoading(false)
      return
    }

    try {
      const redirectUrl =
        typeof window !== "undefined"
          ? `${window.location.origin}/dashboard`
          : process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL || "https://yoursite.com/dashboard"

      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL || redirectUrl,
          data: {
            display_name: displayName,
          },
        },
      })
      if (error) throw error
      router.push("/auth/sign-up-success")
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : t.signUpFailed)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white p-6">
      <div className="w-full max-w-sm">
        <Card className="border-zinc-200">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-zinc-900">{t.signUpButton}</CardTitle>
            <CardDescription className="text-zinc-600">{t.signUpDescription}</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSignUp}>
              <div className="flex flex-col gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="displayName" className="text-zinc-700">
                    {t.displayName}
                  </Label>
                  <Input
                    id="displayName"
                    type="text"
                    placeholder={t.displayNamePlaceholder}
                    required
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    className="border-zinc-200"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-zinc-700">
                    {t.email}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-zinc-200"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password" className="text-zinc-700">
                    {t.password}
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border-zinc-200"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="repeat-password" className="text-zinc-700">
                    {t.confirmPassword}
                  </Label>
                  <Input
                    id="repeat-password"
                    type="password"
                    required
                    value={repeatPassword}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                    className="border-zinc-200"
                  />
                </div>
                {error && <p className="text-sm text-red-600">{error}</p>}
                <Button type="submit" className="w-full bg-zinc-900 hover:bg-zinc-800" disabled={isLoading}>
                  {isLoading ? t.creating : t.signUpButton}
                </Button>
              </div>
              <div className="mt-4 text-center text-sm text-zinc-600">
                {t.haveAccount}{" "}
                <Link href="/auth/login" className="text-zinc-900 underline underline-offset-4">
                  {t.signInButton}
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
