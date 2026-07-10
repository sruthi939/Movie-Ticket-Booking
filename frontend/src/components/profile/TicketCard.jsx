import { CalendarDays, Clock3 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const TicketCard = ({ ticket }) => {
  const navigate = useNavigate()

  return (
    <div className="rounded-2xl border border-white/10 bg-black/60 p-4 space-y-4 shadow-md max-w-xs mx-auto">
      <div className="flex justify-between items-center pb-3 border-b border-white/5">
        <h4 className="text-sm font-bold text-white truncate max-w-36">{ticket.title}</h4>
        <span className="text-[10px] text-gray-500 uppercase font-semibold">Active</span>
      </div>
      <div className="space-y-2 text-xs text-gray-400">
        <div className="flex items-center gap-2">
          <CalendarDays className="h-3.5 w-3.5 text-primary shrink-0" />
          <span>{ticket.selectedDate}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock3 className="h-3.5 w-3.5 text-primary shrink-0" />
          <span>{ticket.selectedTime}</span>
        </div>
        <div className="border-t border-white/5 pt-2 mt-2">
          <span>Seats: <strong className="text-white">{ticket.selectedSeats?.join(', ')}</strong></span>
        </div>
      </div>
      <button
        onClick={() => navigate(`/ticket/${ticket.id}`)}
        className="w-full rounded-full bg-primary/10 border border-primary/20 py-2 text-xs font-semibold text-primary hover:bg-primary/20 transition cursor-pointer"
      >
        Show 3D View
      </button>
    </div>
  )
}

export default TicketCard
