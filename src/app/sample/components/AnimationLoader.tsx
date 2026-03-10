'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Arc {
  id: number;
  chosen: boolean;
  radius: number;
  startAngle: number;
  endAngle: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
  lineWidth: number;
  baseOpacity: number;
  shimmerSpeed: number;
  shimmerOffset: number;
  snapRadius: number;
  snapStartAngle: number;
  snapArcLen: number;
  ringStartAngle: number;
  ringArcLen: number;
  ringRadius: number;
}
interface Rect {
  x: number;
  y: number;
  vx: number;
  vy: number;
  width: number;
  height: number;
  color: string;
  baseOpacity: number;
  shimmerSpeed: number;
  shimmerOffset: number;
  shotDelay: number;
  shotStartX?: number;
}
interface Line {
  y: number;
  targetY: number;
  lineHeight: number;
  width: number;
  color: string;
  offsetX: number;
  baseOpacity: number;
  shimmerSpeed: number;
  shimmerOffset: number;
  shotDelay: number;
  floatVx: number;
  floatOffset: number;
  bumpOffset?: number;
  replacement?: {
    width: number;
    color: string;
    baseOpacity: number;
    shimmerSpeed: number;
    shimmerOffset: number;
    floatVx: number;
    progress: number;
    floatOffset: number;
  };
}
interface LateLine {
  targetLineIdx: number;
  y: number;
  width: number;
  lineHeight: number;
  color: string;
  baseOpacity: number;
  shimmerSpeed: number;
  shimmerOffset: number;
  arrivalDelay: number;
  headX: number;
  arrived: boolean;
}
interface AnimState {
  phase: string;
  phaseStart: number;
  arcs: Arc[];
  rects: Rect[];
  lines: Line[];
  lateLines: LateLine[];
  convergeRadius: number;
  ringRotation: number;
  ringRotSpeed: number;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const COLORS = [
  '#22449A',
  '#0D40C0',
  '#2d9be0',
  '#42c8e8',
  '#7bb8f0',
  '#b8a4f0',
  '#e8a4c8',
  '#0D40C0',
  '#22449A',
];
const ARC_COUNT = 24;
const CHOSEN_COUNT = 12;

const PHASE_DURATIONS: Record<string, number> = {
  ARCS_RADIATE: 10000,
  ARCS_CONVERGE: 2200,
  RING_SPIN: 10000,
  RING_OUT: 900,
  BLANK_1: 400,
  RECTS_IN: 4000,
  RECTS_IN_HOLD: 10000,
  RECTS_OUT: 2000,
  BLANK_2: 400,
  LINES_IN: 1500,
  LINES_HOLD: 10000,
  LINES_OUT: 2500,
  BLANK_3: 400,
};

const STAGE_PHASES: string[][] = [
  ['ARCS_RADIATE'],
  ['ARCS_CONVERGE', 'RING_SPIN'],
  ['RING_OUT', 'BLANK_1', 'RECTS_IN', 'RECTS_IN_HOLD'],
  ['RECTS_OUT', 'BLANK_2', 'LINES_IN', 'LINES_HOLD'],
];

const HOLD_PHASES = new Set([
  'ARCS_RADIATE',
  'RING_SPIN',
  'RECTS_IN_HOLD',
  'LINES_HOLD',
]);

// Autoplay interval per stage (ms) — how long before auto-advancing slide
const STAGE_AUTOPLAY: number[] = [8000, 9000, 10000, 11000];

// ─── Slide content ────────────────────────────────────────────────────────────

const SLIDES = [
  {
    eyebrow: '01 — ORIGIN',
    title: 'From\nChaos',
    sub: 'Every signal begins as noise.\nEvery pattern starts unseen.',
    accent: '#42c8e8',
  },
  {
    eyebrow: '02 — CONVERGENCE',
    title: 'Into\nFocus',
    sub: 'Scattered arcs find their orbit.\nOrder emerges from entropy.',
    accent: '#7bb8f0',
  },
  {
    eyebrow: '03 — STRUCTURE',
    title: 'Taking\nShape',
    sub: 'Form crystallises from motion.\nEvery block holds its purpose.',
    accent: '#b8a4f0',
  },
  {
    eyebrow: '04 — FLOW',
    title: 'Always\nMoving',
    sub: 'Lines in constant renewal.\nChange is the only constant.',
    accent: '#e8a4c8',
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}
function easeOut(t: number) {
  return 1 - Math.pow(1 - t, 3);
}
function easeIn(t: number) {
  return t * t * t;
}
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

// ─── Data factories ───────────────────────────────────────────────────────────

function buildRingSegments(chosenArcs: Arc[], ringRadius: number) {
  const count = chosenArcs.length;
  const rawArcs = Array.from({ length: count }, () => 0.5 + Math.random());
  const sumArcs = rawArcs.reduce((a, b) => a + b, 0);
  const arcLens = rawArcs.map((a) => (a / sumArcs) * Math.PI * 2);
  let angle = 0;
  chosenArcs.forEach((arc, idx) => {
    arc.ringStartAngle = angle;
    arc.ringArcLen = arcLens[idx];
    arc.ringRadius = ringRadius;
    angle += arcLens[idx];
  });
}

function createArcs(cx: number, cy: number): Arc[] {
  const maxR = Math.min(cx, cy) * 1.05;
  return Array.from({ length: ARC_COUNT }, (_, i) => {
    const arcLen = Math.PI * 0.35 + Math.random() * Math.PI * 0.9;
    const startAngle = Math.random() * Math.PI * 2;
    const chosen = i < CHOSEN_COUNT;
    return {
      id: i,
      chosen,
      radius: (i / ARC_COUNT) * maxR * 0.3,
      startAngle,
      endAngle: startAngle + arcLen,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed:
        (Math.random() < 0.5 ? 1 : -1) * (0.006 + Math.random() * 0.012),
      color: COLORS[i % COLORS.length],
      lineWidth: chosen ? 9 + Math.random() * 5 : 5 + Math.random() * 6,
      baseOpacity: 0.3 + Math.random() * 0.7,
      shimmerSpeed: 0.00004 + Math.random() * 0.00012,
      shimmerOffset: Math.random(),
      snapRadius: 0,
      snapStartAngle: 0,
      snapArcLen: 0,
      ringStartAngle: 0,
      ringArcLen: 0,
      ringRadius: 0,
    };
  });
}

function createRects(w: number, h: number): Rect[] {
  return Array.from({ length: 10 }, () => ({
    x: w * 0.08 + Math.random() * w * 0.84,
    y: h * 0.08 + Math.random() * h * 0.84,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    width: 80 + Math.random() * 180,
    height: 30 + Math.random() * 80,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    baseOpacity: 0.3 + Math.random() * 0.7,
    shimmerSpeed: 0.00004 + Math.random() * 0.00012,
    shimmerOffset: Math.random(),
    shotDelay: Math.random() * 0.5,
  }));
}

function createLines(w: number, h: number): Line[] {
  const count = 100;
  const cy = h / 2;
  const spread = h * 1.1;
  const lineHeight = Math.ceil((spread / (count - 1)) * 0.6) + 1;
  return Array.from({ length: count }, (_, i) => {
    const frac = i / (count - 1);
    const targetY = cy - spread / 2 + frac * spread;
    return {
      y: targetY,
      targetY,
      lineHeight,
      width: w * 0.1 + Math.random() * w * 0.189,
      color: COLORS[i % COLORS.length],
      offsetX: 0,
      baseOpacity: 0.3 + Math.random() * 0.7,
      shimmerSpeed: 0.00004 + Math.random() * 0.00012,
      shimmerOffset: Math.random(),
      shotDelay: Math.random() * 0.6,
      floatVx: (Math.random() - 0.5) * 0.1575,
      floatOffset: 0,
    };
  });
}

// ─── Canvas Animation Component ───────────────────────────────────────────────

function AnimationBackground({
  currentStage,
  onStageReady,
}: {
  currentStage: number;
  onStageReady?: () => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const stageRef = useRef<number>(0);
  const advanceRef = useRef<boolean>(false);
  const stateRef = useRef<AnimState>({
    phase: 'ARCS_RADIATE',
    phaseStart: 0,
    arcs: [],
    rects: [],
    lines: [],
    lateLines: [],
    convergeRadius: 0,
    ringRotation: 0,
    ringRotSpeed: 0.008,
  });
  const onStageReadyRef = useRef(onStageReady);
  useEffect(() => {
    onStageReadyRef.current = onStageReady;
  }, [onStageReady]);

  // When slider moves to a new stage, trigger advance
  useEffect(() => {
    if (currentStage !== stageRef.current) {
      advanceRef.current = true;
    }
  }, [currentStage]);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;

    function resize() {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      const w = canvas.offsetWidth,
        h = canvas.offsetHeight;
      stateRef.current.arcs = createArcs(w / 2, h / 2);
      stateRef.current.rects = createRects(w, h);
      stateRef.current.lines = createLines(w, h);
    }
    resize();
    window.addEventListener('resize', resize);

    function onEnter(s: AnimState, w: number, h: number) {
      if (s.phase === 'RECTS_IN') s.rects = createRects(w, h);
      if (s.phase === 'RECTS_OUT') {
        s.rects.forEach((r) => {
          r.shotStartX = undefined;
        });
      }
      if (s.phase === 'LINES_HOLD') {
        const count = s.lines.length;
        function pickUniq(n: number) {
          const idx: number[] = [];
          while (idx.length < n) {
            const r = Math.floor(Math.random() * count);
            if (!idx.includes(r)) idx.push(r);
          }
          return idx;
        }
        function makeBatch(idxs: number[], waveOffset: number): LateLine[] {
          const total = idxs.length;
          return idxs.map((i, batchIdx) => {
            const line = s.lines[i];
            const even = batchIdx / (total - 1);
            const jitter = (Math.random() - 0.5) * (0.9 / total);
            const arrivalDelay =
              waveOffset + Math.min(Math.max(even * 0.92 + jitter, 0), 0.94);
            return {
              targetLineIdx: i,
              y: line.targetY,
              width: line.width * (0.6 + Math.random() * 0.8),
              lineHeight: line.lineHeight,
              color: COLORS[Math.floor(Math.random() * COLORS.length)],
              baseOpacity: 0.5 + Math.random() * 0.5,
              shimmerSpeed: 0.00004 + Math.random() * 0.00012,
              shimmerOffset: Math.random(),
              arrivalDelay,
              headX: -line.width,
              arrived: false,
            };
          });
        }
        s.lateLines = [...makeBatch(pickUniq(45), 0.02)];
      }
      if (s.phase === 'LINES_OUT') {
        s.lateLines = [];
        s.lines.forEach((l) => {
          l.bumpOffset = 0;
          l.replacement = undefined;
        });
      }
      if (s.phase === 'ARCS_CONVERGE') {
        const cx = canvas.offsetWidth / 2,
          cy = canvas.offsetHeight / 2;
        s.convergeRadius = Math.min(cx * 0.9, cy * 0.9);
        s.arcs.forEach((arc) => {
          arc.snapRadius = arc.radius;
          arc.snapStartAngle = arc.startAngle;
          arc.snapArcLen = arc.endAngle - arc.startAngle;
        });
        buildRingSegments(
          s.arcs.filter((a) => a.chosen),
          s.convergeRadius,
        );
        s.ringRotation = 0;
        s.ringRotSpeed =
          (Math.random() < 0.5 ? 1 : -1) * (0.007 + Math.random() * 0.006);
      }
    }

    function goTo(phase: string, now: number) {
      const s = stateRef.current;
      s.phase = phase;
      s.phaseStart = now;
      onEnter(s, canvas.offsetWidth, canvas.offsetHeight);
    }

    function nextPhase(now: number) {
      const s = stateRef.current;
      const cur = s.phase;

      if (HOLD_PHASES.has(cur)) {
        advanceRef.current = false;
        const next = (stageRef.current + 1) % 4;
        stageRef.current = next;
        if (next === 0) {
          goTo('LINES_OUT', now);
        } else {
          goTo(STAGE_PHASES[next][0], now);
        }
        onStageReadyRef.current?.();
        return;
      }
      if (cur === 'LINES_OUT') {
        goTo('BLANK_3', now);
        return;
      }
      if (cur === 'BLANK_3') {
        const w = canvas.offsetWidth,
          h = canvas.offsetHeight;
        s.arcs = createArcs(w / 2, h / 2);
        s.rects = createRects(w, h);
        s.lines = createLines(w, h);
        stageRef.current = 0;
        goTo('ARCS_RADIATE', now);
        return;
      }

      const stagePhasesArr = STAGE_PHASES[stageRef.current];
      const idx = stagePhasesArr.indexOf(cur);
      if (idx >= 0 && idx < stagePhasesArr.length - 1) {
        goTo(stagePhasesArr[idx + 1], now);
      } else {
        goTo(stagePhasesArr[0], now);
      }
    }

    function makeShimmerGrad(
      shimmerOffset: number,
      colorA: string,
      colorB: string,
    ): CanvasGradient {
      const W = canvas.offsetWidth;
      const scroll = (shimmerOffset % 1) * W;
      const grad = ctx.createLinearGradient(-scroll, 0, W * 3 - scroll, 0);
      const idxA = COLORS.indexOf(colorA) >= 0 ? COLORS.indexOf(colorA) : 0;
      const cC = COLORS[(idxA + 3) % COLORS.length];
      for (let tile = 0; tile < 3; tile++) {
        const o = tile / 3,
          sv = 1 / 3;
        grad.addColorStop(o + sv * 0.0, colorA + 'ee');
        grad.addColorStop(o + sv * 0.15, '#ffffffcc');
        grad.addColorStop(o + sv * 0.3, colorB + 'ff');
        grad.addColorStop(o + sv * 0.5, cC + 'ee');
        grad.addColorStop(o + sv * 0.65, '#ffffffbb');
        grad.addColorStop(o + sv * 0.8, colorA + 'ff');
        grad.addColorStop(Math.min(o + sv * 0.999, 1), colorA + 'ee');
      }
      return grad;
    }

    function drawArc(
      arc: Arc,
      i: number,
      cx: number,
      cy: number,
      opacity: number,
    ) {
      if (arc.radius < 1) return;
      arc.shimmerOffset = (arc.shimmerOffset + arc.shimmerSpeed * 16) % 1;
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(arc.rotation);
      ctx.beginPath();
      ctx.arc(0, 0, arc.radius, arc.startAngle, arc.endAngle);
      ctx.strokeStyle = makeShimmerGrad(
        arc.shimmerOffset,
        arc.color,
        COLORS[(i + 2) % COLORS.length],
      );
      ctx.globalAlpha = Math.max(
        0,
        Math.min(opacity * (arc.baseOpacity || 1), 1),
      );
      ctx.lineWidth = arc.lineWidth;
      ctx.lineCap = 'butt';
      ctx.stroke();
      ctx.restore();
    }

    function drawRing(
      cx: number,
      cy: number,
      radius: number,
      ringRot: number,
      opacity: number,
      lw: number,
    ) {
      stateRef.current.arcs
        .filter((a) => a.chosen)
        .forEach((arc) => {
          arc.shimmerOffset = (arc.shimmerOffset + arc.shimmerSpeed * 16) % 1;
          ctx.save();
          ctx.translate(cx, cy);
          ctx.rotate(ringRot);
          ctx.beginPath();
          ctx.arc(
            0,
            0,
            radius,
            arc.ringStartAngle,
            arc.ringStartAngle + arc.ringArcLen,
          );
          ctx.strokeStyle = makeShimmerGrad(
            arc.shimmerOffset,
            arc.color,
            COLORS[(arc.id + 2) % COLORS.length],
          );
          ctx.globalAlpha = Math.max(
            0,
            Math.min(opacity * (arc.baseOpacity || 1), 1),
          );
          ctx.lineWidth = lw || arc.lineWidth;
          ctx.lineCap = 'butt';
          ctx.stroke();
          ctx.restore();
        });
    }

    function draw(now: number) {
      const s = stateRef.current;
      const w = canvas.offsetWidth,
        h = canvas.offsetHeight;
      const cx = w / 2,
        cy = h / 2;
      const maxR = Math.min(cx, cy) * 1.25;

      const elapsed = now - s.phaseStart;
      const phaseDur = PHASE_DURATIONS[s.phase] ?? 1000;
      const t =
        HOLD_PHASES.has(s.phase) && advanceRef.current
          ? 1
          : Math.min(elapsed / phaseDur, 1);

      if (t >= 1) {
        nextPhase(now);
        animRef.current = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = '#e8ecef';
      ctx.fillRect(0, 0, w, h);

      const phase = s.phase;

      // ARCS RADIATE
      if (phase === 'ARCS_RADIATE') {
        s.arcs.forEach((arc, i) => {
          arc.radius += 1.1 * (1 + i * 0.04);
          if (arc.radius > maxR) {
            arc.radius = Math.random() * maxR * 0.05;
            arc.startAngle = Math.random() * Math.PI * 2;
            arc.endAngle =
              arc.startAngle + Math.PI * 0.35 + Math.random() * Math.PI * 0.9;
            arc.rotationSpeed =
              (Math.random() < 0.5 ? 1 : -1) * (0.006 + Math.random() * 0.012);
            arc.color = COLORS[Math.floor(Math.random() * COLORS.length)];
            arc.lineWidth = arc.chosen
              ? 9 + Math.random() * 5
              : 5 + Math.random() * 6;
          }
          const prog = arc.radius / maxR;
          let opacity =
            prog < 0.08 ? prog / 0.08 : prog < 0.7 ? 1 : 1 - (prog - 0.7) / 0.3;
          opacity *= easeOut(Math.min(t * 2.5, 1));
          arc.rotation += arc.rotationSpeed;
          drawArc(arc, i, cx, cy, opacity);
        });
      }

      // ARCS CONVERGE
      if (phase === 'ARCS_CONVERGE') {
        s.ringRotation += s.ringRotSpeed;
        s.arcs.forEach((arc, i) => {
          arc.rotation += arc.rotationSpeed * 0.5;
          if (arc.chosen) {
            arc.radius = lerp(arc.snapRadius, s.convergeRadius, easeOut(t));
            arc.endAngle =
              arc.startAngle +
              lerp(arc.snapArcLen, arc.ringArcLen, easeInOut(t));
            drawArc(arc, i, cx, cy, 1 - easeIn(Math.max(0, (t - 0.7) / 0.3)));
          } else {
            arc.radius += 0.6;
            const prog = arc.radius / maxR;
            const opacity =
              (1 - easeInOut(Math.min(t * 1.4, 1))) *
              (prog < 0.9 ? 1 : 1 - (prog - 0.9) / 0.1);
            drawArc(arc, i, cx, cy, Math.max(0, opacity));
          }
        });
        const ringOpacity = easeOut(Math.max(0, (t - 0.55) / 0.45));
        if (ringOpacity > 0)
          drawRing(cx, cy, s.convergeRadius, s.ringRotation, ringOpacity, 10);
      }

      // RING SPIN
      if (phase === 'RING_SPIN') {
        s.ringRotation += s.ringRotSpeed;
        drawRing(cx, cy, s.convergeRadius, s.ringRotation, 1, 10);
      }

      // RING OUT
      if (phase === 'RING_OUT') {
        s.ringRotation += s.ringRotSpeed;
        drawRing(
          cx,
          cy,
          s.convergeRadius * (1 + t * 0.12),
          s.ringRotation,
          1 - easeInOut(t),
          lerp(10, 4, t),
        );
      }

      // RECTS
      if (
        phase === 'RECTS_IN' ||
        phase === 'RECTS_IN_HOLD' ||
        phase === 'RECTS_OUT'
      ) {
        s.rects.forEach((rect, i) => {
          let scaleX = 0,
            scaleY = 1,
            opacity = 0;
          if (phase === 'RECTS_IN') {
            const delay2 = (i / s.rects.length) * 0.3;
            const lt = Math.max(0, (t - delay2) / (1 - delay2));
            if (lt < 0.05) return;
            rect.x += rect.vx;
            rect.y += rect.vy;
            scaleX = easeOut(Math.min(lt * 3.6, 1));
            opacity = Math.min((lt - 0.05) * 10, 1);
          } else if (phase === 'RECTS_IN_HOLD') {
            scaleX = 1;
            opacity = 1;
            rect.x += rect.vx;
            rect.y += rect.vy;
          } else {
            const squeezeEnd = 0.3;
            if (t < squeezeEnd) {
              const p = t / squeezeEnd;
              scaleX = 1;
              scaleY = lerp(1, 0.15, easeInOut(p));
              rect.x += rect.vx;
              rect.y += rect.vy;
              opacity = 1;
            } else {
              const shotStart = squeezeEnd + rect.shotDelay * (1 - squeezeEnd);
              const lt = Math.max(0, (t - shotStart) / (1 - shotStart));
              const p = easeOut(Math.min(lt * 2, 1));
              scaleY = 0.15;
              scaleX = lerp(1, 3, p);
              if (!rect.shotStartX) rect.shotStartX = rect.x;
              rect.x = lerp(rect.shotStartX, rect.shotStartX + w, p);
              rect.y += rect.vy;
              opacity = 1 - p;
            }
          }
          if (opacity <= 0) return;
          ctx.save();
          ctx.translate(rect.x - rect.width / 2, rect.y);
          ctx.scale(scaleX, scaleY);
          ctx.globalAlpha = Math.max(0, opacity * (rect.baseOpacity || 1));
          rect.shimmerOffset =
            (rect.shimmerOffset + rect.shimmerSpeed * 16) % 1;
          ctx.fillStyle = makeShimmerGrad(
            rect.shimmerOffset,
            rect.color,
            COLORS[(i + 3) % COLORS.length],
          );
          ctx.fillRect(0, -rect.height / 2, rect.width, rect.height);
          ctx.restore();
        });
      }

      // LINES
      if (
        phase === 'LINES_IN' ||
        phase === 'LINES_HOLD' ||
        phase === 'LINES_OUT'
      ) {
        if (phase === 'LINES_HOLD' && s.lateLines.length > 0) {
          s.lateLines.forEach((ll) => {
            const lt = Math.max(
              0,
              (t - ll.arrivalDelay) / (1 - ll.arrivalDelay),
            );
            if (lt <= 0) return;
            const p = easeOut(Math.min(lt * 10, 1));
            const targetLine = s.lines[ll.targetLineIdx];
            if (targetLine) targetLine.bumpOffset = p * (w + targetLine.width);
          });
        }

        s.lines.forEach((line, i) => {
          const c1 = COLORS[i % COLORS.length];
          const c2 = COLORS[(i + 2) % COLORS.length];
          let x0: number, x1: number, opacity: number;

          if (phase === 'LINES_IN') {
            const shotStart = line.shotDelay * 0.8;
            const lt = Math.max(0, (t - shotStart) / (1 - shotStart));
            if (lt <= 0) return;
            const p = easeOut(Math.min(lt * 1.4, 1));
            x0 = lerp(-line.width, cx - line.width / 2 + line.floatOffset, p);
            x1 = lerp(0, cx + line.width / 2 + line.floatOffset, p);
            opacity = Math.min(lt * 4, 1) * (line.baseOpacity || 1);
            if (opacity <= 0) return;
            line.shimmerOffset =
              (line.shimmerOffset + line.shimmerSpeed * 16) % 1;
            ctx.save();
            ctx.globalAlpha = Math.max(0, opacity) * 0.9;
            ctx.beginPath();
            ctx.moveTo(x0, line.targetY);
            ctx.lineTo(x1, line.targetY);
            ctx.strokeStyle = makeShimmerGrad(line.shimmerOffset, c1, c2);
            ctx.lineWidth = line.lineHeight;
            ctx.lineCap = 'butt';
            ctx.stroke();
            ctx.restore();
            return;
          }

          if (phase === 'LINES_HOLD') {
            const freeze = t > 0.95;
            if (!freeze)
              line.floatOffset = (line.floatOffset || 0) + line.floatVx;
            const bump = line.bumpOffset || 0;
            x0 = cx - line.width / 2 + line.floatOffset + bump;
            x1 = cx + line.width / 2 + line.floatOffset + bump;
            const exitStart = w * 0.7,
              exitEnd = w * 1.3;
            const bumpFade =
              bump > exitStart
                ? 1 - Math.min((bump - exitStart) / (exitEnd - exitStart), 1)
                : 1;
            opacity = (line.baseOpacity || 1) * bumpFade;
            if (bump >= exitEnd && !line.replacement) {
              line.replacement = {
                width: w * 0.1 + Math.random() * w * 0.189,
                color: COLORS[Math.floor(Math.random() * COLORS.length)],
                baseOpacity: 0.3 + Math.random() * 0.7,
                shimmerSpeed: 0.00004 + Math.random() * 0.00012,
                shimmerOffset: Math.random(),
                floatVx: (Math.random() - 0.5) * 0.315,
                progress: 0,
                floatOffset: 0,
              };
            }
            if (line.replacement) {
              const rep = line.replacement;
              rep.progress = Math.min(rep.progress + 0.008, 1);
              if (!freeze) rep.floatOffset += rep.floatVx;
              const rp = easeOut(rep.progress);
              const rx0 = lerp(
                -rep.width,
                cx - rep.width / 2 + rep.floatOffset,
                rp,
              );
              const rx1 = lerp(0, cx + rep.width / 2 + rep.floatOffset, rp);
              const repOpacity =
                Math.min(rep.progress * 5, 1) * rep.baseOpacity;
              if (repOpacity > 0) {
                rep.shimmerOffset =
                  (rep.shimmerOffset + rep.shimmerSpeed * 16) % 1;
                const rc2 =
                  COLORS[(COLORS.indexOf(rep.color) + 2) % COLORS.length];
                ctx.save();
                ctx.globalAlpha = Math.max(0, repOpacity) * 0.9;
                ctx.beginPath();
                ctx.moveTo(rx0, line.targetY);
                ctx.lineTo(rx1, line.targetY);
                ctx.strokeStyle = makeShimmerGrad(
                  rep.shimmerOffset,
                  rep.color,
                  rc2,
                );
                ctx.lineWidth = line.lineHeight;
                ctx.lineCap = 'butt';
                ctx.stroke();
                ctx.restore();
              }
            }
            if (opacity <= 0) return;
            line.shimmerOffset =
              (line.shimmerOffset + line.shimmerSpeed * 16) % 1;
            ctx.save();
            ctx.globalAlpha = Math.max(0, opacity) * 0.9;
            ctx.beginPath();
            ctx.moveTo(x0, line.targetY);
            ctx.lineTo(x1, line.targetY);
            ctx.strokeStyle = makeShimmerGrad(line.shimmerOffset, c1, c2);
            ctx.lineWidth = line.lineHeight;
            ctx.lineCap = 'butt';
            ctx.stroke();
            ctx.restore();
            return;
          }

          // LINES_OUT
          const convergeDur = 0.35;
          const distNorm = Math.abs(line.targetY - cy) / (h * 0.55);
          const convergeDelay = (1 - distNorm) * 0.3;
          const p1 = Math.min(
            Math.max((t - convergeDelay) / (convergeDur - convergeDelay), 0),
            1,
          );
          const convergedY = lerp(line.targetY, cy, easeInOut(p1));
          const p2 = Math.max(0, (t - convergeDur) / (1 - convergeDur));
          const scaleX = 1 - easeInOut(p2);
          if (scaleX <= 0) return;
          const currentOffset = lerp(
            line.floatOffset || 0,
            0,
            easeInOut(Math.min(t / convergeDur, 1)),
          );
          const halfW = (line.width / 2) * scaleX;
          line.shimmerOffset =
            (line.shimmerOffset + line.shimmerSpeed * 16) % 1;
          ctx.save();
          ctx.globalAlpha = Math.max(0, line.baseOpacity || 1) * 0.9;
          ctx.beginPath();
          ctx.moveTo(cx - halfW + currentOffset, convergedY);
          ctx.lineTo(cx + halfW + currentOffset, convergedY);
          ctx.strokeStyle = makeShimmerGrad(line.shimmerOffset, c1, c2);
          ctx.lineWidth = line.lineHeight;
          ctx.lineCap = 'butt';
          ctx.stroke();
          ctx.restore();
        });

        if (phase === 'LINES_HOLD' && s.lateLines.length > 0) {
          s.lateLines.forEach((ll) => {
            const lt = Math.max(
              0,
              (t - ll.arrivalDelay) / (1 - ll.arrivalDelay),
            );
            if (lt <= 0) return;
            const p = easeOut(Math.min(lt * 10, 1));
            if (p >= 1) ll.arrived = true;
            const x0 = ll.arrived
              ? cx - ll.width / 2
              : lerp(-ll.width, cx - ll.width / 2, p);
            const x1 = ll.arrived
              ? cx + ll.width / 2
              : lerp(0, cx + ll.width / 2, p);
            const opacity = ll.arrived
              ? ll.baseOpacity
              : Math.min(lt * 10, 1) * (ll.baseOpacity || 1);
            if (opacity <= 0) return;
            ll.shimmerOffset = (ll.shimmerOffset + ll.shimmerSpeed * 16) % 1;
            const c2 = COLORS[(COLORS.indexOf(ll.color) + 3) % COLORS.length];
            ctx.save();
            ctx.globalAlpha = Math.max(0, opacity) * 0.9;
            ctx.beginPath();
            ctx.moveTo(x0, ll.y);
            ctx.lineTo(x1, ll.y);
            ctx.strokeStyle = makeShimmerGrad(ll.shimmerOffset, ll.color, c2);
            ctx.lineWidth = ll.lineHeight;
            ctx.lineCap = 'butt';
            ctx.stroke();
            ctx.restore();
          });
        }
      }

      animRef.current = requestAnimationFrame(draw);
    }

    stateRef.current.phaseStart = performance.now();
    animRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />;
}

// ─── Circular Progress (dùng trong cursor) ────────────────────────────────────

// Không cần component riêng — progress được tính trực tiếp trong cursor RAF

// ─── Main Slider ───────────────────────────────────────────────────────────────

// FADE_OUT_MS: how long old content fades out before new content appears
const FADE_OUT_MS = 500;

export default function SliderWithAnimation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlide, setVisibleSlide] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  // Custom cursor state
  const [cursorPos, setCursorPos] = useState({ x: -200, y: -200 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorClicking, setCursorClicking] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [progress, setProgress] = useState(0);
  const cursorTargetRef = useRef({ x: -200, y: -200 });
  const cursorCurrentRef = useRef({ x: -200, y: -200 });
  const cursorRafRef = useRef<number>(0);

  // Progress tracking refs
  const progressActiveRef = useRef(true);
  const progressStartRef = useRef<number | null>(null);
  const progressDoneRef = useRef(false);
  const progressDurationRef = useRef(STAGE_AUTOPLAY[0]);

  const splideRef = useRef<Splide>(null);

  // Smooth cursor follow + progress tick — single RAF loop
  useEffect(() => {
    const LERP = 0.1;
    function tick(now: number) {
      // cursor lerp
      const tx = cursorTargetRef.current.x;
      const ty = cursorTargetRef.current.y;
      const cx = cursorCurrentRef.current.x;
      const cy = cursorCurrentRef.current.y;
      const nx = cx + (tx - cx) * LERP;
      const ny = cy + (ty - cy) * LERP;
      cursorCurrentRef.current = { x: nx, y: ny };
      setCursorPos({ x: nx, y: ny });

      // progress tick
      if (progressActiveRef.current && !progressDoneRef.current) {
        if (!progressStartRef.current) progressStartRef.current = now;
        const pct = Math.min(
          (now - progressStartRef.current) / progressDurationRef.current,
          1,
        );
        setProgress(pct);
        if (pct >= 1) {
          progressDoneRef.current = true;
          // signal completion via a custom event so goNext can be called
          window.dispatchEvent(new Event('slider-progress-complete'));
        }
      }

      cursorRafRef.current = requestAnimationFrame(tick);
    }
    cursorRafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(cursorRafRef.current);
  }, []);

  const cooldownRef = useRef(false);

  const goNext = useCallback(() => {
    if (transitioning || cooldownRef.current) return;
    const next = (currentSlide + 1) % SLIDES.length;

    cooldownRef.current = true;
    setIsDisabled(true);
    setTimeout(() => {
      cooldownRef.current = false;
      setIsDisabled(false);
    }, 2000);

    // Reset progress
    progressActiveRef.current = false;
    progressStartRef.current = null;
    progressDoneRef.current = false;
    setProgress(0);

    setTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(next);
      setVisibleSlide(next);
      splideRef.current?.go(next);
      setTransitioning(false);
      // restart progress after content swap
      setTimeout(() => {
        progressDurationRef.current = STAGE_AUTOPLAY[next];
        progressStartRef.current = null;
        progressDoneRef.current = false;
        progressActiveRef.current = true;
      }, 60);
    }, FADE_OUT_MS);
  }, [currentSlide, transitioning]);

  // Listen for progress completion
  useEffect(() => {
    const handler = () => goNext();
    window.addEventListener('slider-progress-complete', handler);
    return () =>
      window.removeEventListener('slider-progress-complete', handler);
  }, [goNext]);

  const slide = SLIDES[visibleSlide];

  return (
    <div
      className={`relative h-screen w-full overflow-hidden bg-[#e8ecef] ${isDisabled ? 'cursor-wait' : 'cursor-pointer'}`}
      onMouseMove={(e) => {
        cursorTargetRef.current = { x: e.clientX, y: e.clientY };
      }}
      onMouseEnter={() => setCursorVisible(true)}
      onMouseLeave={() => setCursorVisible(false)}
      onMouseDown={() => !isDisabled && setCursorClicking(true)}
      onMouseUp={() => setCursorClicking(false)}
      onClick={goNext}
    >
      {/* Canvas background */}
      <AnimationBackground currentStage={currentSlide} />

      {/* Splide — hidden state tracker */}
      <div className="hidden">
        <Splide
          ref={splideRef}
          options={{
            type: 'fade',
            speed: 0,
            arrows: false,
            pagination: false,
            drag: false,
            rewind: false,
          }}
        >
          {SLIDES.map((_, i) => (
            <SplideSlide key={i}>
              <div />
            </SplideSlide>
          ))}
        </Splide>
      </div>

      {/* ── Custom cursor ─────────────────────────────────────────────── */}
      {(() => {
        const SIZE = 96;
        const R = 45;
        const CIRC = 2 * Math.PI * R;
        const offset = CIRC * (1 - progress);
        return (
          <div
            className="pointer-events-none fixed z-50"
            style={{
              width: SIZE,
              height: SIZE,
              left: cursorPos.x,
              top: cursorPos.y,
              transform: 'translate(-50%, -50%)',
              opacity: cursorVisible ? (isDisabled ? 0.5 : 1) : 0,
              transition: 'opacity 0.3s ease',
            }}
          >
            {/* SVG progress ring — fills wrapper exactly */}
            <svg
              width={SIZE}
              height={SIZE}
              viewBox={`0 0 ${SIZE} ${SIZE}`}
              style={{
                position: 'absolute',
                inset: 0,
                transform: 'rotate(-90deg)',
              }}
            >
              <circle
                cx={SIZE / 2}
                cy={SIZE / 2}
                r={R}
                fill="none"
                stroke="rgba(0,0,0,0.08)"
                strokeWidth="1.5"
              />
              <circle
                cx={SIZE / 2}
                cy={SIZE / 2}
                r={R}
                fill="none"
                stroke="rgba(0,0,0,0.4)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray={CIRC}
                strokeDashoffset={offset}
              />
            </svg>

            {/* Inner circle with text — centered inside wrapper */}
            <div
              style={{
                position: 'absolute',
                inset: 6,
                borderRadius: '50%',
                border: '1px solid rgba(0,0,0,0.1)',
                background: 'rgba(232,236,239,0.75)',
                backdropFilter: 'blur(6px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transform: cursorClicking ? 'scale(0.9)' : 'scale(1)',
                transition: 'transform 0.15s cubic-bezier(0.16,1,0.3,1)',
              }}
            >
              <p
                style={{
                  fontSize: 9.5,
                  lineHeight: 1.5,
                  textAlign: 'center',
                  color: 'rgba(0,0,0,0.45)',
                  letterSpacing: '0.08em',
                  fontFamily: 'ui-monospace, monospace',
                  textTransform: 'uppercase',
                  userSelect: 'none',
                }}
              >
                Click to
                <br />
                next
              </p>
            </div>
          </div>
        );
      })()}

      {/* Slide content overlay */}
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-8 md:p-14">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-6 w-6 items-center justify-center rounded-full border border-black/20">
              <div className="h-2 w-2 rounded-full bg-black/50" />
            </div>
            <span className="text-xs font-light tracking-[0.2em] text-black/35 uppercase">
              Sequence
            </span>
          </div>
          <div className="flex items-center gap-2">
            {SLIDES.map((_, i) => (
              <div
                key={i}
                className="transition-all duration-700"
                style={{
                  width: i === currentSlide ? 24 : 6,
                  height: 2,
                  borderRadius: 9999,
                  background:
                    i === currentSlide ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0.15)',
                }}
              />
            ))}
          </div>
        </div>

        {/* Center content */}
        <div className="flex flex-1 items-center">
          <div
            style={{
              opacity: transitioning ? 0 : 1,
              transition: transitioning
                ? `opacity ${FADE_OUT_MS}ms cubic-bezier(0.4, 0, 1, 1)`
                : 'none',
            }}
          >
            <div key={visibleSlide} className="max-w-xl">
              <p
                className="mb-5 text-xs font-light tracking-[0.25em] uppercase"
                style={{
                  color: slide.accent,
                  animation:
                    'fadeSlideUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.05s both',
                }}
              >
                {slide.eyebrow}
              </p>
              <h1
                className="mb-6 leading-none font-bold text-[#1a2a4a]"
                style={{
                  fontSize: 'clamp(3.5rem, 8vw, 7rem)',
                  letterSpacing: '-0.03em',
                  fontFamily: '"Georgia", serif',
                  whiteSpace: 'pre-line',
                  animation:
                    'fadeSlideUp 1.3s cubic-bezier(0.16, 1, 0.3, 1) 0.18s both',
                }}
              >
                {slide.title}
              </h1>
              <p
                className="leading-relaxed text-black/40"
                style={{
                  fontSize: 'clamp(0.85rem, 1.5vw, 1rem)',
                  whiteSpace: 'pre-line',
                  fontFamily: 'ui-monospace, monospace',
                  animation:
                    'fadeSlideUp 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.38s both',
                }}
              >
                {slide.sub}
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
