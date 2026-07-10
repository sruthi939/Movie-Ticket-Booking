import { createContext, useContext, useEffect, useState } from 'react'
import { useUser, useClerk } from '@clerk/clerk-react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const { user, isLoaded, isSignedIn } = useUser()
  const { signOut, openSignIn } = useClerk()
  const [localUser, setLocalUser] = useState(null)

  useEffect(() => {
    if (isLoaded && isSignedIn && user) {
      setLocalUser({
        id: user.id,
        fullName: user.fullName,
        email: user.primaryEmailAddress?.emailAddress,
        imageUrl: user.imageUrl,
      })
    } else if (isLoaded && !isSignedIn) {
      setLocalUser(null)
    }
  }, [user, isLoaded, isSignedIn])

  const logout = async () => {
    await signOut()
    setLocalUser(null)
  }

  return (
    <AuthContext.Provider value={{ user: localUser, isLoaded, isSignedIn, logout, login: openSignIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
export default AuthContext
