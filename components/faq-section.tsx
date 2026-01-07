"use client"

import { useState } from "react"

interface FAQItemProps {
  question: string
  answer: string
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-zinc-200 last:border-b-0">
      <button className="w-full py-5 flex items-center justify-between text-left" onClick={() => setIsOpen(!isOpen)}>
        <span className="text-base font-medium text-zinc-900">{question}</span>
        <svg
          className={`w-5 h-5 text-zinc-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && <div className="pb-5 text-sm text-zinc-600 leading-relaxed">{answer}</div>}
    </div>
  )
}

export function FAQSection() {
  const faqs = [
    {
      question: "什么是声音克隆技术？",
      answer:
        "声音克隆是一种AI技术，通过分析您上传的视频中宠物的声音特征，生成独特的声音模型。当您与虚拟宠物互动时，它会用这个克隆的声音回应您，让您感觉就像真实的宠物在身边。",
    },
    {
      question: "需要上传多长的视频？",
      answer:
        "我们建议上传至少30秒的视频，视频越长、声音样本越多，克隆效果越好。确保视频中宠物的声音清晰，背景噪音尽量少。系统支持最长5分钟的视频上传。",
    },
    {
      question: "声音克隆需要多长时间？",
      answer:
        "声音克隆通常需要2-5分钟完成处理。处理时间取决于视频长度和音质。处理完成后，您会收到通知，之后就可以开始使用克隆的声音与宠物互动了。",
    },
    {
      question: "我的数据安全吗？",
      answer:
        "我们非常重视您的隐私和数据安全。所有上传的视频和声音数据都经过加密存储，仅用于生成您专属的声音模型。我们不会将您的数据用于其他目的或与第三方共享。您可以随时删除您的数据。",
    },
    {
      question: "免费版和会员版有什么区别？",
      answer:
        "免费版使用通用的宠物声音，可以体验基本的互动功能。会员版支持上传视频克隆您宠物的独特声音，提供更真实的陪伴体验。会员还可以解锁更多互动动作和个性化功能。",
    },
    {
      question: "支持哪些宠物类型？",
      answer:
        "目前我们支持狗和猫两种宠物类型。我们的AI模型针对这两种动物的声音特征进行了优化。未来我们计划支持更多宠物种类，如鸟类、兔子等。",
    },
    {
      question: "可以取消订阅吗？",
      answer:
        "当然可以。您可以随时在账户设置中取消订阅。取消后，您可以继续使用会员功能直到当前订阅周期结束。我们不收取任何取消费用。",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-zinc-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-zinc-900 mb-4">常见问题</h2>
          <p className="text-zinc-600">关于PawsBack的一切疑问，这里都有答案</p>
        </div>

        <div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden">
          <div className="divide-y divide-zinc-200">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
