import type React from "react"

interface CarouselButtonProps {
    handleClick: () => void
    ariaLabel: string
    children?: React.ReactNode
    className?: string
}

export default function CarouselButton({ handleClick, ariaLabel, children, className = "" }: CarouselButtonProps) {
  return (
    <button
      onClick={handleClick}
      aria-label={ariaLabel}
      className={`transition-all duration-300 rounded-full ${className}`}
    >
        {children}
    </button>
  )
}