import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const PopcornModel = ({ position = [0, 0, 0], scale = [1, 1, 1], rotation = [0, 0, 0] }) => {
  const groupRef = useRef()

  let scene = null
  try {
    const gltf = useGLTF('/models/popcorn.glb')
    scene = gltf.scene
  } catch (err) {
    console.warn("Could not load popcorn.glb, using fallback.")
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

  // Fallback Popcorn bucket
  return (
    <group ref={groupRef} position={position} rotation={rotation} scale={scale}>
      {/* Bucket Tub */}
      <mesh position={[0, 0.4, 0]} castShadow>
        <cylinderGeometry args={[0.3, 0.22, 0.8, 24]} />
        <meshStandardMaterial color="#ffffff" roughness={0.4} />
      </mesh>
      
      {/* Red stripes (visual representation) */}
      <mesh position={[0, 0.4, 0]}>
        <cylinderGeometry args={[0.302, 0.222, 0.79, 24]} />
        <meshStandardMaterial color="#f84565" roughness={0.4} wireframe />
      </mesh>

      {/* Popcorn Top Heap */}
      <mesh position={[0, 0.8, 0]} castShadow>
        <sphereGeometry args={[0.28, 16, 16]} />
        <meshStandardMaterial color="#fbbf24" roughness={0.9} />
      </mesh>
    </group>
  )
}

export default PopcornModel
