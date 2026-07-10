import { useState } from 'react'

export const useSeats = (maxLimit = 6) => {
  const [selectedSeats, setSelectedSeats] = useState([])

  const toggleSeat = (seatId) => {
    setSelectedSeats((prev) => {
      if (prev.includes(seatId)) {
        return prev.filter((s) => s !== seatId)
      }
      if (prev.length >= maxLimit) {
        return prev
      }
      return [...prev, seatId]
    })
  }

  const clearSeats = () => setSelectedSeats([])

  return {
    selectedSeats,
    setSelectedSeats,
    toggleSeat,
    clearSeats,
    maxLimit,
  }
}

export default useSeats
