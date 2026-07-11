import Movie from '../models/Movie.js'
import { seedMovies } from '../data/seedMovies.js'

export const getMovies = async (req, res) => {
  try {
    let movies = await Movie.find()
    if (movies.length === 0) {
      // Auto seed if empty
      await Movie.insertMany(seedMovies)
      movies = await Movie.find()
    }
    return res.json(movies)
  } catch (error) {
    console.warn('MongoDB query failed, falling back to local seed data:', error.message)
    return res.json(seedMovies)
  }
}

export const getMovieById = async (req, res) => {
  const { id } = req.params
  try {
    const movie = await Movie.findOne({ id })
    if (movie) return res.json(movie)
  } catch (error) {
    console.warn('MongoDB query failed, falling back to local seed data search:', error.message)
  }
  
  const localMovie = seedMovies.find((m) => m.id === id)
  if (!localMovie) {
    return res.status(404).json({ error: 'Movie not found' })
  }
  return res.json(localMovie)
}
