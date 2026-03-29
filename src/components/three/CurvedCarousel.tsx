'use client';

import { useEffect, useRef } from 'react';

import * as THREE from 'three';

import { CARDS, RADIUS, SPEED } from '@/constants/carousel';
import { buildCurvedCard } from '@/utils/buildCurvedCard';
import { makeCardTexture } from '@/utils/makeCardTexture';

interface CurvedCarouselProps {
  isBack?: boolean;
}

interface ResponsiveConfig {
  scale: number;
  cameraZ: number;
  cameraY: number;
  offsetX: number;
  lookAtX: number;
}

function getResponsiveConfig(screenWidth: number): ResponsiveConfig {
  if (screenWidth < 768) {
    return {
      scale: 0.5,
      cameraZ: 3.5,
      cameraY: 1.2,
      offsetX: 0.6,
      lookAtX: 0.4,
    };
  }
  return { scale: 1, cameraZ: 3.5, cameraY: 1.2, offsetX: 0, lookAtX: 0 };
}

const ROTATION_Z_MIN = 0.1;
const ROTATION_Z_MAX = 0.4;
const ROTATION_Z_DEFAULT = 0.28;

export default function CurvedCarousel({
  isBack = false,
}: CurvedCarouselProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let rafId = 0;
    let disposed = false;
    let renderer: THREE.WebGLRenderer | null = null;

    // Track mouse X position (0 = left edge, 1 = right edge)
    let mouseNorm = 0.5; // start at center

    const handleMouseMove = (e: MouseEvent) => {
      mouseNorm = e.clientX / window.innerWidth; // 0..1
    };
    window.addEventListener('mousemove', handleMouseMove);

    const setup = async () => {
      const scene = new THREE.Scene();

      const w = mount.clientWidth || window.innerWidth;
      const h = mount.clientHeight || window.innerHeight;

      const camera = new THREE.PerspectiveCamera(55, w / h, 0.1, 100);
      let cfg = getResponsiveConfig(window.innerWidth);
      camera.position.set(cfg.offsetX, cfg.cameraY, cfg.cameraZ);
      camera.lookAt(cfg.lookAtX, 0, -2);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.localClippingEnabled = true;
      renderer.domElement.style.position = 'absolute';
      renderer.domElement.style.top = '0';
      renderer.domElement.style.left = '0';
      mount.appendChild(renderer.domElement);

      const group = new THREE.Group();
      group.rotation.z = ROTATION_Z_DEFAULT;
      group.rotation.x = 0.3;
      group.scale.setScalar(cfg.scale);
      scene.add(group);

      const textures = await Promise.all(
        CARDS.map((data) => makeCardTexture(data)),
      );
      if (disposed) return;

      const meshes = textures.map((tex) => buildCurvedCard(tex, isBack));
      meshes.forEach((m) => group.add(m));

      const N = CARDS.length;

      function positionCards(rotY: number): void {
        const step = (Math.PI * 2) / N;
        meshes.forEach((mesh, i) => {
          const angle = i * step + rotY;
          mesh.position.x = Math.sin(angle) * RADIUS;
          mesh.position.z = Math.cos(angle) * RADIUS - RADIUS;
          mesh.rotation.y = angle;
          mesh.visible = true;

          const normalDir = (mesh.userData.normalDir as number) ?? 1;
          const worldNormal = new THREE.Vector3(0, 0, normalDir)
            .transformDirection(group.matrixWorld)
            .normalize();
          const centerWorld = new THREE.Vector3(0, 0, -RADIUS).applyMatrix4(
            group.matrixWorld,
          );
          const constant = -worldNormal.dot(centerWorld);
          (mesh.userData.clipPlane as THREE.Plane).set(worldNormal, constant);
        });
      }

      let rotY = 0;
      let currentRotZ = ROTATION_Z_DEFAULT;

      const animate = () => {
        if (disposed) return;
        rafId = requestAnimationFrame(animate);
        rotY += SPEED;
        group.updateMatrixWorld(true);
        positionCards(rotY);

        // mouseNorm: 0 = far left → max rotation, 1 = far right → min rotation
        const targetRotZ =
          ROTATION_Z_MAX - mouseNorm * (ROTATION_Z_MAX - ROTATION_Z_MIN);
        // Smooth lerp toward target
        currentRotZ += (targetRotZ - currentRotZ) * 0.05;
        group.rotation.z = currentRotZ;

        camera.position.y = cfg.cameraY + Math.sin(Date.now() * 0.0004) * 0.1;
        camera.lookAt(cfg.lookAtX, 0, -2);
        renderer!.render(scene, camera);
      };

      animate();

      const handleResize = () => {
        if (!mount || !renderer) return;
        const w = mount.clientWidth || window.innerWidth;
        const h = mount.clientHeight || window.innerHeight;
        cfg = getResponsiveConfig(window.innerWidth);
        group.scale.setScalar(cfg.scale);
        camera.position.set(cfg.offsetX, cfg.cameraY, cfg.cameraZ);
        camera.lookAt(cfg.lookAtX, 0, -2);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };

      window.addEventListener('resize', handleResize);
      (mount as any)._resizeCleanup = () =>
        window.removeEventListener('resize', handleResize);
    };

    setup().catch(console.error);

    return () => {
      disposed = true;
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
      (mount as any)._resizeCleanup?.();
      if (renderer) {
        renderer.dispose();
        if (mount.contains(renderer.domElement)) {
          mount.removeChild(renderer.domElement);
        }
        renderer = null;
      }
    };
  }, [isBack]);

  return (
    <div
      ref={mountRef}
      className="relative h-full w-full"
      aria-label="Curved carousel"
    />
  );
}
