import React from 'react';
import { domains } from '../../constants/about';
import { useLanguage } from '../../contexts/LanguageContext';

export default function DomainCards() {
  const { language } = useLanguage();

  return (
    <div className="flex flex-col sm:flex-row border-2 border-primary/30 rounded-xl overflow-hidden self-start bg-background-dark/75 backdrop-blur-xs">
      {domains.map((d, i) => {
        const Icon = d.icon;
        const label = typeof d.label == 'string' ? d.label : d.label[language];
        const stack = typeof d.stack == 'string' ? d.stack : d.stack[language];
        return (
          <React.Fragment key={`domain-${i}`}>
            {i !== 0 && (
              <div
                key={`sep-${i}`}
                className="sm:w-px sm:h-auto h-px w-auto bg-secondary-ice/30 sm:my-4 mx-4"
              />
            )}
            <div
              key={`domain-${i}`}
              className="flex-1 basis-0 flex flex-col items-center gap-3 px-5 py-6"
            >
              <div className="w-12 h-12 rounded-full border border-primary/50 flex items-center justify-center">
                <Icon size={22} className="text-primary" />
              </div>
              <span className="text-primary font-medium">{label}</span>
              <span className="text-cosmic-white text-center leading-relaxed font-bold">
                {stack}
              </span>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
