import { promises as fs } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const dataFile = path.join(__dirname, '..', '..', 'bookings.json')

let bookings = []

const loadBookings = async () => {
  try {
    const content = await fs.readFile(dataFile, 'utf8')
    bookings = content ? JSON.parse(content) : []
  } catch (error) {
    if (error.code === 'ENOENT') {
      await fs.writeFile(dataFile, '[]', 'utf8')
      bookings = []
      return
    }
    throw error
  }
}

const persistBookings = async () => {
  await fs.writeFile(dataFile, JSON.stringify(bookings, null, 2), 'utf8')
}

export const getAllBookings = async (req, res) => {
  await loadBookings()
  const sortedBookings = [...bookings].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  res.json(sortedBookings)
}

export const getBookingById = async (req, res) => {
  await loadBookings()
  const booking = bookings.find((item) => item.id === req.params.id)

  if (!booking) {
    return res.status(404).json({ error: 'Booking not found' })
  }

  res.json(booking)
}

export const createBooking = async (req, res) => {
  await loadBookings()
  const booking = {
    id: `bk_${Date.now()}`,
    ...req.body,
    createdAt: new Date().toISOString()
  }

  bookings.unshift(booking)
  await persistBookings()
  res.status(201).json(booking)
}
