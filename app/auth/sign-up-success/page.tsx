import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SignUpSuccessPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white p-6">
      <div className="w-full max-w-sm">
        <Card className="border-zinc-200">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-zinc-900">注册成功</CardTitle>
            <CardDescription className="text-zinc-600">请查收你的邮件</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-zinc-600">我们已向你的邮箱发送了确认邮件。请点击邮件中的链接激活你的账户。</p>
            <Link href="/auth/login">
              <Button variant="outline" className="w-full bg-transparent">
                返回登录
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
