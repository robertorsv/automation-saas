'use client';

import Link from "next/link"
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Header } from "@/app/components/header"
import { useLanguage } from "@/app/contexts/language-context"
import { translations } from "@/app/translations"

export default function ContactPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t.contactUs}</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t.getInTouch}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>{t.contactInfo}</CardTitle>
                    <CardDescription>{t.reachOutChannels}</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-6">
                    <div className="flex items-center gap-4">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <h3 className="font-medium">{t.email}</h3>
                        <p className="text-sm text-muted-foreground">info@autoflow.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <h3 className="font-medium">{t.phone}</h3>
                        <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <h3 className="font-medium">{t.address}</h3>
                        <p className="text-sm text-muted-foreground">
                          {t.streetAddress}
                          <br />
                          {t.cityStateZip}
                          <br />
                          {t.country}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>{t.connectWithUs}</CardTitle>
                    <CardDescription>{t.followSocial}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-4">
                      <Link href="#" className="text-muted-foreground hover:text-primary">
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
                          className="h-5 w-5"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                        <span className="sr-only">{t.facebook}</span>
                      </Link>
                      <Link href="#" className="text-muted-foreground hover:text-primary">
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
                          className="h-5 w-5"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                        </svg>
                        <span className="sr-only">{t.twitter}</span>
                      </Link>
                      <Link href="#" className="text-muted-foreground hover:text-primary">
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
                          className="h-5 w-5"
                        >
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                        </svg>
                        <span className="sr-only">{t.instagram}</span>
                      </Link>
                      <Link href="#" className="text-muted-foreground hover:text-primary">
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
                          className="h-5 w-5"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect width="4" height="12" x="2" y="9"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                        <span className="sr-only">{t.linkedin}</span>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>{t.sendMessage}</CardTitle>
                  <CardDescription>
                    {t.fillForm}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">{t.nameLabel}</Label>
                      <Input id="name" placeholder={t.namePlaceholder} />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">{t.emailLabel}</Label>
                      <Input id="email" type="email" placeholder={t.emailPlaceholder} />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="phone">{t.phoneLabel}</Label>
                      <Input id="phone" type="tel" placeholder={t.phonePlaceholder} />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="subject">{t.subjectLabel}</Label>
                      <Input id="subject" placeholder={t.subjectPlaceholder} />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="message">{t.messageLabel}</Label>
                      <Textarea id="message" placeholder={t.messagePlaceholder} className="min-h-[150px]" />
                    </div>
                    <Button type="submit" className="w-full">
                      {t.sendMessageButton}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">{t.faq}</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t.faqDescription}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{t.moneyBackQuestion}</h3>
                  <p className="text-muted-foreground">
                    {t.moneyBackAnswer}
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{t.technicalSkillsQuestion}</h3>
                  <p className="text-muted-foreground">
                    {t.technicalSkillsAnswer}
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{t.planChangeQuestion}</h3>
                  <p className="text-muted-foreground">
                    {t.planChangeAnswer}
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{t.integrationsQuestion}</h3>
                  <p className="text-muted-foreground">
                    {t.integrationsAnswer}
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{t.securityQuestion}</h3>
                  <p className="text-muted-foreground">
                    {t.securityAnswer}
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{t.enterpriseQuestion}</h3>
                  <p className="text-muted-foreground">
                    {t.enterpriseAnswer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">{t.readyTransform}</h2>
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
              {t.termsOfService}
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              {t.privacyPolicy}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

