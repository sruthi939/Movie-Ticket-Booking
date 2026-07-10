import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Lights from './Lights'
import CinemaScreen from './CinemaScreen'
import SeatModel from './SeatModel'
import CameraRig from './CameraRig'
import Environment from './Environment'
import Controls from './Controls'

const CinemaScene = ({ posterUrl, selectedSeats = [], onSelectSeat }) => {
  // Define a grid of seats
  const rows = ['A', 'B', 'C', 'D']
  const cols = [1, 2, 3, 4, 5, 6]

  return (
    <div className="w-full h-[450px] rounded-3xl overflow-hidden border border-white/10 bg-black shadow-[0_0_80px_rgba(0,0,0,0.8)] relative">
      <Suspense fallback={
        <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-semibold bg-zinc-950">
          Loading 3D Theater Environment...
        </div>
      }>
        <Canvas
          shadows
          camera={{ position: [0, 3, 8], fov: 50 }}
        >
          <Environment />
          <Lights />
          
          {/* Cinema Screen at the front */}
          <CinemaScreen posterUrl={posterUrl} position={[0, 2.2, -4]} />

          {/* Rows of seats */}
          <group position={[0, 0, 1]}>
            {rows.map((row, rIdx) => {
              const zPos = rIdx * 1.5 // Space between rows
              return (
                <group key={row} position={[0, rIdx * 0.15, zPos]}>
                  {cols.map((col, cIdx) => {
                    const xPos = (cIdx - (cols.length - 1) / 2) * 1.1 // Center columns
                    const seatId = `${row}-${col}`
                    const isSelected = selectedSeats.includes(seatId)
                    const seatColor = isSelected ? '#fbbf24' : '#F84565'

                    return (
                      <group key={seatId} onClick={(e) => {
                        e.stopPropagation()
                        if (onSelectSeat) onSelectSeat(seatId)
                      }}>
                        <SeatModel
                          position={[xPos, 0, 0]}
                          scale={[0.7, 0.7, 0.7]}
                          color={seatColor}
                        />
                      </group>
                    )
                  })}
                </group>
              )
            })}
          </group>

          <Controls />
          <CameraRig />
        </Canvas>
      </Suspense>
      <div className="absolute bottom-4 left-4 right-4 pointer-events-none flex justify-between text-xs text-gray-400 uppercase tracking-widest bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-md">
        <span>Click and drag to look around</span>
        <span>Click a red seat to select</span>
      </div>
    </div>
  )
}

export default CinemaScene
