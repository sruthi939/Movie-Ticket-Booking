import { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { ArrowRight, CalendarDays, Clock3, Ticket, Users } from 'lucide-react'
import { movies } from '../data/movies'
import SeatLayout from '../components/booking/SeatLayout'
import BookingSummary from '../components/booking/BookingSummary'
import BlurBackground from '../components/effects/BlurBackground'

const vipRows = new Set(['K', 'L'])

const buildDateOptions = () =>
  Array.from({ length: 5 }, (_, idx) => {
    const date = new Date()
    date.setDate(date.getDate() + idx)
    return {
      id: date.toISOString().slice(0, 10),
      label: date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
    }
  })

const seatPrice = (seatId) => {
  const row = seatId.split('-')[0]
  return vipRows.has(row) ? 400 : 350
}

const SeatSelection = () => {
  const { id, time } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const movie = useMemo(() => movies.find((m) => m.id === id), [id])
  const dateOptions = useMemo(buildDateOptions, [])

  const queryParams = useMemo(() => new URLSearchParams(location.search), [location.search])
  const initialDate = queryParams.get('date') || dateOptions[0].id
  const initialTickets = Number(queryParams.get('tickets')) || 2
  const initialTime = time || movie?.showtimes?.[0] || ''

  const [selectedDate, setSelectedDate] = useState(initialDate)
  const [selectedTime, setSelectedTime] = useState(initialTime)
  const [ticketCount, setTicketCount] = useState(Math.max(1, Math.min(initialTickets, 10)))
  const [selectedSeats, setSelectedSeats] = useState([])

  const toggleSeat = (seatId) => {
    setSelectedSeats((prev) =>
      prev.includes(seatId) ? prev.filter((s) => s !== seatId) : [...prev, seatId]
    )
  }

  const subTotal = selectedSeats.reduce((sum, s) => sum + seatPrice(s), 0)
  const convenienceFee = Number((subTotal * 0.1).toFixed(2))
  const taxes = Number((subTotal * 0.05).toFixed(2))
  const totalAmount = Number((subTotal + convenienceFee + taxes).toFixed(2))
  const bookingComplete = selectedSeats.length > 0

  if (!movie) {
    return (
      <div className="flex min-h-screen items-center justify-center text-gray-400 text-lg">
        Movie not found.
      </div>
    )
  }

  return (
    <div className="relative min-h-screen text-white">
      <BlurBackground />

      <div className="relative z-10 mx-auto max-w-[1720px] px-6 py-10 lg:px-10">
        {/* Page heading */}
        <div className="mb-8 flex flex-wrap items-center gap-4">
          <img src={movie.poster} alt={movie.title} className="h-16 w-12 rounded-xl object-cover shadow-lg" />
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">{movie.title}</h1>
            <div className="flex items-center gap-3 text-sm text-gray-400 mt-1">
              <span className="flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5 text-primary" />{selectedDate}</span>
              <span className="flex items-center gap-1"><Clock3 className="h-3.5 w-3.5 text-primary" />{selectedTime}</span>
              <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5 text-primary" />{ticketCount} seats</span>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          {/* Seat grid */}
          <SeatLayout selectedSeats={selectedSeats} onToggleSeat={toggleSeat} />

          {/* Sidebar summary */}
          <div className="space-y-6">
            <BookingSummary
              title={movie.title}
              poster={movie.poster}
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              ticketCount={ticketCount}
              selectedSeats={selectedSeats}
              subTotal={subTotal}
              convenienceFee={convenienceFee}
              taxes={taxes}
              totalAmount={totalAmount}
            />

            <button
              disabled={!bookingComplete}
              onClick={() =>
                navigate(`/movies/${id}/${selectedTime}/payment`, {
                  state: {
                    movieId: movie.id,
                    title: movie.title,
                    poster: movie.poster,
                    selectedDate,
                    selectedTime,
                    ticketCount,
                    selectedSeats,
                    subTotal,
                    convenienceFee,
                    taxes,
                    totalAmount,
                  },
                })
              }
              className={`flex w-full items-center justify-center gap-2 rounded-full px-5 py-4 text-sm font-bold transition ${
                bookingComplete
                  ? 'bg-primary text-black hover:bg-primary-dull shadow-lg shadow-primary/20 cursor-pointer'
                  : 'bg-white/10 text-gray-500 cursor-not-allowed'
              }`}
            >
              <Ticket className="h-4 w-4" />
              {bookingComplete ? 'Proceed to Payment' : 'Select at least 1 seat'}
              {bookingComplete && <ArrowRight className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SeatSelection
