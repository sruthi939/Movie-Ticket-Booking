import React from 'react'
import BlurBackground from '../components/effects/BlurBackground'
import FloatingParticles from '../components/effects/FloatingParticles'

const AuthLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#09090b] text-white p-6">
      <BlurBackground />
      <FloatingParticles count={15} color="rgba(248,69,101,0.2)" />
      
      <div className="relative z-10 w-full max-w-md rounded-[2.5rem] border border-white/10 bg-black/40 p-8 backdrop-blur-xl shadow-2xl">
        {children}
      </div>
    </div>
  )
}

export default AuthLayout
