import { createContext, useContext, useState } from 'react'

const BookingContext = createContext()

export const BookingProvider = ({ children }) => {
  const [booking, setBooking] = useState({
    movie: null,
    theatre: null,
    date: null,
    time: null,
    seats: [],
    ticketsCount: 0,
    paymentMethod: null,
  })

  const setMovie = (movie) => setBooking((prev) => ({ ...prev, movie }))
  const setTheatre = (theatre) => setBooking((prev) => ({ ...prev, theatre }))
  const setDate = (date) => setBooking((prev) => ({ ...prev, date }))
  const setTime = (time) => setBooking((prev) => ({ ...prev, time }))
  const setSeats = (seats) => setBooking((prev) => ({ ...prev, seats, ticketsCount: seats.length }))
  const setPaymentMethod = (paymentMethod) => setBooking((prev) => ({ ...prev, paymentMethod }))
  const clearBooking = () =>
    setBooking({
      movie: null,
      theatre: null,
      date: null,
      time: null,
      seats: [],
      ticketsCount: 0,
      paymentMethod: null,
    })

  return (
    <BookingContext.Provider
      value={{
        booking,
        setMovie,
        setTheatre,
        setDate,
        setTime,
        setSeats,
        setPaymentMethod,
        clearBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  )
}

export const useBookingContext = () => useContext(BookingContext)
export default BookingContext
