'use client';

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/app/contexts/language-context";
import { translations } from "@/app/translations";

export function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();
  
  return (
    <Button 
      variant="outline" 
      size="sm" 
      onClick={toggleLanguage}
      className="h-8 w-auto px-2 flex items-center gap-1"
      aria-label={language === "en" ? "Switch to Spanish" : "Switch to English"}
    >
      {language === "en" ? (
        <>
          <span className="text-base">🇪🇸</span>
          <span className="hidden sm:inline text-xs">{translations[language].switchToSpanish}</span>
        </>
      ) : (
        <>
          <span className="text-base">🇬🇧</span>
          <span className="hidden sm:inline text-xs">{translations[language].switchToEnglish}</span>
        </>
      )}
    </Button>
  );
} 