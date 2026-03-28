'use client';

import { useEffect, useRef } from 'react';

/**
 * VideoPreview – Three.js cylinder slide + unfurl + mouse bulge
 *
 * Scroll effect (ScrollTrigger):
 *   progress 0 → video cong hình trụ, nằm trên cao
 *   progress 1 → trượt xuống + mở phẳng hoàn toàn
 *
 * Mouse effect:
 *   Rê chuột vào video → vùng xung quanh con trỏ phồng ra (gaussian bulge)
 */
export default function VideoPreview() {
  const mountRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    let renderer: any;
    let scene: any;
    let camera: any;
    let mesh: any;
    let geometry: any;
    let videoTexture: any;
    let animFrameId: number;
    let scrollTriggerInstance: any;
    let onResize: () => void;
    let onMouseMove: (e: MouseEvent) => void;
    let onMouseEnter: () => void;
    let onMouseLeave: () => void;

    async function init() {
      const THREE = await import('three');
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      const container = mountRef.current;
      if (!container) return;

      const W = container.clientWidth;
      const H = container.clientHeight;

      // ── Renderer ──────────────────────────────────────────────────────────
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(W, H);
      renderer.setClearColor(0x000000, 0);
      renderer.domElement.style.width = '100%';
      renderer.domElement.style.height = '100%';
      container.appendChild(renderer.domElement);

      // ── Scene & Camera ────────────────────────────────────────────────────
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(30, W / H, 0.1, 100);
      camera.position.set(0, 0.3, 4.2);
      camera.lookAt(0, 0, 0);

      // ── Video texture ─────────────────────────────────────────────────────
      const video = document.createElement('video');
      video.src = '/videos/fa_homepage_comp.mp4';
      video.crossOrigin = 'anonymous';
      video.autoplay = true;
      video.loop = true;
      video.muted = true;
      video.playsInline = true;
      video.play().catch(() => {});
      videoRef.current = video;

      videoTexture = new THREE.VideoTexture(video);
      videoTexture.minFilter = THREE.LinearFilter;
      videoTexture.magFilter = THREE.LinearFilter;

      // ── Geometry ──────────────────────────────────────────────────────────
      const PH = 2.2;
      const PW = PH * (W / H);
      geometry = new THREE.PlaneGeometry(PW, PH, 80, 80);

      const material = new THREE.MeshBasicMaterial({
        map: videoTexture,
        side: THREE.DoubleSide,
      });

      mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      // ── Helpers ───────────────────────────────────────────────────────────
      function easeOut(x: number): number {
        return 1 - Math.pow(1 - x, 3);
      }

      // ── State ─────────────────────────────────────────────────────────────
      let scrollProgress = 0;
      let currentRotY = 0;
      let targetRotY = 0;
      let lastScrollProg = 0;

      let mouseWorldX = 0;
      let mouseWorldY = 0;
      let currentBulgeX = 0;
      let currentBulgeY = 0;
      let bulgeTarget = 0;
      let currentBS = 0;

      // ── Deform ────────────────────────────────────────────────────────────
      function applyEffect(
        progress: number,
        bx: number,
        by: number,
        bs: number,
      ) {
        const pos = geometry.attributes.position;
        const uv = geometry.attributes.uv;
        const p = easeOut(progress);
        const PH_l = geometry.parameters.height as number;
        const PW_l = geometry.parameters.width as number;

        const bendY = (1 - p) * 1.2;
        const bendX = (1 - p) * 0.3;
        const offsetY = PH_l * 0.65 * (1 - p);

        mesh.rotation.x = -0.18 - (1 - p) * 0.28;

        const BULGE_R = PW_l * 0.28;
        const BULGE_MAX = 0.22;

        for (let i = 0; i < pos.count; i++) {
          const uvX = uv.getX(i);
          const uvY = uv.getY(i);
          const x = (uvX - 0.5) * PW_l;
          const y = (uvY - 0.5) * PH_l + offsetY;
          const ny = uvY * 2 - 1;
          const nx = uvX * 2 - 1;

          let z = -bendY * ny * ny - bendX * nx * nx;

          if (bs > 0.001) {
            const dx = x - bx;
            const dy = y - offsetY - by;
            const dist2 = dx * dx + dy * dy;
            const falloff = Math.exp(-dist2 / (BULGE_R * BULGE_R));
            z += BULGE_MAX * bs * falloff;
          }

          pos.setXYZ(i, x, y, z);
        }

        pos.needsUpdate = true;
        geometry.computeVertexNormals();
      }

      applyEffect(0, 0, 0, 0);

      // ── Mouse events ──────────────────────────────────────────────────────
      const raycaster = new THREE.Raycaster();
      const mouse2d = new THREE.Vector2();
      const plane3d = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);

      onMouseMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        mouse2d.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouse2d.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
        raycaster.setFromCamera(mouse2d, camera);
        const hit = new THREE.Vector3();
        raycaster.ray.intersectPlane(plane3d, hit);
        mouseWorldX = hit.x;
        mouseWorldY = hit.y;
      };

      onMouseEnter = () => {
        bulgeTarget = 1;
      };
      onMouseLeave = () => {
        bulgeTarget = 0;
      };

      container.addEventListener('mousemove', onMouseMove);
      container.addEventListener('mouseenter', onMouseEnter);
      container.addEventListener('mouseleave', onMouseLeave);

      // ── ScrollTrigger ─────────────────────────────────────────────────────
      scrollTriggerInstance = ScrollTrigger.create({
        trigger: container,
        start: 'top 70%',
        end: '+=900',
        scrub: 1.5,
        onUpdate: (self: any) => {
          const delta = self.progress - lastScrollProg;
          lastScrollProg = self.progress;
          scrollProgress = self.progress;
          const tiltStrength = Math.min(Math.abs(delta) * 8, 0.32);
          targetRotY = delta !== 0 ? -tiltStrength : 0;
        },
      });

      // ── Resize ────────────────────────────────────────────────────────────
      onResize = () => {
        if (!container) return;
        const nW = container.clientWidth;
        const nH = container.clientHeight;
        camera.aspect = nW / nH;
        camera.updateProjectionMatrix();
        renderer.setSize(nW, nH);
        renderer.domElement.style.width = '100%';
        renderer.domElement.style.height = '100%';
      };
      window.addEventListener('resize', onResize);

      // ── Render loop ───────────────────────────────────────────────────────
      const tick = () => {
        animFrameId = requestAnimationFrame(tick);

        currentRotY += (targetRotY - currentRotY) * 0.08;
        targetRotY += (0 - targetRotY) * 0.04;
        mesh.rotation.y = currentRotY;

        currentBulgeX += (mouseWorldX - currentBulgeX) * 0.1;
        currentBulgeY += (mouseWorldY - currentBulgeY) * 0.1;
        currentBS += (bulgeTarget - currentBS) * 0.06;

        if (videoTexture) videoTexture.needsUpdate = true;
        applyEffect(scrollProgress, currentBulgeX, currentBulgeY, currentBS);
        renderer.render(scene, camera);
      };
      tick();
    }

    init();

    return () => {
      cancelAnimationFrame(animFrameId);
      scrollTriggerInstance?.kill();
      window.removeEventListener('resize', onResize);
      const container = mountRef.current;
      if (container) {
        container.removeEventListener('mousemove', onMouseMove);
        container.removeEventListener('mouseenter', onMouseEnter);
        container.removeEventListener('mouseleave', onMouseLeave);
      }
      if (renderer) {
        renderer.dispose();
        mountRef.current?.removeChild(renderer.domElement);
      }
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.src = '';
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="section-2__video-preview-wrapper relative aspect-1630/1914 overflow-hidden"
      style={{ width: '100%', height: '100%', cursor: 'crosshair' }}
      aria-label="Video preview"
    />
  );
}
