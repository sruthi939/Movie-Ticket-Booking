const DateSelector = ({ dates = [], selectedDate, onSelectDate }) => {
  return (
    <div className="space-y-4">
      <h4 className="text-xs uppercase tracking-widest text-gray-500 font-bold">Select Date</h4>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
        {dates.map((date) => {
          const isSelected = selectedDate === date.id
          // Split date label e.g., "Mon Jul 10" into components
          const [day, month, dateNum] = date.label.split(' ')
          return (
            <button
              key={date.id}
              onClick={() => onSelectDate(date.id)}
              className={`rounded-2xl border px-4 py-4 text-left transition cursor-pointer ${isSelected ? 'border-primary bg-primary/10 text-white shadow-lg' : 'border-white/5 bg-black/40 text-gray-400 hover:border-primary/50'}`}
            >
              <div className="text-xs uppercase tracking-wider font-semibold text-gray-500">{day}</div>
              <div className="mt-1.5 text-2xl font-bold text-white">{dateNum || month}</div>
              <div className="text-xs text-gray-400 font-semibold">{dateNum ? month : ''}</div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default DateSelector
