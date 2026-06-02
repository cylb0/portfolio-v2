import { useEffect, useRef, useState } from 'react';

export default function useScrollDirection() {
  const [direction, setDirection] = useState<'up' | 'down'>('down');
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      if (y > lastY.current) {
        setDirection('down');
      } else {
        setDirection('up');
      }

      lastY.current = y;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return direction;
}
