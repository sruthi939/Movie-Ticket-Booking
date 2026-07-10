import { Sparkles, CalendarDays, Clock3 } from 'lucide-react'

const ScreenInfo = ({ screenName = 'Screen 1', seatCount = 140, audioFormat = 'Dolby Atmos 7.1' }) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/40 p-5 space-y-4">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-primary/10 p-2.5 text-primary">
          <Sparkles className="h-5 w-5" />
        </div>
        <div>
          <h4 className="text-base font-bold text-white">{screenName}</h4>
          <p className="text-xs text-gray-500 mt-0.5">{audioFormat}</p>
        </div>
      </div>

      <div className="flex justify-between items-center text-xs text-gray-400 border-t border-white/5 pt-3">
        <span>Capacity: <strong className="text-white">{seatCount} Seats</strong></span>
        <span>Screen type: <strong className="text-primary">4K Laser</strong></span>
      </div>
    </div>
  )
}

export default ScreenInfo
