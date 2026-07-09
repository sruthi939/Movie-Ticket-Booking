import { CalendarDays, Film, Ticket } from 'lucide-react'
import { movies } from '../data/movies'

const MyBookings = () => {
  const bookings = [
    { movie: movies[0], time: '20:00', seat: 'A-3, A-4', status: 'Confirmed' },
    { movie: movies[2], time: '19:15', seat: 'C-2', status: 'Pending' }
  ]

  return (
    <div className='min-h-screen bg-[radial-gradient(circle_at_top,_rgba(248,69,101,0.16),_transparent_35%),linear-gradient(135deg,_#09090b,_#111114)] px-6 py-24 md:px-16 lg:px-24 xl:px-44'>
      <div className='mb-10'>
        <h1 className='text-4xl font-semibold sm:text-5xl'>My bookings</h1>
        <p className='mt-3 max-w-2xl text-gray-300'>Your tickets, showtimes, and reservation details all gathered in one place.</p>
      </div>

      <div className='space-y-4'>
        {bookings.map((booking) => (
          <div key={`${booking.movie.id}-${booking.time}`} className='flex flex-col gap-4 rounded-[1.6rem] border border-white/10 bg-white/5 p-5 backdrop-blur md:flex-row md:items-center md:justify-between'>
            <div className='flex items-start gap-4'>
              <div className='rounded-2xl bg-primary/10 p-3 text-primary'>
                <Ticket className='h-6 w-6' />
              </div>
              <div>
                <h2 className='text-xl font-semibold'>{booking.movie.title}</h2>
                <div className='mt-2 flex flex-wrap items-center gap-4 text-sm text-gray-400'>
                  <span className='flex items-center gap-2'><CalendarDays className='h-4 w-4' /> {booking.time}</span>
                  <span className='flex items-center gap-2'><Film className='h-4 w-4' /> {booking.seat}</span>
                </div>
              </div>
            </div>
            <div className='rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary'>
              {booking.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyBookings
