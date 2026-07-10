import { motion } from 'framer-motion'
import { CheckCircle2, CalendarDays, Clock3, Ticket, Users } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const BookingSuccess = ({ booking }) => {
  const navigate = useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
      className="rounded-[2.5rem] border border-white/10 bg-black/40 p-8 text-center backdrop-blur-xl shadow-2xl"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        className="mx-auto mb-6 h-20 w-20 rounded-full bg-emerald-500/10 flex items-center justify-center"
      >
        <CheckCircle2 className="h-10 w-10 text-emerald-400" />
      </motion.div>

      <h1 className="text-3xl font-extrabold text-white tracking-tight">Booking Confirmed!</h1>
      <p className="mt-2 text-gray-400 max-w-md mx-auto text-sm">
        Your seats are locked in. Your ticket has been added to My Bookings.
      </p>

      {booking && (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 text-left">
          <div className="rounded-2xl border border-white/10 bg-black/60 p-5 space-y-3 text-sm text-gray-300">
            <h3 className="text-base font-bold text-white mb-3">{booking.title}</h3>
            <div className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-primary" />{booking.selectedDate}</div>
            <div className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-primary" />{booking.selectedTime}</div>
            <div className="flex items-center gap-2"><Users className="h-4 w-4 text-primary" />{booking.ticketCount} seat{booking.ticketCount > 1 ? 's' : ''}</div>
            <div className="flex items-start gap-2"><Ticket className="h-4 w-4 text-primary mt-0.5 shrink-0" />{booking.selectedSeats?.join(', ')}</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/60 p-5 flex flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Amount Paid</p>
              <p className="text-3xl font-extrabold text-amber-400 mt-2">₹{Number(booking.totalAmount || 0).toFixed(2)}</p>
            </div>
            <div className="mt-6 flex flex-col gap-2">
              <button
                onClick={() => navigate('/my-bookings')}
                className="rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-black hover:bg-primary-dull transition cursor-pointer"
              >
                My Bookings
              </button>
              <button
                onClick={() => navigate('/')}
                className="rounded-full border border-white/10 px-5 py-2.5 text-sm text-white hover:bg-white/10 transition cursor-pointer"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  )
}

export default BookingSuccess
