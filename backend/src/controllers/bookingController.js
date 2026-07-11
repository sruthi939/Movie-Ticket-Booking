import { promises as fs } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import Booking from '../models/Booking.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const dataFile = path.join(__dirname, '..', '..', 'bookings.json')

let bookings = []

const loadBookingsFromFile = async () => {
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

const persistBookingsToFile = async () => {
  await fs.writeFile(dataFile, JSON.stringify(bookings, null, 2), 'utf8')
}

export const getAllBookings = async (req, res) => {
  try {
    const dbBookings = await Booking.find().sort({ createdAt: -1 })
    return res.json(dbBookings)
  } catch (error) {
    console.warn('MongoDB query failed, falling back to JSON file bookings:', error.message)
    await loadBookingsFromFile()
    const sortedBookings = [...bookings].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    return res.json(sortedBookings)
  }
}

export const getBookingById = async (req, res) => {
  const { id } = req.params
  try {
    const dbBooking = await Booking.findOne({ id })
    if (dbBooking) return res.json(dbBooking)
  } catch (error) {
    console.warn('MongoDB query failed, falling back to JSON file search:', error.message)
  }

  await loadBookingsFromFile()
  const fileBooking = bookings.find((item) => item.id === id)
  if (!fileBooking) {
    return res.status(404).json({ error: 'Booking not found' })
  }
  return res.json(fileBooking)
}

export const createBooking = async (req, res) => {
  const bookingData = {
    id: `bk_${Date.now()}`,
    ...req.body,
  }

  try {
    const dbBooking = await Booking.create(bookingData)
    return res.status(201).json(dbBooking)
  } catch (error) {
    console.warn('MongoDB save failed, falling back to JSON file booking creation:', error.message)
    await loadBookingsFromFile()
    const fileBooking = {
      ...bookingData,
      createdAt: new Date().toISOString(),
    }
    bookings.unshift(fileBooking)
    await persistBookingsToFile()
    return res.status(201).json(fileBooking)
  }
}
