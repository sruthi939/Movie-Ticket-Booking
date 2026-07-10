import { motion } from 'framer-motion'

const Seat = ({ seatId, type = 'standard', isReserved, isSelected, onToggle }) => {
  const colorMap = {
    vip: {
      available: 'border-amber-300/50 bg-amber-500/10 text-amber-200 hover:border-amber-300 hover:bg-amber-500/20',
      selected: 'border-amber-300 bg-amber-400 text-black shadow-[0_0_20px_rgba(251,191,36,0.4)]',
    },
    classic: {
      available: 'border-white/20 bg-white/6 text-gray-200 hover:border-primary hover:bg-white/10',
      selected: 'border-primary bg-primary/80 text-white shadow-[0_0_20px_rgba(248,69,101,0.3)]',
    },
    standard: {
      available: 'border-white/10 bg-white/5 text-gray-300 hover:border-primary hover:bg-white/10',
      selected: 'border-primary bg-primary/80 text-white shadow-[0_0_20px_rgba(248,69,101,0.3)]',
    },
  }

  const colors = colorMap[type] || colorMap.standard
  const num = seatId.split('-')[1]

  if (isReserved) {
    return (
      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-800/60 text-xs text-zinc-600 cursor-not-allowed select-none">
        {num}
      </div>
    )
  }

  return (
    <motion.button
      whileTap={{ scale: 0.92 }}
      type="button"
      onClick={() => onToggle(seatId)}
      className={`flex h-10 w-10 items-center justify-center rounded-xl border text-xs font-semibold transition-all duration-200 cursor-pointer select-none ${isSelected ? colors.selected : colors.available}`}
    >
      {num}
    </motion.button>
  )
}

export default Seat
