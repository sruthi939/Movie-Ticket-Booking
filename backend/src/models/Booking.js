import mongoose from 'mongoose'

const bookingSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  movieId: { type: String },
  title: { type: String, required: true },
  poster: { type: String },
  selectedDate: { type: String, required: true },
  selectedTime: { type: String, required: true },
  ticketCount: { type: Number, required: true },
  selectedSeats: [{ type: String }],
  totalAmount: { type: Number, required: true },
  userEmail: { type: String },
  status: { type: String, default: 'Confirmed' }
}, { timestamps: true })

const Booking = mongoose.models.Booking || mongoose.model('Booking', bookingSchema)
export default Booking
