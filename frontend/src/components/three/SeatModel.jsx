import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const SeatModel = ({ position = [0, 0, 0], scale = [1, 1, 1], rotateY = 0, color = '#F84565' }) => {
  const meshRef = useRef()
  
  // Use try/catch fallback pattern for loading GLB
  let scene = null
  try {
    const gltf = useGLTF('/models/seat.glb')
    scene = gltf.scene
  } catch (err) {
    console.warn("Could not load seat.glb, using high-fidelity fallback mesh.")
  }

  if (scene) {
    return (
      <primitive
        object={scene.clone()}
        position={position}
        scale={scale}
        rotation={[0, rotateY, 0]}
      />
    )
  }

  // High-fidelity fallback seating mesh
  return (
    <group ref={meshRef} position={position} rotation={[0, rotateY, 0]} scale={scale}>
      {/* Seat Cushion */}
      <mesh position={[0, 0.2, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.8, 0.15, 0.8]} />
        <meshStandardMaterial color={color} roughness={0.6} metalness={0.1} />
      </mesh>
      {/* Seat Backrest */}
      <mesh position={[0, 0.7, -0.35]} castShadow receiveShadow>
        <boxGeometry args={[0.8, 0.9, 0.15]} />
        <meshStandardMaterial color={color} roughness={0.6} metalness={0.1} />
      </mesh>
      {/* Armrest Left */}
      <mesh position={[-0.45, 0.4, 0]} castShadow>
        <boxGeometry args={[0.1, 0.4, 0.7]} />
        <meshStandardMaterial color="#27272a" roughness={0.5} />
      </mesh>
      {/* Armrest Right */}
      <mesh position={[0.45, 0.4, 0]} castShadow>
        <boxGeometry args={[0.1, 0.4, 0.7]} />
        <meshStandardMaterial color="#27272a" roughness={0.5} />
      </mesh>
      {/* Stand Support */}
      <mesh position={[0, -0.15, 0]} castShadow>
        <cylinderGeometry args={[0.08, 0.08, 0.6]} />
        <meshStandardMaterial color="#18181b" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  )
}

export default SeatModel
