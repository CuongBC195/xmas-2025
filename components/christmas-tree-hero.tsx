"use client"

import { useEffect, useRef } from "react"

const GLOW_COLORS = [
  { r: 255, g: 42, b: 0, sizeMultiplier: 1.8 },   
  { r: 255, g: 90, b: 0, sizeMultiplier: 1.5 },   
  { r: 255, g: 140, b: 0, sizeMultiplier: 1.3 },  
  { r: 255, g: 210, b: 0, sizeMultiplier: 1.1 }, 
  { r: 255, g: 255, b: 255, sizeMultiplier: 0.6 },
  { r: 255, g: 255, b: 255, sizeMultiplier: 0.5 }, 
]

const BASE_SPHERE_COUNT = 1900   // Spheres visible at default zoom
const MAX_SPHERE_COUNT = 5000    // Total spheres (revealed when zooming in)
const TREE_HEIGHT = 750    
const BASE_RADIUS = 280   

interface Sphere {
  x: number
  y: number
  z: number
  origX: number
  origY: number
  origZ: number
  explodeX: number
  explodeY: number
  explodeZ: number
  color: { r: number; g: number; b: number }
  size: number
  zoomThreshold: number // Zoom level at which this sphere becomes visible
}

export function ChristmasTreeHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  const rotationRef = useRef(0)
  const rotationXRef = useRef(0)
  const zoomRef = useRef(1)
  const explodeFactorRef = useRef(0)
  const isDraggingRef = useRef(false)
  const lastMouseRef = useRef({ x: 0, y: 0 })
  const autoRotateRef = useRef(true)
  
  const targetZoomRef = useRef(1)
  const targetExplodeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let hoverOffset = 0

    const resize = () => {
      canvas.width = window.innerWidth * window.devicePixelRatio
      canvas.height = window.innerHeight * window.devicePixelRatio
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    resize()
    window.addEventListener("resize", resize)

    const spheres: Sphere[] = []
      for (let i = 0; i < MAX_SPHERE_COUNT; i++) {
        const heightFactor = Math.random()
        const y = heightFactor * TREE_HEIGHT
        const taperFactor = Math.pow(1 - heightFactor, 0.7)
        const radiusAtHeight = BASE_RADIUS * taperFactor
        const angle = Math.random() * Math.PI * 2
        const distanceFactor = Math.pow(Math.random(), 0.5)
        const distance = distanceFactor * radiusAtHeight

        const x = Math.cos(angle) * distance
        const z = Math.sin(angle) * distance

        const centerY = TREE_HEIGHT / 2
        const dx = x
        const dy = y - centerY
        const dz = z
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz) || 1
        
        const colorData = GLOW_COLORS[Math.floor(Math.random() * GLOW_COLORS.length)]
        const baseSize = 1.5 + Math.random() * 2
        
        // First BASE_SPHERE_COUNT spheres are always visible (threshold = 1)
        // Remaining spheres appear gradually as zoom increases from 1 to 3
        const zoomThreshold = i < BASE_SPHERE_COUNT 
          ? 1 
          : 1 + ((i - BASE_SPHERE_COUNT) / (MAX_SPHERE_COUNT - BASE_SPHERE_COUNT)) * 2
        
        spheres.push({
          x: x,
          y: y,
          z: z,
          origX: x,
          origY: y,
          origZ: z,
          explodeX: (dx / dist) * (0.8 + Math.random() * 0.4),
          explodeY: (dy / dist) * (0.8 + Math.random() * 0.4),
          explodeZ: (dz / dist) * (0.8 + Math.random() * 0.4),
          color: { r: colorData.r, g: colorData.g, b: colorData.b },
          size: baseSize * colorData.sizeMultiplier,
          zoomThreshold: zoomThreshold,
        })
      }

    const stars: { x: number; y: number; alpha: number }[] = []
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        alpha: 0.2 + Math.random() * 0.4,
      })
    }

    const project = (x: number, y: number, z: number) => {
      const fov = 900  
      const zoom = zoomRef.current
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2 + 280 

      const cosR = Math.cos(rotationRef.current)
      const sinR = Math.sin(rotationRef.current)
      let rotatedX = x * cosR - z * sinR
      let rotatedZ = x * sinR + z * cosR

      const cosRX = Math.cos(rotationXRef.current)
      const sinRX = Math.sin(rotationXRef.current)
      const rotatedY = y * cosRX - rotatedZ * sinRX
      rotatedZ = y * sinRX + rotatedZ * cosRX

      const scale = (fov / (fov + rotatedZ + 200)) * zoom
      return {
        x: centerX + rotatedX * scale,
        y: centerY - (rotatedY + hoverOffset) * scale,
        scale: scale,
        z: rotatedZ,
      }
    }

    const drawSphere = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      color: { r: number; g: number; b: number },
      scale: number,
      alpha: number = 1,
    ) => {
      const actualSize = size * scale

      ctx.globalAlpha = alpha

      const glowGradient = ctx.createRadialGradient(x, y, 0, x, y, actualSize * 4)
      glowGradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, 0.4)`)
      glowGradient.addColorStop(0.3, `rgba(${color.r}, ${color.g}, ${color.b}, 0.15)`)
      glowGradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`)

      ctx.beginPath()
      ctx.arc(x, y, actualSize * 4, 0, Math.PI * 2)
      ctx.fillStyle = glowGradient
      ctx.fill()

      const shellGradient = ctx.createRadialGradient(
        x - actualSize * 0.3,
        y - actualSize * 0.3,
        0,
        x,
        y,
        actualSize * 1.2,
      )
      shellGradient.addColorStop(0, `rgba(255, 255, 255, 0.3)`)
      shellGradient.addColorStop(0.5, `rgba(255, 255, 255, 0.1)`)
      shellGradient.addColorStop(0.8, `rgba(200, 200, 200, 0.05)`)
      shellGradient.addColorStop(1, `rgba(150, 150, 150, 0.15)`)

      ctx.beginPath()
      ctx.arc(x, y, actualSize * 1.2, 0, Math.PI * 2)
      ctx.fillStyle = shellGradient
      ctx.fill()

      const coreGradient = ctx.createRadialGradient(x, y, 0, x, y, actualSize * 0.7)
      coreGradient.addColorStop(
        0,
        `rgba(${Math.min(255, color.r + 50)}, ${Math.min(255, color.g + 50)}, ${Math.min(255, color.b + 50)}, 1)`,
      )
      coreGradient.addColorStop(0.5, `rgba(${color.r}, ${color.g}, ${color.b}, 0.9)`)
      coreGradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0.6)`)

      ctx.beginPath()
      ctx.arc(x, y, actualSize * 0.7, 0, Math.PI * 2)
      ctx.fillStyle = coreGradient
      ctx.fill()

      const highlightGradient = ctx.createRadialGradient(
        x - actualSize * 0.4,
        y - actualSize * 0.4,
        0,
        x - actualSize * 0.4,
        y - actualSize * 0.4,
        actualSize * 0.5,
      )
      highlightGradient.addColorStop(0, `rgba(255, 255, 255, 0.5)`)
      highlightGradient.addColorStop(1, `rgba(255, 255, 255, 0)`)

      ctx.beginPath()
      ctx.arc(x - actualSize * 0.4, y - actualSize * 0.4, actualSize * 0.5, 0, Math.PI * 2)
      ctx.fillStyle = highlightGradient
      ctx.fill()

      ctx.globalAlpha = 1
    }

    const drawStar = (
      ctx: CanvasRenderingContext2D,
      cx: number,
      cy: number,
      outerRadius: number,
      innerRadius: number,
      points: number,
      alpha: number = 1,
    ) => {
      ctx.globalAlpha = alpha

      const glowGradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, outerRadius * 3)
      glowGradient.addColorStop(0, "rgba(255, 210, 0, 0.8)")
      glowGradient.addColorStop(0.3, "rgba(255, 180, 0, 0.4)")
      glowGradient.addColorStop(0.6, "rgba(255, 140, 0, 0.15)")
      glowGradient.addColorStop(1, "rgba(255, 100, 0, 0)")

      ctx.beginPath()
      ctx.arc(cx, cy, outerRadius * 3, 0, Math.PI * 2)
      ctx.fillStyle = glowGradient
      ctx.fill()

      ctx.beginPath()
      for (let i = 0; i < points * 2; i++) {
        const radius = i % 2 === 0 ? outerRadius : innerRadius
        const angle = (Math.PI / points) * i - Math.PI / 2
        const x = cx + radius * Math.cos(angle)
        const y = cy + radius * Math.sin(angle)
        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }
      ctx.closePath()

      const starGradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, outerRadius)
      starGradient.addColorStop(0, "rgba(255, 255, 200, 1)")
      starGradient.addColorStop(0.5, "rgba(255, 220, 80, 1)")
      starGradient.addColorStop(1, "rgba(255, 180, 0, 0.9)")
      ctx.fillStyle = starGradient
      ctx.fill()

      ctx.strokeStyle = "rgba(255, 255, 150, 0.8)"
      ctx.lineWidth = 2
      ctx.stroke()

      // Center highlight
      const centerGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, innerRadius * 0.8)
      centerGlow.addColorStop(0, "rgba(255, 255, 255, 0.9)")
      centerGlow.addColorStop(1, "rgba(255, 255, 255, 0)")
      ctx.beginPath()
      ctx.arc(cx, cy, innerRadius * 0.8, 0, Math.PI * 2)
      ctx.fillStyle = centerGlow
      ctx.fill()

      ctx.globalAlpha = 1
    }

    // Mouse/Touch handlers for 360 rotation
    const handleMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true
      lastMouseRef.current = { x: e.clientX, y: e.clientY }
      autoRotateRef.current = false
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return
      
      const deltaX = e.clientX - lastMouseRef.current.x
      const deltaY = e.clientY - lastMouseRef.current.y
      
      // Inverted direction for more natural feel
      rotationRef.current -= deltaX * 0.005
      rotationXRef.current -= deltaY * 0.005
      
      // Clamp vertical rotation
      rotationXRef.current = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, rotationXRef.current))
      
      lastMouseRef.current = { x: e.clientX, y: e.clientY }
    }

    const handleMouseUp = () => {
      isDraggingRef.current = false
      // Resume auto-rotate after 2 seconds of no interaction
      setTimeout(() => {
        if (!isDraggingRef.current) {
          autoRotateRef.current = true
        }
      }, 2000)
    }

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      
      // Momentum: 1 scroll tick = 7x effect
      const MOMENTUM_MULTIPLIER = 7
      const ZOOM_STEP = 0.1 * MOMENTUM_MULTIPLIER   // 0.7 per scroll
      const EXPLODE_STEP = 0.05 * MOMENTUM_MULTIPLIER // 0.35 per scroll
      
      // Scroll UP = zoom IN + explode
      // Scroll DOWN = zoom OUT back to default
      const scrollingUp = e.deltaY < 0
      
      if (scrollingUp) {
        // Zoom in + explode (with momentum)
        targetZoomRef.current = Math.min(3, targetZoomRef.current + ZOOM_STEP)
        targetExplodeRef.current = Math.min(1, targetExplodeRef.current + EXPLODE_STEP)
      } else {
        // Zoom out + implode back to default (with momentum)
        // Can't go smaller than default (zoom = 1, explode = 0)
        targetZoomRef.current = Math.max(1, targetZoomRef.current - ZOOM_STEP)
        targetExplodeRef.current = Math.max(0, targetExplodeRef.current - EXPLODE_STEP)
      }
    }

    // Touch handlers
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDraggingRef.current = true
        lastMouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
        autoRotateRef.current = false
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current || e.touches.length !== 1) return
      
      const deltaX = e.touches[0].clientX - lastMouseRef.current.x
      const deltaY = e.touches[0].clientY - lastMouseRef.current.y
      
      // Inverted direction for more natural feel
      rotationRef.current -= deltaX * 0.005
      rotationXRef.current -= deltaY * 0.005
      rotationXRef.current = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, rotationXRef.current))
      
      lastMouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
    }

    const handleTouchEnd = () => {
      isDraggingRef.current = false
      setTimeout(() => {
        if (!isDraggingRef.current) {
          autoRotateRef.current = true
        }
      }, 2000)
    }

    // Add event listeners
    canvas.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseup", handleMouseUp)
    canvas.addEventListener("wheel", handleWheel, { passive: false })
    canvas.addEventListener("touchstart", handleTouchStart)
    window.addEventListener("touchmove", handleTouchMove)
    window.addEventListener("touchend", handleTouchEnd)

    // Animation loop
    const animate = () => {
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)

      // Clear with dark background
      ctx.fillStyle = "#050505"
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)

      // Draw stars
      ctx.fillStyle = "#333"
      for (const star of stars) {
        ctx.globalAlpha = star.alpha
        ctx.beginPath()
        ctx.arc(star.x, star.y, 1, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1

      // Auto-rotate if enabled
      if (autoRotateRef.current) {
        rotationRef.current += 0.003
      }
      
      // Smooth momentum animation: interpolate toward target values
      const LERP_SPEED = 0.08
      zoomRef.current += (targetZoomRef.current - zoomRef.current) * LERP_SPEED
      explodeFactorRef.current += (targetExplodeRef.current - explodeFactorRef.current) * LERP_SPEED
      
      hoverOffset = Math.sin(Date.now() * 0.001) * 10

      // Update sphere positions based on explode factor
      const explodeFactor = explodeFactorRef.current
      const explodeDistance = 800 // Maximum explode distance
      
      for (const sphere of spheres) {
        // Interpolate between original position and exploded position
        sphere.x = sphere.origX + sphere.explodeX * explodeDistance * explodeFactor
        sphere.y = sphere.origY + sphere.explodeY * explodeDistance * explodeFactor
        sphere.z = sphere.origZ + sphere.explodeZ * explodeDistance * explodeFactor
      }

      // Sort spheres by z-depth for proper rendering
      const projected = spheres.map((sphere) => {
        const proj = project(sphere.x, sphere.y, sphere.z)
        return { ...sphere, ...proj }
      })
      projected.sort((a, b) => a.z - b.z)

      // Calculate alpha based on explode factor (fade out as they explode)
      const sphereAlpha = 1 - explodeFactor * 0.3

      // Draw spheres (only those visible at current zoom level)
      const currentZoom = zoomRef.current
      for (const sphere of projected) {
        if (sphere.scale > 0.1 && currentZoom >= sphere.zoomThreshold) {
          // Fade in spheres as they become visible
          const fadeIn = Math.min(1, (currentZoom - sphere.zoomThreshold) * 2 + 0.5)
          drawSphere(ctx, sphere.x, sphere.y, sphere.size, sphere.color, sphere.scale, sphereAlpha * fadeIn)
        }
      }

      // Draw star (also affected by explode)
      const starExplodeY = explodeFactor * 200
      const starPos = project(0, TREE_HEIGHT + 40 + starExplodeY, 0)
      const starAlpha = 1 - explodeFactor * 0.5
      drawStar(ctx, starPos.x, starPos.y, 40 * starPos.scale, 18 * starPos.scale, 5, starAlpha)

      // Vignette overlay
      const vignette = ctx.createRadialGradient(
        window.innerWidth / 2,
        window.innerHeight / 2,
        0,
        window.innerWidth / 2,
        window.innerHeight / 2,
        window.innerWidth * 0.7,
      )
      vignette.addColorStop(0, "rgba(0, 0, 0, 0)")
      vignette.addColorStop(1, "rgba(0, 0, 0, 0.4)")
      ctx.fillStyle = vignette
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
      canvas.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
      canvas.removeEventListener("wheel", handleWheel)
      canvas.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("touchend", handleTouchEnd)
    }
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#050505]">
      <canvas ref={canvasRef} className="absolute inset-0 cursor-grab active:cursor-grabbing" />

      {/* Hint text */}
      <div className="pointer-events-none absolute top-6 right-6 z-20 text-right text-[10px] font-light tracking-wider text-white/30">
        DRAG TO ROTATE
        <br />
        SCROLL ↑ EXPLODE
        <br />
        SCROLL ↓ REFORM
      </div>

      {/* Title Overlay */}
      <div className="pointer-events-none absolute inset-x-0 bottom-16 z-10 flex flex-col items-center justify-center text-center">
        <h1
          className="text-4xl font-extralight tracking-[0.4em] text-white/90 sm:text-5xl md:text-6xl"
          style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
        >
          CHRISTMAS
        </h1>
        <p
          className="mt-3 text-sm font-light tracking-[0.3em] text-white/50 sm:text-base"
          style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
        >
          2025
        </p>
      </div>
    </div>
  )
}
