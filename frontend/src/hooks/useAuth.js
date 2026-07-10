import { useAuthContext } from '../context/AuthContext'

export const useAuth = () => {
  const { user, isLoaded, isSignedIn, logout, login } = useAuthContext()

  return {
    user,
    isLoaded,
    isSignedIn,
    logout,
    login,
  }
}

export default useAuth
