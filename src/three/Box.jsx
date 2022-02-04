import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

function Box(props) {
  const { gyro } = props
  // console.log(gyro)

  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => (ref.current.rotation.x += 0.01))

  // useFrame((state, delta) => (ref.current.rotation.x += 0.01))
  // useFrame((state, delta) => (ref.current.rotation.y += 0.01))

  // Apply Gyro angular velocity
  useFrame((state, delta) => (ref.current.rotation.x = gyro.x))
  useFrame((state, delta) => (ref.current.rotation.y = gyro.y))
  useFrame((state, delta) => (ref.current.rotation.z = gyro.z))

  // useFrame((state, delta) => {
  //   ref.current.rotation.x += 0.01
  //   // ref.current.rotation.y += 0.01
  //   // ref.current.rotation.z += 0.01
  // })

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={event => click(!clicked)}
      onPointerOver={event => hover(true)}
      onPointerOut={event => hover(false)}
    >
      <boxGeometry args={[15, 15, 15]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export default Box
