import mongoose from 'mongoose'

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/movie-ticket-booking'
  
  try {
    await mongoose.connect(uri)
    console.log('MongoDB Connected Successfully to:', uri)
  } catch (error) {
    console.error('MongoDB connection failed. Continuing server launch in mock-fallback mode.', error.message)
  }
}
