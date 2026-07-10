import { useEffect, useRef } from 'react'

const FloatingParticles = ({ count = 40, color = 'rgba(248, 69, 101, 0.3)' }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationFrameId

    const handleResize = () => {
      canvas.width = canvas.parentElement.offsetWidth || window.innerWidth
      canvas.height = canvas.parentElement.offsetHeight || window.innerHeight
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.5
        this.speedX = Math.random() * 0.4 - 0.2
        this.speedY = Math.random() * 0.4 - 0.2
        this.alpha = Math.random() * 0.5 + 0.1
        this.decay = Math.random() * 0.005 + 0.001
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Bounce/Wrap borders
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1

        // Subtle alpha breathing
        this.alpha -= this.decay
        if (this.alpha <= 0) {
          this.x = Math.random() * canvas.width
          this.y = Math.random() * canvas.height
          this.alpha = Math.random() * 0.5 + 0.1
        }
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = this.alpha
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.shadowBlur = 8
        ctx.shadowColor = color
        ctx.fill()
        ctx.restore()
      }
    }

    const particles = Array.from({ length: count }, () => new Particle())

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.update()
        p.draw()
      })
      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [count, color])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />
}

export default FloatingParticles
