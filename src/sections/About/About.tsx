import { about } from '../../constants/about';
import { useLanguage } from '../../contexts/LanguageContext';
import SectionWrapper from '../../components/ui/SectionWrapper';
import DomainCards from './DomainCards';
import SectionTitle from '../../components/ui/SectionTitle';
import SectionText from '../../components/ui/SectionText';
import { motion } from 'framer-motion';
import { slideIn } from '../../utils/animations';

export default function About() {
  const { language } = useLanguage();

  return (
    <SectionWrapper id="about" className="flex">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="relative z-0 overflow-hidden">
          <SectionTitle title={about[language].title} />
          <div className="flex flex-col xl:flex-row gap-10 mt-3">
            <SectionText>{about[language].content}</SectionText>
            <motion.div
              variants={slideIn({ direction: 'left' })}
              className="flex flex-1 justify-center"
            >
              <DomainCards />
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
