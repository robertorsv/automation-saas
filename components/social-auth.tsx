"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/app/contexts/language-context"
import { translations } from "@/app/translations"

export function SocialAuth() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="flex items-center gap-2">
      <Link href="/login">
        <Button variant="ghost" size="sm">
          {t.signIn}
        </Button>
      </Link>
      <Link href="/register">
        <Button size="sm">
          {t.getStarted}
        </Button>
      </Link>
    </div>
  )
}

