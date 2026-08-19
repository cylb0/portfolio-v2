import { motion } from 'framer-motion';
import type { IconType } from 'react-icons';

interface ScrollIconProps {
  link: string;
  icon: IconType;
  size: number;
  ariaLabel: string;
  className?: string;
}

export default function ScrollIcon({
  link,
  icon: Icon,
  size,
  ariaLabel,
  className,
}: ScrollIconProps) {
  return (
    <a href={link} aria-label={ariaLabel} className="w-[35px] h-[65px]">
      <motion.div
        animate={{
          y: [0, 30, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'loop',
        }}
        className="mb-1"
      >
        <Icon className={`text-primary ${className}`} size={size} />
      </motion.div>
    </a>
  );
}
