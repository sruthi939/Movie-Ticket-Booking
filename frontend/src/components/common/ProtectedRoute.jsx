import { useUser, RedirectToSignIn } from '@clerk/clerk-react'

const ProtectedRoute = ({ children }) => {
  const { isLoaded, isSignedIn } = useUser()

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#09090b] text-gray-400">
        Loading...
      </div>
    )
  }

  if (!isSignedIn) {
    return <RedirectToSignIn />
  }

  return children
}

export default ProtectedRoute
