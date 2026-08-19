import { useState } from 'react';
import useScrolled from '../../hooks/useScrolled';
import NavLinks from './NavLinks';
import { france, uk } from '../../assets/icons';
import { RxHamburgerMenu } from 'react-icons/rx';
import { MdClose } from 'react-icons/md';
import { useLanguage } from '../../contexts/LanguageContext';
import { dev, name } from '../../constants/dev';
import { Link } from 'react-router-dom';
import Identity from '../ui/Identity';
import Logo from '../../assets/logo.svg';
import { menuAriaLabels } from '../../constants/ariaLabels';

export default function Navbar() {
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollY = useScrolled();
  const { language, toggle } = useLanguage();
  const languageIcon = language === 'french' ? uk : france;

  return (
    <nav
      className={`px-6 w-full h-16 flex items-center py-2 fixed top-0 z-50 duration-1000 ease-in-out ${scrollY ? 'bg-background-dark' : 'bg-transparent'}`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 cursor-pointer"
          aria-label="Home"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <Identity
            logo={Logo}
            name={name}
            title={dev[language]}
            variant="navbar"
          />
        </Link>

        {/* Menu */}
        <NavLinks
          active={active}
          onSelect={setActive}
          className="hidden sm:flex"
        />

        {/* Burger */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white w-8 h-9"
          >
            <span className="sr-only">
              {menuOpen
                ? menuAriaLabels[language].close
                : menuAriaLabels[language].open}
            </span>
            {menuOpen ? <MdClose size={24} /> : <RxHamburgerMenu size={24} />}
          </button>
        </div>

        <img
          src={languageIcon}
          alt={language}
          className="hidden sm:block ms-3 w-[1.2rem] h-[1.2rem] cursor-pointer"
          onClick={toggle}
        />
      </div>
      {menuOpen && (
        <div className="sm:hidden fixed inset-0 top-12 z-40 bg-background-dark flex flex-col items-center justify-start pt-10 gap-8">
          <img
            className="w-6 h-6 cursor-pointer mt-4"
            src={languageIcon}
            alt={language}
            onClick={toggle}
          />
          <NavLinks
            active={active}
            onSelect={(id) => {
              setActive(id);
              setMenuOpen(false);
            }}
            className="flex-col items-center text-xl"
          />
        </div>
      )}
    </nav>
  );
}
