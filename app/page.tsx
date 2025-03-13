'use client';

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { WorkflowCarousel } from "@/components/workflow-carousel"
import { SocialAuth } from "@/components/social-auth"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { Header } from "@/app/components/header"
import { useLanguage } from "@/app/contexts/language-context"
import { translations } from "@/app/translations"

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    {t.heroTitle}
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    {t.heroDescription}
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#demo">
                    <Button size="lg" className="gap-1">
                      {t.getDemo} <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#pricing">
                    <Button size="lg" variant="outline">
                      {t.viewPricing}
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>{t.moneyBackGuarantee}</span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden border shadow-lg">
                  <Image
                    src="/placeholder.svg?height=500&width=500"
                    alt={t.dashboardPreview}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  {t.featuresLabel}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  {t.featuresTitle}
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  {t.featuresDescription}
                </p>
              </div>
            </div>
            <div className="mx-auto mt-12 max-w-5xl">
              <WorkflowCarousel />
            </div>
          </div>
        </section>

        <section id="demo" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    {t.liveDemo}
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">{t.seeInAction}</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    {t.demoDescription}
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-2">
                    <Play className="h-4 w-4" /> {t.watchDemo}
                  </Button>
                  <Button size="lg" variant="outline">
                    {t.scheduleDemo}
                  </Button>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>{t.noCreditCard}</span>
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl border bg-muted">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button size="icon" variant="outline" className="h-16 w-16 rounded-full">
                    <Play className="h-6 w-6" />
                    <span className="sr-only">{t.playDemoVideo}</span>
                  </Button>
                </div>
                <Image
                  src="/placeholder.svg?height=720&width=1280"
                  alt={t.demoVideoThumbnail}
                  width={1280}
                  height={720}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">{t.pricingTitle}</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  {t.pricingDescription}
                </p>
              </div>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>{t.starter}</CardTitle>
                  <div className="text-3xl font-bold">$29</div>
                  <CardDescription>{t.perMonth}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>5 {t.automationWorkflows}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>1,000 {t.tasksPerMonth}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>{t.basicIntegrations}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>{t.emailSupport}</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">{t.getStarted}</Button>
                </CardFooter>
              </Card>
              <Card className="border-primary">
                <CardHeader>
                  <div className="text-center text-sm font-medium text-primary">{t.mostPopular}</div>
                  <CardTitle>{t.professional}</CardTitle>
                  <div className="text-3xl font-bold">$79</div>
                  <CardDescription>{t.perMonth}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>{t.unlimitedWorkflows}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>10,000 {t.tasksPerMonth}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>{t.advancedIntegrations}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>{t.prioritySupport}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>{t.teamCollaboration}</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">{t.getStarted}</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>{t.enterprise}</CardTitle>
                  <div className="text-3xl font-bold">{t.contactForPricing}</div>
                  <CardDescription>{t.contactForPricing}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>{t.unlimitedEverything}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>{t.customIntegrations}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>{t.dedicatedManager}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>{t.premiumSupport}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>{t.customTraining}</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    {t.contactSales}
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div className="mt-8 text-center">
              <p className="text-muted-foreground">{t.allPlansInclude}</p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">{t.testimonialsTitle}</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  {t.trustedBy}
                </p>
              </div>
            </div>
            <div className="mx-auto mt-12 max-w-5xl">
              <TestimonialCarousel />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  {t.readyTransform}
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  {t.joinCompanies}
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="gap-1">
                  {t.getStarted} <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  {t.contactSales}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} AutoFlow. {t.allRightsReserved}
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              {t.terms}
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              {t.privacy}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

