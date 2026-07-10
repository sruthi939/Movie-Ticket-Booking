import { useMemo, useState } from 'react'
import { useNavigate, useParams, createSearchParams } from 'react-router-dom'
import { ArrowRight, CalendarDays, Clock3, PlayCircle, Star, Users } from 'lucide-react'
import { movies } from '../data/movies'
import timeFormat from '../utils/timeFormat'
import CastSection from '../components/movie/CastSection'
import TrailerPlayer from '../components/movie/TrailerPlayer'
import Gallery from '../components/movie/Gallery'
import Rating from '../components/movie/Rating'
import BlurBackground from '../components/effects/BlurBackground'

const buildDateOptions = () =>
  Array.from({ length: 5 }, (_, idx) => {
    const date = new Date()
    date.setDate(date.getDate() + idx)
    return {
      id: date.toISOString().slice(0, 10),
      label: date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
    }
  })

const MovieDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const movie = useMemo(() => movies.find((m) => m.id === id), [id])
  const dateOptions = useMemo(buildDateOptions, [])
  const [selectedDate, setSelectedDate] = useState(dateOptions[0].id)
  const [selectedTime, setSelectedTime] = useState(movie?.showtimes?.[0] ?? '')
  const [ticketCount, setTicketCount] = useState(2)

  if (!movie) {
    return (
      <div className="flex min-h-screen items-center justify-center text-gray-400 text-lg">
        Movie not found.
      </div>
    )
  }

  const navigateToBooking = () => {
    const params = createSearchParams({ date: selectedDate, tickets: String(ticketCount) })
    navigate(`/movies/${movie.id}/${selectedTime}?${params}`)
  }

  return (
    <div className="min-h-screen text-white">
      {/* Hero backdrop */}
      <div className="relative overflow-hidden px-6 py-28 md:px-16 lg:px-24 xl:px-44">
        <div className="absolute inset-0 z-0">
          <img src={movie.backdrop} alt={movie.title} className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#09090b] via-[#09090b]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent" />
          <BlurBackground />
        </div>

        <div className="relative z-10 grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          {/* Left: text */}
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary font-semibold">
                Premium release
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-gray-300">
                Booking by date
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-extrabold leading-tight sm:text-6xl tracking-tight">{movie.title}</h1>
            <p className="max-w-3xl text-lg text-primary italic">{movie.tagline}</p>

            <div className="grid gap-3 text-sm text-gray-300 sm:grid-cols-3">
              <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <CalendarDays className="h-4 w-4 text-primary" /> {movie.year}
              </div>
              <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <Clock3 className="h-4 w-4 text-primary" /> {timeFormat(movie.runtime)}
              </div>
              <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <Star className="h-4 w-4 fill-primary text-primary" /> {movie.rating}/10
              </div>
            </div>

            <p className="max-w-2xl text-base text-gray-300 leading-relaxed">{movie.overview}</p>

            <div className="flex flex-wrap gap-2">
              {movie.genres.map((g) => (
                <span key={g} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-gray-200">
                  {g}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={navigateToBooking}
                className="flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-black transition hover:bg-primary-dull shadow-lg shadow-primary/20 cursor-pointer"
              >
                Book now <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href={movie.trailerUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-7 py-3.5 text-sm font-medium text-white transition hover:bg-white/20 cursor-pointer"
              >
                <PlayCircle className="h-4 w-4" /> Watch trailer
              </a>
            </div>
          </div>

          {/* Right: poster card */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl">
            <img
              src={movie.poster}
              alt={movie.title}
              className="h-80 w-full rounded-[1.5rem] object-cover shadow-2xl"
            />
            <div className="mt-5 space-y-4">
              <div>
                <h2 className="text-base font-bold text-white">Cast</h2>
                <div className="mt-2 flex flex-wrap gap-2">
                  {movie.cast.map((m) => (
                    <span key={m} className="rounded-full bg-black/50 px-3 py-1 text-xs text-gray-300 border border-white/5">{m}</span>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-base font-bold text-white">Highlights</h2>
                <ul className="mt-2 space-y-1.5 text-sm text-gray-300">
                  {movie.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Showtime picker */}
      <div className="px-6 pb-16 md:px-16 lg:px-24 xl:px-44 space-y-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-sm">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-primary font-semibold">Showtimes</p>
              <h3 className="text-3xl font-bold mt-1">Reserve your screen</h3>
            </div>
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-gray-300">
              <Users className="h-4 w-4 text-primary" /> {ticketCount} members
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.3fr_0.95fr]">
            <div className="space-y-6">
              {/* Date selector */}
              <div>
                <p className="mb-4 text-xs uppercase tracking-widest text-gray-500 font-semibold">Choose a date</p>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-5">
                  {dateOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setSelectedDate(opt.id)}
                      className={`rounded-[1.5rem] border px-4 py-4 text-left text-sm transition cursor-pointer ${
                        selectedDate === opt.id
                          ? 'border-primary bg-primary/10 text-white'
                          : 'border-white/10 bg-black/40 text-gray-300 hover:border-primary/50 hover:bg-white/5'
                      }`}
                    >
                      <div className="font-bold text-base">{opt.label.split(' ')[0]}</div>
                      <div className="mt-1 text-xs text-gray-400">{opt.label.split(' ').slice(1).join(' ')}</div>
                    </button>
                  ))}
                </div>
              </div>
              {/* Time selector */}
              <div>
                <p className="mb-4 text-xs uppercase tracking-widest text-gray-500 font-semibold">Select a time</p>
                <div className="flex flex-wrap gap-3">
                  {movie.showtimes.map((t) => (
                    <button
                      key={t}
                      onClick={() => setSelectedTime(t)}
                      className={`rounded-full px-6 py-3 text-sm font-semibold transition cursor-pointer ${
                        selectedTime === t ? 'bg-primary text-black shadow-lg shadow-primary/20' : 'bg-white/10 text-gray-200 hover:bg-white/20'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Members */}
            <div className="rounded-[1.5rem] border border-white/10 bg-black/40 p-6 space-y-4">
              <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Members</p>
              <div className="rounded-2xl bg-white/5 p-4">
                <div className="flex items-center justify-between gap-4">
                  <button
                    onClick={() => setTicketCount((c) => Math.max(1, c - 1))}
                    className="h-12 w-12 rounded-full border border-white/10 text-2xl text-white transition hover:border-primary cursor-pointer"
                  >
                    −
                  </button>
                  <span className="text-4xl font-extrabold">{ticketCount}</span>
                  <button
                    onClick={() => setTicketCount((c) => Math.min(6, c + 1))}
                    className="h-12 w-12 rounded-full border border-white/10 text-2xl text-white transition hover:border-primary cursor-pointer"
                  >
                    +
                  </button>
                </div>
                <p className="mt-3 text-xs text-gray-500 text-center">Maximum 6 seats per booking</p>
              </div>
              <div className="space-y-2 text-sm text-gray-300 border-t border-white/5 pt-4">
                <div className="flex justify-between"><span className="text-gray-500">Date</span><span>{selectedDate}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Time</span><span>{selectedTime}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Members</span><span>{ticketCount}</span></div>
              </div>
              <button
                onClick={navigateToBooking}
                className="mt-2 w-full rounded-full bg-primary py-3 text-sm font-bold text-black hover:bg-primary-dull transition cursor-pointer shadow-lg shadow-primary/20"
              >
                Select Seats
              </button>
            </div>
          </div>
        </div>

        {/* Extras */}
        <div className="grid gap-8 lg:grid-cols-2">
          <TrailerPlayer trailerUrl={movie.trailerUrl} poster={movie.poster} />
          <CastSection cast={movie.cast} />
        </div>
        <Gallery title={movie.title} />
        <Rating rating={movie.rating} />
      </div>
    </div>
  )
}

export default MovieDetails
