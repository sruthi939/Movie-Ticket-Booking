import mongoose from 'mongoose'

const seatSchema = new mongoose.Schema({
  id: { type: String, required: true },
  type: { type: String, required: true }, // vip | classic | standard
  isReserved: { type: Boolean, default: false }
})

const Seat = mongoose.models.Seat || mongoose.model('Seat', seatSchema)
export default Seat
