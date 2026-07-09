import { useMemo, useState } from 'react'
import { useNavigate, useParams, createSearchParams } from 'react-router-dom'
import { ArrowRight, CalendarDays, Clock3, PlayCircle, Star, Users } from 'lucide-react'
import { movies } from '../data/movies'
import timeFormate from '../lib/timeFormate'

const buildDateOptions = () => {
  return Array.from({ length: 5 }, (_, idx) => {
    const date = new Date()
    date.setDate(date.getDate() + idx)
    return {
      id: date.toISOString().slice(0, 10),
      label: date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
    }
  })
}

const MovieDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const movie = useMemo(() => movies.find((item) => item.id === id), [id])
  const dateOptions = useMemo(() => buildDateOptions(), [])
  const [selectedDate, setSelectedDate] = useState(dateOptions[0].id)
  const [selectedTime, setSelectedTime] = useState(movie?.showtimes?.[0] ?? '')
  const [ticketCount, setTicketCount] = useState(2)

  if (!movie) {
    return <div className='flex min-h-screen items-center justify-center text-gray-300'>Movie not found.</div>
  }

  const navigateToBooking = () => {
    const params = createSearchParams({ date: selectedDate, tickets: String(ticketCount) })
    navigate(`/movies/${movie.id}/${selectedTime}?${params}`)
  }

  return (
    <div className='min-h-screen bg-[radial-gradient(circle_at_top,_rgba(248,69,101,0.18),_transparent_34%),linear-gradient(135deg,_#07070a,_#121316)] text-white'>
      <div className='relative overflow-hidden px-6 py-24 md:px-16 lg:px-24 xl:px-44'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(248,69,101,0.12),_transparent_30%),linear-gradient(180deg,_rgba(0,0,0,0.6),_rgba(0,0,0,0.95))]' />
        <div className='relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end'>
          <div className='space-y-6'>
            <div className='flex flex-wrap items-center gap-3'>
              <span className='inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-primary'>Premium release</span>
              <span className='rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-300'>Booking by date</span>
            </div>
            <h1 className='max-w-4xl text-5xl font-semibold leading-tight sm:text-6xl'>{movie.title}</h1>
            <p className='max-w-3xl text-lg text-gray-300'>{movie.tagline}</p>
            <div className='grid gap-3 text-sm text-gray-300 sm:grid-cols-3'>
              <div className='inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3'>
                <CalendarDays className='h-4 w-4 text-primary' /> {movie.year}
              </div>
              <div className='inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3'>
                <Clock3 className='h-4 w-4 text-primary' /> {timeFormate(movie.runtime)}
              </div>
              <div className='inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3'>
                <Star className='h-4 w-4 fill-primary text-primary' /> {movie.rating}/10
              </div>
            </div>
            <p className='max-w-2xl text-base text-gray-300'>{movie.overview}</p>
            <div className='flex flex-wrap gap-3'>
              {movie.genres.map((genre) => (
                <span key={genre} className='rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-200'>{genre}</span>
              ))}
            </div>
            <div className='grid gap-4 sm:grid-cols-[1.2fr_auto]'>
              <button onClick={navigateToBooking} className='flex items-center justify-center gap-3 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-black transition hover:bg-primary-dull'>
                Book now <ArrowRight className='h-4 w-4' />
              </button>
              <a href={movie.trailerUrl} target='_blank' rel='noreferrer' className='flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/10 px-7 py-3 text-sm font-medium text-white transition hover:bg-white/20'>
                <PlayCircle className='h-4 w-4' /> Watch trailer
              </a>
            </div>
          </div>

          <div className='relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl'>
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_45%)]' />
            <img src={movie.poster} alt={movie.title} className='relative h-80 w-full rounded-[1.5rem] object-cover shadow-2xl' />
            <div className='relative mt-6 space-y-5'>
              <div>
                <h2 className='text-xl font-semibold'>Cast</h2>
                <div className='mt-3 flex flex-wrap gap-2'>
                  {movie.cast.map((member) => (
                    <span key={member} className='rounded-full bg-black/50 px-3 py-1 text-sm text-gray-300'>{member}</span>
                  ))}
                </div>
              </div>
              <div>
                <h2 className='text-xl font-semibold'>Highlights</h2>
                <ul className='mt-3 space-y-2 text-sm text-gray-300'>
                  {movie.highlights.map((highlight) => (
                    <li key={highlight} className='flex items-center gap-3'>
                      <span className='flex h-2.5 w-2.5 items-center justify-center rounded-full bg-primary text-[0.65rem]'>•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='px-6 pb-20 md:px-16 lg:px-24 xl:px-44'>
        <div className='rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur'>
          <div className='mb-8 flex flex-wrap items-center justify-between gap-4'>
            <div>
              <p className='text-sm text-primary'>Showtimes</p>
              <h3 className='text-3xl font-semibold'>Reserve your screen</h3>
            </div>
            <div className='inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-gray-300'>
              <Users className='h-4 w-4 text-primary' /> {ticketCount} members
            </div>
          </div>

          <div className='grid gap-6 lg:grid-cols-[1.3fr_0.95fr]'>
            <div className='space-y-6'>
              <div>
                <p className='mb-4 text-xs uppercase tracking-[0.3em] text-gray-400'>Choose a date</p>
                <div className='grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-5'>
                  {dateOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setSelectedDate(option.id)}
                      className={`rounded-[1.5rem] border px-4 py-4 text-left text-sm transition ${selectedDate === option.id ? 'border-primary bg-primary/10 text-white' : 'border-white/10 bg-black/40 text-gray-300 hover:border-primary hover:bg-white/5'}`}
                    >
                      <div className='font-semibold'>{option.label.split(' ')[0]}</div>
                      <div className='mt-1 text-xs text-gray-400'>{option.label.split(' ').slice(1).join(' ')}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className='mb-4 text-xs uppercase tracking-[0.3em] text-gray-400'>Select a time</p>
                <div className='flex flex-wrap gap-3'>
                  {movie.showtimes.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`rounded-full px-5 py-3 text-sm transition ${selectedTime === time ? 'bg-primary text-black' : 'bg-white/10 text-gray-200 hover:bg-white/20'}`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className='rounded-[1.5rem] border border-white/10 bg-black/40 p-6'>
              <p className='text-sm uppercase tracking-[0.2em] text-gray-400'>Members</p>
              <div className='mt-4 rounded-[1.5rem] bg-white/5 p-4'>
                <div className='flex items-center justify-between gap-4'>
                  <button onClick={() => setTicketCount((count) => Math.max(1, count - 1))} className='h-12 w-12 rounded-full border border-white/10 text-2xl text-white transition hover:border-primary'>-</button>
                  <span className='text-4xl font-semibold text-white'>{ticketCount}</span>
                  <button onClick={() => setTicketCount((count) => Math.min(6, count + 1))} className='h-12 w-12 rounded-full border border-white/10 text-2xl text-white transition hover:border-primary'>+</button>
                </div>
                <p className='mt-4 text-sm text-gray-400'>Seat limit 6 persons per booking.</p>
              </div>
              <div className='mt-6 space-y-2 rounded-[1.5rem] bg-black/30 p-4'>
                <div className='flex items-center justify-between text-sm text-gray-300'>
                  <span>Date</span>
                  <span>{selectedDate}</span>
                </div>
                <div className='flex items-center justify-between text-sm text-gray-300'>
                  <span>Time</span>
                  <span>{selectedTime}</span>
                </div>
                <div className='flex items-center justify-between text-sm text-gray-300'>
                  <span>Members</span>
                  <span>{ticketCount}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
