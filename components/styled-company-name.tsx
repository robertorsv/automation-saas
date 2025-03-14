'use client';

import React from 'react';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface StyledCompanyNameProps {
  className?: string;
}

export function StyledCompanyName({ className = '' }: StyledCompanyNameProps) {
  return (
    <span className={`${inter.className} ${className} inline-flex items-center`}>
      <span className="text-white">automatiza</span><span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent -ml-[1px]">tek</span>
    </span>
  );
} 