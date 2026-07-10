import api from './api'

const MOCK_THEATRES = [
  { id: 'pvr-gold', name: 'PVR Gold Class', location: 'Inorbit Mall, Malad West', rating: 4.8, amenities: ['IMAX', 'Dolby Atmos', 'Recliner Seats'] },
  { id: 'inox-luxe', name: 'INOX Luxe', location: 'R-City Mall, Ghatkopar', rating: 4.6, amenities: ['ScreenX', 'Premium Snacks', 'Dolby Vision'] },
  { id: 'cinepolis', name: 'Cinepolis VIP', location: 'Thane West', rating: 4.4, amenities: ['Sofa Seats', 'In-Hall Dining', '7.1 Surround'] },
]

export const theatreService = {
  getTheatres: async () => {
    try {
      const res = await api.get('/theatres')
      return res.data
    } catch {
      return MOCK_THEATRES
    }
  },
  getShowtimes: async (theatreId, date) => {
    try {
      const res = await api.get(`/theatres/${theatreId}/showtimes`, { params: { date } })
      return res.data
    } catch {
      return ['10:00', '13:15', '16:30', '19:45', '22:00']
    }
  },
}

export default theatreService
