import express from 'express'
import { getTheatres, getShowtimes } from '../controllers/theatreController.js'

const router = express.Router()

router.get('/', getTheatres)
router.get('/:theatreId/showtimes', getShowtimes)

export default router
