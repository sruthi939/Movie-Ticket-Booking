import { useEffect, useState } from 'react'
import { CalendarDays, Film, Ticket } from 'lucide-react'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api'

const MyBookings = () => {
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    const loadBookings = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/bookings`)
        const data = await response.json()
        setBookings(data)
      } catch (error) {
        console.error('Failed to load bookings:', error)
        const raw = typeof window !== 'undefined' ? localStorage.getItem('bookings') : null
        setBookings(raw ? JSON.parse(raw) : [])
      }
    }

    loadBookings()
  }, [])

  return (
    <div className='min-h-screen bg-[radial-gradient(circle_at_top,_rgba(248,69,101,0.16),_transparent_35%),linear-gradient(135deg,_#09090b,_#111114)] px-6 py-24 md:px-16 lg:px-24 xl:px-44'>
      <div className='mb-10'>
        <h1 className='text-4xl font-semibold sm:text-5xl'>My bookings</h1>
        <p className='mt-3 max-w-2xl text-gray-300'>Your tickets, showtimes, and reservation details all gathered in one place.</p>
      </div>

      <div className='space-y-4'>
        {bookings.length === 0 ? (
          <div className='rounded-[1.6rem] border border-white/10 bg-white/5 p-8 text-center text-gray-300'>
            No bookings yet. Complete a booking to see it here.
          </div>
        ) : (
          bookings.map((booking) => (
            <div key={booking.id || `${booking.movieId}-${booking.selectedTime}`} className='flex flex-col gap-4 rounded-[1.6rem] border border-white/10 bg-white/5 p-5 backdrop-blur md:flex-row md:items-center md:justify-between'>
              <div className='flex items-start gap-4'>
                <div className='rounded-2xl bg-primary/10 p-3 text-primary'>
                  <Ticket className='h-6 w-6' />
                </div>
                <div>
                  <h2 className='text-xl font-semibold'>{booking.title}</h2>
                  <div className='mt-2 flex flex-wrap items-center gap-4 text-sm text-gray-400'>
                    <span className='flex items-center gap-2'><CalendarDays className='h-4 w-4' /> {booking.selectedDate} • {booking.selectedTime}</span>
                    <span className='flex items-center gap-2'><Film className='h-4 w-4' /> {booking.selectedSeats?.join(', ') || 'No seats selected'}</span>
                  </div>
                </div>
              </div>
              <div className='rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary'>
                {booking.status || 'Confirmed'}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default MyBookings
