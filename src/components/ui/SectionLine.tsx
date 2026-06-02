interface SectionLineProps {
  height?: string;
  dot?: boolean;
}

export default function SectionLine({
  height = 'h-16',
  dot = false,
}: SectionLineProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className={`w-[2px] ${height} bg-gradient-to-b from-transparent via-primary to-transparent relative`}
      >
        {dot && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary" />
        )}
      </div>
    </div>
  );
}
