import Seat from './Seat'
import SeatLegend from './SeatLegend'

const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L']
const vipRows = new Set(['K', 'L'])
const classicRows = new Set(['F', 'G', 'H', 'I', 'J'])
const reservedSeats = new Set(['C-6', 'D-4', 'D-5', 'F-12', 'G-8', 'H-3', 'H-4', 'J-10', 'L-8'])

const getType = (row) => {
  if (vipRows.has(row)) return 'vip'
  if (classicRows.has(row)) return 'classic'
  return 'standard'
}

const seatsPerRow = (row) => {
  if (vipRows.has(row)) return 10
  if (classicRows.has(row)) return 14
  return 10
}

const showsGap = (row, seatNum) => {
  if (vipRows.has(row) || classicRows.has(row)) return seatNum === 3 || seatNum === 7
  return seatNum === 4 || seatNum === 10
}

const SeatLayout = ({ selectedSeats = [], onToggleSeat }) => {
  return (
    <div className="space-y-6">
      {/* Screen label */}
      <div className="flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-gray-400">
        ▲ Screen This Way
      </div>

      {/* Seat Grid */}
      <div className="rounded-[2rem] border border-white/10 bg-black/40 px-4 py-8 shadow-[inset_0_0_100px_rgba(0,0,0,0.3)] backdrop-blur-xl overflow-x-auto">
        <div className="mx-auto w-full max-w-[1200px] space-y-3">
          {rows.map((row) => (
            <div key={row} className="flex items-center gap-3">
              <div className="w-8 shrink-0 text-right text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold">
                {row}
              </div>
              <div className="flex w-full justify-center gap-2 flex-wrap">
                {Array.from({ length: seatsPerRow(row) }, (_, i) => {
                  const seatNum = i + 1
                  const seatId = `${row}-${seatNum}`
                  const isGap = showsGap(row, seatNum)
                  return (
                    <div key={seatId} className="flex items-center">
                      <Seat
                        seatId={seatId}
                        type={getType(row)}
                        isReserved={reservedSeats.has(seatId)}
                        isSelected={selectedSeats.includes(seatId)}
                        onToggle={onToggleSeat}
                      />
                      {isGap && <div className="w-6 shrink-0" />}
                    </div>
                  )
                })}
              </div>
              <div className="w-8 shrink-0 text-left text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold">
                {row}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
        <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-4">Legend</p>
        <SeatLegend />
      </div>
    </div>
  )
}

export default SeatLayout
