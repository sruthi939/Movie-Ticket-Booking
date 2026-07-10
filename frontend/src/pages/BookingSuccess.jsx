import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BookingSuccess from '../components/booking/BookingSuccess'
import BlurBackground from '../components/effects/BlurBackground'
import FloatingParticles from '../components/effects/FloatingParticles'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api'

const BookingSuccessPage = () => {
  const { bookingId } = useParams()
  const [booking, setBooking] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/bookings/${bookingId}`)
        if (!res.ok) throw new Error('not found')
        const data = await res.json()
        setBooking(data)
      } catch {
        const all = JSON.parse(localStorage.getItem('bookings') || '[]')
        setBooking(all.find((b) => b.id === bookingId) || null)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [bookingId])

  return (
    <div className="relative min-h-screen text-white">
      <BlurBackground />
      <FloatingParticles count={20} color="rgba(16,185,129,0.15)" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 md:px-10">
        {loading ? (
          <div className="flex items-center justify-center min-h-[50vh] text-gray-400">
            Loading booking...
          </div>
        ) : (
          <BookingSuccess booking={booking} />
        )}
      </div>
    </div>
  )
}

export default BookingSuccessPage
