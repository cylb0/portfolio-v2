import type { Variants, AnimationGeneratorType } from 'framer-motion';

type Direction = 'left' | 'right' | 'up' | 'down' | '';

const getDirectionOffset = (direction: Direction, distance: number) => {
  return {
    x: direction === 'left' ? distance : direction === 'right' ? -distance : 0,
    y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
  };
};

export const staggerContainer = (staggerChildren = 0.1): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren },
  },
});

export const staggerItem = (
  direction: Direction = 'left',
  distance = 20,
): Variants => ({
  hidden: {
    ...getDirectionOffset(direction, distance),
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring' as const, duration: 0.4 },
  },
});

interface SlideInOptions {
  direction?: Direction;
  distance?: number;
  duration?: number;
  delay?: number;
}

export const slideIn = ({
  direction = 'right',
  distance = 50,
  duration = 1.2,
  delay = 0.2,
}: SlideInOptions = {}): Variants => {
  return {
    hidden: {
      ...getDirectionOffset(direction, distance),
      opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { type: 'spring', duration, delay },
    },
  };
};

interface FadeInOptions {
  direction?: Direction;
  type?: AnimationGeneratorType;
  duration?: number;
  delay?: number;
}

export const fadeIn = ({
  direction = '',
  type = 'tween',
  duration = 0.75,
  delay = 0,
}: FadeInOptions = {}): Variants => {
  return {
    hidden: {
      ...getDirectionOffset(direction, 100),
      opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { type, delay, duration, ease: 'easeOut' },
    },
  };
};
