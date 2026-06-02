interface IdentityProps {
  logo?: string;
  name: string;
  title?: string;
  className?: string;
}

export default function Identity({
  logo = '',
  name,
  title,
  className,
}: IdentityProps) {
  return (
    <div className="flex items-center gap-1">
      {logo && (
        <img src={logo} alt="Logo M.F." className="w-10 h-10 object-contain" />
      )}
      <p className={`text-cosmic-white text-[20px] flex ${className}`}>
        {name}&nbsp;
        {title && <span>|&nbsp;{title}</span>}
      </p>
    </div>
  );
}
