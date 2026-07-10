import express from 'express'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

let bookings = []

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.get('/api/bookings', (req, res) => {
  res.json(bookings)
})

app.post('/api/bookings', (req, res) => {
  const booking = {
    id: `bk_${Date.now()}`,
    ...req.body,
    createdAt: new Date().toISOString()
  }

  bookings.unshift(booking)
  res.status(201).json(booking)
})

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`)
})
