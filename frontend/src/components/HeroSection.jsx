import { ArrowRight, Calendar, Clock, Sparkles } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { movies } from '../data/movies'

const HeroSection = () => {
    const navigate = useNavigate()
    const featured = movies[0]

    return (
        <div className='relative flex min-h-screen flex-col items-start justify-center gap-4 overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(248,69,101,0.28),_transparent_30%),linear-gradient(135deg,_#060607,_#111114)] px-6 py-24 md:px-16 lg:px-36'>
            <div className='absolute inset-0 overflow-hidden'>
                <img src={featured.backdrop} alt={featured.title} className='h-full w-full object-cover opacity-20' />
                <div className='absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent' />
            </div>
            <div className='relative max-w-3xl'>
                <div className='mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary'>
                    <Sparkles className='h-4 w-4' /> 3D cinematic booking experience
                </div>
                <h1 className='text-5xl font-semibold leading-tight md:text-[70px] md:leading-[0.95]'>
                    {featured.title}
                </h1>
                <div className='mt-5 flex flex-wrap items-center gap-4 text-sm text-gray-300'>
                    <span>{featured.genres.join(' • ')}</span>
                    <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /> {featured.year}</div>
                    <div className='flex items-center gap-1'><Clock className='h-4 w-4' /> {featured.runtime} min</div>
                </div>
                <p className='mt-5 max-w-xl text-base text-gray-300 sm:text-lg'>{featured.overview}</p>
                <div className='mt-8 flex flex-wrap gap-3'>
                    <button onClick={() => navigate('/movies')} className='flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium transition hover:bg-primary-dull'>
                        Book now <ArrowRight className='h-5 w-5' />
                    </button>
                    <button onClick={() => navigate(`/movies/${featured.id}`)} className='rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-gray-100 transition hover:bg-white/20'>
                        Explore story
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
