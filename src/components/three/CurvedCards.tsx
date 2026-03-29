'use client';

import { useEffect, useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

interface CurvedCardsProps {
  leftImage: string;
  rightImage: string;
}

function buildCurvedCard(
  texture: THREE.Texture,
  curvature = 0.35,
  segments = 40,
): THREE.Mesh {
  const W = 1.4,
    H = 2.5;
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

export default function CurvedCards({
  leftImage,
  rightImage,
}: CurvedCardsProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // ── Chờ scroller mount xong rồi mới init ─────────────
    const scroller = document.querySelector(
      '.scrollable__area',
    ) as HTMLElement | null;
    if (!scroller) return;

    const W = mount.clientWidth;
    const H = mount.clientHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100);
    camera.position.set(0, 0, 6);

    const loader = new THREE.TextureLoader();
    const texRight = loader.load(rightImage);
    const texLeft = loader.load(leftImage);

    const card1 = buildCurvedCard(texRight, 0.45);
    const card2 = buildCurvedCard(texLeft, 0.9);

    const PIVOT_Y = 0;

    // ── Vị trí bắt đầu (ngoài màn hình, lệch theo độ cong) ──
    // card1: bên trái, nghiêng phải → bắt đầu từ dưới-phải-ra trước
    // card2: bên phải, nghiêng trái → bắt đầu từ dưới-trái-ra trước
    const card1Start = { x: 0.2, y: PIVOT_Y - 2, z: 0.8 };
    const card2Start = { x: -0.2, y: PIVOT_Y - 3, z: 1.2 };

    // ── Vị trí đích ──────────────────────────────────────────
    const card1End = { x: -0.4, y: PIVOT_Y, z: -1 };
    const card2End = { x: 0.4, y: PIVOT_Y, z: 1 };

    card1.position.set(card1Start.x, card1Start.y, card1Start.z);
    card1.rotation.set(0, 0.9, 0.42);
    card2.position.set(card2Start.x, card2Start.y, card2Start.z);
    card2.rotation.set(0, -0.4, -0.42);

    const group = new THREE.Group();
    group.add(card1, card2);
    scene.add(group);

    // ── GSAP ScrollTrigger ────────────────────────────────────
    ScrollTrigger.defaults({ scroller });

    const scrollState = {
      card1X: card1Start.x,
      card1Y: card1Start.y,
      card1Z: card1Start.z,
      card2X: card2Start.x,
      card2Y: card2Start.y,
      card2Z: card2Start.z,
    };

    gsap.to(scrollState, {
      card1X: card1End.x,
      card1Y: card1End.y,
      card1Z: card1End.z,
      card2X: card2End.x,
      card2Y: card2End.y,
      card2Z: card2End.z,
      ease: 'none',
      scrollTrigger: {
        trigger: mount,
        scroller,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1.2,
        onUpdate: () => {
          card1.position.set(
            scrollState.card1X,
            scrollState.card1Y,
            scrollState.card1Z,
          );
          card2.position.set(
            scrollState.card2X,
            scrollState.card2Y,
            scrollState.card2Z,
          );
        },
      },
    });

    // ── Mouse ─────────────────────────────────────────────
    let mouseX = 0,
      mouseY = 0;
    let targetRotY = 0,
      targetRotX = 0;
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

      targetRotY = mouseX * 0.3;
      targetRotX = mouseY * -0.15;
      rotY += (targetRotY - rotY) * 0.05;
      rotX += (targetRotX - rotX) * 0.05;

      group.rotation.y = rotY;
      group.rotation.x = rotX;
      group.position.y = Math.sin(t * 0.5) * 0.04;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      ScrollTrigger.getAll().forEach((st) => st.kill());
      gsap.killTweensOf(scrollState);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      texRight.dispose();
      texLeft.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, [leftImage, rightImage]);

  return <div ref={mountRef} className="h-full w-full" />;
}
