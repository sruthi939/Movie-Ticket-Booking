import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Film } from 'lucide-react'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden bg-[#09090b]">
      {/* Background orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[150px] pointer-events-none" />

      {/* Projector beam SVG */}
      <svg
        className="absolute top-0 left-1/2 -translate-x-1/2 h-80 w-[600px] opacity-20 pointer-events-none"
        viewBox="0 0 600 400"
      >
        <defs>
          <radialGradient id="notfound-beam" cx="50%" cy="0%" r="80%">
            <stop offset="0%" stopColor="#f84565" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#f84565" stopOpacity="0" />
          </radialGradient>
        </defs>
        <path d="M300 0 L0 400 L600 400 Z" fill="url(#notfound-beam)" />
      </svg>

      <div className="relative z-10 flex flex-col items-center gap-6 text-center px-6 max-w-xl">
        {/* 404 Number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 120 }}
          className="select-none"
        >
          <span className="text-[10rem] font-extrabold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-primary via-rose-400 to-amber-400">
            404
          </span>
        </motion.div>

        {/* Film reel icon */}
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="rounded-full bg-primary/10 p-4 text-primary border border-primary/20"
        >
          <Film className="h-8 w-8" />
        </motion.div>

        <h1 className="text-3xl font-extrabold tracking-tight">This screen is dark.</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          The page you're looking for has gone off-reel. It might have been moved or never existed.
        </p>

        <div className="flex flex-wrap gap-3 justify-center mt-2">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" /> Go Back
          </button>
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-black hover:bg-primary-dull transition shadow-lg shadow-primary/20 cursor-pointer"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  )
}

export default NotFound
