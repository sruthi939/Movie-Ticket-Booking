import mongoose from 'mongoose'

const movieSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  tagline: { type: String },
  poster: { type: String },
  backdrop: { type: String },
  year: { type: Number },
  genres: [{ type: String }],
  runtime: { type: Number },
  rating: { type: Number },
  overview: { type: String },
  cast: [{ type: String }],
  showtimes: [{ type: String }],
  trailerUrl: { type: String },
  highlights: [{ type: String }]
}, { timestamps: true })

const Movie = mongoose.models.Movie || mongoose.model('Movie', movieSchema)
export default Movie
