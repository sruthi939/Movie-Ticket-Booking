import { Canvas } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const ProjectorBeam = () => {
  const meshRef = useRef()

  useFrame((state) => {
    // Subtle breathing rotation
    if (meshRef.current) {
      meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.05
    }
  })

  return (
    <group ref={meshRef}>
      {/* Visual cylinder beam representing projector light */}
      <mesh rotation={[Math.PI / 2.3, 0, 0]} position={[0, 0.5, -3]}>
        <cylinderGeometry args={[0.2, 3.5, 8, 32, 1, true]} />
        <meshBasicMaterial
          color="#f84565"
          transparent
          opacity={0.06}
          side={2}
          depthWrite={false}
        />
      </mesh>
      
      {/* Glowing projector lens */}
      <mesh position={[0, 2.5, 1.2]} rotation={[Math.PI / 2.3, 0, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.2, 24]} />
        <meshStandardMaterial
          color="#18181b"
          emissive="#f84565"
          emissiveIntensity={1.2}
          roughness={0.2}
        />
      </mesh>
    </group>
  )
}

const Hero3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 2, 5], fov: 60 }} gl={{ alpha: true }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[0, 5, 2]} intensity={2} color="#fbbf24" />
          <ProjectorBeam />
        </Canvas>
      </Suspense>
    </div>
  )
}

export default Hero3D
