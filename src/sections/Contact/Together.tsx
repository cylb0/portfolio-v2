import { motion } from 'framer-motion';
import DotRing from '../../components/ui/DotRing';
import { together } from '../../constants/contact';
import { useLanguage } from '../../contexts/LanguageContext';
import { slideIn } from '../../utils/animations';
import SectionText from '../../components/ui/SectionText';

export default function Together() {
  const { language } = useLanguage();

  return (
    <div className="flex flex justify-between items-center px-12 py-4 gap-4 border-2 border-primary/30 rounded-xl bg-background-dark/75">
      <div className="flex flex-col">
        <motion.div variants={slideIn()} className="flex items-center gap-4">
          <h2 className="text-cosmic-white font-bold lg:text-[40px] text-[20px] ms-3">
            {together[language].title}
          </h2>
        </motion.div>
        <SectionText color="text-secondary-ice">
          {together[language].subText}
        </SectionText>
      </div>
      <motion.div
        variants={slideIn({ direction: 'left' })}
        className="flex items-center justify-center p-4 hidden md:block"
      >
        <DotRing />
      </motion.div>
    </div>
  );
}
