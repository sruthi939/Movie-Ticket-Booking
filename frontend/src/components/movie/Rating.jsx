import { Star } from 'lucide-react'

const Rating = ({ rating = 8.5 }) => {
  const fullStars = Math.floor(rating / 2)
  const remainder = rating % 2
  const emptyStars = 5 - fullStars - (remainder >= 1 ? 1 : 0)

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-white tracking-tight">Ratings & Reviews</h3>
      <div className="flex items-center gap-6 rounded-2xl border border-white/5 bg-white/5 p-5">
        <div className="text-center">
          <p className="text-4xl font-extrabold text-white">{rating.toFixed(1)}</p>
          <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">out of 10</p>
        </div>
        <div className="h-10 w-px bg-white/10" />
        <div>
          <div className="flex items-center gap-1">
            {Array.from({ length: fullStars }).map((_, idx) => (
              <Star key={`full-${idx}`} className="h-5 w-5 fill-primary text-primary" />
            ))}
            {remainder >= 1 && (
              <Star key="half" className="h-5 w-5 fill-primary/50 text-primary" />
            )}
            {Array.from({ length: emptyStars }).map((_, idx) => (
              <Star key={`empty-${idx}`} className="h-5 w-5 text-gray-600" />
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-2">Recommended by 94% of ticket buyers.</p>
        </div>
      </div>
    </div>
  )
}

export default Rating
