import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, Preload } from '@react-three/drei';
import Model from './Model';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

export default function Scene() {
  return (
    <Canvas
      className="w-full h-full"
      // "demand" : le canvas ne redessine que sur appel a invalidate(), au
      // lieu des 60 images par seconde de "always". OrbitControls en emet un a
      // chaque changement, le drag reste donc vivant -- mais plus rien
      // n'anime la rotation, la galaxie est figee au repos.
      frameloop="demand"
      camera={{ position: [0, 50, 150], fov: 120 }}
      gl={{ antialias: true }}
    >
      <OrbitControls
        rotateSpeed={0.5}
        minPolarAngle={Math.PI / 2 - 0.2}
        maxPolarAngle={Math.PI / 2 + 0.05}
        maxDistance={250}
      />
      <Suspense fallback={null}>
        <Model />
        <EffectComposer>
          <Bloom
            intensity={1.2}
            luminanceThreshold={0}
            luminanceSmoothing={0.3}
            mipmapBlur
          />
        </EffectComposer>
        <Preload all />
      </Suspense>
    </Canvas>
  );
}
