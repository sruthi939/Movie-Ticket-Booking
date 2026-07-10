import { SignUp } from '@clerk/clerk-react'
import AuthLayout from '../layouts/AuthLayout'

const Register = () => {
  return (
    <AuthLayout>
      <div className="flex justify-center w-full">
        <SignUp signInUrl="/login" routing="hash" />
      </div>
    </AuthLayout>
  )
}

export default Register
