'use client';

import { useEffect, useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

interface CurvedCardSingleProps {
  image: string;
  curvature?: number;
}

function buildCurvedCard16x9(
  texture: THREE.Texture,
  curvature = 0.2,
  segments = 40,
): THREE.Mesh {
  const W = 3.2,
    H = 1.8; // tỉ lệ 16/9
  const geo = new THREE.PlaneGeometry(W, H, segments, segments);
  const pos = geo.attributes.position;

  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i);
    const nY = y / (H / 2);
    const z = -curvature * (1 - nY * nY);
    pos.setZ(i, z);
  }
  pos.needsUpdate = true;
  geo.computeVertexNormals();
  geo.translate(0, H / 2, 0);

  const mat = new THREE.MeshBasicMaterial({
    map: texture,
    side: THREE.FrontSide,
    transparent: true,
  });
  return new THREE.Mesh(geo, mat);
}

export default function CurvedCardSingle({
  image,
  curvature = 0.2,
}: CurvedCardSingleProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scroller = document.querySelector(
      '.scrollable__area',
    ) as HTMLElement | null;
    if (!scroller) return;

    const W = mount.clientWidth;
    const H = mount.clientHeight;

    // ── Renderer ──────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // ── Scene / Camera ────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100);
    camera.position.set(0, 0, 6);

    // ── Card ──────────────────────────────────────────────────
    const texture = new THREE.TextureLoader().load(image);
    const card = buildCurvedCard16x9(texture, curvature);

    // Card pivot đặt ở giữa theo Y → dịch xuống H/2 để center
    const CARD_H = 1.8;
    card.position.set(0, -CARD_H / 2, 0); // offset pivot

    const group = new THREE.Group();
    group.add(card);
    scene.add(group);

    // ── Vị trí scroll ─────────────────────────────────────────
    const startY = 0; // bắt đầu từ dưới màn hình
    const endY = 3; // kết thúc tại trung tâm

    group.position.y = startY;

    const scrollState = { y: startY };

    ScrollTrigger.defaults({ scroller });

    gsap.to(scrollState, {
      y: endY,
      ease: 'none',
      scrollTrigger: {
        trigger: mount,
        scroller,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1.2,
        onUpdate: () => {
          group.position.y = scrollState.y;
        },
      },
    });

    // ── Mouse tilt ────────────────────────────────────────────
    let mouseX = 0,
      mouseY = 0;
    let rotY = 0,
      rotX = 0;
    let t = 0;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    const onTouchMove = (e: TouchEvent) => {
      const rect = mount.getBoundingClientRect();
      mouseX = ((e.touches[0].clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = ((e.touches[0].clientY - rect.top) / rect.height - 0.5) * 2;
    };
    const onResize = () => {
      const nW = mount.clientWidth;
      const nH = mount.clientHeight;
      camera.aspect = nW / nH;
      camera.updateProjectionMatrix();
      renderer.setSize(nW, nH);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('resize', onResize);

    const animate = () => {
      animId = requestAnimationFrame(animate);
      t += 0.01;

      rotY += (mouseX * 0.25 - rotY) * 0.05;
      rotX += (mouseY * -0.12 - rotX) * 0.05;

      group.rotation.y = rotY;
      group.rotation.x = rotX;
      group.position.y = scrollState.y + Math.sin(t * 0.5) * 0.03; // float nhẹ

      renderer.render(scene, camera);
    };
    animate();

    // ── Cleanup ───────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(animId);
      ScrollTrigger.getAll().forEach((st) => st.kill());
      gsap.killTweensOf(scrollState);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      texture.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, [image, curvature]);

  return <div ref={mountRef} className="h-full w-full" />;
}
