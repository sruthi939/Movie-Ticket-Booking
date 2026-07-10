import express from 'express'
import cors from 'cors'
import { promises as fs } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()
const requestedPort = Number(process.env.PORT) || 5000
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const dataFile = path.join(__dirname, 'bookings.json')

app.use(cors())
app.use(express.json())

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

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.get('/api/bookings', (req, res) => {
  const sortedBookings = [...bookings].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  res.json(sortedBookings)
})

app.get('/api/bookings/:id', (req, res) => {
  const booking = bookings.find((item) => item.id === req.params.id)

  if (!booking) {
    return res.status(404).json({ error: 'Booking not found' })
  }

  res.json(booking)
})

app.post('/api/bookings', async (req, res) => {
  const booking = {
    id: `bk_${Date.now()}`,
    ...req.body,
    createdAt: new Date().toISOString()
  }

  bookings.unshift(booking)
  await persistBookings()
  res.status(201).json(booking)
})

const startServer = (port) => {
  const server = app.listen(port, () => {
    console.log(`Backend running on http://localhost:${port}`)
  })

  server.on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
      const fallbackPort = port + 1
      console.warn(`Port ${port} is busy. Trying ${fallbackPort} instead...`)
      startServer(fallbackPort)
      return
    }

    console.error('Failed to start backend server:', error)
    process.exit(1)
  })
}

const bootstrap = async () => {
  await loadBookings()
  startServer(requestedPort)
}

bootstrap().catch((error) => {
  console.error('Failed to initialize backend:', error)
  process.exit(1)
})
