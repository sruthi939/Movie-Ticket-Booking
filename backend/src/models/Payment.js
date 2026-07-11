import mongoose from 'mongoose'

const paymentSchema = new mongoose.Schema({
  bookingId: { type: String, required: true },
  transactionId: { type: String, required: true, unique: true },
  amount: { type: Number, required: true },
  status: { type: String, default: 'success' }
}, { timestamps: true })

const Payment = mongoose.models.Payment || mongoose.model('Payment', paymentSchema)
export default Payment
