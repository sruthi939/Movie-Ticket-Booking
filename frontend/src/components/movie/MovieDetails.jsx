import timeFormat from '../../utils/timeFormat'

const MovieDetails = ({ movie }) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs uppercase tracking-wider text-primary font-semibold">
          Now Screening
        </span>
        <span className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs text-gray-300">
          Dolby Atmos 7.1
        </span>
      </div>
      <h2 className="text-4xl font-extrabold text-white sm:text-5xl">{movie.title}</h2>
      <p className="text-lg text-primary italic font-medium">{movie.tagline}</p>
      
      <div className="grid grid-cols-3 gap-4 border-t border-b border-white/5 py-4 text-sm text-gray-300">
        <div>
          <span className="block text-xs text-gray-500 uppercase tracking-widest">Year</span>
          <span className="font-semibold text-white mt-1 block">{movie.year}</span>
        </div>
        <div>
          <span className="block text-xs text-gray-500 uppercase tracking-widest">Duration</span>
          <span className="font-semibold text-white mt-1 block">{timeFormat(movie.runtime)}</span>
        </div>
        <div>
          <span className="block text-xs text-gray-500 uppercase tracking-widest">Rating</span>
          <span className="font-semibold text-white mt-1 block">★ {movie.rating}/10</span>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Synopsis</h4>
        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{movie.overview}</p>
      </div>

      <div className="flex flex-wrap gap-2 pt-2">
        {movie.genres.map((genre) => (
          <span key={genre} className="rounded-full border border-white/5 bg-white/5 px-3 py-1.5 text-xs text-gray-300 font-medium">
            {genre}
          </span>
        ))}
      </div>
    </div>
  )
}

export default MovieDetails
