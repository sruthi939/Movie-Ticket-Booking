import { Stars } from '@react-three/drei'

const Environment = () => {
  return (
    <group>
      {/* Background color fog to simulate deep cinema dark atmosphere */}
      <color attach="background" args={['#050507']} />
      <fog attach="fog" args={['#050507', 5, 25]} />

      {/* Floating starry background for fantasy vibe */}
      <Stars radius={100} depth={50} count={300} factor={4} saturation={0.5} fade speed={1} />
    </group>
  )
}

export default Environment
