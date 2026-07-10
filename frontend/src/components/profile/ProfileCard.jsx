import { Mail, Calendar } from 'lucide-react'

const ProfileCard = ({ user }) => {
  if (!user) return null

  return (
    <div className="rounded-[2.5rem] border border-white/10 bg-black/40 p-8 flex flex-col items-center gap-5 text-center backdrop-blur-xl shadow-2xl">
      <img
        src={user.imageUrl}
        alt={user.fullName}
        className="h-24 w-24 rounded-full ring-4 ring-primary/25 shadow-2xl"
      />
      <div>
        <h2 className="text-2xl font-extrabold text-white tracking-tight">{user.fullName}</h2>
        <div className="flex items-center gap-1.5 text-xs text-gray-500 justify-center mt-2">
          <Mail className="h-4 w-4 text-primary" />
          <span>{user.email}</span>
        </div>
      </div>
      <div className="w-full border-t border-white/5 pt-4 mt-2 flex items-center justify-center gap-2 text-xs text-gray-400">
        <Calendar className="h-4 w-4 text-primary" />
        <span>Member Since: {new Date().getFullYear()}</span>
      </div>
    </div>
  )
}

export default ProfileCard
