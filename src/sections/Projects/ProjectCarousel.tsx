import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { projects } from '../../constants/projects'
import ProjectCard from './ProjectCard'

interface ProjectCarouselProps {
    className?: string
}

export function ProjectCarousel({ className = "" }: ProjectCarouselProps) {
  const autoplay = Autoplay({
    delay: 3000,
    stopOnInteraction: false,
    stopOnMouseEnter: false,
  })
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay])

  const goToPrev = () => emblaApi?.scrollPrev()
  const goToNext = () => emblaApi?.scrollNext()

  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y touch-pinch-zoom my-6">
            {projects.map((project, i) => (
                <div key={`slide(${i})`} className="flex-[0_0_80%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] xl:flex-[0_0_25%] min-w-0 p-6">
                    <ProjectCard {...project} />
                </div>
            ))}
        </div>
      </div>

      <button className="embla__prev" onClick={goToPrev}>Scroll to prev</button>
      <button className="embla__next" onClick={goToNext}>Scroll to next</button>
    </div>
  )
}
