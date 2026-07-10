import { useRef } from 'react'

const Lights = () => {
  const spotlightRef = useRef()

  return (
    <group>
      {/* Ambient environment light */}
      <ambientLight intensity={0.4} />

      {/* Main key directional light */}
      <directionalLight
        position={[5, 10, 5]}
        intensity={0.6}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-bias={-0.0001}
      />

      {/* Screen illumination bounce light (simulates glow bounce onto seats) */}
      <pointLight position={[0, 4, -4]} intensity={0.8} distance={15} color="#F84565" />

      {/* Projector spotlight beam from back */}
      <spotLight
        ref={spotlightRef}
        position={[0, 8, 12]}
        angle={0.25}
        penumbra={0.6}
        intensity={15}
        distance={25}
        castShadow
        color="#ffffff"
        shadow-mapSize-width={512}
        shadow-mapSize-height={512}
      />
    </group>
  )
}

export default Lights
