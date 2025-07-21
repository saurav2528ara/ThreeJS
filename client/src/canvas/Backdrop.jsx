import React, { useRef } from 'react'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei'

const Backdrop = () => {

  const shadows = useRef();


  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={100}
      alphaTest={0.85}
      scale={10}
      rotation ={[Math.PI / 2, 0, 0]}
      position={[0, -0.5, 0]}
    >
       <RandomizedLight
      amount={6}
      radius={6}
      intensity={0.75}
      ambient={0.3}
      position={[3, 5, -2]}
      bias={0.001}
        />
        <RandomizedLight
      amount={4}
      radius={5}
      intensity={0.25}
      ambient={0.55}
      position={[-5, 5, -9]}
      // bias={0.001}
        />
        
    </AccumulativeShadows>
  )
}

export default Backdrop