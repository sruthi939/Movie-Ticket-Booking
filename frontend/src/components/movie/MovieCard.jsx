import { Star, Ticket } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import timeFormat from '../../utils/timeFormat'

const MovieCard = ({ movie }) => {
  const navigate = useNavigate()

  return (
    <div className='flex w-72 flex-col justify-between rounded-[1.6rem] border border-white/10 bg-white/5 p-3 shadow-[0_20px_80px_rgba(0,0,0,0.3)] transition duration-300 hover:-translate-y-1 hover:border-primary/20'>
      <img
        onClick={() => { navigate(`/movies/${movie.id}`); window.scrollTo(0, 0) }}
        src={movie.poster}
        alt={movie.title}
        className='h-56 w-full cursor-pointer rounded-[1.1rem] object-cover object-center transition duration-300 hover:opacity-90'
      />
      <div className='px-1 pb-2 pt-4'>
        <p className='truncate text-lg font-semibold text-white'>
          {movie.title}
        </p>
        <p className='mt-2 text-sm text-gray-400'>
          {movie.year} • {movie.genres.slice(0, 2).join(' | ')} • {timeFormat(movie.runtime)}
        </p>
        <div className='mt-4 flex items-center justify-between'>
          <button onClick={() => { navigate(`/movies/${movie.id}`); window.scrollTo(0, 0) }} className='flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-black transition hover:bg-primary-dull cursor-pointer'>
            <Ticket className='h-3.5 w-3.5' /> Buy Ticket
          </button>
          <p className='mr-1 flex items-center gap-1 text-sm text-gray-400'>
            <Star className='h-4 w-4 fill-primary text-primary' />
            {movie.rating.toFixed(1)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
