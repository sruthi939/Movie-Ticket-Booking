import mongoose from 'mongoose'

const showSchema = new mongoose.Schema({
  movieId: { type: String, required: true },
  theatreId: { type: String, required: true },
  time: { type: String, required: true },
  date: { type: String, required: true }
})

const Show = mongoose.models.Show || mongoose.model('Show', showSchema)
export default Show
