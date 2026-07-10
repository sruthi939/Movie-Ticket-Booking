import { useEffect, useRef } from 'react'

const Smoke = ({ color = 'rgba(255, 255, 255, 0.03)' }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationId

    const resize = () => {
      canvas.width = canvas.parentElement.offsetWidth || window.innerWidth
      canvas.height = canvas.parentElement.offsetHeight || 150
    }
    resize()
    window.addEventListener('resize', resize)

    class SmokeParticle {
      constructor() {
        this.reset()
      }

      reset() {
        this.x = Math.random() * canvas.width
        this.y = canvas.height + Math.random() * 20
        this.vx = Math.random() * 0.4 - 0.2
        this.vy = -(Math.random() * 0.3 + 0.1)
        this.radius = Math.random() * 40 + 30
        this.alpha = 0
        this.maxAlpha = Math.random() * 0.4 + 0.1
        this.growth = Math.random() * 0.05 + 0.02
        this.life = 0
        this.maxLife = Math.random() * 300 + 200
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        this.radius += this.growth
        this.life++

        // Alpha calculation: fade in then fade out
        if (this.life < this.maxLife * 0.2) {
          this.alpha = (this.life / (this.maxLife * 0.2)) * this.maxAlpha
        } else {
          this.alpha = (1 - (this.life / this.maxLife)) * this.maxAlpha
        }

        if (this.life >= this.maxLife || this.y < -this.radius) {
          this.reset()
        }
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = Math.max(0, this.alpha)
        ctx.beginPath()
        // Draw cloud circle
        const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius)
        grad.addColorStop(0, color)
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)')
        ctx.fillStyle = grad
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }
    }

    const particles = Array.from({ length: 25 }, () => new SmokeParticle())

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.update()
        p.draw()
      })
      animationId = requestAnimationFrame(render)
    }
    render()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [color])

  return <canvas ref={canvasRef} className="absolute bottom-0 left-0 w-full pointer-events-none z-0" style={{ height: '150px' }} />
}

export default Smoke
