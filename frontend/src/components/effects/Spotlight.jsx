import { motion } from 'framer-motion'

const Spotlight = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <svg
        className="absolute left-1/2 top-0 h-full w-[140%] -translate-x-1/2 opacity-25"
        viewBox="0 0 1000 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M500 0 L0 1000 L1000 1000 Z"
          fill="url(#spotlight-gradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.15, 0.25, 0.15] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <defs>
          <radialGradient
            id="spotlight-gradient"
            cx="500"
            cy="0"
            r="800"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F84565" stopOpacity="0.8" />
            <stop offset="0.5" stopColor="#F84565" stopOpacity="0.1" />
            <stop offset="1" stopColor="#F84565" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
}

export default Spotlight
