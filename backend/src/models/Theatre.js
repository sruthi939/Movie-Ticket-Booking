import mongoose from 'mongoose'

const theatreSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  location: { type: String, required: true },
  rating: { type: Number },
  amenities: [{ type: String }]
}, { timestamps: true })

const Theatre = mongoose.models.Theatre || mongoose.model('Theatre', theatreSchema)
export default Theatre
