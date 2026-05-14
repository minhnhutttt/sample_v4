'use client';

import { useLayoutEffect } from 'react';

import gsap from 'gsap';

type Axis = 'horizontal' | 'vertical' | 'x' | 'y';
type Flow = 'left' | 'right' | 'up' | 'down';

type Options = {
  selector?: string;
  direction?: Axis;
  flow?: Flow;
};

function parseDurationToSeconds(input: string | undefined): number {
  if (!input) return 20;
  const trimmed = input.trim().toLowerCase();
  if (trimmed.endsWith('ms')) {
    const ms = parseFloat(trimmed.replace('ms', ''));
    return Number.isNaN(ms) ? 20 : ms / 1000;
  }
  if (trimmed.endsWith('s')) {
    const seconds = parseFloat(trimmed.replace('s', ''));
    return Number.isNaN(seconds) ? 20 : seconds;
  }
  const seconds = parseFloat(trimmed);
  return Number.isNaN(seconds) ? 20 : seconds;
}

export function useInfiniteScroll(opts: Options = {}) {
  const {
    selector = '[data-infinite-scroll]',
    direction = 'horizontal',
    flow,
  } = opts;

  useLayoutEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(selector),
    );
    const cleanup: Array<() => void> = [];

    elements.forEach((el) => {
      const attr = el.dataset.infiniteScroll ?? '2:20s';
      const [rawCount, rawDuration] = attr.split(':');
      const requested = Math.max(1, Number.parseInt(rawCount || '2', 10));
      const duration = parseDurationToSeconds(rawDuration);
      const count = Math.max(2, requested);

      const rawAxis = (
        el.dataset.infiniteDirection ||
        direction ||
        'horizontal'
      ).toLowerCase() as Axis;
      const isVertical = rawAxis === 'vertical' || rawAxis === 'y';

      const rawFlow = (
        el.dataset.infiniteFlow ||
        flow ||
        (isVertical ? 'up' : 'left')
      ).toLowerCase() as Flow;

      const positive = isVertical ? rawFlow === 'down' : rawFlow === 'right';

      const firstChild = el.children[0];
      if (!firstChild) return;

      const originalLen = el.children.length;
      for (let i = 1; i < count; i += 1) {
        el.appendChild(firstChild.cloneNode(true));
      }

      const prevWillChange = el.style.willChange;
      el.style.willChange = 'transform';

      const segment = 100 / count;
      const startPercent = positive ? -segment : 0;
      const endPercent = positive ? 0 : -segment;

      const fromProps = isVertical
        ? { yPercent: startPercent }
        : { xPercent: startPercent };
      const toProps = isVertical
        ? { yPercent: endPercent }
        : { xPercent: endPercent };

      const tween = gsap.fromTo(el, fromProps, {
        ...toProps,
        duration,
        ease: 'none',
        repeat: -1,
      });

      cleanup.push(() => {
        tween.kill();
        gsap.set(el, {
          xPercent: 0,
          yPercent: 0,
          clearProps: 'xPercent,yPercent',
        });
        el.style.willChange = prevWillChange;

        while (el.children.length > originalLen) {
          el.removeChild(el.lastElementChild as Element);
        }
      });
    });

    return () => {
      cleanup.forEach((fn) => fn());
    };
  }, [selector, direction, flow]);
}
