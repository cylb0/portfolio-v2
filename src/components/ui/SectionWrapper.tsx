import { motion } from 'framer-motion';

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({
  id,
  children,
  className = '',
}: SectionWrapperProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={`pt-4 px-4 sm:pt-16 sm:px-16 lg:px-32 mx-auto relative z-0 ${className}`}
    >
      <span id={id} className="absolute -top-16" />
      {children}
    </motion.section>
  );
}
