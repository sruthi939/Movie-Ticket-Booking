import { ArrowRight, Calendar, Clock, Sparkles } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { movies } from '../../data/movies'
import timeFormat from '../../utils/timeFormat'

const Hero = () => {
  const navigate = useNavigate()
  const featured = movies[0]

  return (
    <div className='relative flex min-h-screen flex-col items-start justify-center overflow-hidden px-6 py-24 md:px-16 lg:px-36'>
      {/* Background artwork */}
      <div className='absolute inset-0 overflow-hidden z-0'>
        <img
          src={featured.backdrop}
          alt={featured.title}
          className='h-full w-full object-cover opacity-25 scale-105 filter blur-[2px]'
        />
        <div className='absolute inset-0 bg-gradient-to-r from-[#09090b] via-[#09090b]/80 to-transparent' />
        <div className='absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent' />
      </div>

      <div className='relative z-10 max-w-3xl space-y-6'>
        <div className='inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary backdrop-blur-md'>
          <Sparkles className='h-4 w-4' /> Immersive Booking Experience
        </div>
        <h1 className='text-5xl font-extrabold leading-tight md:text-7xl tracking-tight text-white'>
          {featured.title}
        </h1>
        <div className='flex flex-wrap items-center gap-4 text-sm text-gray-300'>
          <span className="font-semibold text-primary">{featured.genres.join(' • ')}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /> {featured.year}</div>
          <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
          <div className='flex items-center gap-1'><Clock className='h-4 w-4' /> {timeFormat(featured.runtime)}</div>
        </div>
        <p className='max-w-xl text-base text-gray-400 sm:text-lg leading-relaxed'>
          {featured.overview}
        </p>
        <div className='flex flex-wrap gap-4 pt-4'>
          <button
            onClick={() => navigate('/movies')}
            className='flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold transition duration-300 hover:bg-primary-dull text-black shadow-lg shadow-primary/25 cursor-pointer'
          >
            Book tickets <ArrowRight className='h-5 w-5' />
          </button>
          <button
            onClick={() => navigate(`/movies/${featured.id}`)}
            className='rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-white/15 backdrop-blur-md cursor-pointer'
          >
            Explore story
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
