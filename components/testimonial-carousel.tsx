"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/app/contexts/language-context"
import { translations } from "@/app/translations"

export function TestimonialCarousel() {
  const { language } = useLanguage();
  const t = translations[language];
  
  const testimonials = [
    {
      id: 1,
      name: t.testimonial1Name,
      role: t.testimonial1Role,
      content: t.testimonial1Content,
      image: "/placeholder.svg?height=100&width=100&text=SJ",
    },
    {
      id: 2,
      name: t.testimonial2Name,
      role: t.testimonial2Role,
      content: t.testimonial2Content,
      image: "/placeholder.svg?height=100&width=100&text=MC",
    },
    {
      id: 3,
      name: t.testimonial3Name,
      role: t.testimonial3Role,
      content: t.testimonial3Content,
      image: "/placeholder.svg?height=100&width=100&text=ER",
    },
    {
      id: 4,
      name: t.testimonial4Name,
      role: t.testimonial4Role,
      content: t.testimonial4Content,
      image: "/placeholder.svg?height=100&width=100&text=DK",
    },
    {
      id: 5,
      name: t.testimonial5Name,
      role: t.testimonial5Role,
      content: t.testimonial5Content,
      image: "/placeholder.svg?height=100&width=100&text=LP",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  const handlePrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
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
    }, 8000)
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
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0">
              <Card className="border-0 shadow-none">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative h-20 w-20 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <blockquote className="mt-6 max-w-2xl">
                      <p className="text-lg font-medium leading-relaxed">"{testimonial.content}"</p>
                    </blockquote>
                    <div className="mt-4">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
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
          {testimonials.map((_, index) => (
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

