import { User } from 'lucide-react'

const CastCard = ({ name, role = 'Actor' }) => {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/5 p-3 pr-6 shadow-sm">
      <div className="rounded-full bg-primary/10 p-2.5 text-primary">
        <User className="h-4.5 w-4.5" />
      </div>
      <div>
        <p className="text-sm font-semibold text-white leading-tight">{name}</p>
        <p className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">{role}</p>
      </div>
    </div>
  )
}

export default CastCard
