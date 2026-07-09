import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import BlurCircle from './BlurCircle'
import MovieCard from './MovieCard'
import { featuredMovies } from '../data/movies'

const FeaturedSection = () => {
    const navigate = useNavigate()

    return (
        <div className='overflow-hidden px-6 md:px-16 lg:px-24 xl:px-44'>
            <div className='relative flex items-center justify-between pb-10 pt-20'>
                <BlurCircle top='0' right='-80px' />
                <p className='text-lg font-medium text-gray-300'>Now Showing</p>
                <button onClick={() => navigate('/movies')} className='group flex items-center gap-2 text-sm text-gray-300'>
                    View All
                    <ArrowRight className='h-4.5 w-4.5 transition group-hover:translate-x-0.5' />
                </button>
            </div>
            <div className='mt-8 flex flex-wrap justify-center gap-8'>
                {featuredMovies.map((show) => (
                    <MovieCard key={show.id} movie={show} />
                ))}
            </div>
            <div className='mt-20 flex justify-center'>
                <button
                    onClick={() => { navigate('/movies'); window.scrollTo(0, 0) }}
                    className='rounded-md bg-primary px-10 py-3 text-sm font-medium transition hover:bg-primary-dull'>
                    Show more
                </button>
            </div>
        </div>
    )
}

export default FeaturedSection
