import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const CameraRig = () => {
  useFrame((state) => {
    // Interpolate camera position based on pointer coordinates
    const targetX = state.pointer.x * 1.5
    const targetY = 3 + state.pointer.y * 0.8
    const targetZ = 8

    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetX, 0.05)
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY, 0.05)
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, 0.05)

    // Focus point
    state.camera.lookAt(0, 1.8, -4)
  })

  return null
}

export default CameraRig
