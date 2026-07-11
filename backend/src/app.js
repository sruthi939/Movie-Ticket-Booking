import express from 'express'
import cors from 'cors'
import bookingRoutes from './routes/bookingRoutes.js'
import movieRoutes from './routes/movieRoutes.js'
import theatreRoutes from './routes/theatreRoutes.js'
import authRoutes from './routes/authRoutes.js'
import paymentRoutes from './routes/paymentRoutes.js'
import errorMiddleware from './middleware/errorMiddleware.js'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.use('/api/bookings', bookingRoutes)
app.use('/api/movies', movieRoutes)
app.use('/api/theatres', theatreRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/payment', paymentRoutes)

app.use(errorMiddleware)

export default app
