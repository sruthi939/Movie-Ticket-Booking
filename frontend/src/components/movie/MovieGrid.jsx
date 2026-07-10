import MovieCard from './MovieCard'

const MovieGrid = ({ movies = [], activeFilter = 'All' }) => {
  if (movies.length === 0) {
    return (
      <div className="rounded-3xl border border-white/5 bg-white/5 p-12 text-center text-gray-400 text-sm">
        No screenings found matching the query.
      </div>
    )
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto py-6">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}

export default MovieGrid
