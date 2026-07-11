import Theatre from '../models/Theatre.js'

const MOCK_THEATRES = [
  { id: 'pvr-gold', name: 'PVR Gold Class', location: 'Inorbit Mall, Malad West', rating: 4.8, amenities: ['IMAX', 'Dolby Atmos', 'Recliner Seats'] },
  { id: 'inox-luxe', name: 'INOX Luxe', location: 'R-City Mall, Ghatkopar', rating: 4.6, amenities: ['ScreenX', 'Premium Snacks', 'Dolby Vision'] },
  { id: 'cinepolis', name: 'Cinepolis VIP', location: 'Thane West', rating: 4.4, amenities: ['Sofa Seats', 'In-Hall Dining', '7.1 Surround'] },
]

export const getTheatres = async (req, res) => {
  try {
    let theatres = await Theatre.find()
    if (theatres.length === 0) {
      await Theatre.insertMany(MOCK_THEATRES)
      theatres = await Theatre.find()
    }
    return res.json(theatres)
  } catch (error) {
    console.warn('MongoDB query failed, falling back to local theatre data:', error.message)
    return res.json(MOCK_THEATRES)
  }
}

export const getShowtimes = (req, res) => {
  res.json(['10:00', '13:15', '16:30', '19:45', '22:00'])
}
