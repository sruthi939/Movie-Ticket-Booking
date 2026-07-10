import { Calendar, Clock, Star } from 'lucide-react'
import timeFormat from '../../utils/timeFormat'

const MovieInfo = ({ year, runtime, rating, genres = [] }) => {
  return (
    <div className="grid gap-3 text-sm text-gray-300 sm:grid-cols-3">
      <div className="inline-flex items-center gap-2 rounded-2xl border border-white/5 bg-white/5 px-4 py-3.5">
        <Calendar className="h-4 w-4 text-primary" />
        <div>
          <span className="block text-[10px] text-gray-500 uppercase tracking-widest leading-none">Release Year</span>
          <span className="font-semibold text-white mt-1 block">{year}</span>
        </div>
      </div>
      <div className="inline-flex items-center gap-2 rounded-2xl border border-white/5 bg-white/5 px-4 py-3.5">
        <Clock className="h-4 w-4 text-primary" />
        <div>
          <span className="block text-[10px] text-gray-500 uppercase tracking-widest leading-none">Runtime</span>
          <span className="font-semibold text-white mt-1 block">{timeFormat(runtime)}</span>
        </div>
      </div>
      <div className="inline-flex items-center gap-2 rounded-2xl border border-white/5 bg-white/5 px-4 py-3.5">
        <Star className="h-4 w-4 fill-primary text-primary" />
        <div>
          <span className="block text-[10px] text-gray-500 uppercase tracking-widest leading-none">Rating</span>
          <span className="font-semibold text-white mt-1 block">{rating}/10</span>
        </div>
      </div>
    </div>
  )
}

export default MovieInfo
