const LEGEND_ITEMS = [
  { color: 'bg-primary/80 border-primary', label: 'Selected' },
  { color: 'bg-white/5 border-white/10', label: 'Available' },
  { color: 'bg-zinc-800/60 border-zinc-700', label: 'Booked' },
  { color: 'bg-amber-500/10 border-amber-300/50', label: 'VIP / Premium' },
]

const SeatLegend = () => {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
      {LEGEND_ITEMS.map(({ color, label }) => (
        <div key={label} className="flex items-center gap-2 text-sm text-gray-300">
          <span className={`h-4 w-4 rounded-md border ${color} inline-block shrink-0`} />
          {label}
        </div>
      ))}
    </div>
  )
}

export default SeatLegend
