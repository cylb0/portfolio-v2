import SectionTitle from '../../components/ui/SectionTitle';
import SectionWrapper from '../../components/ui/SectionWrapper';
import { projectsTitle } from '../../constants/projects';
import { useLanguage } from '../../contexts/LanguageContext';
import { ProjectCarousel } from './ProjectCarousel';

export default function Projects() {
  const { language } = useLanguage();

  return (
    <SectionWrapper id="projects" className="text-cosmic-white">
      <SectionTitle title={projectsTitle[language]} />
        <ProjectCarousel className="mt-3" />
    </SectionWrapper>
  );
}
