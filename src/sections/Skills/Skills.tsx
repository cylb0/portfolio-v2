import { motion } from 'framer-motion';
import Quote from '../../components/ui/Quote';
import SectionTitle from '../../components/ui/SectionTitle';
import SectionWrapper from '../../components/ui/SectionWrapper';
import { skillQuote, skillsTitle } from '../../constants/skills';
import { useLanguage } from '../../contexts/LanguageContext';
import SkillsGrid from './SkillsGrid';
import { slideIn } from '../../utils/animations';

export default function Skills() {
  const { language } = useLanguage();

  return (
    <SectionWrapper id="skills">
      <SectionTitle title={skillsTitle[language]} />
      <div className="flex flex-col xl:flex-row gap-10 mt-3">
        <div className="flex-1">
          <SkillsGrid />
        </div>
        <motion.div
          variants={slideIn({ direction: 'left' })}
          className="xl:basis-1/4 xl:shrink-0"
        >
          <Quote text={skillQuote[language]} />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
