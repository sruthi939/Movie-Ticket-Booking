import { Heart, Sparkles } from 'lucide-react'
import { movies } from '../data/movies'

const Favorite = () => {
  const favorites = movies.slice(0, 3)

  return (
    <div className='min-h-screen bg-[radial-gradient(circle_at_top,_rgba(248,69,101,0.16),_transparent_35%),linear-gradient(135deg,_#09090b,_#111114)] px-6 py-24 md:px-16 lg:px-24 xl:px-44'>
      <div className='mb-10'>
        <div className='mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary'>
          <Sparkles className='h-4 w-4' /> Saved for later
        </div>
        <h1 className='text-4xl font-semibold sm:text-5xl'>Your favorite premieres</h1>
        <p className='mt-3 max-w-2xl text-gray-300'>Keep your next cinematic escape close at hand with a curated shortlist of standout stories.</p>
      </div>

      <div className='grid gap-6 lg:grid-cols-3'>
        {favorites.map((movie) => (
          <div key={movie.id} className='rounded-[1.6rem] border border-white/10 bg-white/5 p-4 backdrop-blur'>
            <img src={movie.poster} alt={movie.title} className='h-56 w-full rounded-[1.1rem] object-cover' />
            <div className='mt-4 flex items-start justify-between gap-3'>
              <div>
                <h2 className='text-xl font-semibold'>{movie.title}</h2>
                <p className='mt-1 text-sm text-gray-400'>{movie.genres.join(' • ')}</p>
              </div>
              <Heart className='h-5 w-5 fill-primary text-primary' />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Favorite
