import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  imageUrl: { type: String }
}, { timestamps: true })

const User = mongoose.models.User || mongoose.model('User', userSchema)
export default User
