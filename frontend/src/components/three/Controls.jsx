import { OrbitControls } from '@react-three/drei'

const Controls = () => {
  return (
    <OrbitControls
      enableZoom={true}
      enablePan={false}
      minDistance={4}
      maxDistance={15}
      minPolarAngle={Math.PI / 6} // limit vertical looking
      maxPolarAngle={Math.PI / 1.9} // prevent going below floor
      minAzimuthAngle={-Math.PI / 4} // limit horizontal looking
      maxAzimuthAngle={Math.PI / 4}
      dampingFactor={0.05}
      enableDamping={true}
    />
  )
}

export default Controls
