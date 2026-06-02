import { MutatingDots } from 'react-loader-spinner';
import { colors } from '../styles/theme';

interface AppLoaderProps {
  size?: number;
}

export default function AppLoader({ size = 100 }: AppLoaderProps) {
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center">
      <MutatingDots
        height={size}
        width={size}
        color={colors.primary}
        secondaryColor={colors.secondary.ice}
        radius="12.5"
        ariaLabel="mutating-dots-loading"
      />
    </div>
  );
}
