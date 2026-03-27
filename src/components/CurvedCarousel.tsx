'use client';

import { useEffect, useRef } from 'react';

import * as THREE from 'three';

import { CARDS, RADIUS, SPEED } from '@/constants/carousel';
import { buildCurvedCard } from '@/utils/buildCurvedCard';
import { makeCardTexture } from '@/utils/makeCardTexture';

interface CurvedCarouselProps {
  isBack?: boolean;
}

// ── Responsive config ─────────────────────────────────────────────────────────
interface ResponsiveConfig {
  scale: number; // group scale
  cameraZ: number; // camera Z distance
  cameraY: number; // camera Y base position
  offsetX: number; // camera X offset (negative = shift left)
  lookAtX: number; // lookAt X target
}

function getResponsiveConfig(screenWidth: number): ResponsiveConfig {
  if (screenWidth < 768) {
    return {
      scale: 0.65,
      cameraZ: 3.5,
      cameraY: 1.2,
      offsetX: 0.6, // lệch trái
      lookAtX: 0.4,
    };
  }
  return {
    scale: 1,
    cameraZ: 3.5,
    cameraY: 1.2,
    offsetX: 0,
    lookAtX: 0,
  };
}

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

    const setup = async () => {
      // ── Scene ────────────────────────────────────────────────────────────
      const scene = new THREE.Scene();

      const w = mount.clientWidth || window.innerWidth;
      const h = mount.clientHeight || window.innerHeight;

      const camera = new THREE.PerspectiveCamera(55, w / h, 0.1, 100);

      // Apply initial responsive config
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

      // ── Group ────────────────────────────────────────────────────────────
      const group = new THREE.Group();
      group.rotation.z = 0.28;
      group.rotation.x = 0.3;
      group.scale.setScalar(cfg.scale);
      scene.add(group);

      // ── Load textures ────────────────────────────────────────────────────
      const textures = await Promise.all(
        CARDS.map((data) => makeCardTexture(data)),
      );
      if (disposed) return;

      // ── Build meshes ─────────────────────────────────────────────────────
      const meshes = textures.map((tex) => buildCurvedCard(tex, isBack));
      meshes.forEach((m) => group.add(m));

      const N = CARDS.length;

      // ── Position cards ───────────────────────────────────────────────────
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

      // ── Animate ──────────────────────────────────────────────────────────
      let rotY = 0;

      const animate = () => {
        if (disposed) return;
        rafId = requestAnimationFrame(animate);
        rotY += SPEED;
        group.updateMatrixWorld(true);
        positionCards(rotY);

        // Camera bob + responsive Y offset
        camera.position.y = cfg.cameraY + Math.sin(Date.now() * 0.0004) * 0.1;
        camera.lookAt(cfg.lookAtX, 0, -2);

        renderer!.render(scene, camera);
      };

      animate();

      // ── Resize ───────────────────────────────────────────────────────────
      const handleResize = () => {
        if (!mount || !renderer) return;

        const w = mount.clientWidth || window.innerWidth;
        const h = mount.clientHeight || window.innerHeight;

        // Update responsive config
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
