import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';

interface SectionTextProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  color?: string;
}

export default function SectionText({
  children,
  delay = 0.75,
  className = '',
  color = 'text-cosmic-white',
}: SectionTextProps) {
  return (
    <motion.div
      variants={fadeIn({ delay })}
      className={`sm:px-10 px-4 mt-3 text-cosmic-white text-[16px] max-w-4xl leading-[25px] text-justify flex-1 ${color} ${className}`}
    >
      {children}
    </motion.div>
  );
}
