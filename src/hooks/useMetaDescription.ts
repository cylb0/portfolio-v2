import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { DEFAULT_PATH, meta } from '../constants/meta';

export default function useMetaDescription() {
  const { pathname } = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    const path = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
    const { description } = (meta[path] ?? meta[DEFAULT_PATH])[language];

    let tag = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    if (!tag) {
      tag = document.createElement('meta');
      tag.name = 'description';
      document.head.appendChild(tag);
    }
    tag.content = description;
  }, [pathname, language]);
}
