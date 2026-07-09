import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CheckCircle2, CalendarDays, Clock3, Ticket, Users } from 'lucide-react'

const formatRupee = (value) => `₹${Number(value || 0).toFixed(2)}`

const PaymentSuccess = () => {
  const { bookingId } = useParams()
  const navigate = useNavigate()
  const [booking, setBooking] = useState(null)

  useEffect(() => {
    const all = JSON.parse(localStorage.getItem('bookings') || '[]')
    const found = all.find((b) => b.id === bookingId)
    setBooking(found || null)
  }, [bookingId])

  if (!booking) {
    return (
      <div className='min-h-screen flex items-center justify-center text-white'>
        <div className='rounded-xl bg-black/60 p-8 text-center'>
          <h2 className='text-2xl font-semibold'>Booking not found</h2>
          <p className='mt-3 text-sm text-gray-300'>We couldn't find your booking. Check My Bookings.</p>
          <div className='mt-6'>
            <button onClick={() => navigate('/my-bookings')} className='rounded-full bg-amber-400 px-6 py-3 font-semibold text-black'>Go to My Bookings</button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-[radial-gradient(circle_at_top,_rgba(248,69,101,0.18),_transparent_25%),linear-gradient(180deg,_#050507,_#120f16)] text-white'>
      <div className='mx-auto max-w-4xl px-6 py-20'>
        <div className='rounded-[2rem] border border-white/10 bg-black/40 p-8 text-center'>
          <CheckCircle2 className='mx-auto mb-4 h-14 w-14 text-emerald-400' />
          <h1 className='text-3xl font-semibold'>Payment successful</h1>
          <p className='mt-3 text-gray-300'>Your booking is confirmed and a ticket has been added to My Bookings.</p>

          <div className='mt-8 grid gap-6 md:grid-cols-2'>
            <div className='rounded-[1.5rem] border border-white/10 bg-black/70 p-4 text-left'>
              <h3 className='text-lg font-semibold'>{booking.title}</h3>
              <div className='mt-3 space-y-2 text-sm text-gray-300'>
                <div className='flex items-center gap-2'><CalendarDays className='h-4 w-4 text-primary' /> {booking.selectedDate}</div>
                <div className='flex items-center gap-2'><Clock3 className='h-4 w-4 text-primary' /> {booking.selectedTime}</div>
                <div className='flex items-center gap-2'><Users className='h-4 w-4 text-primary' /> {booking.ticketCount} seats</div>
                <div className='flex items-center gap-2'><Ticket className='h-4 w-4 text-primary' /> {booking.selectedSeats.join(', ')}</div>
              </div>
            </div>

            <div className='rounded-[1.5rem] border border-white/10 bg-black/70 p-4 text-left'>
              <p className='text-sm uppercase tracking-[0.3em] text-gray-400'>Amount paid</p>
              <div className='mt-4 text-lg font-semibold'>{formatRupee(booking.totalAmount)}</div>
              <div className='mt-6 flex gap-3'>
                <button onClick={() => navigate('/my-bookings')} className='flex-1 rounded-full bg-amber-400 px-4 py-3 font-semibold text-black'>My Bookings</button>
                <button onClick={() => navigate('/')} className='flex-1 rounded-full border border-white/10 px-4 py-3 text-sm text-white'>Back to home</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentSuccess
