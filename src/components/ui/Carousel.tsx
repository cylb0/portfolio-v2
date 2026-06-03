import { type EmblaOptionsType } from "embla-carousel"
import useEmblaCarousel from "embla-carousel-react"
import type React from "react"
import { useCallback } from "react"

interface CarouselProps {
    options?: EmblaOptionsType
    children: React.ReactNode
    renderControls?: (props: { prev: () => void, next: () => void }) => React.ReactNode
    className?: string
}

export function Carousel({ options, children, renderControls, className = "" }: CarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "center",
        ...options
    })

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

    return (
        <div className={`relative w-full overflow-hidden px-4 sm:px-12 ${className}`}>
            <div className="overflow-hidden mask-carousel touch-pan-y touch-pinch-zoom" ref={emblaRef}>
                <div className="flex">
                    {children}
                </div>
            </div>

            {renderControls?.({ prev: scrollPrev, next: scrollNext })}
        </div>
    )
}

