export interface Product {
  id: string
  name: string
  description: string
  priceInCents: number
  features: string[]
  petLimit: number
  voiceCloning: boolean
  priority: boolean
}

export const PRODUCTS: Product[] = [
  {
    id: "basic",
    name: "基础版",
    description: "开始你的疗愈之旅",
    priceInCents: 999, // $9.99/month
    features: ["创建1只虚拟宠物", "基础互动功能", "标准音质声音克隆", "每日对话限制"],
    petLimit: 1,
    voiceCloning: true,
    priority: false,
  },
  {
    id: "premium",
    name: "高级版",
    description: "完整的陪伴体验",
    priceInCents: 2999, // $29.99/month
    features: ["创建3只虚拟宠物", "全部互动功能", "高保真声音克隆", "无限对话", "自定义记忆系统", "优先AI处理"],
    petLimit: 3,
    voiceCloning: true,
    priority: true,
  },
]
