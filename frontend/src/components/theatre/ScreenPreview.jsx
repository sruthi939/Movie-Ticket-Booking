const ScreenPreview = ({ selectedSeats = [] }) => {
  return (
    <div className="space-y-4">
      <h4 className="text-xs uppercase tracking-widest text-gray-500 font-bold">Screen Preview</h4>
      <div className="rounded-2xl border border-white/10 bg-black/30 p-5 space-y-3">
        {/* Screen arc */}
        <div className="w-full h-2 rounded-full bg-white/30 shadow-[0_0_20px_rgba(255,255,255,0.3)] mb-6" />
        <p className="text-center text-xs uppercase tracking-widest text-gray-500 mb-4">SCREEN</p>

        {/* Seat cluster visual */}
        <div className="grid grid-cols-10 gap-1 px-4">
          {Array.from({ length: 80 }).map((_, idx) => {
            const row = String.fromCharCode(65 + Math.floor(idx / 10))
            const col = (idx % 10) + 1
            const seatId = `${row}-${col}`
            const isSelected = selectedSeats.includes(seatId)
            const isReserved = [12, 25, 36, 47, 58].includes(idx)

            return (
              <div
                key={seatId}
                title={seatId}
                className={`h-3 w-full rounded-sm ${
                  isSelected ? 'bg-primary shadow-[0_0_6px_rgba(248,69,101,0.8)]'
                  : isReserved ? 'bg-zinc-700'
                  : 'bg-white/10'
                }`}
              />
            )
          })}
        </div>

        {selectedSeats.length > 0 && (
          <p className="text-xs text-center text-primary mt-4 font-semibold">
            {selectedSeats.length} seat{selectedSeats.length > 1 ? 's' : ''} highlighted
          </p>
        )}
      </div>
    </div>
  )
}

export default ScreenPreview
