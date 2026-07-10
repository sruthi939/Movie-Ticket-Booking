import { useState } from 'react'

const Settings = ({ user }) => {
  const [name, setName] = useState(user?.fullName || '')
  const [email, setEmail] = useState(user?.email || '')
  const [notifications, setNotifications] = useState(true)

  const handleSave = (e) => {
    e.preventDefault()
    alert('Settings saved successfully!')
  }

  return (
    <form onSubmit={handleSave} className="space-y-4">
      <div>
        <label className="block text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2">Display Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-primary"
        />
      </div>
      <div>
        <label className="block text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2">Email Address</label>
        <input
          type="email"
          disabled
          value={email}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-500 outline-none cursor-not-allowed"
        />
      </div>
      <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-2">
        <div>
          <h4 className="text-sm font-semibold text-white">Email Notifications</h4>
          <p className="text-xs text-gray-500 mt-0.5">Receive discounts and weekly movie recommendations.</p>
        </div>
        <input
          type="checkbox"
          checked={notifications}
          onChange={(e) => setNotifications(e.target.checked)}
          className="accent-primary h-4 w-4 cursor-pointer"
        />
      </div>

      <button
        type="submit"
        className="rounded-full bg-primary px-8 py-2.5 text-sm font-bold text-black hover:bg-primary-dull transition cursor-pointer mt-4"
      >
        Save Changes
      </button>
    </form>
  )
}

export default Settings
