import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { movies } from '../../data/movies'

const MovieSlider = () => {
  const [index, setIndex] = useState(0)
  const navigate = useNavigate()

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % movies.length)
  }

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + movies.length) % movies.length)
  }

  const movie = movies[index]

  return (
    <div className="relative w-full overflow-hidden py-16 px-6 md:px-16 lg:px-36 bg-black/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Cinematic Highlights</h2>
          <p className="mt-2 text-sm text-gray-400">Flip through hot releases and upcoming screenings.</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            className="p-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition text-white cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            className="p-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition text-white cursor-pointer"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto min-h-[380px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={movie.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.35 }}
            className="grid gap-8 md:grid-cols-2 w-full items-center"
          >
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 h-80 shadow-2xl">
              <img src={movie.backdrop} alt={movie.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 text-xs rounded-full border border-primary/20 bg-primary/10 text-primary uppercase tracking-wider font-semibold">
                  {movie.genres[0]}
                </span>
                <span className="flex items-center gap-1 text-sm text-gray-300">
                  <Star className="h-4 w-4 fill-primary text-primary" /> {movie.rating}
                </span>
              </div>
              <h3 className="text-3xl font-bold text-white">{movie.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{movie.overview}</p>
              <button
                onClick={() => navigate(`/movies/${movie.id}`)}
                className="mt-4 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-black hover:bg-primary-dull transition cursor-pointer"
              >
                View details
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default MovieSlider
