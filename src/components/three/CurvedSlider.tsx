'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import * as THREE from 'three';

interface SliderCard {
  id: number;
  image: string;
}
interface CurvedSliderProps {
  cards: SliderCard[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

interface WarpProfile {
  warpX: number;
  warpY: number;
  twistZ: number;
  tiltX: number;
  tiltY: number;
  tiltZ: number;
  offsetY: number;
}

// Resting profiles per slot — strong curl, dramatic tilt
const PROFILES: WarpProfile[] = [
  {
    warpX: 0.65,
    warpY: 0.5,
    twistZ: 0.22,
    tiltX: 0.32,
    tiltY: -0.6,
    tiltZ: -0.45,
    offsetY: 0.15,
  },
  {
    warpX: 0.32,
    warpY: 0.24,
    twistZ: 0.1,
    tiltX: 0.14,
    tiltY: -0.28,
    tiltZ: -0.2,
    offsetY: 0.08,
  },
  {
    warpX: 0.0,
    warpY: 0.0,
    twistZ: 0.0,
    tiltX: 0.0,
    tiltY: 0.0,
    tiltZ: 0.0,
    offsetY: 0.0,
  },
  {
    warpX: 0.32,
    warpY: 0.24,
    twistZ: -0.1,
    tiltX: 0.14,
    tiltY: 0.28,
    tiltZ: 0.2,
    offsetY: 0.08,
  },
  {
    warpX: 0.65,
    warpY: 0.5,
    twistZ: -0.22,
    tiltX: 0.32,
    tiltY: 0.6,
    tiltZ: 0.45,
    offsetY: 0.15,
  },
];

function getProfile(slot: number): WarpProfile {
  const idx = Math.round(slot) + 2;
  return PROFILES[Math.max(0, Math.min(PROFILES.length - 1, idx))];
}

function computeZ(
  nx: number,
  ny: number,
  wX: number,
  wY: number,
  tw: number,
): number {
  return (
    wX * -(1 - 4 * nx * (1 - nx)) +
    wY * -(1 - 4 * ny * (1 - ny)) +
    tw * (nx - 0.5) * (ny - 0.5) * 4
  );
}

function buildGeo(
  w: number,
  h: number,
  segs: number,
  p: WarpProfile,
): THREE.BufferGeometry {
  const geo = new THREE.PlaneGeometry(w, h, segs, segs);
  const pos = geo.attributes.position as THREE.BufferAttribute;
  for (let i = 0; i < pos.count; i++) {
    pos.setZ(
      i,
      computeZ(
        pos.getX(i) / w + 0.5,
        pos.getY(i) / h + 0.5,
        p.warpX,
        p.warpY,
        p.twistZ,
      ),
    );
  }
  pos.needsUpdate = true;
  geo.computeVertexNormals();
  return geo;
}

function lerpGeo(
  mesh: THREE.Mesh,
  p: WarpProfile,
  w: number,
  h: number,
  a: number,
) {
  const pos = (mesh.geometry as THREE.BufferGeometry).attributes
    .position as THREE.BufferAttribute;
  for (let i = 0; i < pos.count; i++) {
    const tz = computeZ(
      pos.getX(i) / w + 0.5,
      pos.getY(i) / h + 0.5,
      p.warpX,
      p.warpY,
      p.twistZ,
    );
    pos.setZ(i, pos.getZ(i) + (tz - pos.getZ(i)) * a);
  }
  pos.needsUpdate = true;
  (mesh.geometry as THREE.BufferGeometry).computeVertexNormals();
}

// Spring-damper
function sp(
  pos: number,
  vel: number,
  target: number,
  k: number,
  d: number,
  dt: number,
): [number, number] {
  const f = (target - pos) * k - vel * d;
  const nv = vel + f * dt;
  return [pos + nv * dt, nv];
}

// ── Per-card state ────────────────────────────────────────────────────────
interface CardState {
  // Physics position (spring toward logical target)
  posX: number;
  velX: number;
  posY: number;
  velY: number;
  posZ: number;
  velZ: number;
  // Rotation springs
  rx: number;
  vrx: number;
  ry: number;
  vry: number;
  rz: number;
  vrz: number;
  // Warp spring
  wx: number;
  vwx: number;
  wy: number;
  vwy: number;
  tw: number;
  vtw: number;
  // Unique noise offsets for multi-frequency idle sway
  p0: number;
  p1: number;
  p2: number;
  p3: number;
  // Track previous velocity for turbulence
  prevVelX: number;
}

function makeState(i: number, initX: number): CardState {
  const r = () => Math.random() * Math.PI * 2;
  return {
    posX: initX,
    velX: 0,
    posY: 0,
    velY: 0,
    posZ: 0,
    velZ: 0,
    rx: 0,
    vrx: 0,
    ry: 0,
    vry: 0,
    rz: 0,
    vrz: 0,
    wx: 0,
    vwx: 0,
    wy: 0,
    vwy: 0,
    tw: 0,
    vtw: 0,
    p0: r(),
    p1: r(),
    p2: r(),
    p3: r(),
    prevVelX: 0,
  };
}

export default function CurvedSlider({
  cards,
  autoPlay = false,
  autoPlayInterval = 3500,
}: CurvedSliderProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const N = cards.length;
  const CENTER = Math.floor(N / 2);
  const targetRef = useRef(CENTER);
  const baseOffRef = useRef(0);
  const dragging = useRef(false);
  const dragStartX = useRef(0);
  const dragDelta = useRef(0);
  const dragVel = useRef(0);
  const [activeIndex, setActiveIndex] = useState(CENTER);

  const CW = 3.0,
    CH = 4.0,
    SPACING = 3.7,
    SEGS = 44;

  useEffect(() => {
    if (!mountRef.current || N === 0) return;
    const el = mountRef.current;
    const W = el.clientWidth,
      H = el.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#6d8299');

    const cam = new THREE.PerspectiveCamera(40, W / H, 0.1, 100);
    cam.position.set(0, 0.6, 11.5);
    cam.lookAt(0, -0.1, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    el.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 0.82));
    const key = new THREE.DirectionalLight(0xfff8f0, 0.85);
    key.position.set(4, 6, 10);
    scene.add(key);
    const fill = new THREE.DirectionalLight(0xb0c8dd, 0.38);
    fill.position.set(-5, -3, 6);
    scene.add(fill);
    const rim = new THREE.DirectionalLight(0xddeeff, 0.2);
    rim.position.set(0, -2, -5);
    scene.add(rim);

    const loader = new THREE.TextureLoader();
    const meshes: THREE.Mesh[] = [];
    const states: CardState[] = [];
    const centerSlot = Math.floor(N / 2);

    cards.forEach((card, i) => {
      const slot = i - centerSlot;
      const prof = getProfile(slot);
      const geo = buildGeo(CW, CH, SEGS, prof);
      const tex = loader.load(card.image);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.minFilter = THREE.LinearMipmapLinearFilter;
      tex.generateMipmaps = true;
      const mat = new THREE.MeshStandardMaterial({
        map: tex,
        roughness: 0.88,
        metalness: 0,
        transparent: true,
        opacity: 1,
      });
      const mesh = new THREE.Mesh(geo, mat);
      const s = makeState(i, slot * SPACING);
      s.posY = prof.offsetY;
      s.posZ = -Math.abs(slot) * 0.4;
      mesh.position.set(s.posX, s.posY, s.posZ);
      mesh.rotation.set(prof.tiltX, prof.tiltY, prof.tiltZ);
      mesh.scale.setScalar(1.0 - Math.abs(slot) * 0.08);
      scene.add(mesh);
      meshes.push(mesh);
      states.push(s);
    });

    const clock = new THREE.Clock();
    let prevT = 0;
    let prevBaseOff = 0;

    const animate = () => {
      rafRef.current = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      const dt = Math.min(t - prevT, 0.05);
      prevT = t;

      // ── Base scroll (fast snappy reference) ──────────────────────────
      const logTarget =
        (targetRef.current - centerSlot) * -SPACING +
        (dragging.current ? dragDelta.current : 0);
      baseOffRef.current += (logTarget - baseOffRef.current) * 0.14;
      const baseOff = baseOffRef.current;

      // Global scroll speed (world units/frame) — drives wind intensity
      const scrollSpeed = (baseOff - prevBaseOff) / (dt || 0.016);
      prevBaseOff = baseOff;
      const windMag = Math.abs(scrollSpeed); // how strong is the wind right now

      meshes.forEach((mesh, i) => {
        const s = states[i];
        const slot = i - centerSlot;
        const absSl = Math.abs(slot);

        // ── Logical target X ──────────────────────────────────────────
        const logX = slot * SPACING + baseOff;

        // ── X spring: outer cards much softer (= more flutter lag) ────
        // Center: k=320 fast, outer k=28 very floaty
        // X spring: outer cards floaty but critically damped so no oscillation
        const k_x = slot === 0 ? 320 : Math.max(18, 320 - absSl * 100);
        const d_x =
          slot === 0 ? 2 * Math.sqrt(320) * 1.0 : 2 * Math.sqrt(k_x) * 1.05;
        [s.posX, s.velX] = sp(s.posX, s.velX, logX, k_x, d_x, dt);
        mesh.position.x = s.posX;

        // Wind force = how far this card lags behind its logical pos
        const lag = logX - s.posX;
        // Acceleration jolt = change in velocity (turbulence burst)
        const accel = (s.velX - s.prevVelX) / (dt || 0.016);
        s.prevVelX = s.velX;

        // ── Idle multi-freq sway (always active, heavier for outer cards) ─
        // Use 3 overlapping sine waves per axis for organic feel
        const idleAmp = slot === 0 ? 0.0 : 0.025 + absSl * 0.022;
        const idleY =
          idleAmp *
          (0.5 * Math.sin(t * 0.6 + s.p0) +
            0.3 * Math.sin(t * 1.1 + s.p1) +
            0.2 * Math.sin(t * 1.8 + s.p2));
        const idleRZ =
          idleAmp *
          0.55 *
          (0.5 * Math.cos(t * 0.5 + s.p0 + 0.8) +
            0.3 * Math.cos(t * 0.9 + s.p1 + 1.2) +
            0.2 * Math.cos(t * 1.5 + s.p2 + 0.4));
        const idleRX = idleAmp * 0.35 * Math.sin(t * 0.7 + s.p3);
        const idleRY = idleAmp * 0.4 * Math.cos(t * 0.65 + s.p3 + 2.0);

        // ── Wind-driven rotation springs (critically damped: d = 2*sqrt(k)*1.1) ──
        const tRZ =
          lag * (0.08 + absSl * 0.04) + accel * (0.001 + absSl * 0.0005);
        const k_rz = 36;
        const d_rz = 2 * Math.sqrt(k_rz) * 1.1;
        [s.rz, s.vrz] = sp(s.rz, s.vrz, tRZ, k_rz, d_rz, dt);

        const tRX = -Math.abs(lag) * (0.03 + absSl * 0.018) + idleRX;
        const k_rx = 36;
        const d_rx = 2 * Math.sqrt(k_rx) * 1.1;
        [s.rx, s.vrx] = sp(s.rx, s.vrx, tRX, k_rx, d_rx, dt);

        const tRY = lag * (0.045 + absSl * 0.02) + idleRY;
        const k_ry = 36;
        const d_ry = 2 * Math.sqrt(k_ry) * 1.1;
        [s.ry, s.vry] = sp(s.ry, s.vry, tRY, k_ry, d_ry, dt);

        // ── Y spring ──────────────────────────────────────────────────
        const tY = Math.abs(lag) * (0.07 + absSl * 0.04) + idleY;
        const k_y = 36;
        const d_y = 2 * Math.sqrt(k_y) * 1.1;
        [s.posY, s.velY] = sp(s.posY, s.velY, tY, k_y, d_y, dt);

        // ── Z spring ──────────────────────────────────────────────────
        const slotF = s.posX / SPACING;
        const absDist = Math.abs(slotF);
        const tZ = -Math.min(absDist, 2) * 0.4 - Math.abs(lag) * 0.05;
        const k_z = 64;
        const d_z = 2 * Math.sqrt(k_z) * 1.1;
        [s.posZ, s.velZ] = sp(s.posZ, s.velZ, tZ, k_z, d_z, dt);
        mesh.position.y = s.posY;
        mesh.position.z = s.posZ;

        // ── Profile: smooth lerp between two adjacent profiles by fractional slot ──
        // Avoid snapping (Math.round) which causes a "kick" every time slotR changes.
        const slotFloor = Math.floor(slotF);
        const slotCeil = slotFloor + 1;
        const frac = slotF - slotFloor; // 0..1 between floor and ceil
        const profA = getProfile(slotFloor);
        const profB = getProfile(slotCeil);
        // Smooth-step frac so blend accelerates/decelerates naturally
        const t3 = frac * frac * (3 - 2 * frac);
        const prof: WarpProfile = {
          warpX: profA.warpX + (profB.warpX - profA.warpX) * t3,
          warpY: profA.warpY + (profB.warpY - profA.warpY) * t3,
          twistZ: profA.twistZ + (profB.twistZ - profA.twistZ) * t3,
          tiltX: profA.tiltX + (profB.tiltX - profA.tiltX) * t3,
          tiltY: profA.tiltY + (profB.tiltY - profA.tiltY) * t3,
          tiltZ: profA.tiltZ + (profB.tiltZ - profA.tiltZ) * t3,
          offsetY: profA.offsetY + (profB.offsetY - profA.offsetY) * t3,
        };

        // ── Warp springs (overdamped — no flap after settle) ──────────
        const flapAmt = Math.min(Math.pow(Math.abs(lag), 1.4) * 0.12, 0.55);
        const tWX = prof.warpX + flapAmt;
        const tWY = prof.warpY + flapAmt * 0.75;
        const tTW = prof.twistZ + lag * (0.06 + absSl * 0.03);
        const k_w = 25;
        const d_w = 2 * Math.sqrt(k_w) * 1.2;
        [s.wx, s.vwx] = sp(s.wx, s.vwx, tWX, k_w, d_w, dt);
        [s.wy, s.vwy] = sp(s.wy, s.vwy, tWY, k_w, d_w, dt);
        const k_tw = 30;
        const d_tw = 2 * Math.sqrt(k_tw) * 1.2;
        [s.tw, s.vtw] = sp(s.tw, s.vtw, tTW, k_tw, d_tw, dt);

        lerpGeo(
          mesh,
          { ...prof, warpX: s.wx, warpY: s.wy, twistZ: s.tw },
          CW,
          CH,
          0.1,
        );

        // ── Final rotation — direct from springs, no extra lerp ───────
        mesh.rotation.x = prof.tiltX + s.rx;
        mesh.rotation.y = prof.tiltY + s.ry;
        mesh.rotation.z = prof.tiltZ + s.rz + idleRZ;

        // ── Scale: slight squish when moving fast ─────────────────────
        const ts =
          (1.0 - Math.min(absDist, 2) * 0.08) *
          (1 + Math.min(windMag, 4) * 0.008);
        mesh.scale.x += (ts - mesh.scale.x) * 0.07;
        mesh.scale.y = mesh.scale.x;

        // ── Opacity ──────────────────────────────────────────────────
        const to = Math.max(0.25, 1.0 - Math.min(absDist, 2) * 0.32);
        (mesh.material as THREE.MeshStandardMaterial).opacity +=
          (to - (mesh.material as THREE.MeshStandardMaterial).opacity) * 0.07;
      });

      renderer.render(scene, cam);
    };
    animate();

    const onResize = () => {
      cam.aspect = el.clientWidth / el.clientHeight;
      cam.updateProjectionMatrix();
      renderer.setSize(el.clientWidth, el.clientHeight);
    };
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
      meshes.forEach((m) => {
        m.geometry.dispose();
        (m.material as THREE.Material).dispose();
      });
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards]);

  useEffect(() => {
    if (!autoPlay) return;
    const id = setInterval(() => {
      setActiveIndex((p) => {
        const n = p < N - 1 ? p + 1 : 0;
        targetRef.current = n;
        return n;
      });
    }, autoPlayInterval);
    return () => clearInterval(id);
  }, [autoPlay, autoPlayInterval, N]);

  const goTo = useCallback(
    (index: number) => {
      const c = Math.max(0, Math.min(N - 1, index));
      targetRef.current = c;
      setActiveIndex(c);
    },
    [N],
  );

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    dragging.current = true;
    dragStartX.current = e.clientX;
    dragDelta.current = 0;
    dragVel.current = 0;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!dragging.current) return;
      const prev = dragDelta.current;
      dragDelta.current = ((e.clientX - dragStartX.current) / 115) * SPACING;
      dragVel.current = dragDelta.current - prev;
    },
    [SPACING],
  );

  const onPointerUp = useCallback(
    (e: React.PointerEvent) => {
      if (!dragging.current) return;
      dragging.current = false;
      const dx = e.clientX - dragStartX.current;
      dragDelta.current = 0;
      if (dragVel.current < -0.015 || dx < -55) goTo(activeIndex + 1);
      else if (dragVel.current > 0.015 || dx > 55) goTo(activeIndex - 1);
      dragVel.current = 0;
    },
    [activeIndex, goTo],
  );

  return (
    <div className="relative h-full w-full overflow-hidden select-none">
      <div
        ref={mountRef}
        className="h-full w-full cursor-grab active:cursor-grabbing"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      />
      <nav className="absolute right-0 bottom-7 left-0 z-10 flex items-center justify-center gap-8">
        <button
          onClick={() => goTo(activeIndex - 1)}
          disabled={activeIndex === 0}
          className="flex items-center gap-1.5 text-[13px] font-light tracking-widest text-white/70 transition-colors hover:text-white disabled:opacity-20"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="10" strokeWidth="0.75" />
            <polyline
              points="12.5,7.5 9,11 12.5,14.5"
              strokeWidth="1.1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Prev
        </button>
        <div className="flex items-center gap-[7px]">
          {cards.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{ transition: 'width 0.4s ease, background 0.3s' }}
              className={`h-[3px] rounded-full ${i === activeIndex ? 'w-5 bg-white' : 'w-[5px] bg-white/30 hover:bg-white/55'}`}
            />
          ))}
        </div>
        <button
          onClick={() => goTo(activeIndex + 1)}
          disabled={activeIndex === N - 1}
          className="flex items-center gap-1.5 text-[13px] font-light tracking-widest text-white/70 transition-colors hover:text-white disabled:opacity-20"
        >
          Next
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="10" strokeWidth="0.75" />
            <polyline
              points="9.5,7.5 13,11 9.5,14.5"
              strokeWidth="1.1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </nav>
    </div>
  );
}
