import { motion } from 'framer-motion';
import { slideIn } from '../../utils/animations';
import SectionLine from './SectionLine';

interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <motion.div variants={slideIn()} className="flex items-center gap-4">
      <SectionLine height="h-16" dot />
      <h1 className="text-cosmic-white font-bold lg:text-[50px] text-[30px] ms-3">
        {title}
        <span className="text-primary">.</span>
      </h1>
    </motion.div>
  );
}
