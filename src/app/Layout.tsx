import { lazy, Suspense } from 'react';
import Navbar from '../components/navigation/Navbar';
import AppLoader from './AppLoader';
import { Outlet } from 'react-router-dom';
import Footer from '../sections/Footer/Footer';
import useCanonical from '../hooks/useCanonical';
const BackgroundCanvas = lazy(
  () => import('../components/three/BackgroundCanvas'),
);

export default function Layout() {
  useCanonical();

  return (
    <div className="relative w-full min-h-screen bg-background-dark font-medium select-none">
      <Navbar />
      <Suspense fallback={<AppLoader />}>
        <BackgroundCanvas />
      </Suspense>
      <Outlet />
      <Footer />
    </div>
  );
}
