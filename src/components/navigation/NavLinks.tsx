import { navLinks } from '../../constants/navLinks';
import { useLanguage } from '../../contexts/LanguageContext';

interface NavLinksProps {
  active: string;
  onSelect: (id: string) => void;
  className?: string;
}

export default function NavLinks({
  active,
  onSelect,
  className = '',
}: NavLinksProps) {
  const { language } = useLanguage();

  return (
    <ul className={`list-none flex gap-10 ${className}`}>
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`${
            active === link.id ? 'text-primary' : 'text-white'
          } hover:text-primary text-[15px] cursor-pointer`}
          onClick={() => onSelect(link.id)}
        >
          <a href={`#${link.id}`}>{link.titles[language]}</a>
        </li>
      ))}
    </ul>
  );
}
