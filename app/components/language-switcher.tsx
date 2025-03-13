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
      className="flex items-center gap-1"
    >
      {language === "en" ? (
        <>
          <span>🇪🇸</span>
          <span className="hidden sm:inline">{translations[language].switchToSpanish}</span>
        </>
      ) : (
        <>
          <span>🇬🇧</span>
          <span className="hidden sm:inline">{translations[language].switchToEnglish}</span>
        </>
      )}
    </Button>
  );
} 