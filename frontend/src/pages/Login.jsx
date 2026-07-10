import { SignIn } from '@clerk/clerk-react'
import AuthLayout from '../layouts/AuthLayout'

const Login = () => {
  return (
    <AuthLayout>
      <div className="flex justify-center w-full">
        <SignIn signUpUrl="/register" routing="hash" />
      </div>
    </AuthLayout>
  )
}

export default Login
