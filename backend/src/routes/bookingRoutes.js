import express from 'express'
import { createBooking, getAllBookings, getBookingById } from '../controllers/bookingController.js'

const router = express.Router()

router.get('/', getAllBookings)
router.get('/:id', getBookingById)
router.post('/', createBooking)

export default router
