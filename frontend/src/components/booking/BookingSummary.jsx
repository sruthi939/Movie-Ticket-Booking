import { CalendarDays, Clock3, Ticket, Users } from 'lucide-react'

const formatRupee = (v) => `₹${Number(v || 0).toFixed(2)}`

const BookingSummary = ({
  title,
  poster,
  selectedDate,
  selectedTime,
  ticketCount,
  selectedSeats = [],
  subTotal,
  convenienceFee,
  taxes,
  totalAmount,
  compact = false,
}) => {
  return (
    <div className={`space-y-4 ${compact ? '' : 'rounded-[2rem] border border-white/10 bg-black/40 p-6 backdrop-blur-xl'}`}>
      {!compact && (
        <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-2">Booking Summary</p>
      )}

      {/* Movie info */}
      {(title || poster) && (
        <div className="flex items-center gap-4">
          {poster && (
            <img src={poster} alt={title} className="h-20 w-14 rounded-2xl object-cover shadow-lg shrink-0" />
          )}
          <div>
            <h3 className="text-lg font-bold text-white leading-tight">{title}</h3>
            <p className="text-xs text-gray-500 mt-0.5 uppercase tracking-wider">IMAX 2D</p>
          </div>
        </div>
      )}

      {/* Details */}
      <div className="space-y-2 text-sm text-gray-300 border-t border-white/5 pt-4">
        {selectedDate && (
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-primary shrink-0" />
            <span>{selectedDate}</span>
          </div>
        )}
        {selectedTime && (
          <div className="flex items-center gap-2">
            <Clock3 className="h-4 w-4 text-primary shrink-0" />
            <span>{selectedTime}</span>
          </div>
        )}
        {ticketCount && (
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-primary shrink-0" />
            <span>{ticketCount} seat{ticketCount > 1 ? 's' : ''}</span>
          </div>
        )}
        {selectedSeats.length > 0 && (
          <div className="flex items-start gap-2">
            <Ticket className="h-4 w-4 text-primary shrink-0 mt-0.5" />
            <span className="leading-relaxed">{selectedSeats.join(', ')}</span>
          </div>
        )}
      </div>

      {/* Price breakdown */}
      {subTotal !== undefined && (
        <div className="space-y-2 border-t border-white/5 pt-4 text-sm text-gray-300">
          <div className="flex justify-between">
            <span>Tickets</span>
            <span>{formatRupee(subTotal)}</span>
          </div>
          <div className="flex justify-between">
            <span>Convenience fee</span>
            <span>{formatRupee(convenienceFee)}</span>
          </div>
          <div className="flex justify-between">
            <span>Taxes</span>
            <span>{formatRupee(taxes)}</span>
          </div>
          <div className="flex justify-between border-t border-white/10 pt-3 text-base font-bold text-white">
            <span>Total</span>
            <span>{formatRupee(totalAmount)}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default BookingSummary
