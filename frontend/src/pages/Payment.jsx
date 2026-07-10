import { useMemo } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { ArrowRight, CalendarDays, Clock3, Ticket, Users } from 'lucide-react'
import { movies } from '../data/movies'

const API_BASE_URL = 'http://localhost:5000/api'

const formatRupee = (value) => `₹${Number(value || 0).toFixed(2)}`

const Payment = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { id, time } = useParams()
  const movie = useMemo(() => movies.find((item) => item.id === id), [id])

  const booking = location.state || {}
  const {
    title = movie?.title,
    poster = movie?.poster,
    selectedDate,
    selectedTime = time,
    ticketCount,
    selectedSeats = [],
    subTotal,
    convenienceFee,
    taxes,
    totalAmount
  } = booking

  const missingDetails = !selectedDate || !ticketCount || !selectedSeats.length || !totalAmount

  return (
    <div className='min-h-screen bg-[radial-gradient(circle_at_top,_rgba(248,69,101,0.18),_transparent_25%),linear-gradient(180deg,_#050507,_#120f16)] text-white'>
      <div className='mx-auto max-w-6xl px-6 py-10 lg:px-10'>
        <div className='grid gap-8 lg:grid-cols-[1.4fr_0.8fr]'>
          <div className='space-y-6'>
            <div className='rounded-[2rem] border border-white/10 bg-black/40 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl'>
              <div className='mb-6 flex flex-wrap items-center justify-between gap-4'>
                <div>
                  <p className='text-sm uppercase tracking-[0.3em] text-gray-400'>Payment summary</p>
                  <h1 className='text-4xl font-semibold'>Complete your booking</h1>
                </div>
                <button
                  type='button'
                  onClick={() => navigate(-1)}
                  className='inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-gray-200 transition hover:border-primary hover:bg-white/10'
                >
                  <ArrowRight className='h-4 w-4 rotate-180' /> Edit selection
                </button>
              </div>

              {missingDetails ? (
                <div className='rounded-[1.5rem] border border-rose-500/20 bg-rose-500/10 p-6 text-sm text-rose-200'>
                  Booking details are missing. Please return to the seat selection page and complete your booking.
                </div>
              ) : (
                <div className='space-y-8'>
                  <div className='grid gap-6 lg:grid-cols-[1.1fr_0.9fr]'>
                    <div className='rounded-[1.8rem] border border-white/10 bg-black/70 p-6'>
                      <div className='flex flex-wrap items-center gap-4'>
                        <img src={poster} alt={title} className='h-28 w-20 rounded-3xl object-cover shadow-lg' />
                        <div>
                          <h2 className='text-2xl font-semibold'>{title}</h2>
                          <p className='mt-2 text-sm text-gray-400'>IMAX 2D booking</p>
                        </div>
                      </div>

                      <div className='mt-6 space-y-4 text-sm text-gray-300'>
                        <div className='flex items-center gap-3'>
                          <CalendarDays className='h-4 w-4 text-primary' />
                          <span>{selectedDate}</span>
                        </div>
                        <div className='flex items-center gap-3'>
                          <Clock3 className='h-4 w-4 text-primary' />
                          <span>{selectedTime}</span>
                        </div>
                        <div className='flex items-center gap-3'>
                          <Users className='h-4 w-4 text-primary' />
                          <span>{ticketCount} seats</span>
                        </div>
                        <div className='flex items-center gap-3'>
                          <Ticket className='h-4 w-4 text-primary' />
                          <span>{selectedSeats.join(', ')}</span>
                        </div>
                      </div>
                    </div>

                    <div className='rounded-[1.8rem] border border-white/10 bg-black/70 p-6'>
                      <p className='text-sm uppercase tracking-[0.3em] text-gray-400'>Payment details</p>
                      <div className='mt-6 space-y-4 text-sm text-gray-300'>
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
                      <div className='mt-6 border-t border-white/10 pt-4 text-lg font-semibold text-white'>
                        <div className='flex items-center justify-between'>
                          <span>Total amount</span>
                          <span>{formatRupee(totalAmount)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='rounded-[1.8rem] border border-white/10 bg-black/30 p-6 text-sm text-gray-300'>
                    <h3 className='mb-3 text-lg font-semibold text-white'>How this payment works</h3>
                    <ul className='space-y-3'>
                      <li>Secure checkout with your preferred payment method.</li>
                      <li>Booking will be confirmed immediately after payment.</li>
                      <li>Your selected seats will stay reserved for 15 minutes.</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className='space-y-6'>
            <div className='rounded-[2rem] border border-white/10 bg-black/40 p-6 shadow-[0_35px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl'>
              <p className='text-sm uppercase tracking-[0.3em] text-gray-400'>Total payable</p>
              <div className='mt-6 flex items-end justify-between gap-4'>
                <div>
                  <p className='text-3xl font-semibold'>{missingDetails ? '₹0.00' : formatRupee(totalAmount)}</p>
                  <p className='mt-2 text-sm text-gray-400'>INR final amount</p>
                </div>
                <div className='rounded-3xl bg-amber-400 px-5 py-4 text-black'>
                  <p className='text-xs uppercase tracking-[0.3em]'>Secure</p>
                  <p className='text-sm font-semibold'>Gateway</p>
                </div>
              </div>

              <button
                type='button'
                disabled={missingDetails}
                onClick={async () => {
                  if (missingDetails) return

                  const bookingObj = {
                    movieId: id || movie?.id,
                    title,
                    poster,
                    selectedDate,
                    selectedTime,
                    ticketCount,
                    selectedSeats,
                    subTotal,
                    convenienceFee,
                    taxes,
                    totalAmount,
                    status: 'Confirmed'
                  }

                  try {
                    const response = await fetch(`${API_BASE_URL}/bookings`, {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(bookingObj)
                    })

                    const savedBooking = await response.json()
                    localStorage.setItem('bookings', JSON.stringify([savedBooking]))
                    navigate(`/booking-success/${savedBooking.id}`, { state: { bookingId: savedBooking.id } })
                  } catch (error) {
                    console.error('Failed to save booking:', error)
                    const existing = JSON.parse(localStorage.getItem('bookings') || '[]')
                    existing.unshift({ id: `bk_${Date.now()}`, ...bookingObj, createdAt: new Date().toISOString() })
                    localStorage.setItem('bookings', JSON.stringify(existing))
                    navigate('/my-bookings')
                  }
                }}
                className={`mt-8 flex w-full items-center justify-center gap-3 rounded-full px-5 py-4 text-sm font-semibold transition ${missingDetails ? 'cursor-not-allowed bg-white/10 text-gray-400' : 'bg-amber-400 text-black hover:bg-amber-300'}`}
              >
                {missingDetails ? 'Payment unavailable' : 'Pay now'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
