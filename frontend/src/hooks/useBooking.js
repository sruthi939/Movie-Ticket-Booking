import { useBookingContext } from '../context/BookingContext'

export const useBooking = () => {
  const context = useBookingContext()
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider')
  }
  return context
}

export default useBooking
