"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/i18n"

interface Pet {
  id: string
  name: string
  personality: string
  species: string
  status: string
  image_url?: string
  created_at: string
}

interface Subscription {
  plan_type: string
}

interface DashboardClientProps {
  pets: Pet[]
  subscription: Subscription | null
}

export function DashboardClient({ pets, subscription }: DashboardClientProps) {
  const { language } = useLanguage()
  const t = translations[language].dashboard
  const createPetT = translations[language].createPet
  const subscriptionT = translations[language].subscription

  const getPersonalityLabel = (personality: string) => {
    const map: Record<string, string> = {
      warm: createPetT.warm,
      playful: createPetT.playful,
      calm: createPetT.calm,
    }
    return map[personality] || personality
  }

  const getSpeciesLabel = (species: string) => {
    const map: Record<string, string> = {
      dog: createPetT.dog || "Dog",
      cat: createPetT.cat || "Cat",
    }
    return map[species] || species
  }

  const getStatusLabel = (status: string) => {
    const map: Record<string, string> = {
      processing: createPetT.processing,
      ready: "Ready",
      error: "Error",
    }
    return map[status] || status
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-semibold text-zinc-900">{t.title}</h1>
            <p className="text-zinc-600 mt-2">{t.subtitle}</p>
          </div>
          <Link href="/create-pet">
            <Button className="bg-zinc-900 hover:bg-zinc-800">
              <Plus className="w-4 h-4 mr-2" />
              {t.createNew}
            </Button>
          </Link>
        </div>

        {pets && pets.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pets.map((pet) => (
              <Link key={pet.id} href={`/pet/${pet.id}`}>
                <Card className="border-zinc-200 hover:border-zinc-400 transition-colors cursor-pointer">
                  <CardHeader>
                    <div className="aspect-square bg-zinc-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                      {pet.image_url ? (
                        <img
                          src={pet.image_url || "/placeholder.svg"}
                          alt={pet.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-4xl">🐾</div>
                      )}
                    </div>
                    <CardTitle className="text-xl">{pet.name}</CardTitle>
                    <CardDescription>
                      {getPersonalityLabel(pet.personality)} · {getSpeciesLabel(pet.species)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-zinc-500">{getStatusLabel(pet.status)}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <Card className="border-zinc-200">
            <CardContent className="flex flex-col items-center justify-center py-16">
              <div className="text-6xl mb-4">🐾</div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-2">{t.noPets}</h3>
              <p className="text-zinc-600 mb-6">{t.getStarted}</p>
              <Link href="/create-pet">
                <Button className="bg-zinc-900 hover:bg-zinc-800">
                  <Plus className="w-4 h-4 mr-2" />
                  {t.createNew}
                </Button>
              </Link>
            </CardContent>
          </Card>
        )}

        {subscription && subscription.plan_type === "free" && (
          <Card className="border-zinc-200 mt-8 bg-zinc-50">
            <CardContent className="flex items-center justify-between py-6">
              <div>
                <h3 className="text-lg font-semibold text-zinc-900">{subscriptionT.upgradeToPremium}</h3>
                <p className="text-zinc-600 text-sm">{subscriptionT.unlockFeatures}</p>
              </div>
              <Link href="/#pricing">
                <Button variant="outline">{t.viewPlans}</Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
