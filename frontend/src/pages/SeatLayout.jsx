import { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { ArrowRight, CalendarDays, CheckCircle2, Clock3, Ticket, Trash2, Users } from 'lucide-react'
import { movies } from '../data/movies'

const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L']
// Seat categories: standard = front, classic = middle, vip = back
const standardRows = new Set(['A', 'B', 'C', 'D', 'E'])
const classicRows = new Set(['F', 'G', 'H', 'I', 'J'])
const vipRows = new Set(['K', 'L'])
const reservedSeats = new Set(['C-6', 'D-4', 'D-5', 'F-12', 'G-8', 'H-3', 'H-4', 'J-10', 'L-14'])

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
    setSelectedSeats((prev) => [...prev, seatId])
  }


  const bookingComplete = selectedSeats.length > 0

  const priceForRow = (row) => {
    if (vipRows.has(row)) return 400
    // classic and standard both ₹350
    return 350
  }

  const seatPrice = (seatId) => {
    const row = seatId.split('-')[0]
    return priceForRow(row)
  }

  const subTotal = selectedSeats.reduce((sum, s) => sum + seatPrice(s), 0)
  const convenienceFee = Number((subTotal * 0.1).toFixed(2))
  const taxes = Number((subTotal * 0.05).toFixed(2))
  const totalAmount = Number((subTotal + convenienceFee + taxes).toFixed(2))
  const formatRupee = (value) => `₹${Number(value).toFixed(2)}`

  if (!movie) {
    return <div className='flex min-h-screen items-center justify-center text-gray-300'>Movie not found.</div>
  }

  return (
    <div className='min-h-screen bg-[radial-gradient(circle_at_top,_rgba(248,69,101,0.18),_transparent_25%),linear-gradient(180deg,_#050507,_#120f16)] text-white'>
      <div className='mx-auto max-w-[1720px] px-6 py-10 lg:px-10'>
        <div className='grid gap-8'>
          <main className='space-y-8'>
            <section className='rounded-[2rem] border border-white/10 bg-black/40 p-6 shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl'>
              <div className='mb-4 flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-gray-300'>SCREEN THIS WAY</div>
              <div className='rounded-[2rem] bg-[#09090c] px-4 py-6 shadow-[inset_0_0_100px_rgba(0,0,0,0.35)]'>
                <div className='mx-auto w-full max-w-[1400px] space-y-4'>
                  {rows.map((row) => (
                    <div key={row} className='flex items-center gap-4'>
                      <div className='w-10 text-right text-sm uppercase tracking-[0.2em] text-gray-400'>{row}</div>
                      <div className='flex w-full justify-center gap-3 overflow-x-auto px-2'>
                        {Array.from(
                          {
                            length: vipRows.has(row)
                              ? 10
                              : classicRows.has(row)
                                ? 14
                                : 10
                          },
                          (_, index) => {
                            const seatNumber = index + 1
                            const seatId = `${row}-${seatNumber}`

                            const isReserved = reservedSeats.has(seatId)
                            const isSelected = selectedSeats.includes(seatId)
                            const isVip = vipRows.has(row)
                            const isClassic = classicRows.has(row)

                            const showGap = (isVip || isClassic)
                              ? seatNumber === 3 || seatNumber === 7
                              : seatNumber === 4 || seatNumber === 10

                            return (
                              <div key={seatId} className="flex items-center">
                                <button
                                  key={seatId}
                                  type='button'
                                  disabled={isReserved}
                                  onClick={() => toggleSeat(seatId, isReserved)}
                                  className={`flex h-12 w-12 items-center justify-center rounded-2xl border text-sm font-semibold transition ${isReserved
                                      ? 'cursor-not-allowed border-[#444b5b] bg-[#16181f] text-[#6b7280]'
                                      : isSelected ? 'border-amber-300 bg-amber-400 text-black shadow-[0_0_20px_rgba(251,191,36,0.35)]'
                                        : isVip ? 'border-amber-300/50 bg-amber-500/10 text-amber-200 hover:border-amber-300 hover:bg-amber-500/20'
                                          : isClassic ? 'border-white/20 bg-white/6 text-gray-200 hover:border-primary hover:bg-white/10'
                                            : 'border-white/10 bg-white/5 text-gray-300 hover:border-primary hover:bg-white/10'
                                    }`}
                                >
                                  {seatNumber}
                                </button>
                                {showGap && <div className="w-8" />}
                              </div>
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
                <div className='rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300'>
                  {selectedSeats.length} seats selected
                </div>
              </div>
              <div className='grid gap-4 sm:grid-cols-2'>
                <div className='rounded-[1.5rem] border border-white/10 bg-black/30 p-4'>
                  <p className='mb-4 text-sm uppercase tracking-[0.3em] text-gray-400'>Legend</p>
                  <div className='flex flex-wrap items-center gap-6 text-sm text-gray-300'>
                    <div className='inline-flex items-center gap-3'>
                      <span className='inline-flex h-4 w-4 rounded-full bg-amber-300' />
                      <span>Selected</span>
                    </div>
                    <div className='inline-flex items-center gap-3'>
                      <span className='inline-flex h-4 w-4 rounded-full bg-white/10 border border-white/10' />
                      <span>Available</span>
                    </div>
                    <div className='inline-flex items-center gap-3'>
                      <span className='inline-flex h-4 w-4 rounded-full bg-[#444b5b]' />
                      <span>Booked</span>
                    </div>
                    <div className='inline-flex items-center gap-3'>
                      <span className='inline-flex h-4 w-4 rounded-full bg-amber-500/20 border border-amber-300/50' />
                      <span>Premium</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>

        {/* Bottom amount bar - minimal payment summary, fixed to viewport bottom */}
        <div className='fixed bottom-6 left-0 right-0 z-50 mx-auto flex max-w-[1280px] items-center justify-between gap-4 rounded-2xl bg-black/60 border border-white/8 p-4 px-6 shadow-lg'>
          <div className='flex items-center gap-4'>
            <div className='text-sm text-gray-300'>
              <div className='font-medium'>{selectedSeats.length} seats</div>
              <div className='text-xs text-gray-400'>{selectedSeats.length > 0 ? selectedSeats.join(', ') : 'No seats selected'}</div>
            </div>
            <div className='h-10 w-px bg-white/6' />
            <div className='text-sm text-gray-300'>
              <div>Price: <span className='font-semibold text-white'>{formatRupee(subTotal)}</span></div>
              <div className='text-xs text-gray-400'>Fees: {formatRupee(convenienceFee)} • Taxes: {formatRupee(taxes)}</div>
            </div>
          </div>

          <div className='flex items-center gap-3'>
            <div className='text-sm text-gray-400 mr-4'>Total</div>
            <div className='text-xl font-semibold'>{formatRupee(totalAmount)}</div>
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
              className={`ml-4 rounded-full px-4 py-2 text-sm font-semibold transition ${bookingComplete ? 'bg-amber-400 text-black hover:bg-amber-300' : 'cursor-not-allowed bg-white/10 text-gray-400'}`}
            >
              View payment details
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SeatLayout
