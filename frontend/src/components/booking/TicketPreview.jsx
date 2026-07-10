import { CalendarDays, Clock3, Ticket, MapPin } from 'lucide-react'

const TicketPreview = ({ booking = {} }) => {
  return (
    <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 backdrop-blur-xl shadow-2xl space-y-4 max-w-sm mx-auto">
      {/* Visual dashed divider */}
      <div className="flex justify-between items-center pb-4 border-b border-dashed border-white/10">
        <span className="text-xs uppercase tracking-widest text-primary font-bold">Cinema Ticket</span>
        <span className="text-[10px] text-gray-500 font-semibold uppercase">Conf: Confirmed</span>
      </div>

      <div className="space-y-4">
        {/* Title */}
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-widest leading-none">Movie</p>
          <h3 className="text-lg font-bold text-white mt-1 leading-tight">{booking.title || '—'}</h3>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-primary shrink-0" />
            <span>{booking.selectedDate || '—'}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock3 className="h-4 w-4 text-primary shrink-0" />
            <span>{booking.selectedTime || '—'}</span>
          </div>
        </div>

        <div className="flex items-start gap-2 text-sm text-gray-300 border-t border-white/5 pt-3">
          <Ticket className="h-4 w-4 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest leading-none">Seats</p>
            <p className="font-semibold text-white mt-1">{booking.selectedSeats?.join(', ') || '—'}</p>
          </div>
        </div>
      </div>

      {/* Barcode visual */}
      <div className="border-t border-dashed border-white/10 pt-4 space-y-2">
        <div className="h-10 bg-white/10 rounded-lg flex items-center justify-center overflow-hidden">
          <div className="w-full h-full flex justify-between px-4 py-2 shrink-0 opacity-40">
            {Array.from({ length: 24 }).map((_, idx) => (
              <div key={idx} className="h-full bg-white shrink-0" style={{ width: idx % 3 === 0 ? '4px' : '2px' }} />
            ))}
          </div>
        </div>
        <p className="text-center text-[10px] font-mono text-gray-500">ID: {booking.id || '—'}</p>
      </div>
    </div>
  )
}

export default TicketPreview
