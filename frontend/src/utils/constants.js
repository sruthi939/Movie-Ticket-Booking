export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api'

export const VIP_ROWS = ['K', 'L']
export const CLASSIC_ROWS = ['F', 'G', 'H', 'I', 'J']
export const STANDARD_ROWS = ['A', 'B', 'C', 'D', 'E']

export const PRICING = {
  VIP: 400,
  CLASSIC: 350,
  STANDARD: 350,
  CONVENIENCE_FEE_PCT: 0.1,
  TAX_PCT: 0.05,
}

export const GENRES = ['All', 'Sci-Fi', 'Adventure', 'Thriller', 'Mystery', 'Action', 'Fantasy', 'Drama', 'Epic', 'Crime']
