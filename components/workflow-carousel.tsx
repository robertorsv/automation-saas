"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/app/contexts/language-context"
import { translations } from "@/app/translations"

export function WorkflowCarousel() {
  const { language } = useLanguage();
  const t = translations[language];
  
  const workflows = [
    {
      id: 1,
      title: t.emailAutomation,
      description: t.emailAutomationDesc,
      image: `/placeholder.svg?height=400&width=600&text=${t.emailAutomation}`,
    },
    {
      id: 2,
      title: t.dataSynchronization,
      description: t.dataSynchronizationDesc,
      image: `/placeholder.svg?height=400&width=600&text=${t.dataSynchronization}`,
    },
    {
      id: 3,
      title: t.documentProcessing,
      description: t.documentProcessingDesc,
      image: `/placeholder.svg?height=400&width=600&text=${t.documentProcessing}`,
    },
    {
      id: 4,
      title: t.taskManagement,
      description: t.taskManagementDesc,
      image: `/placeholder.svg?height=400&width=600&text=${t.taskManagement}`,
    },
    {
      id: 5,
      title: t.customIntegrationTitle,
      description: t.customIntegrationDesc,
      image: `/placeholder.svg?height=400&width=600&text=${t.customIntegrationTitle}`,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  const handlePrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? workflows.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === workflows.length - 1 ? 0 : prevIndex + 1))
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [currentIndex])

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 5000)
    return () => clearInterval(interval)
  }, [currentIndex, isAnimating])

  return (
    <div className="relative">
      <div
        ref={carouselRef}
        className="overflow-hidden rounded-xl border bg-background shadow-lg"
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {workflows.map((workflow) => (
            <div key={workflow.id} className="w-full flex-shrink-0">
              <Card className="border-0 shadow-none">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative aspect-video md:aspect-auto">
                      <Image
                        src={workflow.image}
                        alt={workflow.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center p-6">
                      <h3 className="text-2xl font-bold">{workflow.title}</h3>
                      <p className="mt-2 text-muted-foreground">{workflow.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex justify-center gap-2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full"
          onClick={handlePrev}
          disabled={isAnimating}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">{t.previous}</span>
        </Button>
        <div className="flex items-center gap-1">
          {workflows.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === currentIndex ? "bg-primary" : "bg-muted"
              }`}
              onClick={() => {
                if (isAnimating) return
                setIsAnimating(true)
                setCurrentIndex(index)
              }}
            >
              <span className="sr-only">{`Slide ${index + 1}`}</span>
            </button>
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full"
          onClick={handleNext}
          disabled={isAnimating}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">{t.next}</span>
        </Button>
      </div>
    </div>
  )
}

