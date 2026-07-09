import { useState } from 'react'
import ReactPlayer from 'react-player'
import BlurCircle from './BlurCircle'
import { PlayCircle } from 'lucide-react'
import { movies } from '../data/movies'

const trailers = movies.slice(0, 4).map((movie) => ({
    title: movie.title,
    image: movie.poster,
    videoUrl: movie.trailerUrl,
}))

const TrailerSection = () => {
    const [currentTrailer, setCurrentTrailer] = useState(trailers[0])

    return (
        <div className='overflow-hidden px-6 py-20 md:px-16 lg:px-24 xl:px-44'>
            <p className='mx-auto max-w-240 text-lg font-medium text-gray-300'>Trailers</p>
            <div className='relative mt-6'>
                <BlurCircle top='-100px' right='-100px' />
                <ReactPlayer
                    url={currentTrailer.videoUrl}
                    controls={false}
                    className='mx-auto max-w-full'
                    width='960px'
                    height='540px'
                />
            </div>
            <div className='mx-auto mt-8 grid max-w-3xl grid-cols-4 gap-4 md:gap-8'>
                {trailers.map((trailer) => (
                    <div
                        key={trailer.image}
                        className='group relative max-md:h-60 md:max-h-60 cursor-pointer transition duration-300 hover:-translate-y-1 group-hover:not-hover:opacity-50'
                        onClick={() => setCurrentTrailer(trailer)}
                    >
                        <img src={trailer.image} alt={trailer.title} className='h-full w-full rounded-lg object-cover brightness-75' />
                        <PlayCircle strokeWidth={1.6} className='absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 md:h-12 md:w-8' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TrailerSection
