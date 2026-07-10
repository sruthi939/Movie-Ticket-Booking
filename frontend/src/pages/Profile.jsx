import { useUser } from '@clerk/clerk-react'
import { CalendarDays, Mail, User } from 'lucide-react'
import BlurBackground from '../components/effects/BlurBackground'

const Profile = () => {
  const { user, isLoaded } = useUser()

  if (!isLoaded) {
    return (
      <div className="flex min-h-screen items-center justify-center text-gray-400">
        Loading profile...
      </div>
    )
  }

  return (
    <div className="relative min-h-screen text-white">
      <BlurBackground />
      <div className="relative z-10 px-6 py-24 md:px-16 lg:px-24 xl:px-44 space-y-10">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight">Profile</h1>
          <p className="text-gray-400 mt-1 text-sm">Manage your account and preferences.</p>
        </div>

        {user ? (
          <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
            {/* Avatar & basic info */}
            <div className="rounded-[2rem] border border-white/10 bg-black/40 p-8 flex flex-col items-center gap-5 backdrop-blur-xl text-center">
              <img
                src={user.imageUrl}
                alt={user.fullName}
                className="h-24 w-24 rounded-full ring-4 ring-primary/30 shadow-xl"
              />
              <div>
                <h2 className="text-xl font-bold">{user.fullName}</h2>
                <p className="text-sm text-gray-400 mt-1">{user.primaryEmailAddress?.emailAddress}</p>
              </div>
              <div className="w-full rounded-xl border border-white/5 bg-white/5 px-4 py-2 text-xs uppercase tracking-widest text-primary font-semibold">
                Premium Member
              </div>
            </div>

            {/* Details */}
            <div className="rounded-[2rem] border border-white/10 bg-black/40 p-8 backdrop-blur-xl space-y-6">
              <h3 className="text-xl font-bold">Account Details</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-4">
                  <div className="rounded-xl bg-primary/10 p-3 text-primary shrink-0"><User className="h-5 w-5" /></div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">Full Name</p>
                    <p className="text-sm font-semibold text-white mt-0.5">{user.fullName || '—'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-4">
                  <div className="rounded-xl bg-primary/10 p-3 text-primary shrink-0"><Mail className="h-5 w-5" /></div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">Email</p>
                    <p className="text-sm font-semibold text-white mt-0.5">{user.primaryEmailAddress?.emailAddress || '—'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-4">
                  <div className="rounded-xl bg-primary/10 p-3 text-primary shrink-0"><CalendarDays className="h-5 w-5" /></div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">Member Since</p>
                    <p className="text-sm font-semibold text-white mt-0.5">
                      {user.createdAt ? new Date(user.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : '—'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center text-gray-400">
            Please sign in to view your profile.
          </div>
        )}
      </div>
    </div>
  )
}

export default Profile
