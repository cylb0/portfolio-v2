import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import type { Project } from '../../constants/projects';
import { useLanguage } from '../../contexts/LanguageContext';
import Badge from '../../components/ui/Badge';
import { projectCardAriaLabels } from '../../constants/ariaLabels';

export default function ProjectCard(props: Project) {
  const { language } = useLanguage();

  return (
    <article className="relative overflow-hidden mt-2 group w-full h-full rounded-xl border-[2px] border-primary/30 bg-background-dark/75 backdrop-blur-xs transition-all duration-300 hover:border-primary/50 hover:-translate-y-1">
      { props.ongoing && (
        <Badge text="En cours" className="absolute top-0 right-0 bg-primary/70 animate-pulse"/>
      )}
      <div className="overflow-hidden p-4">
        <img
          src={props.screenshot}
          alt={props.name}
          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent relative mb-4 mx-auto" />
      </div>

      <div className="px-6 pb-5">
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-xl font-bold text-cosmic-white">{props.name}</h2>

          <div className="flex gap-4 shrink-0">
            {props.links?.github && (
              <a
                href={props.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={projectCardAriaLabels[language].github(props.name)}
                className="text-cosmic-white transition-colors hover:text-primary"
              >
                <FaGithub size={24} />
              </a>
            )}

            {props.links?.live && (
              <a
                href={props.links.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={projectCardAriaLabels[language].live(props.name)}
                className="text-cosmic-white transition-colors hover:text-primary"
              >
                <FaExternalLinkAlt size={24} />
              </a>
            )}
          </div>
        </div>

        <p className="mt-4 min-h-[72px] text-sm leading-relaxed text-justify text-secondary-ice">
          {props.subtext[language]}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {props.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border-2 border-cosmic-white/20 px-3 py-1 text-xs font-medium text-cosmic-white backdrop-blur-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
