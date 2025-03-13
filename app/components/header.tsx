'use client';

import Link from "next/link";
import { Menu } from "lucide-react";
import { useLanguage } from "@/app/contexts/language-context";
import { translations } from "@/app/translations";
import { LanguageSwitcher } from "./language-switcher";
import { SocialAuth } from "@/components/social-auth";
import { Button } from "@/components/ui/button";
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
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-primary rounded-md"></div>
            <span className="font-bold text-lg">AutoFlow</span>
          </Link>
          
          {/* Desktop Navigation - Hidden on mobile, visible on md screens and up */}
          <nav className="hidden md:flex gap-4 lg:gap-6">
            <Link
              href="/#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary whitespace-nowrap overflow-hidden text-ellipsis max-w-[100px] lg:max-w-none"
            >
              {t.features}
            </Link>
            <Link
              href="/#pricing"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary whitespace-nowrap overflow-hidden text-ellipsis max-w-[100px] lg:max-w-none"
            >
              {t.pricing}
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary whitespace-nowrap overflow-hidden text-ellipsis max-w-[100px] lg:max-w-none"
            >
              {t.about}
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary whitespace-nowrap overflow-hidden text-ellipsis max-w-[100px] lg:max-w-none"
            >
              {t.contact}
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <SocialAuth />
          
          {/* Mobile Menu - Visible on mobile, hidden on md screens and up */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
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
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
} 