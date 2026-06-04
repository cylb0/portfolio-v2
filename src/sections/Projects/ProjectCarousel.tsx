import { projects } from '../../constants/projects'
import ProjectCard from './ProjectCard'
import CarouselButton from '../../components/ui/CarouselButton'
import { Carousel } from '../../components/ui/Carousel'
import { LiaSpaceShuttleSolid } from 'react-icons/lia'

interface ProjectCarouselProps {
  className?: string
}

export function ProjectCarousel({ className = "" }: ProjectCarouselProps) {

  return (
    <Carousel
      renderControls={({ prev, next }) => (
        <>
          <CarouselButton handleClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
            <LiaSpaceShuttleSolid className="h-8 w-8 hover:text-cosmic-white text-primary hover:scale-110 hover:-translate-x-1 -rotate-180 "/>
          </CarouselButton>
          <CarouselButton handleClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 z-10">
            <LiaSpaceShuttleSolid className="h-8 w-8 hover:text-cosmic-white text-primary hover:scale-110 hover:translate-x-1"/>
          </CarouselButton>
        </>
    )}
      className={className}
    >
      {projects.map((p, i) => (
        <div key={`slide-${i}`} className="w-[90%] sm:w-96 shrink-0 p-6">
          <ProjectCard {...p} />
        </div>
      ))}
    </Carousel>
  )
}
