import { motion } from 'framer-motion';

interface DotRingProps {
  size?: number;
  nbPoints?: number;
  bigDotFrequency?: number;
  dotSizeBig?: number;
  dotSizeSmall?: number;
  opacityBig?: number;
  opacitySmall?: number;
  color?: string;
  duration?: number;
}

export default function DotRing({
  size = 80,
  nbPoints = 12,
  bigDotFrequency = 3,
  dotSizeBig = 4,
  dotSizeSmall = 2.5,
  opacityBig = 1,
  opacitySmall = 0.4,
  color = '#ffc843',
  duration = 12,
}: DotRingProps) {
  if (nbPoints % bigDotFrequency)
    console.warn(
      `Dotring: For a better looking result, bigDotFrequency (${bigDotFrequency}) doit être un diviseur de nbPoints (${nbPoints})`,
    );

  const dots = Array.from({ length: nbPoints }, (_, i) => {
    const angle = (i / nbPoints) * Math.PI * 2;
    const x = 50 + 40 * Math.cos(angle);
    const y = 50 + 40 * Math.sin(angle);
    const large = i % bigDotFrequency === 0;
    return {
      x,
      y,
      r: large ? dotSizeBig : dotSizeSmall,
      opacity: large ? opacityBig : opacitySmall,
    };
  });

  return (
    <motion.svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      animate={{ rotate: 360 }}
      transition={{ duration, repeat: Infinity, ease: 'linear' }}
      style={{ originX: '50%', originY: '50%' }}
    >
      {dots.map((d, i) => (
        <circle
          key={i}
          cx={d.x}
          cy={d.y}
          r={d.r}
          fill={color}
          fillOpacity={d.opacity}
        />
      ))}
    </motion.svg>
  );
}
