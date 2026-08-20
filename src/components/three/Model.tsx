import { useGLTF, useTexture } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useRef, useEffect } from 'react';

import * as THREE from 'three';

const GALAXY_CENTER = new THREE.Vector3(112.96, 110.48, 112.47);
const MAX_RADIUS = 222 * 0.5;
const CENTER_COLOR = new THREE.Color('#ffb347');
const OUTER_COLOR = new THREE.Color('#8fd3ff');

const PRIMITIVE_POSITION = [-195, -230, 215];
const PRIMITIVE_SCALE = 150;
const PRIMITIVE_ROTATION = [0, 0, 0.1];

export default function Model() {
  const { scene } = useGLTF('/models/need_some_space.glb');
  const ref = useRef<any>(null);
  const texture = useTexture('/circle.png');
  const invalidate = useThree((state) => state.invalidate);

  useEffect(() => {
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.generateMipmaps = false;

    const pos = new THREE.Vector3();
    const color = new THREE.Color();

    scene.traverse((child: any) => {
      if (!child.isPoints) return;

      const { geometry } = child;
      const position = geometry.attributes.position;
      const colors = new Float32Array(position.count * 3);

      for (let i = 0; i < position.count; i++) {
        pos.set(position.getX(i), position.getY(i), position.getZ(i));

        const t =
          1 -
          Math.exp(
            -THREE.MathUtils.clamp(
              pos.distanceTo(GALAXY_CENTER) / MAX_RADIUS,
              0,
              1,
            ) * 3,
          );

        color.copy(CENTER_COLOR).lerp(OUTER_COLOR, t);
        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;
      }

      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      child.material = new THREE.PointsMaterial({
        size: 0.5,
        map: texture,
        transparent: true,
        alphaTest: 0.01,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true,
        vertexColors: true,
        toneMapped: false,
      });
    });

    // Cet effet mute la scene sans passer par un rendu React, donc r3f ne sait
    // pas qu'il y a quelque chose de nouveau a dessiner. En frameloop="demand"
    // la seule image deja rendue date d'avant la coloration : sans cet appel,
    // les points restent sur leur materiau d'origine.
    invalidate();
  }, [scene, texture, invalidate]);

  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.001;
  });

  return (
    <group ref={ref} scale={[1, 0.5, 1]}>
      <primitive
        object={scene}
        scale={PRIMITIVE_SCALE}
        position={PRIMITIVE_POSITION}
        rotation={PRIMITIVE_ROTATION}
      />
    </group>
  );
}
