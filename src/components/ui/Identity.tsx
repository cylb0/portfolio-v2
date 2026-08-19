interface IdentityProps {
  logo?: string;
  name: string;
  title?: string;
  className?: string;
  variant?: 'navbar' | 'footer';
}

export default function Identity({
  logo = '',
  name,
  title,
  className,
  variant = 'footer',
}: IdentityProps) {
  const isNavbar = variant === 'navbar';

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {logo && (
        <img src={logo} alt="Logo M.F." className="w-10 h-10 object-contain" />
      )}

      <p
        className={`text-cosmic-white flex ${isNavbar ? 'flex-col md:flex-row md:items-center text-[20px]' : 'flex-col text-[16px]'}`}
      >
        <span>{name}&nbsp;</span>
        {title && (
          <>
            <span className={`hidden ${isNavbar ? 'md:block' : ''}`}>
              |&nbsp;
            </span>
            <span className={isNavbar ? 'text-[16px]' : ''}>{title}</span>
          </>
        )}
      </p>
    </div>
  );
}
