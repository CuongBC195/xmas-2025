"use client"

import { useEffect, useRef, useState } from "react"

const GLOW_COLORS = [
  { r: 255, g: 42, b: 0, sizeMultiplier: 1.8 },   
  { r: 255, g: 90, b: 0, sizeMultiplier: 1.5 },   
  { r: 255, g: 140, b: 0, sizeMultiplier: 1.3 },  
  { r: 255, g: 210, b: 0, sizeMultiplier: 1.1 }, 
  { r: 255, g: 255, b: 255, sizeMultiplier: 0.6 },
  { r: 255, g: 255, b: 255, sizeMultiplier: 0.5 }, 
]

const GIFT_COLORS = [
  { box: "#c41e3a", boxDark: "#8b0000", ribbon: "#ffd700", ribbonLight: "#fff8dc" },  // Christmas Red + Gold
  { box: "#1a5f4a", boxDark: "#0d3025", ribbon: "#ffd700", ribbonLight: "#fff8dc" },  // Forest Green + Gold
  { box: "#7b2d8e", boxDark: "#4a1259", ribbon: "#e0b0ff", ribbonLight: "#f8f0ff" },  // Royal Purple + Lavender
  { box: "#1e3a5f", boxDark: "#0d1f33", ribbon: "#87ceeb", ribbonLight: "#e0f4ff" },  // Navy + Silver Blue
  { box: "#8b4513", boxDark: "#5c2d0e", ribbon: "#daa520", ribbonLight: "#fff5e0" },  // Bronze + Gold
]

const STEPS = [
  "🎁 Wooo~ mở được hộp đầu tiên rồi nè! Mới khởi động thôi, mở tiếp hộp kế tiếp đi 😄",
  "✨ Hộp này cũng dễ thương ha. Nhưng hình như chưa phải điều bất ngờ đâu, mở hộp tiếp theo thử xem?",
  "🎄 Cảm giác mở hộp vậy có thấy vui không? Nhưng khoan, bất ngờ thật sự chắc ở phía sau đó~",
  "💫 Vẫn chưa hết đâu nha. Có người gửi mấy chiếc hộp này đang hồi hộp lắm đó, mở tiếp đi 😳",
  "💌 Mỗi hộp mở ra là một chút cảm xúc được giấu kỹ. Nhưng còn một hộp nữa nè…",
  "🤍 Gần tới rồi đó. Điều trong hộp sau là thứ người gửi suy nghĩ rất lâu trước khi viết ra.",
  "😳 Hộp này làm người gửi tim đập nhanh hơn một xíu. Mở hộp cuối cùng nha…",
  "🎁 Cuối cùng cũng tới rồi. Điều bất ngờ này là thật lòng: mình thích bạn. Noel này, cho mình cơ hội được ở bên bạn nhiều hơn nhé 💝"
];


const BASE_SPHERE_COUNT = 1900
const MAX_SPHERE_COUNT = 5000
const TREE_HEIGHT = 750    
const BASE_RADIUS = 280
const GIFT_COUNT = 8

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
  zoomThreshold: number
}

interface GiftBox {
  x: number
  y: number
  z: number
  origX: number
  origY: number
  origZ: number
  size: number
  colorIndex: number
  wishIndex: number
  isOpened: boolean
  openAnimation: number
  zoomThreshold: number
  floatOffset: number
  sparklePhase: number
  isBouncing: boolean  // Whether this gift is bouncing to attract attention
  bounceStartTime: number // When bounce animation started
}

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  color: string
  size: number
  life: number
  maxLife: number
}

