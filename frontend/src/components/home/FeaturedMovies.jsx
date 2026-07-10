import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Glow from '../effects/Glow'
import MovieCard from '../movie/MovieCard'
import { featuredMovies } from '../../data/movies'

const FeaturedMovies = () => {
  const navigate = useNavigate()

  return (
    <div className='relative overflow-hidden px-6 md:px-16 lg:px-24 xl:px-44 py-10'>
      <Glow size="300px" opacity={0.12} top="10%" right="5%" color="#f84565" />
      <div className='relative flex items-center justify-between pb-10 pt-10 z-10'>
        <div>
          <h2 className='text-3xl font-bold tracking-tight text-white'>Now Showing</h2>
          <p className="text-sm text-gray-400 mt-1">Book premium seats for today's hottest releases.</p>
        </div>
        <button
          onClick={() => { navigate('/movies'); window.scrollTo(0, 0) }}
          className='group flex items-center gap-2 text-sm text-gray-300 hover:text-primary transition cursor-pointer'
        >
          View All
          <ArrowRight className='h-4.5 w-4.5 transition group-hover:translate-x-1' />
        </button>
      </div>

      <div className='relative z-10 mt-8 flex flex-wrap justify-center gap-8'>
        {featuredMovies.map((show) => (
          <MovieCard key={show.id} movie={show} />
        ))}
      </div>

      <div className='mt-16 flex justify-center relative z-10'>
        <button
          onClick={() => { navigate('/movies'); window.scrollTo(0, 0) }}
          className='rounded-full bg-primary px-10 py-3.5 text-sm font-semibold transition hover:bg-primary-dull text-black cursor-pointer'
        >
          Show more screenings
        </button>
      </div>
    </div>
  )
}

export default FeaturedMovies
