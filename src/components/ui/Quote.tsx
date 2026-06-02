import { FaQuoteLeft } from 'react-icons/fa';

interface QuoteProps {
  text: string;
}

export default function Quote({ text }: QuoteProps) {
  return (
    <div className="flex flex-col justify-center px-4 py-4 gap-4 border-2 border-primary/30 rounded-xl bg-background-dark/75 backdrop-blur-xs">
      <FaQuoteLeft className="text-primary" size={22} />
      <span className="text-cosmic-white text-left leading-relaxed">
        {text}
      </span>
      <div className="h-0.5 w-1/5 bg-primary/30 mx-start mt-2" />
    </div>
  );
}
