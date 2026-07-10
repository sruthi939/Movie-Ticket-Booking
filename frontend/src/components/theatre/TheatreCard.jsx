import { MapPin, Star } from 'lucide-react'

const TheatreCard = ({ theatre, isSelected, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className={`rounded-2xl border p-5 cursor-pointer transition duration-300 ${isSelected ? 'border-primary bg-primary/10 shadow-lg' : 'border-white/10 bg-black/40 hover:border-primary/50'}`}
    >
      <div className="flex justify-between items-start">
        <div>
          <h4 className="text-lg font-bold text-white">{theatre.name}</h4>
          <div className="flex items-center gap-1.5 text-sm text-gray-400 mt-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span>{theatre.location}</span>
          </div>
        </div>
        <div className="flex items-center gap-1 text-sm bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
          <Star className="h-3.5 w-3.5 fill-primary text-primary" />
          <span className="font-semibold text-white">{theatre.rating}</span>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        {theatre.amenities.map((amenity) => (
          <span key={amenity} className="rounded-full bg-white/5 border border-white/5 px-2.5 py-1 text-gray-300">
            {amenity}
          </span>
        ))}
      </div>
    </div>
  )
}

export default TheatreCard
