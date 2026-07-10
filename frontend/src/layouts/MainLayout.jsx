import React from 'react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import Cursor from '../components/layout/Cursor'
import MouseLight from '../components/effects/MouseLight'
import BlurBackground from '../components/effects/BlurBackground'
import FloatingParticles from '../components/effects/FloatingParticles'

const MainLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-[#09090b] text-white overflow-x-hidden">
      <Navbar />
      <Cursor />
      <MouseLight />
      <BlurBackground />
      <FloatingParticles count={30} />
      
      {/* Content wrapper */}
      <main className="relative z-10 w-full min-h-[75vh]">
        {children}
      </main>
      
      <Footer />
    </div>
  )
}

export default MainLayout
