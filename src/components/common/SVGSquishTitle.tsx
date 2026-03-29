import { useEffect, useRef } from 'react';

interface PathConfig {
  d: string;
  cx: number;
  scaleMin: number;
  scaleMax: number;
  scaleDefault: number;
}

interface SVGSquishTitleProps {
  paths: PathConfig[];
  width?: number;
  height?: number;
  viewBox?: string;
  fill?: string;
  className?: string;
  lerpSpeed?: number;
  spread?: number;
}

const VIEWBOX_W = 1420;

export function SVGSquishTitle({
  paths,
  width = 1420,
  height = 505,
  viewBox = '0 0 1420 505',
  fill = 'black',
  className,
  lerpSpeed = 0.12,
  spread = 2.2,
}: SVGSquishTitleProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);
  const currentScales = useRef<number[]>(paths.map((p) => p.scaleDefault));
  const targetScales = useRef<number[]>(paths.map((p) => p.scaleDefault));
  const centerXs = useRef<number[]>(paths.map((p) => p.cx));
  const rafRef = useRef<number | null>(null);
  const isInsideRef = useRef(false);

  const applyScales = () => {
    pathRefs.current.forEach((el, i) => {
      if (!el) return;
      el.style.transformBox = 'fill-box';
      el.style.transformOrigin = 'center top';
      el.style.transform = `scaleY(${currentScales.current[i].toFixed(4)})`;
    });
  };

  const startAnimate = () => {
    if (rafRef.current) return;
    const animate = () => {
      let needsUpdate = false;
      currentScales.current = currentScales.current.map((cur, i) => {
        const next = cur + (targetScales.current[i] - cur) * lerpSpeed;
        if (Math.abs(next - cur) > 0.0001) needsUpdate = true;
        return next;
      });
      applyScales();
      if (needsUpdate || isInsideRef.current) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        rafRef.current = null;
      }
    };
    rafRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    applyScales();

    const timer = setTimeout(() => {
      centerXs.current = pathRefs.current.map((el, i) => {
        if (!el) return paths[i].cx;
        try {
          const bbox = el.getBBox();
          if (bbox?.width > 0) return bbox.x + bbox.width / 2;
        } catch {}
        return paths[i].cx;
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = svgRef.current?.getBoundingClientRect();
      if (!rect) return;

      const isOverSvg =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      const mouseNormX = (e.clientX - rect.left) / rect.width;

      if (isOverSvg) {
        isInsideRef.current = true;
        targetScales.current = paths.map((p, i) => {
          const charNormX = centerXs.current[i] / VIEWBOX_W;
          const dist = Math.abs(charNormX - mouseNormX);
          const t = Math.max(0, 1 - dist * spread);
          return p.scaleMin + (p.scaleMax - p.scaleMin) * t;
        });
      } else {
        isInsideRef.current = false;
        targetScales.current = paths.map((p) => p.scaleDefault);
      }

      startAnimate();
    };

    const handleMouseLeave = () => {
      isInsideRef.current = false;
      targetScales.current = paths.map((p) => p.scaleDefault);
      startAnimate();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [paths, lerpSpeed, spread]);

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      {paths.map((p, i) => (
        <path
          key={i}
          ref={(el) => {
            pathRefs.current[i] = el;
          }}
          d={p.d}
          fill={fill}
        />
      ))}
    </svg>
  );
}
