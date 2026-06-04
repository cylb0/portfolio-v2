import { hero, heroLinks } from '../../constants/hero';
import { useLanguage } from '../../contexts/LanguageContext';
import SectionLine from '../../components/ui/SectionLine';
import { LiaSpaceShuttleSolid } from 'react-icons/lia';
import ScrollIcon from '../../components/ui/ScrollIcon';
import { useRef } from 'react';
import useElementTop from '../../hooks/useElementTop';

export default function Hero() {
  const { language } = useLanguage();
  const iconRef = useRef<HTMLDivElement>(null);
  const iconTop = useElementTop(iconRef);

  const hideScrollIcon = iconTop < window.innerHeight * 0.5;

  return (
    <section className="relative w-full h-[calc(100vh-4rem)] flex flex-col">
      <div className="flex-1 flex items-start pt-36 sm:px-16 px-6 max-w-7xl mx-auto w-full gap-5">
        <SectionLine height="sm:h-80 h-40" />

        <div className="z-40">
          <h1 className="font-black text-white lg:text-[60px] md:text-[50px] sm:text-[40px] text-[30px] lg-leading-[100px] mt-2">
            {hero[language].title}
            <span className="text-primary">&nbsp;Morgan</span>
          </h1>

          <div className="text-cosmic-white mb-5">{hero[language].subText}</div>

          <div className="flex justify-start items-center gap-3 ms-10">
            {Object.entries(heroLinks).map(([key, item]) => {
              const Icon = item.icon;
              return (
                <a href={item.link} key={key}>
                  <Icon
                    className="w-8 h-8 text-primary hover: text-cosmic-white transition-colors"
                    size={28}
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div
        ref={iconRef}
        className={`absolute bottom-20 xs:bottom-30 w-full flex justify-center items-center transition-opacity ${
          hideScrollIcon ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <ScrollIcon
          link="#about"
          icon={LiaSpaceShuttleSolid}
          size={36}
          className={`transition-transform duration-500 ease-in-out rotate-90`}
        />
      </div>
    </section>
  );
}
