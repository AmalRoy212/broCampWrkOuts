import { MeshReflectorMaterial } from "@react-three/drei";
import React from 'react'

function Ground() {
  return (
    <mesh rotation-x={-Math.PI*0.5} castShadow receiveShadow>
      <planeGeometry args={[30,30]}/>
      <meshReflectorMaterial />
    </mesh>
  )
}

export default Ground
