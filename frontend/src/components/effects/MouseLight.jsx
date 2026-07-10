import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const MouseLight = ({ color = 'rgba(248, 69, 101, 0.15)', size = 350 }) => {
  const mouseX = useMotionValue(-size)
  const mouseY = useMotionValue(-size)

  const springX = useSpring(mouseX, { damping: 30, stiffness: 200 })
  const springY = useSpring(mouseY, { damping: 30, stiffness: 200 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - size / 2)
      mouseY.set(e.clientY - size / 2)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY, size])

  return (
    <motion.div
      className="fixed pointer-events-none rounded-full blur-[100px] z-0"
      style={{
        width: size,
        height: size,
        left: springX,
        top: springY,
        backgroundColor: color,
      }}
    />
  )
}

export default MouseLight