export function ChristmasTreeHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [activeWish, setActiveWish] = useState<{ text: string } | null>(null)
  const [showWish, setShowWish] = useState(false)
  const [currentStep, setCurrentStep] = useState(0) // Track which step we're on
  
  const rotationRef = useRef(0)
  const rotationXRef = useRef(0)
  const zoomRef = useRef(1)
  const explodeFactorRef = useRef(0)
  const isDraggingRef = useRef(false)
  const lastMouseRef = useRef({ x: 0, y: 0 })
  const autoRotateRef = useRef(true)
  const mouseRef = useRef({ x: 0, y: 0 })
  const hoveredGiftRef = useRef<number | null>(null)
  const particlesRef = useRef<Particle[]>([])
  const giftBoxesRef = useRef<GiftBox[]>([])
  const wishTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const currentStepRef = useRef(0) // Track step for sequential messages
  
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

    // Generate gift boxes scattered around the tree
    const giftBoxes: GiftBox[] = []
    for (let i = 0; i < GIFT_COUNT; i++) {
      const heightFactor = 0.1 + Math.random() * 0.6 // Place gifts in lower-mid section
      const y = heightFactor * TREE_HEIGHT
      const taperFactor = Math.pow(1 - heightFactor, 0.7)
      const radiusAtHeight = BASE_RADIUS * taperFactor * 0.8
      const angle = (i / GIFT_COUNT) * Math.PI * 2 + Math.random() * 0.5
      const distance = radiusAtHeight * (0.6 + Math.random() * 0.3)

      const x = Math.cos(angle) * distance
      const z = Math.sin(angle) * distance

      giftBoxes.push({
        x, y, z,
        origX: x,
        origY: y,
        origZ: z,
        size: 32 + Math.random() * 10,
        colorIndex: i % GIFT_COLORS.length,
        wishIndex: i,
        isOpened: false,
        openAnimation: 0,
        zoomThreshold: 1.3 + Math.random() * 0.3,
        floatOffset: Math.random() * Math.PI * 2,
        sparklePhase: Math.random() * Math.PI * 2,
        isBouncing: false,
        bounceStartTime: 0,
      })
    }
    giftBoxesRef.current = giftBoxes

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

    // Draw a clean, visible gift box
    const drawGiftBox = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      scale: number,
      colorIndex: number,
      isHovered: boolean,
      openAnimation: number,
      floatOffset: number,
      _sparklePhase: number,
      isBouncing: boolean,
      bounceStartTime: number,
      alpha: number = 1,
    ) => {
      const time = Date.now() * 0.001
      const now = Date.now()
      const actualSize = size * scale * 1.3
      const colors = GIFT_COLORS[colorIndex]
      
      // Bounce animation (gentle bobbing)
      let bounceY = 0
      let bounceScale = 1
      if (isBouncing && bounceStartTime > 0) {
        const bounceTime = (now - bounceStartTime) / 1000
        // Slow, gentle bouncing
        const bounceFreq = 1.5 // slower bounces per second
        const bouncePhase = bounceTime * bounceFreq * Math.PI * 2
        const bounceDecay = Math.max(0, 1 - bounceTime * 0.08) // Very slow fade
        // Smooth sine wave for gentle motion
        bounceY = Math.sin(bouncePhase) * actualSize * 0.15 * bounceDecay
        bounceScale = 1 + Math.sin(bouncePhase) * 0.03 * bounceDecay
      }
      
      // Gentle floating (only when not bouncing)
      const floatY = isBouncing ? 0 : Math.sin(time * 1.2 + floatOffset) * actualSize * 0.05
      y += floatY - bounceY // Subtract bounceY because we want to go UP
      
      // Hover scale + bounce scale
      const hoverScale = isHovered ? 1.12 : 1
      const finalSize = actualSize * hoverScale * bounceScale
      
      ctx.save()
      ctx.globalAlpha = alpha
      
      const boxWidth = finalSize
      const boxHeight = finalSize * 0.8
      const cornerRadius = finalSize * 0.1
      
      // Opening animation
      const lidLift = openAnimation * finalSize * 0.6
      
      // === OUTER GLOW (always visible, stronger on hover) ===
      const glowAlpha = isHovered ? 0.5 : 0.25
      const glowSize = finalSize * 1.5
      const glowGradient = ctx.createRadialGradient(x, y, finalSize * 0.3, x, y, glowSize)
      glowGradient.addColorStop(0, `rgba(255, 220, 150, ${glowAlpha})`)
      glowGradient.addColorStop(0.5, `rgba(255, 200, 100, ${glowAlpha * 0.4})`)
      glowGradient.addColorStop(1, "rgba(255, 180, 50, 0)")
      ctx.beginPath()
      ctx.arc(x, y, glowSize, 0, Math.PI * 2)
      ctx.fillStyle = glowGradient
      ctx.fill()
      
      // === SHADOW ===
      ctx.fillStyle = "rgba(0, 0, 0, 0.25)"
      ctx.beginPath()
      ctx.ellipse(x, y + boxHeight * 0.55, boxWidth * 0.45, boxWidth * 0.1, 0, 0, Math.PI * 2)
      ctx.fill()
      
      // === BOX BODY ===
      // Main box with gradient
      const boxGradient = ctx.createLinearGradient(x - boxWidth / 2, y - boxHeight / 2, x + boxWidth / 2, y + boxHeight / 2)
      boxGradient.addColorStop(0, colors.box)
      boxGradient.addColorStop(1, colors.boxDark)
      ctx.fillStyle = boxGradient
      ctx.beginPath()
      ctx.roundRect(x - boxWidth / 2, y - boxHeight / 2, boxWidth, boxHeight, cornerRadius)
      ctx.fill()
      
      // Box border for visibility
      ctx.strokeStyle = "rgba(255, 255, 255, 0.3)"
      ctx.lineWidth = 2
      ctx.stroke()
      
      // Shine effect
      ctx.fillStyle = "rgba(255, 255, 255, 0.15)"
      ctx.beginPath()
      ctx.roundRect(x - boxWidth / 2 + 4, y - boxHeight / 2 + 4, boxWidth * 0.4, boxHeight * 0.3, cornerRadius * 0.5)
      ctx.fill()
      
      // === RIBBONS ===
      const ribbonWidth = boxWidth * 0.2
      
      // Vertical ribbon
      ctx.fillStyle = colors.ribbon
      ctx.fillRect(x - ribbonWidth / 2, y - boxHeight / 2, ribbonWidth, boxHeight)
      
      // Ribbon highlight
      ctx.fillStyle = colors.ribbonLight
      ctx.fillRect(x - ribbonWidth / 4, y - boxHeight / 2, ribbonWidth / 3, boxHeight)
      
      // Horizontal ribbon
      ctx.fillStyle = colors.ribbon
      ctx.fillRect(x - boxWidth / 2, y - ribbonWidth / 2, boxWidth, ribbonWidth)
      
      // Horizontal ribbon highlight
      ctx.fillStyle = colors.ribbonLight
      ctx.fillRect(x - boxWidth / 2, y - ribbonWidth / 4, boxWidth, ribbonWidth / 3)
      
      // === BOW ===
      const bowY = y - boxHeight / 2 - lidLift - finalSize * 0.08
      const bowSize = finalSize * 0.22
      
      // Bow loops
      ctx.fillStyle = colors.ribbon
      ctx.beginPath()
      ctx.ellipse(x - bowSize, bowY, bowSize * 0.9, bowSize * 0.5, -0.3, 0, Math.PI * 2)
      ctx.fill()
      ctx.beginPath()
      ctx.ellipse(x + bowSize, bowY, bowSize * 0.9, bowSize * 0.5, 0.3, 0, Math.PI * 2)
      ctx.fill()
      
      // Bow center
      ctx.fillStyle = colors.ribbonLight
      ctx.beginPath()
      ctx.arc(x, bowY, bowSize * 0.35, 0, Math.PI * 2)
      ctx.fill()
      ctx.fillStyle = colors.ribbon
      ctx.beginPath()
      ctx.arc(x, bowY, bowSize * 0.25, 0, Math.PI * 2)
      ctx.fill()
      
      // Bow tails
      ctx.strokeStyle = colors.ribbon
      ctx.lineWidth = ribbonWidth * 0.4
      ctx.lineCap = "round"
      ctx.beginPath()
      ctx.moveTo(x - bowSize * 0.3, bowY + bowSize * 0.2)
      ctx.quadraticCurveTo(x - bowSize * 0.8, bowY + bowSize * 0.8, x - bowSize * 1.2, bowY + bowSize * 1.1)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(x + bowSize * 0.3, bowY + bowSize * 0.2)
      ctx.quadraticCurveTo(x + bowSize * 0.8, bowY + bowSize * 0.8, x + bowSize * 1.2, bowY + bowSize * 1.1)
      ctx.stroke()
      
      // === HOVER RING ===
      if (isHovered && !openAnimation) {
        ctx.strokeStyle = `rgba(255, 215, 0, ${0.6 + Math.sin(time * 4) * 0.2})`
        ctx.lineWidth = 3
        ctx.setLineDash([8, 4])
        ctx.lineDashOffset = -time * 30
        ctx.beginPath()
        ctx.roundRect(x - boxWidth / 2 - 8, y - boxHeight / 2 - 8, boxWidth + 16, boxHeight + 16, cornerRadius + 5)
        ctx.stroke()
        ctx.setLineDash([])
      }
      
      // === BOUNCING INDICATOR ===
      if (isBouncing && !openAnimation) {
        const bounceTime = (now - bounceStartTime) / 1000
        const indicatorAlpha = Math.max(0, 1 - bounceTime * 0.06) // Slower fade
        
        if (indicatorAlpha > 0) {
          // Subtle glowing ring
          ctx.strokeStyle = `rgba(255, 220, 100, ${0.25 * indicatorAlpha + Math.sin(time * 2) * 0.1})`
          ctx.lineWidth = 1.5
          ctx.beginPath()
          ctx.arc(x, y, boxWidth * 0.75, 0, Math.PI * 2)
          ctx.stroke()
          
          // Small arrow pointing down (gentle float)
          const arrowY = y - boxHeight / 2 - finalSize * 0.3 + Math.sin(time * 2) * 3
          ctx.fillStyle = `rgba(255, 230, 150, ${0.6 * indicatorAlpha})`
          ctx.beginPath()
          ctx.moveTo(x, arrowY + 10)
          ctx.lineTo(x - 6, arrowY)
          ctx.lineTo(x + 6, arrowY)
          ctx.closePath()
          ctx.fill()
        }
      }
      
      ctx.restore()
      
      // Return hit box
      return {
        minX: x - boxWidth / 2 - 15,
        maxX: x + boxWidth / 2 + 15,
        minY: y - boxHeight / 2 - finalSize * 0.4 - 15,
        maxY: y + boxHeight / 2 + 15,
      }
    }

    // Spawn subtle particles when gift opens
    const spawnParticles = (x: number, y: number, count: number) => {
      const colors = ["#ffd700", "#fff8dc", "#ffffff"]
      
      // Small confetti-like particles rising up
      for (let i = 0; i < count; i++) {
        const angle = -Math.PI / 2 + (Math.random() - 0.5) * 1.2 // Mostly upward
        const speed = 2 + Math.random() * 3
        particlesRef.current.push({
          x: x + (Math.random() - 0.5) * 30,
          y: y - 10,
          vx: Math.cos(angle) * speed * 0.5,
          vy: -2 - Math.random() * 3,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: 2 + Math.random() * 3,
          life: 1,
          maxLife: 60 + Math.random() * 40,
        })
      }
    }

    // Update and draw particles
    const updateParticles = (ctx: CanvasRenderingContext2D) => {
      particlesRef.current = particlesRef.current.filter(p => p.life > 0.01)
      
      for (const p of particlesRef.current) {
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.15 // gravity
        p.vx *= 0.98 // friction
        p.life -= 1 / p.maxLife
        
        // Ensure life is positive for rendering
        const lifeValue = Math.max(0.01, p.life)
        const alpha = lifeValue
        ctx.globalAlpha = alpha
        
        // Sparkle effect - ensure radius is always positive
        const sparkle = Math.sin(Date.now() * 0.02 + p.x) * 0.3 + 0.7
        const particleRadius = Math.max(0.5, p.size * sparkle * lifeValue)
        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, particleRadius, 0, Math.PI * 2)
        ctx.fill()
        
        // Glow - ensure radius is always positive
        const glowRadius = Math.max(1, p.size * 2 * lifeValue)
        const glowGradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowRadius)
        glowGradient.addColorStop(0, p.color)
        glowGradient.addColorStop(1, "transparent")
        ctx.fillStyle = glowGradient
        ctx.beginPath()
        ctx.arc(p.x, p.y, glowRadius, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1
    }

    // Store projected gift positions for click detection
    let projectedGifts: { gift: GiftBox; proj: ReturnType<typeof project>; hitBox: { minX: number; maxX: number; minY: number; maxY: number } }[] = []

    // Mouse/Touch handlers for 360 rotation
    const handleMouseDown = (e: MouseEvent) => {
      // Check if clicking on a gift
      const clickedGift = projectedGifts.find(g => {
        const { hitBox } = g
        return e.clientX >= hitBox.minX && e.clientX <= hitBox.maxX &&
               e.clientY >= hitBox.minY && e.clientY <= hitBox.maxY &&
               zoomRef.current >= g.gift.zoomThreshold && !g.gift.isOpened
      })
      
      if (clickedGift) {
        // Check if all gifts already opened
        if (currentStepRef.current >= STEPS.length) return
        
        // Open the gift!
        clickedGift.gift.isOpened = true
        clickedGift.gift.isBouncing = false // Stop bouncing if it was
        spawnParticles(clickedGift.proj.x, clickedGift.proj.y, 15)
        
        // Clear previous timeout if clicking another gift quickly
        if (wishTimeoutRef.current) {
          clearTimeout(wishTimeoutRef.current)
        }
        
        // Show step message (sequential, not based on which gift)
        const stepMessage = STEPS[currentStepRef.current]
        currentStepRef.current += 1
        setCurrentStep(currentStepRef.current)
        
        setActiveWish({ text: stepMessage })
        setShowWish(true)
        
        // Make remaining unopened gifts bounce to guide user
        const unopenedGifts = giftBoxesRef.current.filter(g => !g.isOpened)
        const now = Date.now()
        
        // Pick 2-3 random unopened gifts to bounce
        const bouncingCount = Math.min(3, unopenedGifts.length)
        const shuffled = unopenedGifts.sort(() => Math.random() - 0.5)
        
        // Reset all bouncing first
        giftBoxesRef.current.forEach(g => g.isBouncing = false)
        
        // Set new bouncing gifts
        for (let i = 0; i < bouncingCount; i++) {
          shuffled[i].isBouncing = true
          shuffled[i].bounceStartTime = now + i * 200 // Stagger start times
        }
        
        // Hide wish after 4 seconds
        wishTimeoutRef.current = setTimeout(() => {
          setShowWish(false)
        }, 4000)
        return
      }
      
      isDraggingRef.current = true
      lastMouseRef.current = { x: e.clientX, y: e.clientY }
      autoRotateRef.current = false
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
      
      // Check hover on gifts
      const hoveredGift = projectedGifts.findIndex(g => {
        const { hitBox } = g
        return e.clientX >= hitBox.minX && e.clientX <= hitBox.maxX &&
               e.clientY >= hitBox.minY && e.clientY <= hitBox.maxY &&
               zoomRef.current >= g.gift.zoomThreshold && !g.gift.isOpened
      })
      hoveredGiftRef.current = hoveredGift >= 0 ? hoveredGift : null
      
      // Update cursor
      canvas.style.cursor = hoveredGift >= 0 ? "pointer" : (isDraggingRef.current ? "grabbing" : "grab")
      
      if (!isDraggingRef.current) return
      
      const deltaX = e.clientX - lastMouseRef.current.x
      const deltaY = e.clientY - lastMouseRef.current.y
      
      rotationRef.current -= deltaX * 0.005
      rotationXRef.current -= deltaY * 0.005
      rotationXRef.current = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, rotationXRef.current))
      
      lastMouseRef.current = { x: e.clientX, y: e.clientY }
    }

    const handleMouseUp = () => {
      isDraggingRef.current = false
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
          const fadeIn = Math.min(1, (currentZoom - sphere.zoomThreshold) * 2 + 0.5)
          drawSphere(ctx, sphere.x, sphere.y, sphere.size, sphere.color, sphere.scale, sphereAlpha * fadeIn)
        }
      }

      // Update gift box positions and draw them
      projectedGifts = []
      for (let i = 0; i < giftBoxes.length; i++) {
        const gift = giftBoxes[i]
        
        // Update position based on explode factor
        gift.x = gift.origX + (gift.origX / 100) * explodeDistance * explodeFactor * 0.3
        gift.y = gift.origY + (gift.origY / TREE_HEIGHT - 0.5) * explodeDistance * explodeFactor * 0.3
        gift.z = gift.origZ + (gift.origZ / 100) * explodeDistance * explodeFactor * 0.3
        
        // Update open animation
        if (gift.isOpened && gift.openAnimation < 1) {
          gift.openAnimation += 0.05
        }
        
        const proj = project(gift.x, gift.y, gift.z)
        
        // Only draw if visible at current zoom
        if (currentZoom >= gift.zoomThreshold && proj.scale > 0.1) {
          const fadeIn = Math.min(1, (currentZoom - gift.zoomThreshold) * 3)
          const isHovered = hoveredGiftRef.current === i
          
          const hitBox = drawGiftBox(
            ctx,
            proj.x,
            proj.y,
            gift.size,
            proj.scale,
            gift.colorIndex,
            isHovered,
            gift.openAnimation,
            gift.floatOffset,
            gift.sparklePhase,
            gift.isBouncing,
            gift.bounceStartTime,
            fadeIn * (1 - explodeFactor * 0.5)
          )
          
          projectedGifts.push({ gift, proj, hitBox })
        }
      }

      // Draw particles
      updateParticles(ctx)

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
      if (wishTimeoutRef.current) {
        clearTimeout(wishTimeoutRef.current)
      }
    }
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#050505]">
      <canvas ref={canvasRef} className="absolute inset-0 cursor-grab active:cursor-grabbing" />

      {/* Wish Display - centered on screen */}
      {activeWish && (
        <div
          className={`pointer-events-none fixed inset-x-0 top-1/3 z-30 flex justify-center px-4 transition-all duration-700 ease-out ${
            showWish 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative max-w-md rounded-2xl border border-white/15 bg-black/80 px-8 py-6 shadow-2xl backdrop-blur-xl">
            
            {/* Top accent line */}
            <div className="absolute top-0 left-1/2 h-px w-20 -translate-x-1/2 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
            
            {/* Step indicator */}
            <div className="mb-3 flex justify-center gap-1.5">
              {STEPS.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                    i < currentStep ? "bg-amber-400" : "bg-white/20"
                  }`} 
                />
              ))}
            </div>
            
            {/* Wish text */}
            <p className="text-center text-base leading-relaxed text-white/90 sm:text-lg">
              {activeWish.text}
            </p>
            
            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-1/2 h-px w-16 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          </div>
        </div>
      )}


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
