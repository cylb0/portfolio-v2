import { motion } from 'framer-motion';
import { technos } from '../../constants/skills';
import { staggerContainer, staggerItem } from '../../utils/animations';

export default function SkillsGrid() {
  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-[repeat(auto-fill,minmax(80px,1fr))] gap-6 mt-6"
    >
      {technos.map(([name, Icon]) => (
        <motion.div
          key={name}
          variants={staggerItem()}
          className="flex flex-col items-center gap-2"
        >
          <Icon size={40} className="text-primary" />
          <span className="text-cosmic-white text-xs text-center font-bold bg-background-dark/75 backdrop-blur-xs rounded-xl px-2 py-1">
            {name}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}
