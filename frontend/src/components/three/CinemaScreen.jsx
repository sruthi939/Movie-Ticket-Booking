import { useRef } from 'react'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

const CinemaScreen = ({ posterUrl, width = 16, height = 7, position = [0, 2, -5] }) => {
  const meshRef = useRef()

  let texture = null
  try {
    if (posterUrl) {
      texture = useTexture(posterUrl)
    }
  } catch (err) {
    console.warn("Could not load screen texture, using fallback color.")
  }

  // Create curved geometry
  const geometry = new THREE.PlaneGeometry(width, height, 32, 1)
  
  // Deform plane to make it curved
  const pos = geometry.attributes.position
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i)
    // Curving function: Z offset depends on X^2
    const zOffset = -(Math.pow(x, 2) * 0.02)
    pos.setZ(i, zOffset)
  }
  geometry.computeVertexNormals()

  return (
    <group position={position}>
      {/* Curved Screen Panel */}
      <mesh ref={meshRef} geometry={geometry} castShadow receiveShadow>
        {texture ? (
          <meshStandardMaterial
            map={texture}
            roughness={0.9}
            metalness={0.1}
            side={THREE.DoubleSide}
            emissive={new THREE.Color('#ffffff')}
            emissiveIntensity={0.2}
          />
        ) : (
          <meshStandardMaterial
            color="#18181b"
            roughness={0.9}
            metalness={0.1}
            side={THREE.DoubleSide}
            emissive={new THREE.Color('#4a044e')}
            emissiveIntensity={0.1}
          />
        )}
      </mesh>

      {/* Screen Frame (Border) */}
      <mesh position={[0, 0, -0.05]} geometry={geometry}>
        <meshStandardMaterial color="#09090b" roughness={0.9} metalness={0.1} wireframe />
      </mesh>
    </group>
  )
}

export default CinemaScreen
