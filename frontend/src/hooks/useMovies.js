import { useState, useEffect, useMemo } from 'react'
import { movies as mockMovies } from '../data/movies'

export const useMovies = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeFilter, setActiveFilter] = useState('All')

  useEffect(() => {
    // Simulate API fetch delay
    const timer = setTimeout(() => {
      setMovies(mockMovies)
      setLoading(false)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  const filters = useMemo(() => {
    return ['All', ...new Set(movies.flatMap((m) => m.genres || []))]
  }, [movies])

  const filteredMovies = useMemo(() => {
    if (activeFilter === 'All') return movies
    return movies.filter((m) => m.genres?.includes(activeFilter))
  }, [movies, activeFilter])

  return {
    movies,
    filteredMovies,
    filters,
    activeFilter,
    setActiveFilter,
    loading,
  }
}

export default useMovies
