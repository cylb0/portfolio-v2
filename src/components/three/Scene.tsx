import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, Preload } from '@react-three/drei';
import Model from './Model';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

export default function Scene() {
  return (
    <Canvas
      className="w-full h-full"
      frameloop="always"
      camera={{ position: [0, 50, 150], fov: 140 }}
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
