import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Ticket3D from '../components/booking/Ticket3D'
import BlurBackground from '../components/effects/BlurBackground'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api'

const Ticket = () => {
  const { bookingId } = useParams()
  const navigate = useNavigate()
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
      <div className="relative z-10 mx-auto max-w-lg px-6 py-24 space-y-8">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight">Your Ticket</h1>
          <p className="text-gray-400 mt-1 text-sm">Scan the barcode at the venue gate.</p>
        </div>

        {loading ? (
          <div className="text-gray-400 text-sm">Loading ticket...</div>
        ) : booking ? (
          <Ticket3D bookingDetails={booking} />
        ) : (
          <div className="rounded-2xl border border-rose-500/20 bg-rose-500/10 p-6 text-rose-300 text-sm">
            Ticket not found.{' '}
            <button onClick={() => navigate('/my-bookings')} className="underline cursor-pointer">
              Go to My Bookings
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Ticket
