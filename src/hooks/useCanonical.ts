import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://www.morganfoucaut.fr';

export default function useCanonical() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = `${SITE_URL}${path}`;
  }, [pathname]);
}
