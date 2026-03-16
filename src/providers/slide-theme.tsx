'use client'

import React, {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useRef,
} from 'react'

type SlideThemeContextValue = {
  activeIndex: number
  accentColor: SlideColor
  setActiveSlide: (index: number) => void
}

export const SLIDE_COLORS = ['#F78629', '#ffc36a', '#ffffff'] as const
export type SlideColor = (typeof SLIDE_COLORS)[number]

const SlideThemeContext = createContext<SlideThemeContextValue | null>(null)

export function SlideThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const activeIndexRef = useRef(0)

  const setActiveSlide = useCallback((index: number) => {
    const safeIndex =
      ((index % SLIDE_COLORS.length) + SLIDE_COLORS.length) %
      SLIDE_COLORS.length
    activeIndexRef.current = safeIndex
    const color = SLIDE_COLORS[safeIndex] as SlideColor
    wrapperRef.current?.style.setProperty('--accent', color)
  }, [])

  useLayoutEffect(() => {
    wrapperRef.current?.style.setProperty('--accent', SLIDE_COLORS[0])
  }, [])

  const value = useMemo<SlideThemeContextValue>(() => {
    return {
      get activeIndex() {
        return activeIndexRef.current
      },
      get accentColor() {
        return SLIDE_COLORS[activeIndexRef.current] as SlideColor
      },
      setActiveSlide,
    }
  }, [setActiveSlide])

  return (
    <div ref={wrapperRef} style={{ ['--accent' as string]: SLIDE_COLORS[0] }}>
      <SlideThemeContext.Provider value={value}>
        {children}
      </SlideThemeContext.Provider>
    </div>
  )
}

export function useSlideTheme() {
  const ctx = useContext(SlideThemeContext)
  if (!ctx)
    throw new Error('useSlideTheme must be used within <SlideThemeProvider>')
  return ctx
}
