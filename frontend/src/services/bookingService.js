import api from './api'

export const bookingService = {
  createBooking: async (bookingData) => {
    try {
      const res = await api.post('/bookings', bookingData)
      return res.data
    } catch {
      // Offline fallback
      const saved = { id: `bk_${Date.now()}`, ...bookingData, createdAt: new Date().toISOString() }
      const existing = JSON.parse(localStorage.getItem('bookings') || '[]')
      existing.unshift(saved)
      localStorage.setItem('bookings', JSON.stringify(existing))
      return saved
    }
  },
  getBookings: async () => {
    try {
      const res = await api.get('/bookings')
      return res.data
    } catch {
      return JSON.parse(localStorage.getItem('bookings') || '[]')
    }
  },
  getBookingById: async (id) => {
    try {
      const res = await api.get(`/bookings/${id}`)
      return res.data
    } catch {
      const all = JSON.parse(localStorage.getItem('bookings') || '[]')
      return all.find((b) => b.id === id) || null
    }
  },
}

export default bookingService
