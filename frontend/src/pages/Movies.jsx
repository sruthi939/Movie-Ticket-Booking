import { useMemo, useState } from 'react'
import { ArrowRight, Sparkles, Ticket, Star } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { movies } from '../data/movies'


const Movies = () => {
  const navigate = useNavigate()
  const [activeFilter, setActiveFilter] = useState('All')

  const filters = ['All', ...new Set(movies.flatMap((movie) => movie.genres))]
  const filteredMovies = useMemo(() => {
    if (activeFilter === 'All') return movies
    return movies.filter((movie) => movie.genres.includes(activeFilter))
  }, [activeFilter])

  return (
    <div className='min-h-screen bg-[radial-gradient(circle_at_top,_rgba(248,69,101,0.16),_transparent_35%),linear-gradient(135deg,_#09090b,_#111114)] px-6 py-28 md:px-16 lg:px-24 xl:px-44'>
      <div className='mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between'>
        <div>
          <div className='mb-3 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-sm text-primary'>
            <Sparkles className='h-4 w-4' /> Curated tonight
          </div>
          <h1 className='text-4xl font-semibold sm:text-5xl'>Immersive screenings</h1>
          <p className='mt-3 max-w-2xl text-sm text-gray-300 sm:text-base'>Step into a gallery of premium releases with cinematic previews, instant booking, and velvet-dark atmosphere.</p>
        </div>
        <div className='flex flex-wrap gap-2'>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-4 py-2 text-sm transition ${activeFilter === filter ? 'bg-primary text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'}`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className='grid gap-8 lg:grid-cols-2'>
        {filteredMovies.map((movie) => (
          <div key={movie.id} className='group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur'>
            <div className='relative h-72 overflow-hidden'>
              <img src={movie.poster} alt={movie.title} className='h-full w-full object-cover transition duration-500 group-hover:scale-105' />
              <div className='absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent' />
              <div className='absolute bottom-4 left-4 right-4 flex items-end justify-between'>
                <div>
                  <p className='text-sm text-primary'>{movie.tagline}</p>
                  <h2 className='text-2xl font-semibold'>{movie.title}</h2>
                </div>
                <div className='rounded-full border border-white/20 bg-black/50 px-3 py-1 text-sm text-gray-200'>
                  <span className='mr-1 inline-flex items-center gap-1'><Star className='h-4 w-4 fill-primary text-primary' /> {movie.rating}</span>
                </div>
              </div>
            </div>
            <div className='p-6'>
              <p className='text-sm text-gray-300'>{movie.overview}</p>
              <div className='mt-4 flex flex-wrap gap-2 text-sm text-gray-400'>
                {movie.genres.map((genre) => (
                  <span key={genre} className='rounded-full border border-white/10 px-3 py-1'>{genre}</span>
                ))}
              </div>
              <div className='mt-6 flex items-center justify-between'>
                <button onClick={() => { navigate(`/movies/${movie.id}`); window.scrollTo(0, 0) }} className='flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium transition hover:bg-primary-dull'>
                  View details <ArrowRight className='h-4 w-4' />
                </button>
                <div className='flex items-center gap-2 text-sm text-gray-400'>
                  <Ticket className='h-4 w-4 text-primary' /> {movie.showtimes[0]} screening
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Movies
