import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const TicketModel = ({ position = [0, 0, 0], scale = [1, 1, 1], rotation = [0, 0, 0] }) => {
  const groupRef = useRef()

  let scene = null
  try {
    const gltf = useGLTF('/models/ticket.glb')
    scene = gltf.scene
  } catch (err) {
    console.warn("Could not load ticket.glb, using high-fidelity fallback.")
  }

  if (scene) {
    return (
      <primitive
        object={scene.clone()}
        position={position}
        scale={scale}
        rotation={rotation}
      />
    )
  }

  // High-fidelity fallback ticket mesh
  return (
    <group ref={groupRef} position={position} rotation={rotation} scale={scale}>
      {/* Main Ticket Base */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1.5, 0.02, 0.85]} />
        <meshStandardMaterial color="#fbbf24" metalness={0.9} roughness={0.15} emissive="#fbbf24" emissiveIntensity={0.1} />
      </mesh>
      
      {/* Decorative Stripes */}
      <mesh position={[0, 0.012, 0.35]}>
        <boxGeometry args={[1.3, 0.005, 0.05]} />
        <meshStandardMaterial color="#ffffff" roughness={0.5} />
      </mesh>
      <mesh position={[0, 0.012, -0.35]}>
        <boxGeometry args={[1.3, 0.005, 0.05]} />
        <meshStandardMaterial color="#ffffff" roughness={0.5} />
      </mesh>

      {/* Ticket Punch Circles */}
      <mesh position={[-0.76, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.04, 32]} />
        <meshStandardMaterial color="#09090b" roughness={0.8} />
      </mesh>
      <mesh position={[0.76, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.04, 32]} />
        <meshStandardMaterial color="#09090b" roughness={0.8} />
      </mesh>
    </group>
  )
}

export default TicketModel
