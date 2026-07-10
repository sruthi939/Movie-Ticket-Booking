import { Calendar } from 'lucide-react'
import { movies } from '../../data/movies'

const ComingSoon = () => {
  // Let's filter or slice movies to represent upcoming releases
  const upcoming = movies.slice(2, 5)

  return (
    <div className="py-20 px-6 md:px-16 lg:px-24 xl:px-44 bg-gradient-to-b from-transparent to-[#060608]">
      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Coming Soon</h2>
        <p className="mt-2 text-sm text-gray-400">Sneak peeks at blockbusters headed your way next week.</p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {upcoming.map((movie) => (
          <div key={movie.id} className="group relative overflow-hidden rounded-[2rem] border border-white/5 bg-white/5 p-4 shadow-xl">
            <div className="relative h-64 overflow-hidden rounded-[1.5rem]">
              <img src={movie.poster} alt={movie.title} className="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-black/60 px-3.5 py-1 text-xs text-white border border-white/10">
                <Calendar className="h-3.5 w-3.5 text-primary" /> August 2026
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{movie.title}</h3>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-semibold">{movie.genres.join(' | ')}</p>
              <p className="text-sm text-gray-300 mt-2 line-clamp-2">{movie.overview}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ComingSoon
