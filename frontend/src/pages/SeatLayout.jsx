import { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { ArrowRight, CalendarDays, CheckCircle2, Clock3, Ticket, Trash2, Users } from 'lucide-react'
import { movies } from '../data/movies'

const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
const seatsPerRow = 12
const vipRows = new Set(['A', 'B'])
const reservedSeats = new Set(['C-6', 'D-4', 'D-5', 'F-12', 'G-8', 'H-3', 'H-4', 'J-10'])

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

const SeatLayout = () => {
  const { id, time } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const movie = useMemo(() => movies.find((item) => item.id === id), [id])
  const dateOptions = useMemo(() => buildDateOptions(), [])

  const queryParams = useMemo(() => new URLSearchParams(location.search), [location.search])
  const initialDate = queryParams.get('date') || dateOptions[0].id
  const initialTickets = Number(queryParams.get('tickets')) || 2
  const initialTime = time || movie?.showtimes?.[0] || ''

  const [selectedDate, setSelectedDate] = useState(initialDate)
  const [selectedTime, setSelectedTime] = useState(initialTime)
  const [ticketCount, setTicketCount] = useState(Math.max(1, Math.min(initialTickets, 10)))
  const [selectedSeats, setSelectedSeats] = useState([])

  const toggleSeat = (seatId, isReserved) => {
    if (isReserved) return
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats((prev) => prev.filter((item) => item !== seatId))
      return
    }
    if (selectedSeats.length >= ticketCount) {
      return
    }
    setSelectedSeats((prev) => [...prev, seatId])
  }

  useEffect(() => {
    if (selectedSeats.length > ticketCount) {
      setSelectedSeats((prev) => prev.slice(0, ticketCount))
    }
  }, [ticketCount, selectedSeats])

  const bookingComplete = selectedSeats.length === ticketCount
  const ticketPrice = 300
  const subTotal = ticketCount * ticketPrice
  const convenienceFee = Number((subTotal * 0.1).toFixed(2))
  const taxes = Number((subTotal * 0.05).toFixed(2))
  const totalAmount = Number((subTotal + convenienceFee + taxes).toFixed(2))
  const formatRupee = (value) => `₹${value.toFixed(2)}`

  if (!movie) {
    return <div className='flex min-h-screen items-center justify-center text-gray-300'>Movie not found.</div>
  }

  return (
    <div className='min-h-screen bg-[radial-gradient(circle_at_top,_rgba(248,69,101,0.18),_transparent_25%),linear-gradient(180deg,_#050507,_#120f16)] text-white'>
      <div className='mx-auto max-w-[1720px] px-6 py-10 lg:px-10'>
        <div className='grid gap-8 xl:grid-cols-[1.7fr_0.8fr]'>
          <main className='space-y-8'>
            <section className='rounded-[2rem] border border-white/10 bg-black/40 p-6 shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl'>
              <div className='mb-4 flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-gray-300'>SCREEN THIS WAY</div>
              <div className='rounded-[2rem] bg-[#09090c] px-4 py-6 shadow-[inset_0_0_100px_rgba(0,0,0,0.35)]'>
                <div className='mx-auto max-w-[820px] space-y-4'>
                  {rows.map((row) => (
                    <div key={row} className='flex items-center gap-4'>
                      <div className='w-10 text-right text-sm uppercase tracking-[0.2em] text-gray-400'>{row}</div>
                      <div className='flex w-full justify-center gap-3 overflow-x-auto px-2'>
                        {Array.from({ length: seatsPerRow }, (_, index) => {
                          const seatNumber = index + 1
                          const seatId = `${row}-${seatNumber}`
                          const isReserved = reservedSeats.has(seatId)
                          const isSelected = selectedSeats.includes(seatId)
                          const isVip = vipRows.has(row)

                          return (
                            <button
                              key={seatId}
                              type='button'
                              disabled={isReserved}
                              onClick={() => toggleSeat(seatId, isReserved)}
                              className={`flex h-12 w-12 items-center justify-center rounded-2xl border text-sm font-semibold transition ${isReserved ? 'cursor-not-allowed border-[#444b5b] bg-[#16181f] text-[#6b7280]' : isSelected ? 'border-amber-300 bg-amber-400 text-black shadow-[0_0_20px_rgba(251,191,36,0.35)]' : isVip ? 'border-amber-300/50 bg-amber-500/10 text-amber-200 hover:border-amber-300 hover:bg-amber-500/20' : 'border-white/10 bg-white/5 text-gray-300 hover:border-primary hover:bg-white/10'}`}
                            >
                              {seatNumber}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className='rounded-[2rem] border border-white/10 bg-black/40 p-6 shadow-[0_35px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl'>
              <div className='mb-5 flex flex-wrap items-center justify-between gap-4'>
                <div>
                  <p className='text-sm uppercase tracking-[0.3em] text-gray-400'>Select your seats</p>
                  <h2 className='text-3xl font-semibold'>Pick your perfect view</h2>
                </div>
                <div className='rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300'>
                  {selectedSeats.length}/{ticketCount} seats selected
                </div>
              </div>
              <div className='grid gap-4 sm:grid-cols-2'>
                <div className='rounded-[1.5rem] border border-white/10 bg-black/30 p-4'>
                  <p className='mb-4 text-sm uppercase tracking-[0.3em] text-gray-400'>Legend</p>
                  <div className='space-y-3 text-sm text-gray-300'>
                    <div className='flex items-center gap-3'>
                      <span className='inline-flex h-4 w-4 rounded-full bg-amber-300' /> Selected
                    </div>
                    <div className='flex items-center gap-3'>
                      <span className='inline-flex h-4 w-4 rounded-full bg-white/10 border border-white/10' /> Available
                    </div>
                    <div className='flex items-center gap-3'>
                      <span className='inline-flex h-4 w-4 rounded-full bg-[#444b5b]' /> Booked
                    </div>
                    <div className='flex items-center gap-3'>
                      <span className='inline-flex h-4 w-4 rounded-full bg-amber-500/20 border border-amber-300/50' /> Premium
                    </div>
                  </div>
                </div>
                <div className='rounded-[1.5rem] border border-white/10 bg-black/30 p-4'>
                  <p className='mb-4 text-sm uppercase tracking-[0.3em] text-gray-400'>Note</p>
                  <p className='text-sm leading-6 text-gray-300'>Tap seats to select. VIP seats are in the first two rows, and reserved seats are disabled.</p>
                </div>
              </div>
            </section>
          </main>

          <aside className='space-y-8'>
            <div className='sticky top-8 space-y-6 rounded-[2rem] border border-white/10 bg-black/40 p-6 shadow-[0_35px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl'>
              <div className='border-b border-white/10 pb-4'>
                <p className='text-sm uppercase tracking-[0.3em] text-gray-400'>Your booking</p>
                <div className='mt-5 flex items-start gap-4'>
                  <img src={movie.poster} alt={movie.title} className='h-24 w-16 rounded-2xl object-cover' />
                  <div className='space-y-2'>
                    <h3 className='text-lg font-semibold'>{movie.title}</h3>
                    <p className='text-sm text-gray-400'>IMAX 2D</p>
                    <div className='space-y-1 text-sm text-gray-300'>
                      <div className='flex items-center gap-2'><CalendarDays className='h-4 w-4 text-primary' /> {selectedDate}</div>
                      <div className='flex items-center gap-2'><Clock3 className='h-4 w-4 text-primary' /> {selectedTime}</div>
                      <div className='flex items-center gap-2'><Users className='h-4 w-4 text-primary' /> {ticketCount} seats</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='rounded-[1.8rem] border border-white/10 bg-black/70 p-4'>
                <div className='mb-4 flex items-center justify-between text-sm uppercase tracking-[0.2em] text-gray-400'>
                  <span>Selected seats</span>
                  <span>{selectedSeats.length}/{ticketCount}</span>
                </div>
                <div className='flex flex-wrap gap-2'>
                  {selectedSeats.length > 0 ? selectedSeats.map((seat) => (
                    <button key={seat} onClick={() => setSelectedSeats((prev) => prev.filter((item) => item !== seat))} className='inline-flex items-center gap-2 rounded-full bg-amber-300/15 px-3 py-2 text-sm text-amber-200 transition hover:bg-amber-300/25'>
                      {seat} <Trash2 className='h-3.5 w-3.5' />
                    </button>
                  )) : (
                    <div className='text-sm text-gray-500'>No seats chosen yet.</div>
                  )}
                </div>
              </div>

              <div className='rounded-[1.8rem] border border-white/10 bg-black/70 p-4'>
                <div className='space-y-3 text-sm text-gray-300'>
                  <div className='flex items-center justify-between'>
                    <span>Ticket price</span>
                    <span>{formatRupee(subTotal)}</span>
                  </div>
                  <div className='flex items-center justify-between'>
                    <span>Convenience fee</span>
                    <span>{formatRupee(convenienceFee)}</span>
                  </div>
                  <div className='flex items-center justify-between'>
                    <span>Taxes & charges</span>
                    <span>{formatRupee(taxes)}</span>
                  </div>
                </div>
                <div className='mt-4 border-t border-white/10 pt-4 text-lg font-semibold text-white'>
                  <div className='flex items-center justify-between'>
                    <span>Total amount</span>
                    <span>{formatRupee(totalAmount)}</span>
                  </div>
                </div>
              </div>

              <button
                disabled={!bookingComplete}
                onClick={() => navigate(`/movies/${id}/${selectedTime}/payment`, {
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
                    totalAmount
                  }
                })}
                className={`flex w-full items-center justify-center gap-3 rounded-full px-5 py-4 text-sm font-semibold transition ${bookingComplete ? 'bg-amber-400 text-black hover:bg-amber-300' : 'cursor-not-allowed bg-white/10 text-gray-400'}`}
              >
                <Ticket className='h-4 w-4' /> Proceed to payment
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default SeatLayout
