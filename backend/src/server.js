import app from './app.js'
import { env } from './config/env.js'
import { connectDB } from './config/db.js'

const startServer = (port) => {
  // Connect to database in the background without blocking server boot
  connectDB()

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

startServer(Number(env.PORT) || 5000)
