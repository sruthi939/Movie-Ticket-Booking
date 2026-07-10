export const buildDateOptions = (daysCount = 5) => {
  return Array.from({ length: daysCount }, (_, idx) => {
    const date = new Date()
    date.setDate(date.getDate() + idx)
    return {
      id: date.toISOString().slice(0, 10),
      label: date.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      }),
    }
  })
}

export const getRowLetter = (idx, colsCount = 10) => {
  return String.fromCharCode(65 + Math.floor(idx / colsCount))
}

export const getSeatNumber = (idx, colsCount = 10) => {
  return (idx % colsCount) + 1
}
