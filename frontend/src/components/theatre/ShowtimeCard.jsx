const ShowtimeCard = ({ format = 'IMAX 3D', showtimes = [], selectedTime, onSelectTime }) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-5 space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">{format}</span>
        <span className="text-xs text-gray-500 font-semibold">DOLBY ATMOS</span>
      </div>
      <div className="flex flex-wrap gap-3">
        {showtimes.map((time) => {
          const isSelected = selectedTime === time
          return (
            <button
              key={time}
              onClick={() => onSelectTime(time)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition cursor-pointer ${isSelected ? 'bg-primary text-black shadow-lg shadow-primary/20' : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10'}`}
            >
              {time}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default ShowtimeCard
