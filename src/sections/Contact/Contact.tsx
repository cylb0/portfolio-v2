import SectionTitle from '../../components/ui/SectionTitle';
import SectionWrapper from '../../components/ui/SectionWrapper';
import { contact } from '../../constants/contact';
import { useLanguage } from '../../contexts/LanguageContext';
import EmailJsForm from './EmailJsForm';
import Together from './Together';
import SectionText from '../../components/ui/SectionText';
import { motion } from 'framer-motion';
import { slideIn } from '../../utils/animations';

export default function Contact() {
  const { language } = useLanguage();

  return (
    <SectionWrapper id="contact">
      <div className="flex flex-col">
        <Together />
        <div className="flex flex-col items-start lg:flex-row lg:gap-12 h-full basis-1/2 mt-12 w-full">
          <div className="flex flex-col w-full lg:w-1/2">
            <SectionTitle title={contact[language].title} />
            <SectionText>{contact[language].subText}</SectionText>
          </div>
          <motion.div
            variants={slideIn({ direction: 'left', delay: 1.2 })}
            className="mt-6 lg:mt-0 w-full lg:w-1/2 border-2 border-primary/30 rounded-xl bg-background-dark/70 p-6"
          >
            <EmailJsForm />
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
