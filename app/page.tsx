'use client';

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Play, Phone, Mail, MapPin, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { WorkflowCarousel } from "@/components/workflow-carousel"
import { FeaturesSections } from "@/components/features-sections"
import { SocialAuth } from "@/components/social-auth"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { Header } from "@/app/components/header"
import { useLanguage } from "@/app/contexts/language-context"
import { translations } from "@/app/translations"
import { StyledCompanyName } from "@/components/styled-company-name"

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];
  
  // Contact information
  const phoneNumber = "+1234567890"; // Replace with actual phone number
  const email = "contact@automatizatek.com"; // Replace with actual email
  const address = `${t.streetAddress}, ${t.cityStateZip}, ${t.country}`;
  
  // Create vCard data for the Add Contact button
  const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:automatizatek Support
TEL;TYPE=WORK,VOICE:${phoneNumber}
EMAIL;TYPE=WORK:${email}
ADR;TYPE=WORK:;;${t.streetAddress};${t.cityStateZip};;${t.country}
ORG:automatizatek
END:VCARD`;
  
  // Create a data URL for the vCard
  const vCardURL = `data:text/vcard;charset=utf-8,${encodeURIComponent(vCardData)}`;
  
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

        {/* Contact Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  {t.contactUs}
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  {t.getInTouch}
                </p>
              </div>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Contact Information Card */}
              <Card>
                <CardHeader>
                  <CardTitle>{t.contactInfo}</CardTitle>
                  <CardDescription>{t.reachOutChannels}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">{t.phone}</p>
                      <p className="text-sm text-muted-foreground">{phoneNumber}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">{t.email}</p>
                      <p className="text-sm text-muted-foreground">{email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">{t.address}</p>
                      <p className="text-sm text-muted-foreground">{address}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* WhatsApp and Add Contact Card */}
              <Card className="md:col-span-2 lg:col-span-1">
                <CardHeader>
                  <CardTitle>{t.connectWithUs}</CardTitle>
                  <CardDescription>{t.followSocial}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col gap-4 mt-4">
                    <a
                      href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-all"
                    >
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
                        className="w-5 h-5"
                      >
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                      </svg>
                      {t.whatsappButton}
                    </a>
                    
                    {/* Instagram Button */}
                    <a
                      href="https://www.instagram.com/automatizatek"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-[#E1306C] text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-all"
                    >
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
                        className="w-5 h-5"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                      {t.instagramButton}
                    </a>
                    
                    {/* Facebook Button */}
                    <a
                      href="https://www.facebook.com/automatizatek"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-[#1877F2] text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-all"
                    >
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
                        className="w-5 h-5"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                      {t.facebookButton}
                    </a>
                    
                    {/* LinkedIn Button */}
                    <a
                      href="https://www.linkedin.com/company/automatizatek"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-[#0A66C2] text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-all"
                    >
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
                        className="w-5 h-5"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                      {t.linkedinButton}
                    </a>
                    
                    {/* TikTok Button */}
                    <a
                      href="https://www.tiktok.com/@automatizatek"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-[#EE1D52] text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-all"
                    >
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
                        className="w-5 h-5"
                      >
                        <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
                        <path d="M15 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
                        <path d="M15 8v8a4 4 0 0 1-4 4"></path>
                        <line x1="15" y1="4" x2="15" y2="12"></line>
                      </svg>
                      {t.tiktokButton}
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              {/* Quick Contact Form Card */}
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle>{t.sendMessage}</CardTitle>
                  <CardDescription>{t.fillForm}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    <Link href="/contact" className="w-full">
                      {t.sendMessageButton}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
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
              <FeaturesSections />
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
            © {new Date().getFullYear()} <span className="font-semibold"><StyledCompanyName /></span>. {t.allRightsReserved}
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

