"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/i18n"

export default function SignUpSuccessPage() {
  const { language } = useLanguage()
  const t = translations[language].auth

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white p-6">
      <div className="w-full max-w-sm">
        <Card className="border-zinc-200">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-zinc-900">{t.signUpSuccess}</CardTitle>
            <CardDescription className="text-zinc-600">{t.checkEmail}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-zinc-600">
              {translations[language].auth.checkEmail || "Please check your email to verify your account."}
            </p>
            <Link href="/auth/login">
              <Button variant="outline" className="w-full bg-transparent">
                {translations[language].auth.goToDashboard || "Back to Login"}
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
