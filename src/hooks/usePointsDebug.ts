import { useEffect, useState } from 'react';
import * as THREE from 'three';

export default function usePointsDebug(scene: THREE.Object3D) {
  const [centroid, setCentroid] = useState<THREE.Vector3 | null>(null);

  useEffect(() => {
    let minDist = Infinity;
    let maxDist = -Infinity;
    let sumX = 0,
      sumY = 0,
      sumZ = 0,
      count = 0;
    const pos = new THREE.Vector3();

    scene.traverse((child: any) => {
      if (!child.isPoints) return;
      const position = child.geometry.attributes.position;
      for (let i = 0; i < position.count; i++) {
        pos.set(position.getX(i), position.getY(i), position.getZ(i));
        sumX += pos.x;
        sumY += pos.y;
        sumZ += pos.z;
        count++;
      }
    });

    const c = new THREE.Vector3(sumX / count, sumY / count, sumZ / count);

    scene.traverse((child: any) => {
      if (!child.isPoints) return;
      const position = child.geometry.attributes.position;
      for (let i = 0; i < position.count; i++) {
        pos.set(position.getX(i), position.getY(i), position.getZ(i));
        const dist = pos.distanceTo(c);
        if (dist < minDist) minDist = dist;
        if (dist > maxDist) maxDist = dist;
      }
    });

    console.group('Points Debug');
    console.log('Total points:', count);
    console.log('Local centroid:', centroid);
    console.log('Min dist from centroid:', minDist);
    console.log('Max dist from centroid:', maxDist);
    console.log('Suggested MAX_RADIUS (30%)', maxDist * 0.3);
    console.log('Suggested MAX_RADIUS (50%)', minDist * 0.5);
    console.groupEnd();

    setCentroid(c);
  }, [scene]);

  return centroid;
}
