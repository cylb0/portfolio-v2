import { LiaSpaceShuttleSolid } from 'react-icons/lia';
import Logo from '../../assets/logo.svg';
import Identity from '../../components/ui/Identity';
import ScrollIcon from '../../components/ui/ScrollIcon';
import { dev, name } from '../../constants/dev';
import { copyright, rgpd } from '../../constants/footer';
import { useLanguage } from '../../contexts/LanguageContext';
import { FaRegCopyright } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="flex flex-col sm:px-32 mt-12 pb-12 mx-auto relative z-0">
      <div className="h-0.5 w-full bg-primary/30 mx-start mt-2" />
      <div className="flex flex-col lg:grid lg:grid-cols-[1fr_auto_1fr] items-center mt-4">
        <div className="flex flex-col justify-between h-full">
          <Identity
            logo={Logo}
            name={name}
            title={dev[language]}
            className="text-[16px]"
          />
          <div className="flex items-center gap-2 ms-10 text-secondary-ice">
            <FaRegCopyright className="h-4 w-4" />
            <span>{copyright[language]}</span>
          </div>
        </div>
        <div className="self-start flex items-center">
          <ScrollIcon
            link="#"
            icon={LiaSpaceShuttleSolid}
            size={36}
            className="-rotate-90"
          />
        </div>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-end lg:self-end lg:gap-12 text-secondary-ice">
          <Link
            to="/legal-notice"
            className="hover:underline hover:text-primary"
          >
            {rgpd[language].legal}
          </Link>
          <Link
            to="/privacy-policy"
            className="hover:underline hover:text-primary"
          >
            {rgpd[language].privacy}
          </Link>
        </div>
      </div>
    </footer>
  );
}
