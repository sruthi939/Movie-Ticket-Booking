import { useState, useRef, useEffect } from 'react'
import { Search } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { movies } from '../../data/movies'

const SearchBar = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [focused, setFocused] = useState(false)
  const navigate = useNavigate()
  const containerRef = useRef(null)

  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      return
    }
    const filtered = movies.filter(
      (m) =>
        m.title.toLowerCase().includes(query.toLowerCase()) ||
        m.genres.some((g) => g.toLowerCase().includes(query.toLowerCase()))
    )
    setResults(filtered)
  }, [query])

  useEffect(() => {
    const clickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setFocused(false)
      }
    }
    document.addEventListener('mousedown', clickOutside)
    return () => document.removeEventListener('mousedown', clickOutside)
  }, [])

  const handleSelect = (movieId) => {
    setQuery('')
    setFocused(false)
    navigate(`/movies/${movieId}`)
  }

  return (
    <div ref={containerRef} className="relative w-72 max-md:w-full z-20">
      <div className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 hover:border-primary/45 transition">
        <Search className="h-4.5 w-4.5 text-gray-400 shrink-0" />
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          className="bg-transparent text-sm text-white placeholder-gray-500 outline-none w-full"
        />
      </div>

      {focused && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 rounded-2xl border border-white/10 bg-zinc-950/90 p-2 shadow-2xl backdrop-blur-md max-h-60 overflow-y-auto">
          {results.map((m) => (
            <div
              key={m.id}
              onClick={() => handleSelect(m.id)}
              className="flex items-center gap-3 rounded-xl p-2.5 hover:bg-white/5 cursor-pointer transition"
            >
              <img src={m.poster} alt={m.title} className="h-10 w-8 rounded-md object-cover" />
              <div>
                <p className="text-sm font-semibold text-white truncate max-w-40">{m.title}</p>
                <p className="text-xs text-gray-500 mt-0.5">{m.genres.slice(0, 2).join(' | ')}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchBar
