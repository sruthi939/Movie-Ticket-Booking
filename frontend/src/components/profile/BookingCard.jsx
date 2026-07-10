import { CalendarDays, Ticket, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const BookingCard = ({ booking }) => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-white/5 bg-white/5 p-5 backdrop-blur md:flex-row md:items-center md:justify-between hover:border-primary/20 transition">
      <div className="flex items-start gap-4">
        <div className="rounded-xl bg-primary/10 p-3 text-primary shrink-0">
          <Ticket className="h-5.5 w-5.5" />
        </div>
        <div>
          <h4 className="text-base font-bold text-white leading-tight">{booking.title}</h4>
          <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" />{booking.selectedDate} • {booking.selectedTime}</span>
            <span className="flex items-center gap-1">Seats: <strong className="text-white">{booking.selectedSeats?.join(', ')}</strong></span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 max-md:justify-between">
        <span className="rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1 text-xs text-primary font-semibold">
          {booking.status || 'Confirmed'}
        </span>
        <button
          onClick={() => navigate(`/ticket/${booking.id}`)}
          className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-primary transition cursor-pointer"
        >
          View Ticket <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  )
}

export default BookingCard
