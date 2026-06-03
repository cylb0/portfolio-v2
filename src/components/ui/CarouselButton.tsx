import type React from "react"

interface CarouselButtonProps {
    handleClick: () => void
    children?: React.ReactNode
    className?: string
}

export default function CarouselButton({ handleClick, children, className = "" }: CarouselButtonProps) {
  return (
    <button onClick={handleClick} className={`transition-all duration-300 rounded-full ${className}`}>
        {children}
    </button>
  )
}