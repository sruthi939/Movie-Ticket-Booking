import { Canvas } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import TicketModel from '../three/TicketModel'
import { Stars } from '@react-three/drei'

const SpinningTicket = () => {
  const groupRef = useRef()
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.6
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.8) * 0.15
    }
  })
  return (
    <group ref={groupRef}>
      <TicketModel scale={[2, 2, 2]} />
    </group>
  )
}

const Ticket3D = ({ bookingDetails = {} }) => {
  return (
    <div className="w-full rounded-3xl border border-white/10 bg-black/60 overflow-hidden shadow-2xl">
      {/* 3D Canvas view */}
      <div className="h-60 w-full">
        <Suspense fallback={<div className="h-full flex items-center justify-center text-gray-500 text-sm">Rendering 3D ticket...</div>}>
          <Canvas camera={{ position: [0, 0, 3.5], fov: 45 }} gl={{ alpha: true }}>
            <ambientLight intensity={0.6} />
            <pointLight position={[2, 2, 2]} intensity={2} color="#fbbf24" />
            <pointLight position={[-2, -1, 1]} intensity={1} color="#f84565" />
            <Stars radius={50} depth={20} count={200} factor={2} fade speed={0.5} />
            <SpinningTicket />
          </Canvas>
        </Suspense>
      </div>

      {/* Ticket details overlay */}
      <div className="px-6 py-5 border-t border-dashed border-white/10 space-y-3">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest">Movie</p>
            <p className="text-base font-bold text-white mt-0.5">{bookingDetails.title || '—'}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500 uppercase tracking-widest">Date</p>
            <p className="text-sm font-semibold text-white mt-0.5">{bookingDetails.selectedDate || '—'}</p>
          </div>
        </div>
        <div className="flex justify-between items-center border-t border-white/5 pt-3">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest">Seats</p>
            <p className="text-sm font-semibold text-primary mt-0.5">{bookingDetails.selectedSeats?.join(', ') || '—'}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500 uppercase tracking-widest">Total</p>
            <p className="text-base font-bold text-amber-400 mt-0.5">₹{Number(bookingDetails.totalAmount || 0).toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ticket3D
