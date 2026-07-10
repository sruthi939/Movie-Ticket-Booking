import express from 'express'
import cors from 'cors'
import bookingRoutes from './routes/bookingRoutes.js'
import errorMiddleware from './middleware/errorMiddleware.js'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.use('/api/bookings', bookingRoutes)

app.use(errorMiddleware)

export default app
