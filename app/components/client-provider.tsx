'use client';

import { LanguageProvider } from "@/app/contexts/language-context";

export function ClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      {children}
    </LanguageProvider>
  );
} 