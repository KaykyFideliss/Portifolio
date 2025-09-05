"use client"
import { useEffect, useRef } from "react"
import { createNoise3D } from "simplex-noise"
import { cn } from "../lib/utils"

export const Vortex = ({
  children,
  className,
  containerClassName,
  particleCount = 700,
  rangeY = 800,
  baseHue = 220,
  baseSpeed = 0.0,
  rangeSpeed = 1.5,
  baseRadius = 1,
  rangeRadius = 2,
  backgroundColor = "transparent",
}) => {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const particleCount_ = particleCount
  const particlePropsLength = particleCount_ * 9
  const rangeY_ = rangeY
  const baseTTL = 50
  const rangeTTL = 150
  const baseSpeed_ = baseSpeed
  const rangeSpeed_ = rangeSpeed
  const baseRadius_ = baseRadius
  const rangeRadius_ = rangeRadius
  const baseHue_ = baseHue
  const rangeHue = 0
  const noiseSteps = 2
  const xOff = 0.00125
  const yOff = 0.00125
  const zOff = 0.0005
  const backgroundColor_ = backgroundColor
  let tick = 0
  const noise3D = createNoise3D()
  const particleProps = new Float32Array(particlePropsLength)
  const center = [0, 0]

  const HALF_PI = 0.5 * Math.PI
  const TAU = 2 * Math.PI
  const TO_RAD = Math.PI / 180
  const floor = Math.floor
  const round = Math.round
  const abs = Math.abs
  const sin = Math.sin
  const cos = Math.cos
  const pow = Math.pow
  const sqrt = Math.sqrt
  const atan2 = Math.atan2
  const random = Math.random

  const hsla = (h, s, l, a) => `hsla(${h},${s}%,${l}%,${a})`

  const initParticle = (i) => {
    const canvas = canvasRef.current
    if (!canvas) return

    let x, y, vx, vy, life, ttl, speed, radius, hue

    x = random() * canvas.width
    y = center[1] + randRange(-rangeY_ * 0.5, rangeY_ * 0.5)
    vx = 0
    vy = 0
    life = 0
    ttl = baseTTL + random() * rangeTTL
    speed = baseSpeed_ + random() * rangeSpeed_
    radius = baseRadius_ + random() * rangeRadius_
    hue = baseHue_ + random() * rangeHue

    particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i)
  }

  const randRange = (min, max) => min + random() * (max - min)

  const updateParticle = (i) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const i2 = 1 + i,
      i3 = 2 + i,
      i4 = 3 + i,
      i5 = 4 + i,
      i6 = 5 + i,
      i7 = 6 + i,
      i8 = 7 + i,
      i9 = 8 + i
    let n, x, y, vx, vy, life, ttl, speed, x2, y2, radius, hue

    x = particleProps[i]
    y = particleProps[i2]
    n = noise3D(x * xOff, y * yOff, tick * zOff) * noiseSteps * TAU
    vx = cos(n)
    vy = sin(n)
    life = particleProps[i5]
    ttl = particleProps[i6]
    speed = particleProps[i7]
    x2 = x + vx * speed
    y2 = y + vy * speed
    radius = particleProps[i8]
    hue = particleProps[i9]

    drawParticle(x, y, x2, y2, life, ttl, radius, hue)

    life++

    particleProps[i] = x2
    particleProps[i2] = y2
    particleProps[i3] = vx
    particleProps[i4] = vy
    particleProps[i5] = life
      ; (checkBounds(x, y) || life > ttl) && initParticle(i)
  }

  const drawParticle = (x, y, x2, y2, life, ttl, radius, hue) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.save()
    ctx.lineCap = "round"
    ctx.lineWidth = radius
    ctx.strokeStyle = hsla(hue, 100, 60, fadeInOut(life, ttl))
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x2, y2)
    ctx.stroke()
    ctx.closePath()
    ctx.restore()
  }

  const checkBounds = (x, y) => {
    const canvas = canvasRef.current
    if (!canvas) return
    return x > canvas.width || x < 0 || y > canvas.height || y < 0
  }

  const fadeInOut = (t, m) => {
    const hm = 0.5 * m
    return abs(((t + hm) % m) - hm) / hm
  }

const resize = () => {
  const canvas = canvasRef.current
  if (!canvas) return

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  center[0] = 0.5 * canvas.width
  center[1] = 0.5 * canvas.height
}


  const render = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    tick++

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = backgroundColor_
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    for (let i = 0; i < particleCount_; i++) {
      updateParticle(i * 9)
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    resize()
    for (let i = 0; i < particleCount_; i++) {
      initParticle(i * 9)
    }

    let animationId
    const animate = () => {
      render()
      animationId = requestAnimationFrame(animate)
    }
    animate()

    const handleResize = () => {
      resize()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div ref={containerRef} className={cn("relative h-full w-full", containerClassName)}>
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ background: backgroundColor_ }}
    />



      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  )
}
