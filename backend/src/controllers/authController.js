import User from '../models/User.js'

export const login = async (req, res) => {
  const { email } = req.body
  const defaultUser = {
    id: `usr_${Date.now()}`,
    fullName: 'Mock User',
    email: email || 'user@example.com',
    imageUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
  }

  try {
    let dbUser = await User.findOne({ email })
    if (!dbUser) {
      dbUser = await User.create(defaultUser)
    }
    return res.json({
      success: true,
      user: dbUser,
      token: 'mock_jwt_token',
    })
  } catch (error) {
    console.warn('MongoDB query failed, falling back to local auth login:', error.message)
    return res.json({
      success: true,
      user: defaultUser,
      token: 'mock_jwt_token',
    })
  }
}

export const register = async (req, res) => {
  const { email, fullName } = req.body
  const defaultUser = {
    id: `usr_${Date.now()}`,
    fullName: fullName || 'Mock User',
    email: email || 'user@example.com',
    imageUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
  }

  try {
    let dbUser = await User.findOne({ email })
    if (!dbUser) {
      dbUser = await User.create(defaultUser)
    }
    return res.json({
      success: true,
      user: dbUser,
      token: 'mock_jwt_token',
    })
  } catch (error) {
    console.warn('MongoDB query failed, falling back to local auth registration:', error.message)
    return res.json({
      success: true,
      user: defaultUser,
      token: 'mock_jwt_token',
    })
  }
}

export const getProfile = async (req, res) => {
  try {
    const dbUser = await User.findOne()
    if (dbUser) return res.json(dbUser)
  } catch (error) {
    console.warn('MongoDB query failed, falling back to local auth profile get:', error.message)
  }

  return res.json({
    id: 'usr_mock123',
    fullName: 'Mock User',
    email: 'user@example.com',
    imageUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
  })
}
