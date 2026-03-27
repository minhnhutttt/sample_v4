'use client';

import { useEffect, useRef } from 'react';

const PATHS = [
  {
    d: 'M1420 6V63.1629H1388.18V500H1333.45V63.1629H1301V6H1420Z',
    scaleMin: 0.6,
    scaleMax: 0.9,
    scaleDefault: 0.719856,
  },
  {
    d: 'M1157 500V6H1223.31C1266.67 6 1290.26 32.1114 1290.26 79.3943V165.491C1290.26 212.069 1272.41 237.474 1239.25 237.474H1235.43V245.943H1273.05L1296 500H1241.8L1223.95 280.523H1211.83V500H1157ZM1211.83 227.594H1223.31C1231.6 227.594 1236.06 219.831 1236.06 207.129V83.6286C1236.06 70.22 1231.6 63.1629 1223.31 63.1629H1211.83V227.594Z',
    scaleMin: 0.6,
    scaleMax: 0.9,
    scaleDefault: 0.877945,
  },
  {
    d: 'M1089.31 500L1082.33 337.686H1055.67L1048.69 500H996L1016.31 6H1122.32L1142 500H1089.31ZM1057.57 279.817H1080.43L1075.35 162.669L1074.08 61.7514H1063.92L1062.65 162.669L1057.57 279.817Z',
    scaleMin: 0.6,
    scaleMax: 0.9,
    scaleDefault: 0.78162,
  },
  {
    d: 'M929 81V6H984V81H929Z',
    scaleMin: 0.6,
    scaleMax: 0.9,
    scaleDefault: 0.800007,
  },
  {
    d: 'M676.188 500L659 6H714.384L720.113 334.863L721.387 442.837H730.299L732.209 334.863L743.668 6H821.332L833.428 334.863L834.701 442.837H843.613L844.887 334.863L850.616 6H906L889.448 500H798.415L788.866 171.137L787.593 63.1629H778.044L776.771 171.137L767.222 500H676.188Z',
    scaleMin: 0.6,
    scaleMax: 0.9,
    scaleDefault: 0.679877,
  },
  {
    d: 'M578 500C534.61 500 511 474.306 511 427.083V73.6111C511 25.6944 534.61 0 578 0C621.391 0 645 25.6944 645 73.6111V427.083C645 474.306 621.391 500 578 500ZM578 443.75C586.295 443.75 590.124 436.111 590.124 422.917V77.0833C590.124 63.8889 586.295 56.25 578 56.25C569.705 56.25 565.238 63.8889 565.238 77.0833V422.917C565.238 436.111 569.705 443.75 578 443.75Z',
    scaleMin: 0.6,
    scaleMax: 0.9,
    scaleDefault: 0.870604,
  },
  {
    d: 'M450.043 442.837H499V500H396V6H450.043V442.837Z',
    scaleMin: 0.6,
    scaleMax: 0.9,
    scaleDefault: 0.799787,
  },
  {
    d: 'M335.043 442.837H384V500H281V6H335.043V442.837Z',
    scaleMin: 0.6,
    scaleMax: 0.9,
    scaleDefault: 0.881787,
  },
  {
    d: 'M191.5 500C148.433 500 125 474.306 125 427.083V73.6111C125 25.6944 148.433 0 191.5 0C234.567 0 258 25.6944 258 73.6111V427.083C258 474.306 234.567 500 191.5 500ZM191.5 443.75C199.733 443.75 203.533 436.111 203.533 422.917V77.0833C203.533 63.8889 199.733 56.25 191.5 56.25C183.267 56.25 178.833 63.8889 178.833 77.0833V422.917C178.833 436.111 183.267 443.75 191.5 443.75Z',
    scaleMin: 0.6,
    scaleMax: 0.9,
    scaleDefault: 0.989695,
  },
  {
    d: 'M109 63.1629H54.1813V219.126H102.626V276.289H54.1813V500H0V6H109V63.1629Z',
    scaleMin: 0.6,
    scaleMax: 0.9,
    scaleDefault: 0.800845,
  },
];

const VIEWBOX_W = 1420;
const LERP_SPEED = 0.12;

export default function HomeText() {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);
  const currentScales = useRef<number[]>(PATHS.map((p) => p.scaleDefault));
  const targetScales = useRef<number[]>(PATHS.map((p) => p.scaleDefault));
  const rafRef = useRef<number | null>(null);
  const isInsideRef = useRef(false);
  const centerXs = useRef<number[]>([]);

  const applyScales = () => {
    pathRefs.current.forEach((el, i) => {
      if (!el) return;
      el.style.transformBox = 'fill-box';
      el.style.transformOrigin = 'center top';
      el.style.transform = `scaleY(${currentScales.current[i]})`;
    });
  };

  useEffect(() => {
    centerXs.current = pathRefs.current.map((el) => {
      if (!el) return 0;
      const bbox = el.getBBox();
      return bbox.x + bbox.width / 2;
    });
    applyScales();
  }, []);

  const computeTargetScales = (mouseNormX: number): number[] => {
    return PATHS.map((p, i) => {
      const charNormX = centerXs.current[i] / VIEWBOX_W;
      const dist = Math.abs(charNormX - mouseNormX);
      const t = Math.max(0, 1 - dist * 2.2);
      return p.scaleMin + (p.scaleMax - p.scaleMin) * t;
    });
  };

  const animate = () => {
    let needsUpdate = false;
    currentScales.current = currentScales.current.map((cur, i) => {
      const next = cur + (targetScales.current[i] - cur) * LERP_SPEED;
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

  const startAnimate = () => {
    if (!rafRef.current) {
      rafRef.current = requestAnimationFrame(animate);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    isInsideRef.current = true;
    const rect = svgRef.current?.getBoundingClientRect();
    if (!rect) return;
    const mouseNormX = (e.clientX - rect.left) / rect.width;
    targetScales.current = computeTargetScales(mouseNormX);
    startAnimate();
  };

  const handleMouseLeave = () => {
    isInsideRef.current = false;
    targetScales.current = PATHS.map((p) => p.scaleDefault);
    startAnimate();
  };

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div
        className="absolute inset-0 z-20"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      ></div>
      <div className="landing-1-intro-webgl">
        <div className="pt-promo-header px-1">
          <div className="title">
            <div className="title-children-wrapper">
              <svg
                ref={svgRef}
                className="intro__title is-hidden:sm-down svg-fix"
                width="1420"
                height="500"
                viewBox="0 0 1420 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {PATHS.map((p, i) => (
                  <path
                    key={i}
                    ref={(el) => {
                      pathRefs.current[i] = el;
                    }}
                    d={p.d}
                    className="scale-y-90"
                    fill="white"
                  />
                ))}
              </svg>
            </div>
          </div>
          <div className="intro__title-decoration">
            <img src="/images/line.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
