'use client'

import { useEffect, useRef, useState } from 'react'

interface VideoModalProps {
  src: string
  isOpen: boolean
  onClose: () => void
}

export const VideoModal = ({ src, isOpen, onClose }: VideoModalProps) => {
  // mounted: keeps DOM alive during exit animation
  const [mounted, setMounted] = useState(false)
  // active: true one rAF after mount so CSS transition fires from scaleY(0) → scaleY(1)
  const [active, setActive] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (isOpen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMounted(true)
      // Wait 2 rAFs so browser paints the scaleY(0) initial state before transitioning
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => setActive(true))
      })
      return () => cancelAnimationFrame(raf)
    } else {
      setActive(false)
      const t = setTimeout(() => setMounted(false), 550)
      return () => clearTimeout(t)
    }
  }, [isOpen])

  // Play/pause video
  useEffect(() => {
    if (!videoRef.current) return
    if (isOpen) {
      // Play after curtain animation finishes (~550ms)
      const t = setTimeout(() => {
        videoRef.current?.play().catch(() => {})
      }, 560)
      return () => clearTimeout(t)
    } else {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }, [isOpen])

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true">
      {/* Top curtain — starts scaleY(0), expands to scaleY(1) from bottom edge downward */}
      <div
        className="absolute left-0 right-0 top-0 bg-black"
        style={{
          height: '50%',
          transformOrigin: 'bottom center',
          transform: active ? 'scaleY(1)' : 'scaleY(0)',
          transition: active
            ? 'transform 0.55s cubic-bezier(0.76, 0, 0.24, 1)'
            : 'transform 0.45s cubic-bezier(0.76, 0, 0.24, 1)',
        }}
      />

      {/* Bottom curtain — starts scaleY(0), expands to scaleY(1) from top edge upward */}
      <div
        className="absolute left-0 right-0 bottom-0 bg-black"
        style={{
          height: '50%',
          transformOrigin: 'top center',
          transform: active ? 'scaleY(1)' : 'scaleY(0)',
          transition: active
            ? 'transform 0.55s cubic-bezier(0.76, 0, 0.24, 1)'
            : 'transform 0.45s cubic-bezier(0.76, 0, 0.24, 1)',
        }}
      />

      {/* Video — fades in after curtains fully cover */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          opacity: active ? 1 : 0,
          transition: active
            ? 'opacity 0.35s ease 0.5s'
            : 'opacity 0.2s ease',
          pointerEvents: active ? 'auto' : 'none',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 text-white/70 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <line x1="6" y1="6" x2="26" y2="26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="26" y1="6" x2="6" y2="26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        {/* Video player */}
        <div className="w-full max-w-4xl px-6">
          <video
            ref={videoRef}
            className="w-full aspect-video object-cover"
            loop
            muted
            playsInline
            autoPlay
            src={src}
          />
        </div>

        {/* Backdrop click to close */}
        <div className="absolute inset-0 -z-10 cursor-pointer" onClick={onClose} />
      </div>
    </div>
  )
}