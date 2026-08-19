interface BadgeProps {
  text?: string;
  className?: string;
}

export default function Badge({ text, className = '' }: BadgeProps) {
  return (
    <div
      className={`flex items-center px-2 py-1 rounded-bl-xl z-10 text-sm text-white ${className}`}
    >
      <span>{text}</span>
    </div>
  );
}
