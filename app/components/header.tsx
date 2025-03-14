'use client';

import Link from "next/link";
import { Menu } from "lucide-react";
import { useLanguage } from "@/app/contexts/language-context";
import { translations } from "@/app/translations";
import { LanguageSwitcher } from "./language-switcher";
import { SocialAuth } from "@/components/social-auth";
import { Button } from "@/components/ui/button";
import { StyledCompanyName } from "@/components/styled-company-name";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";

export function Header() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 sm:h-16 md:h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
              <StyledCompanyName />
            </span>
          </Link>
          
          {/* Desktop Navigation - Hidden on mobile, visible on md screens and up */}
          <nav className="hidden md:flex gap-4 lg:gap-8">
            <Link
              href="/#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary whitespace-nowrap"
            >
              {t.features}
            </Link>
            <Link
              href="/#pricing"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary whitespace-nowrap"
            >
              {t.pricing}
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary whitespace-nowrap"
            >
              {t.about}
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary whitespace-nowrap"
            >
              {t.contact}
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Hide language switcher on very small screens */}
          <div className="hidden xs:block">
            <LanguageSwitcher />
          </div>
          
          {/* Hide full auth buttons on smaller screens */}
          <div className="hidden sm:block">
            <SocialAuth />
          </div>
          
          {/* Show compact auth buttons on small screens */}
          <div className="sm:hidden">
            <div className="flex items-center">
              <Link href="/login">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <span className="sr-only">{t.signIn}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                    <polyline points="10 17 15 12 10 7"/>
                    <line x1="15" y1="12" x2="3" y2="12"/>
                  </svg>
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Mobile Menu - Visible on mobile, hidden on md screens and up */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <nav className="flex flex-col gap-4 mt-8">
                <SheetClose asChild>
                  <Link
                    href="/#features"
                    className="text-base font-medium text-muted-foreground transition-colors hover:text-primary py-2"
                  >
                    {t.features}
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/#pricing"
                    className="text-base font-medium text-muted-foreground transition-colors hover:text-primary py-2"
                  >
                    {t.pricing}
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/about"
                    className="text-base font-medium text-muted-foreground transition-colors hover:text-primary py-2"
                  >
                    {t.about}
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/contact"
                    className="text-base font-medium text-muted-foreground transition-colors hover:text-primary py-2"
                  >
                    {t.contact}
                  </Link>
                </SheetClose>
                
                {/* Show language switcher in mobile menu for very small screens */}
                <div className="xs:hidden py-2">
                  <LanguageSwitcher />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
} 