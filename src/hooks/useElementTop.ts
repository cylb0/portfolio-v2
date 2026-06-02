import type React from 'react';
import { useEffect, useState } from 'react';

export default function useElementTop(
  ref: React.RefObject<HTMLElement | null>,
) {
  const [top, setTop] = useState(0);

  useEffect(() => {
    const handle = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      setTop(rect.top);
    };

    handle();
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);

  return top;
}
