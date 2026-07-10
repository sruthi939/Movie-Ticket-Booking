import api from './api'
import { movies } from '../data/movies'

export const movieService = {
  getAllMovies: async () => {
    try {
      const res = await api.get('/movies')
      return res.data
    } catch {
      return movies // Fallback to mock data
    }
  },
  getMovieById: async (id) => {
    try {
      const res = await api.get(`/movies/${id}`)
      return res.data
    } catch {
      return movies.find((m) => m.id === id) || null
    }
  },
}

export default movieService
