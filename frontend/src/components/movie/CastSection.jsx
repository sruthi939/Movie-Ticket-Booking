import { User } from 'lucide-react'

const CastSection = ({ cast = [] }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-white tracking-tight">Main Cast</h3>
      <div className="flex flex-wrap gap-4">
        {cast.map((actor) => (
          <div
            key={actor}
            className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/5 p-3 pr-5 shadow-sm"
          >
            <div className="rounded-full bg-primary/10 p-2 text-primary">
              <User className="h-4.5 w-4.5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{actor}</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">Actor</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CastSection
